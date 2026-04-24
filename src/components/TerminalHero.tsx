"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const MENU_ITEMS = [
  { label: "ABOUT_SYSTEM", id: "about", desc: "Company mission & elite positioning." },
  { label: "CORE_SERVICES", id: "services", desc: "Production-grade AI architectures." },
  { label: "ENGINEERING_PIPELINE", id: "process", desc: "Our methodology & delivery flow." },
  { label: "PRODUCTION_REGISTRY", id: "projects", desc: "Live case studies & deployments." },
  { label: "INTELLECTUAL_CAPITAL", id: "blog", desc: "Engineering dispatches & research." },
  { label: "ENGAGE_PROTOCOL", id: "contact", desc: "Initialize contact & engagement." },
];

export function TerminalHero() {
  const [stage, setStage] = useState(0); // 0: Open, 1: Title, 2: Badge, 3: Engine, 4: Menu
  const [streamedTitle, setStreamedTitle] = useState("");
  const [streamedBadge, setStreamedBadge] = useState("");
  const [streamedEngine, setStreamedEngine] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const fullTitle = "APEX EXPERTS";
  const fullBadge = "AI SOLUTIONS";
  const fullEngine = "AUTONOMOUS INTELLIGENCE ENGINE";

  const windowRef = useRef<HTMLDivElement>(null);
  const [scrollYValue, setScrollYValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollYValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manual transform logic to bypass Framer Motion internal checks
  const calculateTransform = (value: number, rangeIn: [number, number], rangeOut: [number, number]) => {
    const [inMin, inMax] = rangeIn;
    const [outMin, outMax] = rangeOut;
    const progress = Math.min(Math.max((value - inMin) / (inMax - inMin), 0), 1);
    return outMin + (outMax - outMin) * progress;
  };

  const opacityScroll = calculateTransform(scrollYValue, [0, 450], [1, 0]);
  const scaleScroll = calculateTransform(scrollYValue, [0, 450], [1, 0.95]);
  const yScroll = calculateTransform(scrollYValue, [0, 450], [0, 100]);

  useEffect(() => {
    if (stage === 0) {
      gsap.fromTo(
        windowRef.current,
        { scale: 0.85, opacity: 0, rotationX: 15, y: 120, filter: "blur(20px)" },
        { 
          scale: 1, opacity: 1, rotationX: 0, y: 0, filter: "blur(0px)",
          duration: 1.8, ease: "expo.out", delay: 0.4,
          onComplete: () => setStage(1)
        }
      );
    }

    const typeSpeed = 50;
    if (stage === 1) {
      let idx = 0;
      const interval = setInterval(() => {
        if (idx < fullTitle.length) {
          setStreamedTitle(fullTitle.slice(0, idx + 1));
          idx++;
        } else {
          clearInterval(interval);
          setTimeout(() => setStage(2), 300);
        }
      }, typeSpeed);
      return () => clearInterval(interval);
    }

    if (stage === 2) {
      let idx = 0;
      const interval = setInterval(() => {
        if (idx < fullBadge.length) {
          setStreamedBadge(fullBadge.slice(0, idx + 1));
          idx++;
        } else {
          clearInterval(interval);
          setTimeout(() => setStage(3), 200);
        }
      }, typeSpeed);
      return () => clearInterval(interval);
    }

    if (stage === 3) {
      let idx = 0;
      const interval = setInterval(() => {
        if (idx < fullEngine.length) {
          setStreamedEngine(fullEngine.slice(0, idx + 1));
          idx++;
        } else {
          clearInterval(interval);
          setTimeout(() => setStage(4), 800);
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [stage]);

  return (
    <div className="relative min-h-screen bg-[#06080a]">
      <motion.div 
        style={{ opacity: opacityScroll, scale: scaleScroll, y: yScroll }}
        className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(138,59,19,0.06)_0%,transparent_70%)] blur-[100px]" />
          <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-[0.03] mix-blend-overlay" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div 
          ref={windowRef}
          className="relative z-10 w-full max-w-5xl aspect-[16/10] md:aspect-video rounded-3xl border border-white/10 bg-[#0c0c0e]/95 backdrop-blur-3xl shadow-[0_80px_150px_-30px_rgba(0,0,0,1)] flex flex-col overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase font-bold">APEX_CLI_v4.0.2</span>
              <span className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono text-green-500/80">CONNECTED</span>
              </div>
            </div>
          </div>

          <div className="flex-1 p-8 md:p-12 font-mono overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.01),rgba(0,0,128,0.01))] bg-[size:100%_4px,3px_100%] z-20 opacity-30" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-10 min-h-[140px] md:min-h-[180px]">
                <div className="text-sinai-glow-orange text-5xl md:text-[7rem] font-black tracking-tighter leading-[0.8] mb-6">
                  {streamedTitle}<span className={stage === 1 ? "animate-pulse" : ""}>_</span>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  {streamedBadge && (
                    <span className="px-3 py-1 rounded bg-sinai-glow-orange text-[9px] font-black text-white uppercase tracking-[0.3em]">
                      {streamedBadge}<span className={stage === 2 ? "animate-pulse" : ""}>_</span>
                    </span>
                  )}
                  {streamedEngine && (
                    <span className="text-xs text-zinc-500 tracking-[0.4em] uppercase font-bold">
                      {streamedEngine}<span className={stage === 3 ? "animate-pulse" : ""}>_</span>
                    </span>
                  )}
                </div>
              </div>

              {/* ── CLI Selection Menu (AI Agent Style) ── */}
              <div className="flex flex-col space-y-4">
                {stage >= 4 && (
                  <div className="space-y-1">
                    <div className="text-[10px] text-zinc-600 mb-4 tracking-[0.3em] uppercase flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                      SELECT_MODULE_TO_INITIALIZE
                    </div>
                    
                    {MENU_ITEMS.map((item, i) => (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        onMouseEnter={() => setActiveIndex(i)}
                        onMouseLeave={() => setActiveIndex(null)}
                        className="flex items-center gap-6 group/item cursor-pointer py-1.5"
                      >
                        {/* CLI Indicator */}
                        <div className="w-6 flex justify-center">
                          <AnimatePresence mode="wait">
                            {activeIndex === i ? (
                              <motion.span 
                                key="active"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className="text-sinai-glow-orange font-black text-sm"
                              >
                                ❯
                              </motion.span>
                            ) : (
                              <motion.span 
                                key="inactive"
                                className="text-zinc-800 font-bold text-[10px]"
                              >
                                ○
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Item Content */}
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                          <span className={`text-sm font-black tracking-widest transition-colors duration-300 ${activeIndex === i ? 'text-white' : 'text-zinc-600'}`}>
                            {item.label}
                          </span>
                          {activeIndex === i && (
                            <motion.span 
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="text-[10px] text-zinc-500 font-mono italic"
                            >
                              // {item.desc}
                            </motion.span>
                          )}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between text-[9px] text-zinc-700 tracking-widest font-bold">
                <div>LOCATION: 37.7749° N, 122.4194° W</div>
                <div className="flex items-center gap-6">
                  <span>ENCRYPTION: AES-256</span>
                  <span>STATE: READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
