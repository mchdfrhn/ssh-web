import { useEffect, useRef, lazy, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PageEntry from "./PageEntry";
import BackToTop from "./BackToTop";
import SkipToContent from "./SkipToContent";
import ExitIntentPopup from "./ExitIntentPopup";
import StickyCTA from "./StickyCTA";
import { useScrollEngine } from "../hooks/useScrollEngine";

const Scene = lazy(() => import("./three/Scene"));

function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div ref={barRef} className="scroll-progress" />;
}

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || "ontouchstart" in window) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role=button], input, textarea, select")) {
        ring.style.width = "40px";
        ring.style.height = "40px";
        ring.style.borderColor = "var(--accent-bright)";
        ring.style.opacity = "0.6";
      }
    };
    const onOut = () => {
      ring.style.width = "28px";
      ring.style.height = "28px";
      ring.style.borderColor = "var(--border-strong)";
      ring.style.opacity = "0.4";
    };
    let raf: number;
    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx - 14}px, ${ry - 14}px)`;
      raf = requestAnimationFrame(tick);
    };
    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    document.body.style.cursor = "none";
    raf = requestAnimationFrame(tick);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.style.cursor = "";
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hidden md:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full bg-[var(--accent-bright)] pointer-events-none z-[9999] will-change-transform"
        style={{ opacity: 0.9 }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[28px] h-[28px] rounded-full border border-[var(--border-default)] pointer-events-none z-[9998] will-change-transform transition-[width,height,border-color,opacity] duration-200"
        style={{ opacity: 0.4 }}
      />
    </div>
  );
}

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
};

/**
 * Shared shell for ALL pages.
 * Provides: Lenis smooth scroll, 3D scene, custom cursor,
 * scroll progress bar, BackToTop, StickyCTA, ExitIntentPopup,
 * and page transitions.
 */
export default function SiteShell() {
  const scrollProgress = useRef(0);
  const location = useLocation();
  useScrollEngine(scrollProgress);

  return (
    <PageEntry>
      <CustomCursor />
      <SkipToContent />
      <BackToTop />
      <StickyCTA />
      <ExitIntentPopup />

      <Suspense fallback={null}>
        <Scene scrollProgress={scrollProgress} />
      </Suspense>

      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <ScrollProgress />
        <motion.div
          key={location.pathname}
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
          transition={pageTransition.transition}
        >
          <Outlet />
        </motion.div>
      </div>
    </PageEntry>
  );
}
