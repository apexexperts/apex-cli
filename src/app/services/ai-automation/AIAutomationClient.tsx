"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Share2, Cpu, Zap, Layers } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AutomationCapability {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
}

const CAPABILITIES = [
  {
    id: "01",
    title: "Autonomous Integration",
    desc: "Seamlessly connect disparate legacy systems and cloud native architectures with self-healing AI bridges.",
    icon: <Share2 className="w-8 h-8" />,
    image: "/images/autonomous-integration-detail.png"
  },
  {
    id: "02",
    title: "Cognitive RPA",
    desc: "Intelligent software robots that perceive, reason, and execute complex business logic with human-like precision.",
    icon: <Cpu className="w-8 h-8" />,
    image: "/images/cognitive-rpa-detail.png"
  },
  {
    id: "03",
    title: "Predictive Analytics",
    desc: "Leverage deep learning models to forecast operational bottlenecks before they impact your bottom line.",
    icon: <Zap className="w-8 h-8" />,
    image: "/images/predictive-analytics-detail.png"
  },
  {
    id: "04",
    title: "Agentic Orchestration",
    desc: "Deploy a swarm of specialized AI agents that collaborate autonomously to solve multi-step enterprise challenges.",
    icon: <Layers className="w-8 h-8" />,
    image: "/images/agentic-orchestration-detail.png"
  }
];

