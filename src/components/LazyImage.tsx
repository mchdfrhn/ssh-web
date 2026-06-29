import { useState, useRef, useEffect, type ImgHTMLAttributes } from "react";

// ─────────────────────────────────────────────────────────────
// LazyImage — Intersection Observer + blur-up placeholder
// Shows low-res/blur placeholder until image enters viewport,
// then loads full image and transitions smoothly
// ─────────────────────────────────────────────────────────────

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  placeholderColor?: string;
}

const LazyImage = ({ placeholderColor = "#0f1011", className, ...props }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // start loading 200px before visible
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ backgroundColor: placeholderColor }}>
      {/* Blur placeholder — always visible behind image */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background: `linear-gradient(135deg, ${placeholderColor} 0%, rgba(94,106,210,0.08) 100%)`,
          filter: "blur(20px)",
          transform: "scale(1.1)", // prevent blur edge artifacts
        }}
      />

      {/* Actual image — only loads when in viewport */}
      {inView && (
        <img
          {...props}
          className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;
