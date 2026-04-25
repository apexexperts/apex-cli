"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

const REVIEWS = [
  {
    id: 1,
    quote: "APEX Experts didn't just build a model; they engineered a core competitive advantage for our firm. Their technical depth is truly unparalleled.",
    author: "Sarah Chen",
    role: "CTO",
    company: "GLOBAL LOGISTICS CORP",
    avatar: "/images/avatars/sarah.png"
  },
  {
    id: 2,
    quote: "The level of architectural precision they brought to our LLM infrastructure saved us months of R&D. They are the AI architects we were looking for.",
    author: "Marcus Thorne",
    role: "HEAD OF AI",
    company: "QUANTUM VENTURES",
    avatar: "/images/avatars/marcus.png"
  },
  {
    id: 3,
    quote: "Sub-second latency and extreme precision. Our search capabilities have been transformed from a tool into a strategic engine.",
    author: "Elena Vance",
    role: "PARTNER",
    company: "LEX LEGAL SYSTEMS",
    avatar: "/images/avatars/elena.png"
  }
];

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  return (
    <section id="testimonials" className="scroll-mt-28 py-40 border-t border-white/5 relative overflow-hidden">
      {/* Cinematic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sinai-glow-orange/[0.03] blur-[150px] pointer-events-none" />

      {/* Section label */}
      <div className="flex flex-col items-center mb-24 relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-8 bg-sinai-glow-orange" />
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-sinai-glow-orange font-bold">
            05 // Client Testimonials
          </span>
          <div className="h-px w-8 bg-sinai-glow-orange" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white text-center">
          Trusted by <span className="opacity-40">Elite Teams.</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* 1. Navigation / Client Avatars */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 pb-16 mb-16 border-b border-white/5">
          {REVIEWS.map((review, i) => (
            <button
              key={review.id}
              onClick={() => setActiveIdx(i)}
              className={`group flex items-center gap-4 transition-all duration-500 ${
                activeIdx === i ? "opacity-100" : "opacity-30 grayscale hover:opacity-100 hover:grayscale-0"
              }`}
            >
              <div className={`relative w-16 h-16 rounded-full border overflow-hidden transition-all duration-500 ${
                activeIdx === i 
                ? "border-sinai-glow-orange shadow-[0_0_25px_rgba(138,59,19,0.4)]" 
                : "border-white/10"
              }`}>
                <Image
                  src={review.avatar}
                  alt={review.author}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className={`text-left transition-all duration-500 ${activeIdx === i ? "translate-x-0" : (effectiveReduceMotion ? "" : "-translate-x-2")}`}>
                <div className="text-sm font-bold text-white leading-none mb-1">{review.author}</div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{review.role}</div>
              </div>
            </button>
          ))}
        </div>

        {/* 2. Large Quote Area */}
        <div className="min-h-[300px] flex items-center justify-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: effectiveReduceMotion ? 1 : 0.98, y: effectiveReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: effectiveReduceMotion ? 1 : 1.02, y: effectiveReduceMotion ? 0 : -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center space-y-10"
            >
              <div className="text-sinai-glow-orange opacity-20 text-8xl font-serif italic h-10 leading-none">&quot;</div>
              <p className="text-2xl md:text-5xl font-medium text-white/90 leading-tight tracking-tight text-balance">
                {REVIEWS[activeIdx].quote}
              </p>
              <div className="pt-4">
                <div className="font-mono text-xs text-sinai-glow-orange uppercase tracking-[0.3em] font-bold">
                  {REVIEWS[activeIdx].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
