"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "../ui/Section";

gsap.registerPlugin(ScrollTrigger);

export default function InsightFlow() {
  const containerRef = useRef(null);

  // Corrected useLayoutEffect logic
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const stages = containerRef.current.querySelectorAll(".stage");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${stages.length * 100}%`,
        pin: true,
        scrub: 1,
      },
    });

    stages.forEach((stage, i) => {
      tl.fromTo(
        stage,
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, ease: "power2.out" },
        i === 0 ? 0 : ">-0.5",
      );

      if (i !== stages.length - 1) {
        tl.to(stage, { autoAlpha: 0, y: -100, ease: "power2.in" }, ">+1");
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Corrected Component Return
  return (
    <Section id="insight-flow" className="min-h-screen flex items-center">
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl mx-auto h-[60vh]"
      >
        {/* Stage 1 */}
        <div className="stage absolute inset-0 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="text-blue-500 font-mono text-sm mb-4 block tracking-widest uppercase">
              01 // Ingest
            </span>
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6">
              Ingest Data
            </h3>
            <p className="text-[var(--muted)] text-lg leading-relaxed">
              Raw data is collected from multiple sources and prepared for
              analysis. This stage ensures completeness, quality, and structure.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-full aspect-square border border-[var(--color-border)] bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden">
              {/* Visual: Grid of dots morphing */}
              <div className="grid grid-cols-6 gap-4 opacity-20">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-blue-500 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stage 2 */}
        <div className="stage absolute inset-0 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1 relative">
            <div className="w-full aspect-square border border-blue-500/30 bg-blue-500/5 rounded-2xl backdrop-blur-3xl" />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <span className="text-blue-500 font-mono text-sm mb-4 block tracking-widest uppercase">
              02 // Process
            </span>
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6">
              Analyze with AI
            </h3>
            <p className="text-[var(--muted)] text-lg leading-relaxed">
              AI algorithms identify patterns, correlations, and insights,
              transforming raw data into actionable intelligence.
            </p>
          </div>
        </div>

        {/* Stage 3 */}
        <div className="stage absolute inset-0 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <span className="text-blue-500 font-mono text-sm mb-4 block tracking-widest uppercase">
              03 // Output
            </span>
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6">
              Generate Insight
            </h3>
            <p className="text-[var(--muted)] text-lg leading-relaxed">
              Insights are visualized and structured, ready to be acted upon or
              automated through AI-driven workflows.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="w-full aspect-square glass-panel rounded-2xl p-8">
              <div className="h-full w-full border-l border-b border-white/10 relative" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