const SynthesisVisualizer = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  const [bars, setBars] = React.useState<{ h1: string, h2: string, h3: string }[]>([]);

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setBars([...Array(8)].map(() => ({
        h1: `${20 + Math.random() * 80}%`,
        h2: `${10 + Math.random() * 90}%`,
        h3: `${20 + Math.random() * 80}%`
      })));
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) return null;

  return (
    <div className="grid grid-cols-8 gap-1 h-12 items-end">
      {bars.map((bar, i) => (
        <motion.div 
          key={i}
          animate={shouldReduceMotion ? { height: bar.h2 } : { height: [bar.h1, bar.h2, bar.h3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
          className="w-full bg-sinai-glow-orange/40 rounded-t-sm"
        />
      ))}
    </div>
  );
};

const NeuralCore = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {/* Outer Orbital Rings */}
      <motion.div 
        animate={effectiveReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border border-sinai-glow-orange/10 rounded-full border-dashed"
      />
      <motion.div 
        animate={effectiveReduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-16 border border-white/5 rounded-full border-dashed"
      />
      
      {/* Central Glass Sphere */}
      <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-white/[0.05] to-transparent flex items-center justify-center backdrop-blur-3xl border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        
        {/* Internal Pulsing Plasma */}
        <motion.div 
          animate={effectiveReduceMotion ? { opacity: 0.4 } : { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-56 h-56 rounded-full bg-sinai-glow-orange/20 blur-[60px]"
        />

        {/* Central Branding Module */}
        <div className="relative z-10 flex flex-col items-center">
          {/* CORE_CPU Technical Frame */}
          <div className="px-3 py-1 rounded-sm border border-sinai-glow-orange/40 bg-sinai-glow-orange/5 mb-4 relative overflow-hidden group-hover:border-sinai-glow-orange transition-colors">
            <div className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.3em] font-black flex items-center gap-2">
              <span className={`w-1 h-1 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? '' : 'animate-pulse'}`} />
              CORE_ENGINE_V4.0
            </div>
            {/* Inner Scanline */}
            {!effectiveReduceMotion && (
              <motion.div 
                animate={{ left: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-8 bg-white/20 skew-x-12 -translate-x-full"
              />
            )}
          </div>

          {/* APEX Text Branding */}
          <div className="relative">
            <h3 className="text-6xl font-black tracking-[-0.05em] text-white flex flex-col items-center leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-sinai-glow-orange/50">APEX</span>
              <span className="text-[10px] font-mono tracking-[1.5em] text-sinai-glow-orange/60 ml-[1.5em] -mt-1 font-bold">EXPERTS</span>
            </h3>
            {/* Subtle Reflection */}
            <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-t from-sinai-glow-orange/10 to-transparent blur-sm" />
          </div>
        </div>

        {/* Orbiting Data Fragments */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={effectiveReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/20 tracking-tighter">
              {i === 0 ? "0x7F" : i === 1 ? "EXEC_S" : "V_BUFF"}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Scanning Ring */}
      {!effectiveReduceMotion && (
        <motion.div 
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 0.5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[450px] h-[450px] border-2 border-sinai-glow-orange/30 rounded-full"
        />
      )}
    </div>
  );
};

const OrbitalNode = ({ cap, index, total, active, onEnter, onLeave }: { cap: AutomationCapability, index: number, total: number, active: boolean, onEnter: () => void, onLeave: () => void }) => {
  const angle = (index / total) * Math.PI * 2;
  const radius = 320; 
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: active ? 1.2 : 1,
        filter: active ? "blur(0px)" : "blur(0.5px)"
      }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.4
      }}
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
      className="absolute -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Node Trigger */}
      <div className="relative w-28 h-28 flex items-center justify-center cursor-pointer">
        <div className={`absolute inset-0 bg-white/[0.03] border rounded-[2rem] rotate-45 transition-all duration-500 ${active ? 'rotate-90 border-sinai-glow-orange shadow-[0_0_30px_rgba(242,162,75,0.3)] bg-sinai-glow-orange/5' : 'border-white/10 group-hover:border-white/30'}`} />
        <div className={`relative z-10 transition-colors duration-500 ${active ? 'text-sinai-glow-orange scale-110' : 'text-zinc-500 group-hover:text-white'}`}>
          {cap.icon}
        </div>
        
        {/* Connecting Line to Core */}
        <div 
          style={{ 
            width: radius, 
            transform: `rotate(${angle + Math.PI}rad)`,
            transformOrigin: 'left center'
          }}
          className={`absolute left-1/2 top-1/2 h-px transition-opacity duration-500 ${active ? 'bg-sinai-glow-orange/40 opacity-100' : 'bg-white/5 opacity-40'} pointer-events-none`}
        />
      </div>

      {/* Technical Label */}
      <div className={`absolute top-full mt-6 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-500 ${active ? 'opacity-100 translate-y-2' : 'opacity-20 group-hover:opacity-60'}`}>
        <span className="text-[10px] font-mono text-white tracking-[0.4em] font-bold uppercase">{cap.title}</span>
      </div>
    </motion.div>
  );
};

const CapabilityDetailView = ({ cap }: { cap: AutomationCapability }) => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-12 rounded-[4rem] relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/5 to-transparent opacity-50" />
      
      <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl z-10">
        <Image 
          src={cap.image} 
          alt={cap.title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="space-y-8 relative z-10">
        <div className="flex items-center gap-4">
          <div className="px-4 py-1.5 rounded-full bg-sinai-glow-orange/10 border border-sinai-glow-orange/30 text-sinai-glow-orange text-[9px] font-mono font-bold tracking-widest uppercase">
            Live_Dossier // {cap.id}
          </div>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        
        <div className="space-y-6">
          <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">{cap.title}</h3>
          <div className="min-h-[100px]">
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              <StreamingText text={cap.desc} delay={100} />
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-600">
          <span className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full bg-green-500/50 ${effectiveReduceMotion ? '' : 'animate-pulse'}`} />
            SYSTEM_SYNC: ACTIVE
          </span>
          <span className="w-px h-4 bg-white/10" />
          <span>V_CORE: 0x7492</span>
        </div>
      </div>
    </div>
  );
};

const Particles = ({ count = 10 }: { count?: number }) => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  const [positions, setPositions] = React.useState<{ x: string, delay: number }[]>([]);

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
      setPositions(
        [...Array(count)].map(() => ({
          x: Math.random() * 100 + "%",
          delay: Math.random() * 10,
        }))
      );
    });
    return () => cancelAnimationFrame(frame);
  }, [count]);

  if (!mounted) return null;

  return (
    <>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          initial={{ x: pos.x, y: shouldReduceMotion ? "50%" : "110%" }}
          animate={shouldReduceMotion ? {} : { y: "-10%", rotate: 360 }}
          transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear", delay: pos.delay }}
          className="absolute w-1 h-1 bg-sinai-glow-orange/20 rounded-full blur-[1px]"
        />
      ))}
    </>
  );
};

const StreamingText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;
  const [displayedText, setDisplayedText] = React.useState("");
  
  React.useEffect(() => {
    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return <span className={className}>{displayedText}<span className={`${effectiveReduceMotion ? '' : 'animate-pulse'} inline-block w-1 h-8 md:h-12 bg-sinai-glow-orange ml-1`} /></span>;
};

const AIAutomationHero = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(242,162,75,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(242,162,75,0.05)_0%,transparent_50%)]" />
      
      <div className="absolute inset-0 opacity-[0.02] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12 text-left"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-sinai-glow-orange/30" />
                <span className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[9px] uppercase tracking-[0.5em] text-sinai-glow-orange font-bold">
                  AUTONOMOUS_ORCHESTRATION // SOL_01
                </span>
              </div>
              
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white">
                AI & Process <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-white/40">
                  Automation.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zinc-400 max-w-xl font-light leading-relaxed">
                Engineering autonomous enterprise intelligence through agentic workflows, cognitive RPA, and predictive optimization.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <Link href="/contact" className="group relative px-12 py-6 rounded-full overflow-hidden bg-sinai-glow-orange text-white font-black text-sm tracking-[0.3em] uppercase transition-all hover:shadow-[0_0_50px_rgba(242,162,75,0.4)] hover:scale-105 active:scale-95 duration-500">
                <span className="relative z-10">Initialize Engagement</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              
              <Link href="#capabilities" className="px-12 py-6 rounded-full bg-white/[0.03] border border-white/10 text-white font-black text-sm tracking-[0.3em] uppercase hover:bg-white/[0.08] hover:border-white/20 transition-all">
                Registry Details
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/5">
              {[
                { label: "AUTO_REASONING", value: "L5" },
                { label: "LATENCY", value: "<10ms" },
                { label: "EFFICIENCY", value: "100%" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-[8px] font-mono text-zinc-600 mb-1 tracking-widest uppercase">{stat.label}</div>
                  <div className="text-xl font-bold text-white font-mono">{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.15)] group">
              <Image 
                src="/images/agentic-orchestration-core.png" 
                alt="AI Automation Core" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-110 transition-transform duration-[5000ms] brightness-75"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              {/* Technical HUD Overlays */}
              <div className="absolute top-10 right-10 text-[8px] font-mono text-sinai-glow-orange/80 tracking-[0.2em] text-right">
                REASONING_CORE: ACTIVE<br />
                INTEGRATION_PIPELINE: SYNC
              </div>
              
              <div className="absolute bottom-10 left-10 text-[8px] font-mono text-zinc-500 tracking-[0.2em]">
                AGENT_ORCHESTRATOR_V4.0<br />
                © APEX_EXPERTS_SOLUTIONS
              </div>

              {!effectiveReduceMotion && (
                <motion.div 
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sinai-glow-orange/40 to-transparent z-20 pointer-events-none"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <Particles count={8} />
      </div>
    </section>
  );
};

export default function AIAutomationClient() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCapId, setActiveCapId] = React.useState<string | null>(null);
  




  const activeCap = CAPABILITIES.find(c => c.id === activeCapId);

  return (
    <div ref={containerRef} className="relative bg-[#06080a] text-white min-h-screen selection:bg-sinai-glow-orange selection:text-black">
      <AIAutomationHero />

      {/* The Core: Neural Capability Hub - Super Premium Redesign */}
      <section id="capabilities" className="py-48 relative overflow-hidden bg-[#06080a] min-h-[1000px]">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-32">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-sinai-glow-orange/50" />
                <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Intelligence_Orchestrator // V4.0</span>
                <div className="w-8 h-px bg-sinai-glow-orange/50" />
              </div>
              <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tight leading-none">
                The Neural <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white/40">Capability Hub</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="relative max-w-7xl mx-auto h-[700px] flex items-center justify-center">
            {/* Orbital Nodes - Always Visible */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              {CAPABILITIES.map((cap, i) => (
                <OrbitalNode 
                  key={cap.id} 
                  cap={cap} 
                  index={i} 
                  total={CAPABILITIES.length}
                  active={activeCapId === cap.id}
                  onEnter={() => setActiveCapId(cap.id)}
                  onLeave={() => setActiveCapId(null)}
                />
              ))}
            </div>

            {/* Central Area: Hub or Detail */}
            <div className="relative w-full max-w-4xl h-full flex items-center justify-center z-20">
              <AnimatePresence mode="wait">
                {!activeCapId ? (
                  <motion.div 
                    key="hub-core"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center"
                  >
                    <NeuralCore />
                  </motion.div>
                ) : (
                  <motion.div 
                    key="detail-card"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full"
                  >
                    <CapabilityDetailView cap={activeCap!} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Technical Background Schematic */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 z-10">
              <div className="w-[700px] h-[700px] border border-white/5 rounded-full" />
              <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full" />
              <div className={`absolute w-[350px] h-[350px] border border-sinai-glow-orange/10 rounded-full ${effectiveReduceMotion ? '' : 'animate-pulse'}`} />
            </div>
          </div>
        </div>

        {/* Floating Technical Tags */}
        <div className="absolute top-20 right-20 text-[8px] font-mono text-zinc-800 leading-relaxed uppercase hidden lg:block">
          REASONING_CORE: ACTIVE<br />
          INTEGRATION_PIPELINE: SYNCHRONIZED<br />
          AGENT_STATUS: OPTIMAL
        </div>
      </section>

      {/* Workflow Intelligence // Autonomous Reasoning - PREMIUM REVEAL */}
      <section className="pt-64 pb-32 relative bg-[#06080a] overflow-hidden border-t border-white/5">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <SectionReveal>
              <div className="space-y-16">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-sinai-glow-orange/30" />
                    <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Deep_Dive // 02</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                    Workflow <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">Intelligence</span>
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/20 transition-colors">
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-sinai-glow-orange/30 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full bg-sinai-glow-orange ${effectiveReduceMotion ? '' : 'animate-pulse'}`} />
                      Autonomous Reasoning
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">
                      Our engines don&apos;t just follow scripts. They perceive environment changes, weigh constraints, and synthesize optimal execution paths in real-time. This is the difference between simple automation and true enterprise intelligence.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "LOGIC_SYNTHESIS", value: "99.9%" },
                      { label: "DECISION_LATENCY", value: "<12ms" },
                      { label: "CONTEXT_WINDOW", value: "2M+" },
                      { label: "ERROR_MITIGATION", value: "AUTO" }
                    ].map((stat, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 font-mono">
                        <div className="text-[9px] text-zinc-500 mb-2 tracking-widest">{stat.label}</div>
                        <div className="text-xl font-bold text-sinai-glow-orange tracking-tight">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="relative">
                {/* Main Holographic Core */}
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group">
                  <Image 
                    src="/images/autonomous-reasoning-core.png" 
                    alt="Autonomous Reasoning Core" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                  />
                  
                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Scanning Line */}
                  {!effectiveReduceMotion && (
                    <motion.div 
                      animate={{ top: ["-10%", "110%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-sinai-glow-orange/20 to-transparent z-20 pointer-events-none"
                    />
                  )}

                  {/* Technical Frame Markers */}
                  <div className="absolute top-10 left-10 text-[8px] font-mono text-sinai-glow-orange/60 tracking-widest">
                    SYSTEM_SCAN: READY<br />
                    CORE_TEMP: 32°C
                  </div>
                  <div className="absolute bottom-10 right-10 text-[8px] font-mono text-zinc-500 text-right">
                    REASONING_ENGINE_V4.0<br />
                    © APEX EXPERTS SOLUTIONS
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div 
                  animate={shouldReduceMotion ? {} : { y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-12 top-1/4 p-6 rounded-3xl bg-black/80 backdrop-blur-3xl border border-sinai-glow-orange/30 z-30 shadow-2xl max-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-sinai-glow-orange mb-2 tracking-widest font-black">NODE_ANALYSIS</div>
                  <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          animate={shouldReduceMotion ? { width: `${30 + i * 20}%` } : { width: ["0%", `${30 + i * 20}%`, "0%"] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          className="h-full bg-sinai-glow-orange"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Agentic Orchestration // Swarm Intelligence - EXTRA PREMIUM */}
      <section className="pt-32 pb-32 relative bg-[#06080a] overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            {/* Image Left */}
            <SectionReveal>
              <div className="relative">
                {/* Main Holographic Core */}
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.05)] group">
                  <Image 
                    src="/images/agentic-orchestration-core.png" 
                    alt="Agentic Orchestration Hub" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                  />
                  
                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Circular Radar Scan */}
                  {!shouldReduceMotion && (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-[1px] border-sinai-glow-orange/10 rounded-full scale-[1.2] opacity-50 pointer-events-none"
                    />
                  )}

                  {/* Technical Frame Markers */}
                  <div className="absolute top-10 right-10 text-[8px] font-mono text-sinai-glow-orange/60 tracking-widest text-right">
                    SWARM_SYNC: OPTIMAL<br />
                    ACTIVE_AGENTS: 128
                  </div>
                  <div className="absolute bottom-10 left-10 text-[8px] font-mono text-zinc-500">
                    ORCHESTRATION_CORE_V5.1<br />
                    AUTONOMOUS_FLEET_MGMT
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div 
                  animate={shouldReduceMotion ? {} : { y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-12 bottom-1/4 p-6 rounded-3xl bg-black/80 backdrop-blur-3xl border border-sinai-glow-orange/30 z-30 shadow-2xl max-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-sinai-glow-orange mb-2 tracking-widest font-black">FLEET_METRICS</div>
                  <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center justify-between gap-4">
                        <div className="text-[8px] text-zinc-500 font-mono">AGENT_{i}</div>
                        <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            animate={shouldReduceMotion ? { width: `${40 + i * 15}%` } : { width: [`${40 + i * 15}%`, "20%", `${40 + i * 15}%`] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
                            className="h-full bg-sinai-glow-orange"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </SectionReveal>

            {/* Content Right */}
            <SectionReveal>
              <div className="space-y-16">
                <div className="space-y-6 text-right lg:text-left">
                  <div className="flex items-center gap-4 justify-end lg:justify-start">
                    <div className="w-12 h-px bg-sinai-glow-orange/30" />
                    <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Advanced_Orchestration // 03</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                    Agentic <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">Orchestration</span>
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/20 transition-colors">
                    <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-sinai-glow-orange/30 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 justify-end lg:justify-start">
                      Swarm Intelligence
                      <div className={`w-2 h-2 rounded-full bg-sinai-glow-orange ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg text-right lg:text-left">
                      Our orchestration layer deploys multi-agent swarms that collaborate synchronously. By breaking complex enterprise objectives into atomized tasks, we achieve a level of concurrency and precision that traditional RPA cannot match.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "SWARM_COORDINATION", value: "100%" },
                      { label: "TASK_CONCURRENCY", value: "∞" },
                      { label: "INTER_AGENT_SYNC", value: "<5ms" },
                      { label: "AUTONOMY_LEVEL", value: "L5" }
                    ].map((stat, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 font-mono text-center">
                        <div className="text-[9px] text-zinc-500 mb-2 tracking-widest">{stat.label}</div>
                        <div className="text-xl font-bold text-sinai-glow-orange tracking-tight">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
 
      {/* Cognitive Data Synthesis // Decision Intelligence - EXTRA PREMIUM */}
      <section className="pt-32 pb-64 relative bg-[#06080a] overflow-hidden border-b border-white/5">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.04)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            {/* Content Left */}
            <SectionReveal>
              <div className="space-y-16">
                <div className="space-y-6 text-left">
                  <div className="flex items-center gap-4 justify-start">
                    <div className="w-12 h-px bg-sinai-glow-orange/30" />
                    <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Data_Alchemy // 04</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                    Cognitive <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">Data Synthesis</span>
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/20 transition-colors">
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-sinai-glow-orange/30 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full bg-sinai-glow-orange ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
                      Decision Intelligence
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg text-left">
                      Turn raw operational noise into high-fidelity decision intelligence. Our synthesis engine aggregates distributed data streams into real-time, actionable insights and immersive executive dashboards that reveal the hidden pulse of your enterprise.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "INSIGHT_ACCURACY", value: "99.8%" },
                      { label: "DATA_THROUGHPUT", value: "P_SCALE" },
                      { label: "LATENCY_TO_INSIGHT", value: "NEAR_0" },
                      { label: "CONFIDENCE_SCORE", value: "95%+" }
                    ].map((stat, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 font-mono text-left">
                        <div className="text-[9px] text-zinc-500 mb-2 tracking-widest">{stat.label}</div>
                        <div className="text-xl font-bold text-sinai-glow-orange tracking-tight">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Image Right */}
            <SectionReveal>
              <div className="relative">
                {/* Main Holographic Core */}
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.08)] group">
                  <Image 
                    src="/images/cognitive-data-synthesis-core.png" 
                    alt="Cognitive Data Synthesis Hub" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
                  />
                  
                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {!shouldReduceMotion && (
                    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                      {[...Array(5)].map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={{ y: ["-100%", "200%"], opacity: [0, 0.5, 0] }}
                          transition={{ duration: 3 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                          className="absolute w-px h-40 bg-gradient-to-b from-transparent via-sinai-glow-orange/40 to-transparent"
                          style={{ left: `${20 + i * 15}%` }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Technical Frame Markers */}
                  <div className="absolute top-10 left-10 text-[8px] font-mono text-sinai-glow-orange/60 tracking-widest text-left">
                    ANALYTIC_ENGINE: LIVE<br />
                    DATA_SOURCE: MULTI_THREAD
                  </div>
                  <div className="absolute bottom-10 right-10 text-[8px] font-mono text-zinc-500 text-right">
                    DECISION_CORE_V2.0<br />
                    © APEX EXPERTS INTELLIGENCE
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div 
                  animate={shouldReduceMotion ? {} : { x: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-12 top-1/3 p-6 rounded-3xl bg-black/80 backdrop-blur-3xl border border-sinai-glow-orange/30 z-30 shadow-2xl max-w-[220px]"
                >
                  <div className="text-[10px] font-mono text-sinai-glow-orange mb-4 tracking-widest font-black uppercase">Realtime_Synthesis</div>
                  <SynthesisVisualizer />
                </motion.div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Technical Process (Architect) - INTERACTIVE REVAMP */}
      <section className="py-48 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <SectionReveal>
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/10">
              <span className={`w-2 h-2 rounded-full bg-sinai-glow-orange ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
              <span className="text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase font-bold">System_Core // Processing_Flow</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black mb-24 tracking-tighter">The APEX <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white/40">Brain Architecture</span></h2>
            
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  label: "Data Ingest", 
                  id: "01", 
                  image: "/images/process-step-1.png",
                  code: "const ingest = { status: 'ACTIVE', rate: '1.2GB/s', source: 'MULTI_THREAD' };"
                },
                { 
                  label: "Reasoning", 
                  id: "02", 
                  image: "/images/process-step-2.png",
                  code: "const logic = { engine: 'V4.0', nodes: '12M+', context: '2M_TOKENS' };"
                },
                { 
                  label: "Execution", 
                  id: "03", 
                  icon: <Zap className="w-10 h-10" />,
                  code: "const exec = { state: 'RUNNING', latency: '0.4ms', success: '99.99%' };"
                },
                { 
                  label: "Self-Learning", 
                  id: "04", 
                  icon: <Layers className="w-10 h-10" />,
                  code: "const ml = { epoch: 1242, loss: '0.0021', weight_sync: 'DONE' };"
                },
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="relative group h-[400px] flex flex-col items-center justify-center p-8 rounded-[3rem] bg-white/[0.01] border border-white/5 hover:border-sinai-glow-orange/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover Code Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-sinai-glow-orange/5" />
                    <div className="p-4 font-mono text-[8px] text-sinai-glow-orange leading-relaxed text-left">
                      {Array(20).fill(step.code).join(" ")}
                    </div>
                  </div>

                  {/* Step ID */}
                  <div className="absolute top-8 left-8 text-[10px] font-mono text-zinc-700 font-bold tracking-widest uppercase">
                    STEP_{step.id}
                  </div>

                  {/* Icon/Image Container */}
                  <div className="relative w-32 h-32 mb-10 flex items-center justify-center">
                    <div className="absolute inset-0 bg-sinai-glow-orange/10 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                    {step.image ? (
                      <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 group-hover:border-sinai-glow-orange/40 transition-colors">
                        <Image 
                          src={step.image} 
                          alt={step.label} 
                          fill 
                          sizes="128px"
                          className="object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-sinai-glow-orange group-hover:border-sinai-glow-orange/40 transition-colors">
                        {step.icon}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 relative z-10">
                    <h3 className="text-xl font-bold tracking-widest text-zinc-400 group-hover:text-white transition-colors uppercase">{step.label}</h3>
                    
                    {/* Interactive Code Arrow & Text */}
                    <div className="h-6 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-3">
                        <span className="text-sinai-glow-orange font-mono font-black text-sm">{idx % 2 === 0 ? "=>" : ">>"}</span>
                        <span className="text-[9px] font-mono text-sinai-glow-orange/60 tracking-tighter uppercase font-bold whitespace-nowrap bg-sinai-glow-orange/5 px-2 py-0.5 rounded border border-sinai-glow-orange/20">
                          {step.code.split("=")[0].replace("const ", "")}_MODULE_STATUS: OK
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Connection Line */}
                  {idx < 3 && (
                    <div className="absolute top-1/2 -right-4 w-8 h-px bg-white/5 hidden lg:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Related Case Study // NeuralStream 2.0 - PREMIUM FEATURE */}
      <section className="py-48 relative overflow-hidden bg-[#06080a]">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-sinai-glow-orange/30" />
                  <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Real_World_Impact // 05</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                  Related <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">Case Study</span>
                </h2>
              </div>
              <div className="max-w-md text-left md:text-right">
                <p className="text-zinc-500 text-lg font-light leading-relaxed">
                  Explore how our Brain Architecture powers high-throughput industrial environments with unprecedented precision.
                </p>
              </div>
            </div>

            <div className="relative group cursor-pointer overflow-hidden rounded-[4rem] border border-white/5 aspect-[21/9]">
              <Image 
                src="/images/project1.png" 
                alt="NeuralStream 2.0" 
                fill 
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-[3000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-end">
                <div className="grid md:grid-cols-2 gap-12 items-end">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 font-mono text-[10px] text-sinai-glow-orange font-black uppercase tracking-widest">
                        GLOBAL LOGISTICS CORP <span className="w-1.5 h-1.5 rounded-full bg-sinai-glow-orange" /> COMPUTER VISION
                      </div>
                      <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">NeuralStream 2.0</h3>
                    </div>
                    <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
                      A high-fidelity computer vision engine designed for real-time tracking and automated anomaly detection in high-throughput environments.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["YOLOv10", "TensorRT", "CUDA"].map(t => (
                        <span key={t} className="px-5 py-2 rounded-full bg-white/[0.05] border border-white/10 text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-black">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-10">
                    <div className="grid grid-cols-3 gap-6 w-full">
                      {[
                        { label: "LATENCY", value: "42ms" },
                        { label: "ACCURACY", value: "99.8%" },
                        { label: "EFFICIENCY", value: "+40%" }
                      ].map((stat, i) => (
                        <div key={i} className="text-right">
                          <div className="text-[9px] text-zinc-600 mb-1 font-mono tracking-widest uppercase">{stat.label}</div>
                          <div className="text-2xl font-bold text-sinai-glow-orange font-mono">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                    <Link href="/projects#01" className="group relative px-10 py-5 rounded-full overflow-hidden bg-sinai-glow-orange text-white font-black text-[10px] tracking-[0.3em] uppercase transition-all hover:shadow-[0_0_50px_rgba(242,162,75,0.4)] hover:scale-105 active:scale-95 duration-500">
                      <span className="relative z-10">View Full Intelligence Report</span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Final CTA Section - Cinematic Masterpiece */}
      <section className="py-64 relative overflow-hidden bg-[#06080a]">
        {/* Background Ambient Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sinai-glow-orange/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Technical HUD Frame */}
        <div className="absolute inset-20 border border-white/[0.03] pointer-events-none hidden md:block">
          <div className="absolute top-0 left-0 w-20 h-px bg-sinai-glow-orange/30" />
          <div className="absolute top-0 left-0 w-px h-20 bg-sinai-glow-orange/30" />
          <div className="absolute bottom-0 right-0 w-20 h-px bg-sinai-glow-orange/30" />
          <div className="absolute bottom-0 right-0 w-px h-20 bg-sinai-glow-orange/30" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal>
            <div className="max-w-5xl mx-auto text-center space-y-16">
              {/* Top Branding Tag */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-md">
                  <span className={`w-1.5 h-1.5 rounded-full bg-sinai-glow-orange ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
                  <span className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.4em] font-black uppercase">Engagement_Initialization // AI_NODE_V5.0</span>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] text-white">
                  Ready to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-sinai-glow-orange/20">Scale Your Vision?</span>
                </h2>
                <p className="text-xl md:text-3xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed">
                  Join forces with <span className="text-white font-bold">APEX Experts</span> to engineer the next generation of autonomous intelligence.
                </p>
              </div>

              <div className="flex flex-col items-center gap-8 pt-8">
                <Link href="/contact" className="group relative px-24 py-10 rounded-full overflow-hidden bg-sinai-glow-orange text-white font-black text-xl tracking-[0.4em] uppercase transition-all hover:shadow-[0_0_100px_rgba(242,162,75,0.6)] hover:scale-105 active:scale-95 duration-500">
                  <span className="relative z-10">Initialize Project</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                  
                  {/* Internal Shimmer */}
                  {!shouldReduceMotion && (
                    <motion.div 
                      animate={{ left: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                    />
                  )}
                </Link>

                <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
                  <span className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-green-500/50" />
                    Secure_AI_Node: Active
                  </span>
                  <span className="w-px h-4 bg-white/10" />
                  <span>Available for Q3-Q4 2026</span>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Floating Data Decor */}
        <div className="absolute bottom-12 right-12 text-[8px] font-mono text-zinc-800 tracking-widest hidden lg:block uppercase">
          Apex_Experts_AI_Automation_Studio<br />
          System_Build_Hash: 0xAI_5A11
        </div>
      </section>

    </div>
  );
}
