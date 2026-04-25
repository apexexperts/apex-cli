"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";

const POSITIONS = [
  {
    id: "depth",
    title: "Technical Depth",
    short: "We prioritize engineering rigor over surface-level AI integration. Every solution is architected for production reliability.",
    header: "Precision-engineered AI",
    subHeader: " for real-world systems.",
    description: "APEX Experts AI Solutions is a specialized engineering practice focused on designing, building, and deploying production-grade artificial intelligence systems."
  },
  {
    id: "focus",
    title: "Strategic Focus",
    short: "We partner with organizations that understand AI as infrastructure — not as a feature checkbox.",
    header: "AI as Infrastructure",
    subHeader: " not just a feature checkbox.",
    description: "We work at the intersection of advanced machine learning research and robust software engineering — translating complex AI capabilities into reliable, scalable solutions."
  },
  {
    id: "quality",
    title: "Quality Standard",
    short: "Our work meets the same bar as the tools we build with: tested, documented, and designed to evolve.",
    header: "Built to Evolve",
    subHeader: " designed for longevity.",
    description: "Every deployment meets our rigorous standards: fully tested, extensively documented, and architected to grow with your business objectives."
  }
];

export function AboutSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  return (
    <section id="about" className="scroll-mt-28 py-32 border-t border-white/5">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-20">
        <div className="h-px w-12 bg-gradient-to-r from-sinai-glow-orange to-transparent" />
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-sinai-glow-orange font-bold">
          01 // About
        </span>
      </div>

      <div className="grid lg:grid-cols-5 gap-20 items-start">
        {/* Main copy (Left side) — changes based on hover */}
        <div className="lg:col-span-3 min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: effectiveReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: effectiveReduceMotion ? 0 : -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="space-y-10"
            >
              <h1 className="text-5xl sm:text-7xl font-bold leading-[0.9] tracking-tight text-balance">
                {POSITIONS[activeIdx].header}
                <br />
                <span className="opacity-40 text-4xl sm:text-6xl font-medium">
                  {POSITIONS[activeIdx].subHeader}
                </span>
              </h1>

              <div className="space-y-6 text-xl leading-relaxed max-w-2xl opacity-70">
                <p>{POSITIONS[activeIdx].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Side panel — The Hover Controls (Right side) */}
        <div className="lg:col-span-2">
          <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-10 backdrop-blur-3xl relative overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-sinai-glow-orange font-bold mb-10 relative">
              Our Core Positions
            </h3>

            <div className="space-y-2 relative">
              {POSITIONS.map((pos, i) => (
                <div
                  key={pos.id}
                  onMouseEnter={() => setActiveIdx(i)}
                  className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer group/item ${
                    activeIdx === i 
                      ? "bg-white/[0.04] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]" 
                      : "opacity-40 hover:opacity-100 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                      activeIdx === i ? "bg-sinai-glow-orange scale-150" : "bg-white/20"
                    }`} />
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {pos.title}
                    </h4>
                  </div>
                  <p className="text-sm leading-relaxed opacity-70">
                    {pos.short}
                  </p>
                  
                  {/* Progress Indicator line for active item */}
                  {activeIdx === i && (
                    <>
                      <motion.div 
                        layoutId={effectiveReduceMotion ? undefined : "activePosition"}
                        className="absolute left-0 top-0 bottom-0 w-1 bg-sinai-glow-orange rounded-full"
                      />
                      <motion.div
                        initial={{ opacity: 0, x: effectiveReduceMotion ? 0 : -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mt-6"
                      >
                        <Link href="/about" className="inline-flex items-center gap-3 text-[10px] font-mono text-sinai-glow-orange tracking-[0.3em] font-black uppercase hover:text-white transition-all group/btn">
                          Explore_Full_Record
                          <div className={`h-px bg-sinai-glow-orange transition-all duration-500 ${effectiveReduceMotion ? 'w-6' : 'w-6 group-hover/btn:w-10'}`} />
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform ${effectiveReduceMotion ? '' : 'group-hover/btn:translate-x-1'}`}><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                        </Link>
                      </motion.div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
