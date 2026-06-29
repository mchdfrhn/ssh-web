import { Suspense, Component, type ReactNode, useState, useEffect, lazy } from "react";

// ── WebGL availability check ──
function hasWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

// ── Error boundary — catches R3F crashes gracefully ──
class CanvasErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.warn("3D Canvas error (non-fatal):", error.message);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

// ── Lazy-load the entire inner scene (R3F + shaders + geometries) ──
const SceneInner = lazy(() => import("./SceneInner"));

interface SceneProps {
  scrollProgress: React.MutableRefObject<number>;
}

const Scene = ({ scrollProgress }: SceneProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Only attempt to load R3F + shaders when WebGL is available
    if (hasWebGL()) {
      setReady(true);
    }
  }, []);

  if (!ready) return null;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.55 }}
      aria-hidden="true"
    >
      <CanvasErrorBoundary>
        <Suspense fallback={null}>
          <SceneInner scrollProgress={scrollProgress} />
        </Suspense>
      </CanvasErrorBoundary>
    </div>
  );
};

export default Scene;
