"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function DataPoints() {
  const ref = useRef();
  const progress = useRef(0);
  const count = 3000;
  const [positions, targets] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const tar = new Float32Array(count * 3);
    const size = Math.pow(count, 1 / 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = 5 * Math.pow(Math.random(), 1 / 3);
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi);
      tar[i3] = ((i % size) - size / 2) * 0.8;
      tar[i3 + 1] = ((Math.floor(i / size) % size) - size / 2) * 0.8;
      tar[i3 + 2] = (Math.floor(i / (size * size)) - size / 2) * 0.8;
    }
    return [pos, tar];
  }, []);

  useLayoutEffect(() => {
    const tl = gsap.to(progress, {
      current: 1,
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1, // Increased scrub for smoother "Calm" motion
      },
    });
    return () => tl.kill();
  }, []);

  useFrame((state) => {
    const { clock, mouse } = state;
    const time = clock.getElapsedTime();
    const posAttr = ref.current.geometry.attributes.position;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Smoothly lerp between chaotic and structured based on scroll
      posAttr.array[i3] = THREE.MathUtils.lerp(
        positions[i3],
        targets[i3],
        progress.current,
      );
      posAttr.array[i3 + 1] =
        THREE.MathUtils.lerp(
          positions[i3 + 1],
          targets[i3 + 1],
          progress.current,
        ) +
        Math.sin(time + i) * 0.01;
      posAttr.array[i3 + 2] = THREE.MathUtils.lerp(
        positions[i3 + 2],
        targets[i3 + 2],
        progress.current,
      );
    }
    posAttr.needsUpdate = true;

    // Smooth Cursor Parallax (using lerp for "Weight")
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      mouse.x * 0.3,
      0.05,
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      -mouse.y * 0.3,
      0.05,
    );
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// DataScene.js (Export part)
export default function DataScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <ambientLight intensity={0.5} />
      <DataPoints />
    </Canvas>
  );
}
