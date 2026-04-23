"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Code2, Cpu, GraduationCap, Palette, CloudUpload, ShieldCheck, Zap, Layers, Share2, Database, Globe } from "lucide-react";
import { Header } from "@/components/Header";
import { SectionReveal } from "@/components/SectionReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Content Data ---

const APEX_CAPABILITIES = [
  {
    id: "01",
    title: "Development",
    desc: "End-to-end engineering of mission-critical APEX applications. We specialize in advanced data modeling, custom plugin development, high-performance database design, and hybrid mobile solutions with enterprise reporting.",
    icon: <Code2 className="w-8 h-8" />,
    image: "/images/project1.png"
  },
  {
    id: "02",
    title: "Integration",
    desc: "Seamlessly connecting your APEX ecosystem with third-party interfaces, advanced JavaScript libraries, and modern utility frameworks. Robust implementations of payment gateways, mailing protocols, and complex API orchestrations.",
    icon: <Cpu className="w-8 h-8" />,
    image: "/images/project2.png"
  },
  {
    id: "03",
    title: "Training",
    desc: "Elite corporate and educational training modules tailored for all levels. From fundamental APEX building blocks to expert-level architectural mastery, our specialists empower your team with Oracle excellence.",
    icon: <GraduationCap className="w-8 h-8" />,
    image: "/images/project3.png"
  },
  {
    id: "04",
    title: "Designing",
    desc: "Aesthetic precision meets functional utility. We deliver creative, user-centric theme development and custom UI layouts that prioritize engagement and intuitive navigation while maintaining Oracle's core performance.",
    icon: <Palette className="w-8 h-8" />,
    image: "/images/project1.png"
  },
  {
    id: "05",
    title: "Migration",
    desc: "Frictionless digital transformation services. We expertly migrate Forms to APEX, Excel workflows to centralized applications, and On-Premises environments to the Oracle Cloud with zero data loss and hardened security.",
    icon: <CloudUpload className="w-8 h-8" />,
    image: "/images/project2.png"
  },
  {
    id: "06",
    title: "Support",
    desc: "Round-the-clock enterprise support for servers and applications. Proactive 24-hour monitoring and rapid-response maintenance to ensure your Oracle APEX infrastructure remains synchronized and optimal.",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "/images/project3.png"
  }
];

// --- Sub-Components (Exactly from AI-Automation) ---

const StreamingText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
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

  return <span className={className}>{displayedText}<span className="animate-pulse inline-block w-1 h-8 md:h-12 bg-sinai-glow-orange ml-1" /></span>;
};

