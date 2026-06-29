import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─────────────────────────────────────────────────────────────
// Single floating shape — semi-transparent wireframe geometry
// Rotates slowly on 3 axes, orbits a radius
// ─────────────────────────────────────────────────────────────
function FloatingShape({
  geometry,
  color,
  radius,
  speed,
  phase,
}: {
  geometry: THREE.BufferGeometry;
  color: string;
  radius: number;
  speed: number;
  phase: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + phase;
    if (meshRef.current) {
      // Orbit around center
      meshRef.current.position.x = Math.cos(t) * radius;
      meshRef.current.position.y = Math.sin(t * 0.6) * (radius * 0.4);
      meshRef.current.position.z = Math.sin(t) * (radius * 0.5) - 1;

      // Self-rotation
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial
        color={color}
        wireframe
        transparent
        opacity={0.08}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// ─────────────────────────────────────────────────────────────
// Collection of ambient floating shapes
// Pre-allocates geometries once in useMemo
// ─────────────────────────────────────────────────────────────
import { useMemo } from "react";

const FloatingShapes = () => {
  // Create geometries once
  const { torus, ico, octahedron, dodecahedron } = useMemo(() => ({
    torus: new THREE.TorusGeometry(1.2, 0.3, 16, 32),
    ico: new THREE.IcosahedronGeometry(0.8, 0),
    octahedron: new THREE.OctahedronGeometry(0.6, 0),
    dodecahedron: new THREE.DodecahedronGeometry(0.5, 0),
  }), []);

  return (
    <group>
      <FloatingShape geometry={torus} color="#5e6ad2" radius={4} speed={0.12} phase={0} />
      <FloatingShape geometry={ico} color="#9d4edd" radius={3.5} speed={0.18} phase={2} />
      <FloatingShape geometry={octahedron} color="#7c3aed" radius={5} speed={0.1} phase={4} />
      <FloatingShape geometry={dodecahedron} color="#5e6ad2" radius={3} speed={0.15} phase={6} />
    </group>
  );
};

export default FloatingShapes;
