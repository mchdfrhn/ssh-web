import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─────────────────────────────────────────────────────────────
// Simplex 3D Noise (Ashima Arts) — injected into vertex shader
// Compact GLSL implementation for GPU-side noise computation
// ─────────────────────────────────────────────────────────────
const simplexNoiseGLSL = /* glsl */ `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 105.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`;

// ─────────────────────────────────────────────────────────────
// Vertex Shader — deforms particle positions using simplex noise
// uTime: elapsed clock, uScroll: scroll progress [0,1]
// Noise displaces each particle in a spiral/vortex pattern
// ─────────────────────────────────────────────────────────────
const vertexShader = `
  ${simplexNoiseGLSL}

  uniform float uTime;
  uniform float uScroll;
  attribute float aScale;     // per-particle random size
  attribute float aOffset;    // per-particle random phase offset
  varying float vDistortion;  // pass to fragment for color mix
  varying float vAlpha;

  void main() {
    // Copy position so we can deform it
    vec3 pos = position;

    // Time with per-particle offset for organic chaos
    float t = uTime * 0.15 + aOffset;

    // Noise-based displacement — creates the vortex swirl
    // Sample 3D noise at particle position + time
    float noise = snoise(pos * 0.8 + t * 0.5);

    // Vortex: rotate particles around Y axis based on noise + scroll
    float angle = noise * 2.0 + uScroll * 6.2832;  // full rotation per scroll
    float cosA = cos(angle);
    float sinA = sin(angle);
    pos.xz = mat2(cosA, -sinA, sinA, cosA) * pos.xz;

    // Stretch particles along the vortex axis with scroll
    pos.y += sin(pos.x * 2.0 + t) * 0.3 * (1.0 + uScroll * 2.0);
    pos.y += cos(pos.z * 1.5 + t * 0.7) * 0.2;

    // Expand/compress radius with scroll
    float radius = length(pos.xz);
    pos.xz *= 1.0 + uScroll * 0.3;

    // Store distortion for fragment shader coloring
    vDistortion = noise * 0.5 + 0.5;
    vAlpha = smoothstep(6.0, 1.0, radius) * 0.8;

    // Standard MVP transform
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    // Size attenuation — particles shrink with distance
    gl_PointSize = aScale * (200.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// ─────────────────────────────────────────────────────────────
// Fragment Shader — renders each particle as a soft glowing dot
// Color lerps between Prussian blue and neon violet based on
// the distortion value from the vertex shader
// ─────────────────────────────────────────────────────────────
const fragmentShader = `
  varying float vDistortion;
  varying float vAlpha;

  void main() {
    // Distance from center of point sprite [0, 0.5]
    float d = length(gl_PointCoord - vec2(0.5));

    // Soft circle with glow falloff
    float alpha = smoothstep(0.5, 0.15, d);

    // Color gradient: Prussian blue (#1a1f4e) → neon violet (#9d4edd)
    vec3 prussianBlue = vec3(0.102, 0.122, 0.306);
    vec3 neonViolet = vec3(0.616, 0.306, 0.867);
    vec3 color = mix(prussianBlue, neonViolet, vDistortion);

    // Boost brightness for the glow core
    color += vec3(0.15, 0.08, 0.25) * smoothstep(0.3, 0.0, d);

    gl_FragColor = vec4(color, alpha * vAlpha);
  }
`;

// ─────────────────────────────────────────────────────────────
// React Component — 3000 particles on a Points mesh
// Positions allocated once in Float32Array for GPU efficiency
// ─────────────────────────────────────────────────────────────

interface ParticleVortexProps {
  scrollProgress: React.MutableRefObject<number>;
  count?: number;
}

const ParticleVortex = ({ scrollProgress, count = 3000 }: ParticleVortexProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // ── Allocate particle data ONCE ──
  // Float32Array is the most efficient way to batch positions to GPU
  const { positions, scales, offsets } = useMemo(() => {
    const positions = new Float32Array(count * 3);  // xyz per particle
    const scales = new Float32Array(count);          // 1 float per particle
    const offsets = new Float32Array(count);         // 1 float per particle

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Distribute particles in a disc with some vertical spread
      // Using sqrt for uniform area distribution
      const theta = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * 3.5;  // radius ~3.5 units
      const y = (Math.random() - 0.5) * 2.0;     // height spread

      positions[i3] = Math.cos(theta) * r;
      positions[i3 + 1] = y;
      positions[i3 + 2] = Math.sin(theta) * r;

      // Random scale per particle (0.5–3.0)
      scales[i] = 0.5 + Math.random() * 2.5;

      // Random phase offset for noise sampling
      offsets[i] = Math.random() * 100;
    }

    return { positions, scales, offsets };
  }, [count]);

  // ── Frame loop — update uniforms every frame ──
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      materialRef.current.uniforms.uScroll.value = scrollProgress.current;
    }
    // Subtle base rotation even without scroll
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0008;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aScale"
          count={count}
          array={scales}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aOffset"
          count={count}
          array={offsets}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uScroll: { value: 0 },
        }}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default ParticleVortex;
