import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if ("ontouchstart" in window) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0; // mouse position
    let rx = 0, ry = 0; // ring position (lerped)

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
    };

    // Hover detection for interactive elements
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

    // Animate ring with lerp
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

  // Hide on touch devices via CSS
  return (
    <div className="hidden md:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full bg-[var(--accent-bright)] pointer-events-none z-[9999] will-change-transform"
        style={{ opacity: 0.9 }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[28px] h-[28px] rounded-full border border-[var(--border-strong)] pointer-events-none z-[9998] will-change-transform transition-[width,height,border-color,opacity] duration-200"
        style={{ opacity: 0.4 }}
      />
    </div>
  );
};

export default CustomCursor;
