import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─────────────────────────────────────────────────────────────
// Single-ticker Lenis ↔ GSAP ScrollTrigger sync
// GSAP ticker drives Lenis RAF — no dual rAF
// ─────────────────────────────────────────────────────────────

export function useScrollEngine(scrollProgress: React.MutableRefObject<number>) {
  useEffect(() => {
    // SSR/headless guard
    if (typeof window === "undefined") return;

    // Register GSAP plugin inside effect (not at module scope)
    gsap.registerPlugin(ScrollTrigger);

    let lenis: InstanceType<typeof import("lenis").default>;

    // Dynamic import Lenis to avoid SSR crash
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

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
      // Lenis failed to load — graceful fallback, page still works
      console.warn("Lenis failed to load, using native scroll");
    });

    return () => {
      if (lenis) lenis.destroy();
    };
  }, [scrollProgress]);
}
