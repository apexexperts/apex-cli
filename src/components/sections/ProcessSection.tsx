"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    id: "01",
    title: "Discovery & Analysis",
    subtitle: "SYSTEM_SCAN_INITIALIZED",
    desc: "We begin by deep-diving into your existing technical architecture and business logic. This phase identifies constraints, data availability, and the highest-impact AI opportunities.",
    details: ["Audit of data pipelines", "Technical feasibility mapping", "Security & compliance review"]
  },
  {
    id: "02",
    title: "AI-Native Architecture",
    subtitle: "CORE_LOGIC_DESIGN",
    desc: "Moving beyond simple API calls, we architect a custom foundation. This includes vector database selection, model quantization strategies, and edge/cloud hybrid logic.",
    details: ["Schema & Vector DB design", "Model selection & Benchmarking", "Infrastructure blueprints"]
  },
  {
    id: "03",
    title: "Precision Engineering",
    subtitle: "HIGH_FIDELITY_DEV",
    desc: "The build phase focuses on clean, production-ready code. We implement custom ML models and LLM chains with a focus on latency, cost-efficiency, and error-handling.",
    details: ["Bespoke ML development", "RAG & LLM integration", "End-to-end testing"]
  },
  {
    id: "04",
    title: "Continuous Evolution",
    subtitle: "PERFORMANCE_SCALING",
    desc: "AI systems are never 'finished'. We deploy monitoring systems to track model drift, accuracy, and latency, ensuring the system evolves with your data.",
    details: ["A/B testing & Evaluation", "Drift monitoring", "Performance scaling"]
  }
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} id="process" className="scroll-mt-28 py-40 border-t border-white/5 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/[0.05]" />
      <motion.div 
        style={{ scaleY, originY: 0 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-sinai-glow-orange via-sinai-glow-orange/50 to-transparent z-10"
      />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-32 relative z-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-sinai-glow-orange" />
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-sinai-glow-orange font-bold">
            03 // Our Process
          </span>
          <div className="h-px w-8 bg-sinai-glow-orange" />
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          How we <span className="opacity-40">work.</span>
        </h2>
        <p className="text-zinc-500 max-w-xl text-lg leading-relaxed">
          Our engineering-first approach ensures that AI is integrated as a robust, scalable asset rather than a temporary fix.
        </p>
      </div>

      <div className="relative z-20 space-y-40">
        {STEPS.map((step, i) => (
          <div key={step.id} className="relative grid md:grid-cols-2 gap-20 items-center">
            {/* Step content */}
            <div className={`${i % 2 === 0 ? "md:order-1" : "md:order-2 md:text-right"}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <div className={`flex items-center gap-4 ${i % 2 === 0 ? "" : "justify-end"}`}>
                  <span className="font-mono text-4xl font-black text-white/5">{step.id}</span>
                  <div className="h-px w-10 bg-white/10" />
                  <span className="font-mono text-[10px] text-sinai-glow-orange font-bold uppercase tracking-widest">
                    {step.subtitle}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-zinc-500 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                  {step.desc}
                </p>

                <div className={`flex flex-wrap gap-3 ${i % 2 === 0 ? "" : "justify-end"}`}>
                  {step.details.map((detail) => (
                    <span key={detail} className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[10px] uppercase tracking-widest text-zinc-400">
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Central Node Visual */}
            <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center`}>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-12 h-12 rounded-full bg-[#0F0807] border-2 border-sinai-glow-orange flex items-center justify-center shadow-[0_0_30px_rgba(138,59,19,0.4)] z-20"
              >
                <div className="w-2 h-2 rounded-full bg-sinai-glow-orange animate-pulse" />
              </motion.div>
            </div>

            {/* Empty space for grid alignment */}
            <div className={i % 2 === 0 ? "md:order-2" : "md:order-1"} />
          </div>
        ))}
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sinai-glow-orange/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
