"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import Section from "../ui/Section";
import Container from "../ui/Container";

// Corrected Cluster Component (Instanced for Performance)
function Cluster() {
  const meshRef = useRef();
  const count = 400;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate random data only once
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -5 + Math.random() * 10;
      const yFactor = -5 + Math.random() * 10;
      const zFactor = -5 + Math.random() * 10;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    const { mouse, clock } = state;
    const t = clock.getElapsedTime();

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;

      // Organic floating motion
      t = particle.t = t + speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      // Magnetic effect: Particles lean toward mouse
      particle.mx = THREE.MathUtils.lerp(particle.mx, mouse.x * 3, 0.02);
      particle.my = THREE.MathUtils.lerp(particle.my, mouse.y * 3, 0.02);

      dummy.position.set(
        xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10 +
          particle.mx,
        yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10 +
          particle.my,
        zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10,
      );

      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <dodecahedronGeometry args={[0.15, 0]} /> {/* Techy geometry */}
      <meshStandardMaterial color="#60a5fa" roughness={0.2} metalness={0.8} />
    </instancedMesh>
  );
}

// Corrected SignatureInteraction.js
export default function SignatureInteraction() {
  return (
    <Section className="relative min-h-screen border-t border-white/5 bg-[#08090a]">
      <div className="absolute inset-0 z-0 opacity-30">
        {/* Radial gradient to create depth behind the 3D object */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,127,255,0.15),transparent_70%)]" />
      </div>

      <Container className="relative z-10 pointer-events-none h-full flex flex-col justify-start pt-20">
        <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">
          Proprietary Core
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 max-w-xl">
          The Architecture of <br />
          <span className="text-blue-500">Intelligence.</span>
        </h2>
        <p className="max-w-md text-[var(--muted)] text-lg leading-relaxed">
          Our core engine continuously reorganizes data points into logical
          clusters, reacting in real-time to shifting enterprise needs.
        </p>
      </Container>

      <div className="absolute inset-0 cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <ambientLight intensity={0.2} />
          <spotLight
            position={[20, 20, 25]}
            penumbra={1}
            intensity={1}
            color="#4f7fff"
          />
          <Cluster />
        </Canvas>
      </div>
    </Section>
  );
}
