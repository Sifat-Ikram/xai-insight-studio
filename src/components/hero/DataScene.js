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
  const count = 2000;

  // Chaotic positions
  const startPositions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  // Target grid
  const targetPositions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const size = Math.cbrt(count);
    let i = 0;
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          if (i * 3 >= arr.length) break;
          arr[i * 3] = x - size / 2;
          arr[i * 3 + 1] = y - size / 2;
          arr[i * 3 + 2] = z - size / 2;
          i++;
        }
      }
    }
    return arr;
  }, []);

  // Scroll-driven morph
  useLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
      onUpdate: (self) => (progress.current = self.progress),
    });
  }, []);

  useFrame(({ mouse, viewport }) => {
    if (!ref.current) return;

    const positions = ref.current.geometry.attributes.position.array;

    // Morph + subtle wave
    for (let i = 0; i < positions.length; i++) {
      const target = THREE.MathUtils.lerp(
        startPositions[i],
        targetPositions[i],
        progress.current,
      );

      // subtle wave for motion
      positions[i] = target + Math.sin(i + Date.now() * 0.001) * 0.02;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;

    // Subtle rotation
    ref.current.rotation.x = mouse.y * 0.15;
    ref.current.rotation.y = mouse.x * 0.15;
  });

  return (
    <Points ref={ref} positions={startPositions} stride={3}>
      <PointMaterial
        transparent
        color="#4f7fff"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function DataScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <DataPoints />
    </Canvas>
  );
}
