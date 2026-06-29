import { useEffect, useRef, lazy, Suspense } from "react";
import PageEntry from "./components/PageEntry";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechMarquee from "./components/TechMarquee";
import ValidationSection from "./components/ValidationSection";
import ClientLogos from "./components/ClientLogos";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import PortfolioSection from "./components/PortfolioSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import ConsultationForm from "./components/ConsultationForm";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import SkipToContent from "./components/SkipToContent";
import { useScrollEngine } from "./hooks/useScrollEngine";

// Dynamic import for 3D scene — avoids SSR crash on window/WebGL
const Scene = lazy(() => import("./components/three/Scene"));

// ── Scroll progress bar (lightweight, no GSAP dependency) ──
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

// ── Custom cursor — follows mouse with lag ring ──
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
      ring.style.borderColor = "rgba(255,255,255,0.15)";
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
        className="fixed top-0 left-0 w-[28px] h-[28px] rounded-full border border-white/[0.15] pointer-events-none z-[9998] will-change-transform transition-[width,height,border-color,opacity] duration-200"
        style={{ opacity: 0.4 }}
      />
    </div>
  );
}

export default function App() {
  // Shared scroll progress ref — updated by Lenis, read by R3F
  const scrollProgress = useRef(0);

  // Initialize Lenis + GSAP ScrollTrigger (single-ticker sync)
  useScrollEngine(scrollProgress);

  return (
    <PageEntry>
      <CustomCursor />
      <SkipToContent />
      <BackToTop />

      {/* 3D Background — fixed behind everything, lazy-loaded */}
      <Suspense fallback={null}>
        <Scene scrollProgress={scrollProgress} />
      </Suspense>

      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <main id="main-content">
          <HeroSection />
          <TechMarquee />
          <ValidationSection />
          <ClientLogos />
          <ServicesSection />
          <ProcessSection />
          <PortfolioSection />
          <PricingSection />
          <FAQSection />
          <ConsultationForm />
        </main>
        <Footer />
      </div>
    </PageEntry>
  );
}
