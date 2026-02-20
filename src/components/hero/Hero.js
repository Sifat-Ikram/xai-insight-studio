"use client";

import DataScene from "./DataScene";
import Section from "../ui/Section";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative min-h-screen flex items-center justify-center" // Centering logic
    >
      <Container className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          From Data <span className="text-blue-500">→</span> Intelligence
        </h1>
        <p className="max-w-2xl text-[var(--muted)] text-lg md:text-xl leading-relaxed">
          Xai transforms raw data into structured intelligence and actionable
          insights with AI-powered automations.
        </p>
      </Container>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <DataScene />
      </div>
    </Section>
  );
}
