import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ParticleVortex from "./ParticleVortex";
import FloatingShapes from "./FloatingShapes";

interface SceneInnerProps {
  scrollProgress: React.MutableRefObject<number>;
}

// ── Inner scene — only loaded when WebGL is confirmed available ──
// Contains R3F Canvas, particle shaders, and floating geometries.
// Separated from Scene.tsx so the heavy three.js imports don't
// crash on module load in no-WebGL environments.
export default function SceneInner({ scrollProgress }: SceneInnerProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60, near: 0.1, far: 50 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false,
      }}
      style={{ background: "transparent" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <Suspense fallback={null}>
        <ParticleVortex scrollProgress={scrollProgress} count={3000} />
        <FloatingShapes />
      </Suspense>
    </Canvas>
  );
}
