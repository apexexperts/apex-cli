"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, AnimatePresence, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Database, MessageSquare, ShieldCheck, BarChart3, Zap, Code2 } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Capability {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
}

const NeuralCore = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {/* Outer Orbital Rings */}
      <motion.div 
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border border-sinai-glow-orange/10 rounded-full border-dashed"
      />
      <motion.div 
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-16 border border-white/5 rounded-full border-dashed"
      />
      
      {/* Central Glass Sphere */}
      <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-white/[0.05] to-transparent flex items-center justify-center backdrop-blur-3xl border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        
        {/* Internal Pulsing Plasma */}
        <motion.div 
          animate={shouldReduceMotion ? { opacity: 0.4 } : { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-56 h-56 rounded-full bg-sinai-glow-orange/20 blur-[60px]"
        />

        {/* Central Branding Module */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="px-3 py-1 rounded-sm border border-sinai-glow-orange/40 bg-sinai-glow-orange/5 mb-4 relative overflow-hidden group-hover:border-sinai-glow-orange transition-colors">
            <div className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.3em] font-black flex items-center gap-2">
              <span className={`w-1 h-1 rounded-full bg-sinai-glow-orange ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
              ASKLYZE_ENGINE_V2.1
            </div>
            {!shouldReduceMotion && (
              <motion.div 
                animate={{ left: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 bottom-0 w-8 bg-white/20 skew-x-12 -translate-x-full"
              />
            )}
          </div>

          <div className="relative">
            <h3 className="text-4xl font-black tracking-tighter text-white flex flex-col items-center leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-sinai-glow-orange/50 uppercase">ASKLYZE</span>
              <span className="text-[10px] font-mono tracking-[1.2em] text-sinai-glow-orange/60 ml-[1.2em] mt-2 font-bold uppercase">Intelligence</span>
            </h3>
          </div>
        </div>
      </div>

      {/* Floating Scanning Ring */}
      <motion.div 
        animate={shouldReduceMotion ? { opacity: 0.1, scale: 1 } : { scale: [0.8, 1.2, 0.8], opacity: [0, 0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[450px] h-[450px] border-2 border-sinai-glow-orange/30 rounded-full"
      />
    </div>
  );
};

const OrbitalNode = ({ cap, index, total, active, onEnter, onLeave }: { cap: Capability, index: number, total: number, active: boolean, onEnter: () => void, onLeave: () => void }) => {
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

      <div className={`absolute top-full mt-6 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-500 ${active ? 'opacity-100 translate-y-2' : 'opacity-20 group-hover:opacity-60'}`}>
        <span className="text-[10px] font-mono text-white tracking-[0.4em] font-bold uppercase">{cap.title}</span>
      </div>
    </motion.div>
  );
};

const CapabilityDetailView = ({ cap }: { cap: Capability }) => {
  const shouldReduceMotion = useReducedMotion();
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
            Project_Capability // {cap.id}
          </div>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        
        <div className="space-y-6">
          <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase">{cap.title}</h3>
          <div className="min-h-[100px]">
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              <StreamingText text={cap.desc} delay={100} />
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-600">
          <span className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full bg-green-500/50 ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
            ENGINE: ACTIVE
          </span>
          <span className="w-px h-4 bg-white/10" />
          <span>BUILD: 0x2A11</span>
        </div>
      </div>
    </div>
  );
};

const StreamingText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const shouldReduceMotion = useReducedMotion();
  
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, shouldReduceMotion ? 10 : 30);
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(startTimeout);
  }, [text, delay, shouldReduceMotion]);

  return <span className={className}>{displayedText}<span className={`${shouldReduceMotion ? '' : 'animate-pulse'} inline-block w-1 h-8 md:h-12 bg-sinai-glow-orange ml-1`} /></span>;
};

const METRICS = [
  { label: "Query Velocity", value: "+300%", detail: "SQL generation speed" },
  { label: "Data Security", value: "Native", detail: "Zero data movement" },
  { label: "Integration", value: "Plug & Play", detail: "Single APEX Plugin" },
  { label: "Accuracy", value: "98.5%", detail: "LLM reasoning score" }
];

const FEATURES = [
  {
    id: "01",
    title: "Natural Language SQL",
    desc: "Empower non-technical users to query complex Oracle schemas using plain English. ASKLYZE translates intent into precise PL/SQL in milliseconds.",
    icon: <MessageSquare className="w-8 h-8" />,
    image: "/images/asklyze-premium.png"
  },
  {
    id: "02",
    title: "Zero Data Movement",
    desc: "Unlike other AI solutions, ASKLYZE processes requests within your VPC. Your data never leaves the Oracle Database, ensuring strict compliance and security.",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "/images/project2.png" 
  },
  {
    id: "03",
    title: "AI-Generated Visuals",
    desc: "Instantly turn query results into beautiful, interactive APEX charts and dashboards. The AI automatically selects the best visualization for your data.",
    icon: <BarChart3 className="w-8 h-8" />,
    image: "/images/project3.png"
  },
  {
    id: "04",
    title: "Native APEX Integration",
    desc: "Built as a standard Oracle APEX plugin. Drag, drop, and configure in minutes. No complex middleware or external servers required.",
    icon: <Database className="w-8 h-8" />,
    image: "/images/web-dev-cinematic.png"
  }
];

const Particles = ({ count = 12 }: { count?: number }) => {
  const [mounted, setMounted] = React.useState(false);
  const [positions, setPositions] = React.useState<{ x: string, delay: number }[]>([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
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
  }, [count, shouldReduceMotion]);

  if (!mounted || shouldReduceMotion) return null;

  return (
    <>
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          initial={{ x: pos.x, y: "110%" }}
          animate={{ y: "-10%", rotate: 360 }}
          transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear", delay: pos.delay }}
          className="absolute w-1 h-1 bg-sinai-glow-orange/20 rounded-full blur-[1px]"
        />
      ))}
    </>
  );
};

const PIPELINE_STEPS = [
  {
    step: "01",
    title: "Semantic Capture",
    desc: "The pipeline begins when ASKLYZE captures natural language intent. Our proprietary neural layer parses semantic meaning, entities, and relationships from the user's prompt.",
    icon: <MessageSquare className="w-6 h-6" />,
    image: "/images/asklyze-premium.png"
  },
  {
    step: "02",
    title: "SQL Synthesis",
    desc: "ASKLYZE maps intent to your Oracle schema. It generates high-performance, secure SQL tailored to your database version and constraints—validated before execution.",
    icon: <Code2 className="w-6 h-6" />,
    image: "/images/web-dev-cinematic.png"
  },
  {
    step: "03",
    title: "Native Execution",
    desc: "Zero data leaves your VPC. The generated SQL executes natively inside Oracle. Results are processed and aggregated using optimized PL/SQL routines.",
    icon: <Database className="w-6 h-6" />,
    image: "/images/project2.png"
  },
  {
    step: "04",
    title: "Insight Rendering",
    desc: "Asklyze turns approved query results into APEX reports, charts, and dashboards",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "/images/project3.png"
  }
];

export function AsklyzeClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFeatureId, setActiveFeatureId] = React.useState<string | null>(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Pipeline Scroll Logic
  const pipelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: pipelineProgress } = useScroll({
    target: pipelineRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    return pipelineProgress.onChange((latest) => {
      const stepCount = PIPELINE_STEPS.length;
      const index = Math.min(
        Math.floor(latest * stepCount),
        stepCount - 1
      );
      if (index >= 0) setActiveStep(index);
    });
  }, [pipelineProgress]);

  const activeFeature = FEATURES.find(f => f.id === activeFeatureId);

  return (
    <div ref={containerRef} className="relative bg-[#06080a] text-white min-h-screen selection:bg-sinai-glow-orange selection:text-black font-sans">
      {/* Hero Section */}
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
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-sinai-glow-orange/30" />
                  <span className="text-[9px] uppercase tracking-[0.5em] text-sinai-glow-orange font-bold">
                    PLUGIN FOR ORACLE APEX // ASKL_V2
                  </span>
                </div>
                
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white uppercase">
                  ASKLYZE<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-white/40">
                    Plugin.
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-400 max-w-xl font-light leading-relaxed">
                  The definitive AI plugin for Oracle APEX. Enable natural language querying and intelligent data synthesis natively inside your applications.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <Link href="/contact" className="group relative px-12 py-6 rounded-full overflow-hidden bg-sinai-glow-orange text-white font-black text-sm tracking-[0.3em] uppercase transition-all hover:shadow-[0_0_50px_rgba(242,162,75,0.4)] hover:scale-105 duration-500">
                  <span className="relative z-10">Request Demo</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>
                
                <div className="flex items-center gap-4 px-8 py-6 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400">
                  <span className={`w-2 h-2 rounded-full bg-green-500 ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
                  STABLE_BUILD_v2.1
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5">
                {METRICS.map((stat, i) => (
                  <div key={i}>
                    <div className="text-[8px] font-mono text-zinc-600 mb-1 tracking-widest uppercase">{stat.label}</div>
                    <div className="text-xl font-bold text-white font-mono">{stat.value}</div>
                    <div className="text-[8px] font-mono text-zinc-800 uppercase mt-1">{stat.detail}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.15)] group bg-zinc-950">
                <Image 
                  src="/images/asklyze-premium.png" 
                  alt="ASKLYZE Interface" 
                  fill 
                  className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-[5000ms]"
                  priority
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-12 left-12 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 max-w-[200px] space-y-4">
                  <div className="text-[8px] font-mono text-sinai-glow-orange tracking-widest font-black uppercase">Data_Stream_Live</div>
                  <div className="space-y-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          animate={shouldReduceMotion ? { width: "100%" } : { width: ["0%", "100%", "0%"] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                          className="h-full bg-sinai-glow-orange/40"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-12 right-12 text-right">
                  <div className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] mb-2 uppercase">Core_Architecture</div>
                  <div className="w-48 h-12 relative">
                    <Image src="/images/asklyze-logo.png" alt="Logo" fill className="object-contain object-right brightness-0 invert opacity-40" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute inset-0 pointer-events-none">
          <Particles count={10} />
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-48 relative overflow-hidden bg-[#06080a] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <SectionReveal>
              <div className="space-y-16">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-sinai-glow-orange/30" />
                    <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">The_Challenge</span>
                  </div>
                  <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-none uppercase">
                    Data is trapped <br />
                    <span className="text-zinc-800">in Complexity.</span>
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative">
                    <p className="text-zinc-400 leading-relaxed font-light text-xl">
                      Business users are the ones who need answers, but they don&apos;t speak SQL. The &quot;Report Request&quot; cycle creates bottlenecks that slow down decision-making. Existing AI tools require moving sensitive database records to the cloud&mdash;a non-starter for enterprise security.
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-6">
                    {[
                      "Slow Decision Velocity",
                      "Database Security Vulnerabilities",
                      "Heavy SQL Dependency",
                      "Manual Dashboard Maintenance"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-6 group">
                        <div className="w-12 h-12 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center justify-center text-red-500/40 group-hover:text-red-500 transition-colors">
                          <Zap className="w-5 h-5" />
                        </div>
                        <span className="text-zinc-600 group-hover:text-zinc-300 transition-colors uppercase font-mono text-xs tracking-widest">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="space-y-16">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-sinai-glow-orange/30" />
                    <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">The_Solution</span>
                  </div>
                  <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-none uppercase">
                    Asklyze is the <br />
                    <span className="text-white">Translation layer.</span>
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-sinai-glow-orange/5 border border-sinai-glow-orange/20 backdrop-blur-xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,162,75,0.1),transparent_50%)]" />
                    <p className="text-zinc-300 leading-relaxed font-light text-xl relative z-10">
                      ASKLYZE bridges the gap between natural language and Oracle Database. By generating, validating, and executing PL/SQL locally, it provides instant insights while keeping your data secured within its native environment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: "Conversation to SQL", desc: "Native translation" },
                      { title: "Automatic Charting", desc: "Instant visualization" },
                      { title: "Zero Middleware", desc: "No external servers" },
                      { title: "Enterprise Security", desc: "Data stays in DB" }
                    ].map((item, i) => (
                      <div key={i} className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-sinai-glow-orange/20 transition-all group">
                        <h4 className="text-white font-bold mb-2 group-hover:text-sinai-glow-orange transition-colors uppercase text-sm tracking-widest">{item.title}</h4>
                        <p className="text-zinc-600 text-[10px] uppercase font-mono tracking-widest">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Neural Capability Hub */}
      <section id="capabilities" className="py-48 relative overflow-hidden bg-[#06080a] min-h-[1000px]">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-32">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-sinai-glow-orange/50" />
                <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Capabilities // 03</span>
                <div className="w-8 h-px bg-sinai-glow-orange/50" />
              </div>
              <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tight leading-none uppercase">
                The Intelligence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white/40">Powering Asklyze</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="relative max-w-7xl mx-auto h-[700px] flex items-center justify-center">
            <div className="absolute inset-0 z-30 pointer-events-none">
              {FEATURES.map((feature, i) => (
                <OrbitalNode 
                  key={feature.id} 
                  cap={feature} 
                  index={i} 
                  total={FEATURES.length}
                  active={activeFeatureId === feature.id}
                  onEnter={() => setActiveFeatureId(feature.id)}
                  onLeave={() => setActiveFeatureId(null)}
                />
              ))}
            </div>

            <div className="relative w-full max-w-4xl h-full flex items-center justify-center z-20">
              <AnimatePresence mode="wait">
                {!activeFeatureId ? (
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
                    <CapabilityDetailView cap={activeFeature!} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 z-10">
              <div className="w-[700px] h-[700px] border border-white/5 rounded-full" />
              <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full" />
              <div className={`absolute w-[350px] h-[350px] border border-sinai-glow-orange/10 rounded-full ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-20 text-[8px] font-mono text-zinc-800 leading-relaxed uppercase hidden lg:block">
          CORE_ENGINE: ACTIVE<br />
          ORACLE_APEX_SYNC: OPTIMAL<br />
          LLM_BRIDGE: STABLE
        </div>
      </section>

      {/* The Intelligence Pipeline */}
      <section id="pipeline-scroll" className="relative bg-[#06080a]">
        <div ref={pipelineRef} className="h-[400vh] relative">
          <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(242,162,75,0.05)_0%,transparent_50%)]" />
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mb-20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-sinai-glow-orange/30" />
                  <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">System_Architecture // 04</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
                  The Intelligence <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">Pipeline.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                <div className="lg:col-span-7 relative h-[500px] lg:h-[600px]">
                  <div className="absolute inset-0 rounded-[4rem] overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl group">
                    <AnimatePresence mode="wait">
                      {PIPELINE_STEPS.map((step, i) => (
                        <motion.div
                          key={step.step}
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ 
                            opacity: activeStep === i ? 0.6 : 0,
                            scale: activeStep === i ? 1 : 1.1,
                            zIndex: activeStep === i ? 10 : 0
                          }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="absolute inset-0"
                        >
                          <Image 
                            src={step.image} 
                            alt={step.title} 
                            fill 
                            className="object-cover"
                          />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black/80 z-20" />
                    
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                      <div className="relative w-full h-full">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                          {!shouldReduceMotion && (
                            <motion.path 
                              d="M 100,300 Q 400,300 700,300"
                              stroke="url(#glow-grad-restore-asklyze)"
                              strokeWidth="2"
                              fill="none"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                          )}
                          <defs>
                            <linearGradient id="glow-grad-restore-asklyze" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="transparent" />
                              <stop offset="50%" stopColor="#F2A24B" />
                              <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                          </defs>
                        </svg>

                        {!shouldReduceMotion && [...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              x: [0, 400, 800], 
                              opacity: [0, 1, 0],
                              scale: [0.5, 1.2, 0.5]
                            }}
                            transition={{ 
                              duration: 4 - (activeStep * 0.5), 
                              repeat: Infinity, 
                              delay: i * 0.8,
                              ease: "linear"
                            }}
                            className="absolute top-[300px] left-0 w-2 h-2 bg-sinai-glow-orange rounded-full shadow-[0_0_15px_rgba(242,162,75,0.8)]"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-12 left-12 text-[8px] font-mono text-zinc-500 tracking-[0.3em] uppercase space-y-2 z-40">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-sinai-glow-orange ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
                        PIPELINE_STEP: 0{activeStep + 1}
                      </div>
                      <div>ENCRYPTION: AES_256</div>
                      <div>LATENCY: {120 - activeStep * 20}ms</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative space-y-12">
                  {PIPELINE_STEPS.map((item, i) => (
                    <div 
                      key={i} 
                      className={`group relative space-y-6 transition-all duration-700 ${activeStep === i ? 'opacity-100 scale-105' : 'opacity-20 scale-95 blur-[1px]'}`}
                    >
                      <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-500 ${activeStep === i ? 'bg-sinai-glow-orange text-white border-sinai-glow-orange shadow-[0_0_30px_rgba(242,162,75,0.4)]' : 'bg-white/5 border-white/10 text-zinc-500'}`}>
                          {item.icon}
                        </div>
                        <div className={`h-px flex-1 transition-colors duration-500 ${activeStep === i ? 'bg-sinai-glow-orange/50' : 'bg-white/5'}`} />
                        <span className={`font-mono text-[10px] tracking-[0.5em] font-black transition-colors duration-500 ${activeStep === i ? 'text-sinai-glow-orange' : 'text-zinc-800'}`}>STEP_{item.step}</span>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className={`text-3xl font-black tracking-tighter uppercase transition-colors duration-500 ${activeStep === i ? 'text-white' : 'text-zinc-600'}`}>
                          {item.title}
                        </h3>
                        <p className={`text-base font-light leading-relaxed transition-colors duration-500 ${activeStep === i ? 'text-zinc-400' : 'text-zinc-700'}`}>
                          {item.desc}
                        </p>
                      </div>

                      <div className={`absolute -left-10 top-0 bottom-0 w-1 transition-all duration-500 ${activeStep === i ? 'bg-sinai-glow-orange shadow-[0_0_15px_rgba(242,162,75,0.5)]' : 'bg-white/5'} hidden lg:block rounded-full`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-64 relative overflow-hidden bg-[#06080a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sinai-glow-orange/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="absolute inset-20 border border-white/[0.03] pointer-events-none hidden md:block">
          <div className="absolute top-0 left-0 w-20 h-px bg-sinai-glow-orange/30" />
          <div className="absolute top-0 left-0 w-px h-20 bg-sinai-glow-orange/30" />
          <div className="absolute bottom-0 right-0 w-20 h-px bg-sinai-glow-orange/30" />
          <div className="absolute bottom-0 right-0 w-px h-20 bg-sinai-glow-orange/30" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal>
            <div className="max-w-5xl mx-auto text-center space-y-16">
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-md">
                  <span className={`w-1.5 h-1.5 rounded-full bg-sinai-glow-orange ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
                  <span className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.4em] font-black uppercase">Engagement_Initialization // PROJECT_NODE_V2.1</span>
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
                    Secure_Node: Active
                  </span>
                  <span className="w-px h-4 bg-white/10" />
                  <span>Deployment: Global</span>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
