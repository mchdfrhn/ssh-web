import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setLenis } from "../utils/scroll-utils";

// ─────────────────────────────────────────────────────────────
// Single-ticker Lenis ↔ GSAP ScrollTrigger sync
// GSAP ticker drives Lenis RAF — no dual rAF
// ─────────────────────────────────────────────────────────────

export function useScrollEngine(scrollProgress: React.MutableRefObject<number>) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    let lenis: any;

    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      // Expose instance globally for scrollTo()
      setLenis(lenis);

      // Sync Lenis → ScrollTrigger
      lenis.on("scroll", ScrollTrigger.update);

      // Single ticker: GSAP drives Lenis RAF
      gsap.ticker.add((time: number) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      // Track scroll progress for 3D scene
      lenis.on("scroll", ({ progress }: { progress: number }) => {
        scrollProgress.current = progress;
      });
    }).catch(() => {
      console.warn("Lenis failed to load, using native scroll");
    });

    return () => {
      if (lenis) lenis.destroy();
    };
  }, [scrollProgress]);
}