const NeuralCore = () => {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      {/* Outer Orbital Rings */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border border-sinai-glow-orange/10 rounded-full border-dashed"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-16 border border-white/5 rounded-full border-dashed"
      />
      
      {/* Central Glass Sphere */}
      <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-white/[0.05] to-transparent flex items-center justify-center backdrop-blur-3xl border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        
        {/* Internal Pulsing Plasma */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-56 h-56 rounded-full bg-sinai-glow-orange/20 blur-[60px]"
        />

        {/* Central Branding Module */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="px-3 py-1 rounded-sm border border-sinai-glow-orange/40 bg-sinai-glow-orange/5 mb-4 relative overflow-hidden group-hover:border-sinai-glow-orange transition-colors">
            <div className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.3em] font-black flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-sinai-glow-orange animate-pulse" />
              ORACLE_ENGINE_V24.1
            </div>
            <motion.div 
              animate={{ left: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-8 bg-white/20 skew-x-12 -translate-x-full"
            />
          </div>

          <div className="relative">
            <h3 className="text-6xl font-black tracking-[-0.05em] text-white flex flex-col items-center leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-sinai-glow-orange/50">APEX</span>
              <span className="text-[10px] font-mono tracking-[1.5em] text-sinai-glow-orange/60 ml-[1.5em] -mt-1 font-bold">EXPERTS</span>
            </h3>
            <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-t from-sinai-glow-orange/10 to-transparent blur-sm" />
          </div>
        </div>

        {/* Orbiting Data Fragments */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/20 tracking-tighter">
              {i === 0 ? "0x7F" : i === 1 ? "DB_MOD" : "SQL_X"}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Scanning Ring */}
      <motion.div 
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[450px] h-[450px] border-2 border-sinai-glow-orange/30 rounded-full"
      />
    </div>
  );
};

const OrbitalNode = ({ cap, index, total, active, onEnter, onLeave }: { cap: any, index: number, total: number, active: boolean, onEnter: () => void, onLeave: () => void }) => {
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
        filter: active ? "blur(0px)" : "blur(0.5px)",
        left: `calc(50% + ${x}px)`, 
        top: `calc(50% + ${y}px)`
      }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.4
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="relative w-28 h-28 flex items-center justify-center cursor-pointer">
        <div className={`absolute inset-0 bg-white/[0.03] border rounded-[2rem] rotate-45 transition-all duration-500 ${active ? 'rotate-90 border-sinai-glow-orange shadow-[0_0_30px_rgba(242,162,75,0.3)] bg-sinai-glow-orange/5' : 'border-white/10 group-hover:border-white/30'}`} />
        <div className={`relative z-10 transition-colors duration-500 ${active ? 'text-sinai-glow-orange scale-110' : 'text-zinc-500 group-hover:text-white'}`}>
          {cap.icon}
        </div>
        
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

const CapabilityDetailView = ({ cap }: { cap: any }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-12 rounded-[4rem] relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/5 to-transparent opacity-50" />
      
      <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl z-10">
        <Image src={cap.image} alt={cap.title} fill className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="space-y-8 relative z-10 text-left">
        <div className="flex items-center gap-4">
          <div className="px-4 py-1.5 rounded-full bg-sinai-glow-orange/10 border border-sinai-glow-orange/30 text-sinai-glow-orange text-[9px] font-mono font-bold tracking-widest uppercase">
            Oracle_Capability // {cap.id}
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
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse" />
            SYSTEM_SYNC: ACTIVE
          </span>
          <span className="w-px h-4 bg-white/10" />
          <span>SCHEMA_V: 0x2410</span>
        </div>
      </div>
    </div>
  );
};

const Particles = ({ count = 10 }: { count?: number }) => {
  const [mounted, setMounted] = React.useState(false);
  const [positions, setPositions] = React.useState<{ x: string, delay: number }[]>([]);

  React.useEffect(() => {
    setMounted(true);
    setPositions(
      [...Array(count)].map(() => ({
        x: Math.random() * 100 + "%",
        delay: Math.random() * 10,
      }))
    );
  }, [count]);

  if (!mounted) return null;

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

const OracleApexHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(242,162,75,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(196,42,30,0.05)_0%,transparent_50%)]" />
      
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
                  ORACLE_APEX_ENGINE // SOL_02
                </span>
              </div>
              
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white">
                Oracle APEX <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-white/40">
                  Power.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zinc-400 max-w-xl font-light leading-relaxed">
                We engineer mission-critical enterprise applications with the speed of low-code and the reliability of Oracle. Transforming complex data into high-performance digital assets.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <Link href="#contact" className="group relative px-12 py-6 rounded-full overflow-hidden bg-sinai-glow-orange text-black font-bold text-sm tracking-[0.3em] uppercase transition-all hover:shadow-[0_0_50px_rgba(242,162,75,0.4)]">
                <span className="relative z-10">Initialize Engagement</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              
              <Link href="#capabilities" className="px-12 py-6 rounded-full bg-white/[0.03] border border-white/10 text-white font-bold text-sm tracking-[0.3em] uppercase hover:bg-white/[0.08] hover:border-white/20 transition-all">
                Registry Details
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/5">
              {[
                { label: "DEV_VELOCITY", value: "20X" },
                { label: "DATA_SYNC", value: "REALTIME" },
                { label: "SECURITY_LEVEL", value: "MILITARY" }
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
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-2xl">
               <NeuralCore />
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

export default function OracleApexPage() {
  const [activeCapId, setActiveCapId] = useState<string | null>(null);
  const activeCap = APEX_CAPABILITIES.find(c => c.id === activeCapId);

  return (
    <main className="bg-[#050505] text-white min-h-screen selection:bg-sinai-glow-orange selection:text-black">
      <OracleApexHero />
      
      {/* The Core: Oracle APEX Capability Hub - Design Identical to AI-Automation */}
      <section id="capabilities" className="py-48 relative overflow-hidden bg-[#030303] min-h-[1000px]">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-32">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-sinai-glow-orange/50" />
                <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Apex_Orchestrator // V24.1</span>
                <div className="w-8 h-px bg-sinai-glow-orange/50" />
              </div>
              <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tight leading-none">
                The Oracle APEX <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white/40">Capability Hub</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="relative max-w-7xl mx-auto h-[700px] flex items-center justify-center">
            {/* Orbital Nodes - Always Visible */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              {APEX_CAPABILITIES.map((cap, i) => (
                <OrbitalNode 
                  key={cap.id} 
                  cap={cap} 
                  index={i} 
                  total={APEX_CAPABILITIES.length}
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
              <div className="absolute w-[350px] h-[350px] border border-sinai-glow-orange/10 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Floating Technical Tags */}
        <div className="absolute top-20 right-20 text-[8px] font-mono text-zinc-800 leading-relaxed uppercase hidden lg:block text-right">
          DB_CORE: CONNECTED<br />
          LOW_CODE_PIPELINE: ACTIVE<br />
          ORACLE_STATUS: OPTIMAL
        </div>
      </section>

      {/* Deep Dive: APEX Application Development - Technical Design // 02 */}
      <section className="pt-64 pb-32 relative bg-[#050505] overflow-hidden border-t border-white/5">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(196,42,30,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <SectionReveal>
              <div className="space-y-16 text-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-[#C42A1E]/30" />
                    <span className="text-[#C42A1E] font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Deep_Dive // 01</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                    APEX <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C42A1E]/30 text-balance">Application <br /> Development</span>
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-[#C42A1E]/20 transition-colors">
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#C42A1E]/30 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#C42A1E] animate-pulse" />
                      Mission-Critical Architecture
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">
                      We specialize in crafting high-performance Data Models, custom Plugin architectures, and robust Database logic. Our expertise extends to Web Services orchestration, seamless AI Integrations, and advanced Enterprise Reporting engines.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Plugin Dev", desc: "Bespoke extensions for unique business logic." },
                      { title: "Database Dev", desc: "Architecting mission-critical schemas." },
                      { title: "Web Services", desc: "Seamless REST/SOAP orchestration." },
                      { title: "AI Integrations", desc: "Predictive intelligence & LLM capabilities." },
                      { title: "Reporting", desc: "Analytical insights & custom dashboards." },
                      { title: "Support", desc: "24/7 Enterprise monitoring & maintenance.", isCTA: true }
                    ].map((service, i) => (
                      service.isCTA ? (
                        <Link href="#contact" key={i} className="p-6 rounded-2xl bg-[#C42A1E]/10 border border-[#C42A1E]/40 hover:bg-[#C42A1E]/20 transition-all duration-300 group/item relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#C42A1E]/20 to-transparent opacity-50" />
                          <div className="relative z-10">
                            <div className="text-[9px] font-mono text-white mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              {service.title}
                            </div>
                            <p className="text-[10px] text-white/70 group-hover/item:text-white transition-colors leading-tight uppercase tracking-tighter">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C42A1E]/30 transition-all duration-300 group/item">
                          <div className="text-[9px] font-mono text-[#C42A1E] mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap">{service.title}</div>
                          <p className="text-[10px] text-zinc-500 group-hover/item:text-zinc-300 transition-colors leading-tight uppercase tracking-tighter">
                            {service.desc}
                          </p>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="relative">
                {/* Main Holographic Core */}
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(196,42,30,0.1)] group">
                  <Image 
                    src="/images/project1.png" 
                    alt="APEX Development Core" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50"
                  />
                  
                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Scanning Line */}
                  <motion.div 
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-[#C42A1E]/20 to-transparent z-20 pointer-events-none"
                  />

                  {/* Technical Frame Markers */}
                  <div className="absolute top-10 left-10 text-[8px] font-mono text-[#C42A1E]/60 tracking-widest">
                    DB_SYNC: ACTIVE<br />
                    ENGINE_TEMP: 28°C
                  </div>
                  <div className="absolute bottom-10 right-10 text-[8px] font-mono text-zinc-500 text-right">
                    ORACLE_APEX_V24.1<br />
                    © APEX EXPERTS SOLUTIONS
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-12 top-1/4 p-6 rounded-3xl bg-black/80 backdrop-blur-3xl border border-[#C42A1E]/30 z-30 shadow-2xl max-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-[#C42A1E] mb-2 tracking-widest font-black">DATA_MODELING</div>
                  <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ width: ["0%", `${30 + i * 20}%`, "0%"] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          className="h-full bg-[#C42A1E]"
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



      {/* Deep Dive: AI Integration in APEX - Technical Design // 03 */}
      <section className="pt-32 pb-64 relative bg-[#050505] overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(196,42,30,0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            {/* Image Left */}
            <SectionReveal>
              <div className="relative">
                {/* Main Holographic Core */}
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(196,42,30,0.05)] group">
                  <Image 
                    src="/images/project2.png" 
                    alt="AI Integration Hub" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50"
                  />
                  
                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Circular Radar Scan */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-[1px] border-[#C42A1E]/10 rounded-full scale-[1.2] opacity-50 pointer-events-none"
                  />

                  {/* Technical Frame Markers */}
                  <div className="absolute top-10 right-10 text-[8px] font-mono text-[#C42A1E]/60 tracking-widest text-right">
                    VECTOR_ENGINE: SYNC<br />
                    AI_MODELS: ACTIVE
                  </div>
                  <div className="absolute bottom-10 left-10 text-[8px] font-mono text-zinc-500">
                    ORACLE_DATABASE_23AI<br />
                    GENERATIVE_AI_SERVICE
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-12 bottom-1/4 p-6 rounded-3xl bg-black/80 backdrop-blur-3xl border border-[#C42A1E]/30 z-30 shadow-2xl max-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-[#C42A1E] mb-2 tracking-widest font-black">AI_INFERENCE</div>
                  <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center justify-between gap-4">
                        <div className="text-[8px] text-zinc-500 font-mono">TOKEN_{i}</div>
                        <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            animate={{ width: [`${40 + i * 15}%`, "20%", `${40 + i * 15}%`] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
                            className="h-full bg-[#C42A1E]"
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
              <div className="space-y-16 text-right lg:text-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 justify-end lg:justify-start">
                    <div className="w-12 h-px bg-[#C42A1E]/30" />
                    <span className="text-[#C42A1E] font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Deep_Dive // 02</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
                    Oracle APEX <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C42A1E]/30 text-balance">AI / Workflow</span>
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-[#C42A1E]/20 transition-colors text-right lg:text-left">
                    <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#C42A1E]/30 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 justify-end lg:justify-start">
                      Intelligence-Driven Automation
                      <div className="w-2 h-2 rounded-full bg-[#C42A1E] animate-pulse" />
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">
                      Leverage the power of Oracle Database 23ai directly within APEX. We build advanced RAG (Retrieval-Augmented Generation) systems, vector-based semantic search, and AI-powered workflows that transform how users interact with enterprise data.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Vector Search", desc: "Native semantic discovery within Oracle 23ai." },
                      { title: "RAG Systems", desc: "Intelligent Retrieval-Augmented Generation." },
                      { title: "AI Workflows", desc: "Native v24.1 process orchestration engines." },
                      { title: "Generative AI", desc: "Custom LLM integrations & chat interfaces." },
                      { title: "Data Analytics", desc: "AI-driven insight extraction & modeling." },
                      { title: "AI Support", desc: "24/7 AI model monitoring & maintenance.", isCTA: true }
                    ].map((service, i) => (
                      service.isCTA ? (
                        <Link href="#contact" key={i} className="p-6 rounded-2xl bg-[#C42A1E]/10 border border-[#C42A1E]/40 hover:bg-[#C42A1E]/20 transition-all duration-300 group/item relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#C42A1E]/20 to-transparent opacity-50" />
                          <div className="relative z-10 text-right lg:text-left">
                            <div className="text-[9px] font-mono text-white mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap flex items-center gap-2 justify-end lg:justify-start">
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              {service.title}
                            </div>
                            <p className="text-[10px] text-white/70 group-hover/item:text-white transition-colors leading-tight uppercase tracking-tighter">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C42A1E]/30 transition-all duration-300 group/item text-right lg:text-left">
                          <div className="text-[9px] font-mono text-[#C42A1E] mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap">{service.title}</div>
                          <p className="text-[10px] text-zinc-500 group-hover/item:text-zinc-300 transition-colors leading-tight uppercase tracking-tighter">
                            {service.desc}
                          </p>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Deep Dive: APEX Migration Services - Technical Design // 04 */}
      <section className="pt-32 pb-64 relative bg-[#050505] overflow-hidden border-t border-white/5">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(196,42,30,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <SectionReveal>
              <div className="space-y-16 text-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-[#C42A1E]/30" />
                    <span className="text-[#C42A1E] font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Deep_Dive // 03</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
                    Migration <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C42A1E]/30 text-balance">Services</span>
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-[#C42A1E]/20 transition-colors">
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#C42A1E]/30 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#C42A1E] animate-pulse" />
                      Legacy Modernization
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">
                      OAC offers seamless transitions for your legacy ecosystems. We specialize in safe, data-loss-prevented migrations that move your business from aging infrastructure to high-performance Oracle Cloud environments.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Forms to APEX", desc: "Migrating legacy Oracle Forms to modern web apps." },
                      { title: "EXCEL to APEX", desc: "Transforming spreadsheets into collaborative apps." },
                      { title: "Premises to Cloud", desc: "Moving infrastructure to Oracle Cloud seamlessly." },
                      { title: "Support", desc: "24/7 Enterprise monitoring & maintenance.", isCTA: true }
                    ].map((service, i) => (
                      service.isCTA ? (
                        <Link href="#contact" key={i} className="p-6 rounded-2xl bg-[#C42A1E]/10 border border-[#C42A1E]/40 hover:bg-[#C42A1E]/20 transition-all duration-300 group/item relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#C42A1E]/20 to-transparent opacity-50" />
                          <div className="relative z-10">
                            <div className="text-[9px] font-mono text-white mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              {service.title}
                            </div>
                            <p className="text-[10px] text-white/70 group-hover/item:text-white transition-colors leading-tight uppercase tracking-tighter">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C42A1E]/30 transition-all duration-300 group/item">
                          <div className="text-[9px] font-mono text-[#C42A1E] mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap">{service.title}</div>
                          <p className="text-[10px] text-zinc-500 group-hover/item:text-zinc-300 transition-colors leading-tight uppercase tracking-tighter">
                            {service.desc}
                          </p>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="relative">
                {/* Main Holographic Core */}
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(196,42,30,0.1)] group">
                  <Image 
                    src="/images/project3.png" 
                    alt="APEX Migration Core" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50"
                  />
                  
                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Scanning Line */}
                  <motion.div 
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-[#C42A1E]/20 to-transparent z-20 pointer-events-none"
                  />

                  {/* Technical Frame Markers */}
                  <div className="absolute top-10 left-10 text-[8px] font-mono text-[#C42A1E]/60 tracking-widest">
                    MIGRATION_LINK: STABLE<br />
                    DATA_INTEGRITY: 100%
                  </div>
                  <div className="absolute bottom-10 right-10 text-[8px] font-mono text-zinc-500 text-right">
                    CLOUD_TRANSFORMATION<br />
                    © APEX EXPERTS SOLUTIONS
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-12 top-1/4 p-6 rounded-3xl bg-black/80 backdrop-blur-3xl border border-[#C42A1E]/30 z-30 shadow-2xl max-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-[#C42A1E] mb-2 tracking-widest font-black">MIGRATION_PATH</div>
                  <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ width: ["0%", `${30 + i * 20}%`, "0%"] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          className="h-full bg-[#C42A1E]"
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

      {/* Deep Dive: APEX Training Services - Technical Design // 05 */}
      <section className="pt-32 pb-64 relative bg-[#050505] overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(196,42,30,0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            {/* Image Left */}
            <SectionReveal>
              <div className="relative">
                {/* Main Holographic Core */}
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(196,42,30,0.05)] group">
                  <Image 
                    src="/images/project1.png" 
                    alt="APEX Training Hub" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50"
                  />
                  
                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Circular Radar Scan */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-[1px] border-[#C42A1E]/10 rounded-full scale-[1.2] opacity-50 pointer-events-none"
                  />

                  {/* Technical Frame Markers */}
                  <div className="absolute top-10 right-10 text-[8px] font-mono text-[#C42A1E]/60 tracking-widest text-right">
                    TRAINING_MODE: ACTIVE<br />
                    EXPERT_SYNC: OPTIMAL
                  </div>
                  <div className="absolute bottom-10 left-10 text-[8px] font-mono text-zinc-500">
                    KNOWLEDGE_TRANSFER<br />
                    © APEX EXPERTS SOLUTIONS
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-12 bottom-1/4 p-6 rounded-3xl bg-black/80 backdrop-blur-3xl border border-[#C42A1E]/30 z-30 shadow-2xl max-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-[#C42A1E] mb-2 tracking-widest font-black">SKILL_ANALYSIS</div>
                  <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center justify-between gap-4">
                        <div className="text-[8px] text-zinc-500 font-mono">LEVEL_{i}</div>
                        <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            animate={{ width: [`${40 + i * 15}%`, "20%", `${40 + i * 15}%`] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
                            className="h-full bg-[#C42A1E]"
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
              <div className="space-y-16 text-right lg:text-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 justify-end lg:justify-start">
                    <div className="w-12 h-px bg-[#C42A1E]/30" />
                    <span className="text-[#C42A1E] font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Deep_Dive // 04</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase text-balance">
                    Training <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C42A1E]/30 text-balance">Services</span>
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-[#C42A1E]/20 transition-colors text-right lg:text-left">
                    <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#C42A1E]/30 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 justify-end lg:justify-start">
                      Expert Knowledge Transfer
                      <div className="w-2 h-2 rounded-full bg-[#C42A1E] animate-pulse" />
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">
                      Empower your team with elite Oracle APEX expertise. We offer comprehensive training modules from fundamental building blocks to advanced architectural mastery, tailored for both corporate teams and educational institutions.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Corporate Training", desc: "Tailored modules for enterprise development teams." },
                      { title: "Educational Training", desc: "Foundational courses for institutions & students." },
                      { title: "Expert Support", desc: "24/7 Enterprise monitoring & maintenance.", isCTA: true }
                    ].map((service, i) => (
                      service.isCTA ? (
                        <Link href="#contact" key={i} className="p-6 rounded-2xl bg-[#C42A1E]/10 border border-[#C42A1E]/40 hover:bg-[#C42A1E]/20 transition-all duration-300 group/item relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#C42A1E]/20 to-transparent opacity-50" />
                          <div className="relative z-10 text-right lg:text-left">
                            <div className="text-[9px] font-mono text-white mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap flex items-center gap-2 justify-end lg:justify-start">
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              {service.title}
                            </div>
                            <p className="text-[10px] text-white/70 group-hover/item:text-white transition-colors leading-tight uppercase tracking-tighter">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C42A1E]/30 transition-all duration-300 group/item text-right lg:text-left">
                          <div className="text-[9px] font-mono text-[#C42A1E] mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap">{service.title}</div>
                          <p className="text-[10px] text-zinc-500 group-hover/item:text-zinc-300 transition-colors leading-tight uppercase tracking-tighter">
                            {service.desc}
                          </p>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* The Oracle Legacy: 17+ Years of Excellence - SUPER PREMIUM */}
      <section className="py-64 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(196,42,30,0.1)_0%,transparent_60%)] pointer-events-none" />
        
        {/* Scrolling Technical Text Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex flex-col justify-between py-20">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="whitespace-nowrap text-[12rem] font-black leading-none tracking-tighter flex gap-20 animate-infinite-scroll">
              <span className="text-white">LEGACY_ENGINEERING</span>
              <span className="text-transparent stroke-white stroke-1">EST_2007</span>
              <span className="text-white">ORACLE_MASTERY</span>
              <span className="text-transparent stroke-white stroke-1">17_YEARS</span>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end">
              <div className="lg:col-span-7 space-y-12">
                <SectionReveal>
                  <div className="space-y-8">
                    <div className="inline-flex items-center gap-4">
                      <div className="w-12 h-px bg-[#C42A1E]" />
                      <span className="text-[#C42A1E] font-mono text-xs tracking-[0.6em] font-black uppercase">The_Expertise_Legacy</span>
                    </div>
                    <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] text-white">
                      17 Years <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C42A1E] via-white to-white/20">Of Mastery.</span>
                    </h2>
                  </div>
                </SectionReveal>

                <SectionReveal>
                  <p className="text-2xl md:text-3xl text-zinc-400 font-light leading-relaxed max-w-3xl">
                    For nearly two decades, we have been the silent architects behind mission-critical systems. 17+ years of deep Oracle engineering, serving 12+ elite institutions with a commitment to technical precision and future-proof innovation.
                  </p>
                </SectionReveal>
              </div>

              <div className="lg:col-span-5">
                <SectionReveal>
                  <div className="grid grid-cols-1 gap-12">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#C42A1E]/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />
                      <div className="relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl overflow-hidden">
                        <div className="text-[12px] font-mono text-zinc-500 mb-4 tracking-[0.4em] uppercase">Global_Impact_Index</div>
                        <div className="text-8xl font-black text-white mb-2 font-mono tabular-nums tracking-tighter">12+</div>
                        <div className="text-lg text-zinc-400 font-light uppercase tracking-widest">Institutions Empowered</div>
                        
                        {/* Technical HUD element inside card */}
                        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                          <div className="flex gap-2">
                             {[...Array(5)].map((_, i) => (
                               <div key={i} className="w-1 h-4 bg-[#C42A1E]/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                             ))}
                          </div>
                          <div className="text-[9px] font-mono text-zinc-700 uppercase">Success_Rate: 100%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>

            <SectionReveal>
              <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-white/5">
                 {[
                   { label: "ESTABLISHED", value: "2007" },
                   { label: "LINES_OF_CODE", value: "5M+" },
                   { label: "DEPLOYMENTS", value: "CRITICAL" }
                 ].map((item, i) => (
                   <div key={i} className="space-y-4">
                     <div className="text-[10px] font-mono text-[#C42A1E] tracking-[0.5em] font-black uppercase">{item.label}</div>
                     <div className="text-3xl font-black text-white">{item.value}</div>
                   </div>
                 ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Related Case Study: ApexCloud ERP Transformation - SUPER PREMIUM */}
      <section className="py-48 relative overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,42,30,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-20">
              <div className="h-px w-12 bg-[#C42A1E]" />
              <span className="text-[#C42A1E] font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Case_Study // 01</span>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-8">
              <SectionReveal>
                <div className="relative group aspect-[16/9] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
                  <Image 
                    src="/images/project2.png" 
                    alt="ApexCloud ERP Transformation" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-[3000ms] brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  {/* Technical Overlay */}
                  <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                    <div className="space-y-4">
                      <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase">
                        Enterprise_Modernization
                      </div>
                      <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">ApexCloud ERP</h3>
                    </div>
                    <div className="hidden md:block">
                       <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mb-2">Build_Version</div>
                       <div className="text-xl font-bold text-[#C42A1E]">APEX_PRO_V24</div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-4 space-y-12 text-left">
              <SectionReveal>
                <div className="space-y-8">
                  <h4 className="text-2xl font-bold text-white tracking-tight leading-tight">
                    Transforming complex financial legacy systems into high-performance digital hubs.
                  </h4>
                  <p className="text-zinc-500 leading-relaxed font-light">
                    We migrated a multi-decade legacy ERP system for a global financial institution into a unified Oracle APEX environment, reducing operational complexity by 60% and improving data throughput by 300%.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { label: "PERFORMANCE_GAIN", value: "+300%" },
                    { label: "TCO_REDUCTION", value: "-60%" },
                    { label: "SECURITY_SYNC", value: "NATIVE" }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                      <div className="text-[9px] font-mono text-zinc-600 tracking-widest uppercase">{stat.label}</div>
                      <div className="text-xl font-bold text-[#C42A1E] tracking-tight">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </SectionReveal>

              <SectionReveal>
                 <Link href="#contact" className="inline-flex items-center gap-4 text-[10px] font-mono text-white tracking-[0.4em] font-black uppercase group">
                   View Project Details
                   <div className="w-8 h-px bg-[#C42A1E] group-hover:w-12 transition-all duration-300" />
                 </Link>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - HYPER PREMIUM REVAMP */}
      <section id="engage" className="py-64 relative overflow-hidden bg-black">
        {/* Cinematic background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(196,42,30,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(196,42,30,0.05)_0%,transparent_50%)]" />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal>
            <div className="max-w-6xl mx-auto relative">
              {/* Technical HUD Markers */}
              <div className="absolute -top-12 -left-12 w-24 h-24 border-t border-l border-[#C42A1E]/30 rounded-tl-3xl hidden lg:block" />
              <div className="absolute -bottom-12 -right-12 w-24 h-24 border-b border-r border-[#C42A1E]/30 rounded-br-3xl hidden lg:block" />

              <div className="relative p-16 md:p-32 rounded-[5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl text-center overflow-hidden group">
                {/* Background Animation Layers */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,42,30,0.15)_0%,transparent_70%)] pointer-events-none"
                />

                <div className="relative z-10 space-y-12">
                  <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#C42A1E]/10 border border-[#C42A1E]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C42A1E] animate-ping" />
                    <span className="text-[9px] font-mono text-[#C42A1E] tracking-[0.4em] uppercase font-black">Ready_For_Deployment</span>
                  </div>

                  <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] text-white">
                    Automate <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C42A1E] via-white to-[#C42A1E]/40 bg-[length:200%_auto] animate-gradient">Excellence.</span>
                  </h2>

                  <p className="text-xl md:text-3xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
                    Join the technical elite and deploy autonomous intelligence layers that transform your operational reality into a competitive masterpiece.
                  </p>

                  <div className="pt-10">
                    <Link href="/#contact" className="group relative inline-flex items-center justify-center">
                      {/* Button Outer Glow */}
                      <div className="absolute inset-0 bg-[#C42A1E]/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Button Body */}
                      <div className="relative px-16 py-8 rounded-full bg-[#C42A1E] text-white font-black text-sm tracking-[0.4em] uppercase overflow-hidden">
                        <span className="relative z-10">Initialize Engagement</span>
                        
                        {/* Shimmer Effect */}
                        <motion.div 
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                        />
                      </div>

                      {/* Technical Meta Labels (Hover Only) */}
                      <div className="absolute -right-32 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 hidden xl:block">
                        <div className="text-[8px] font-mono text-[#C42A1E] text-left border-l border-[#C42A1E]/30 pl-4 py-2">
                          ENCRYPTED_SYNC: OK<br />
                          PRIORITY: HIGH<br />
                          AUTH_LAYER: V4
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Floating HUD Elements */}
                <div className="absolute top-12 right-12 text-zinc-800 font-mono text-[8px] hidden md:block select-none">
                  SYSTEM_STATUS: NOMINAL<br />
                  LATENCY: 0.001MS
                </div>
                <div className="absolute bottom-12 left-12 text-zinc-800 font-mono text-[8px] hidden md:block select-none uppercase">
                  APEX_EXPERTS_SOLUTIONS<br />
                  ©2026_ALL_RIGHTS_RESERVED
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
