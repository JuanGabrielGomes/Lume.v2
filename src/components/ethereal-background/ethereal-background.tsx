"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { useUiCapabilities } from "@/lib/ui/use-ui-capabilities";

type RotatingPoints = {
  rotation: {
    x: number;
    y: number;
  };
};

function Particles() {
  const points = useRef<RotatingPoints | null>(null);

  const positions = useMemo(() => {
    const total = 1200;
    const buffer = new Float32Array(total * 3);

    for (let index = 0; index < total; index += 1) {
      const stride = index * 3;
      buffer[stride] = (Math.random() - 0.5) * 22;
      buffer[stride + 1] = (Math.random() - 0.5) * 18;
      buffer[stride + 2] = (Math.random() - 0.5) * 16;
    }

    return buffer;
  }, []);

  useFrame((state) => {
    if (!points.current) {
      return;
    }

    points.current.rotation.y = state.clock.elapsedTime * 0.014;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.028;
  });

  return (
    <points ref={points} position={[0, 0, -4]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#f2c38d"
        opacity={0.2}
        size={0.024}
        sizeAttenuation
        transparent
        depthWrite={false}
      />
    </points>
  );
}

export function EtherealBackground() {
  const { enableAmbientCanvas } = useUiCapabilities();

  if (!enableAmbientCanvas) {
    return null;
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-50 opacity-70"
      style={{ contain: "strict" }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 48 }}
        dpr={[1, 1.2]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}