"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Smartphone, Apple, Zap, Layers, Cpu, Palette, ShieldCheck, Database, Lock, BarChart3, CloudUpload } from "lucide-react";
import { Header } from "@/components/Header";
import { SectionReveal } from "@/components/SectionReveal";

const MOBILE_CAPABILITIES = [
  {
    id: "01",
    title: "iOS Engineering",
    icon: <Apple className="w-8 h-8" />,
    desc: "Swift & SwiftUI masterclass engineering for the premium Apple ecosystem.",
    image: "/images/mobile-dev-hero.png"
  },
  {
    id: "02",
    title: "Android Core",
    icon: <Smartphone className="w-8 h-8" />,
    desc: "Kotlin-first development designed for robust, scalable Android applications.",
    image: "/images/mobile-uiux.png"
  },
  {
    id: "03",
    title: "Cross-Platform",
    icon: <Zap className="w-8 h-8" />,
    desc: "High-fidelity Flutter & React Native apps with native-grade performance.",
    image: "/images/mobile-backend.png"
  },
  {
    id: "04",
    title: "UX/UI Mastery",
    icon: <Palette className="w-8 h-8" />,
    desc: "Cinematic mobile interfaces defined by fluid transitions and gesture logic.",
    image: "/images/mobile-uiux.png"
  },
  {
    id: "05",
    title: "Secure Backend",
    icon: <Database className="w-8 h-8" />,
    desc: "Edge-computed real-time data layers and offline-first mobile architectures.",
    image: "/images/mobile-backend.png"
  }
];

const MOBILE_TECH = [
  { name: "Swift", slug: "swift", desc: "iOS Native" },
  { name: "Kotlin", slug: "kotlin", desc: "Android Native" },
  { name: "Flutter", slug: "flutter", desc: "Cross-Platform" },
  { name: "React Native", slug: "react", desc: "Hybrid Core" },
  { name: "Firebase", slug: "firebase", desc: "Backend/Auth" },
  { name: "Supabase", slug: "supabase", desc: "Realtime DB" },
  { name: "App Store", slug: "apple", desc: "iOS Deployment" },
  { name: "Play Store", slug: "googleplay", desc: "Android Store" }
];

const TechSingularityNode = ({ item, index, total, active }: { item: any, index: number, total: number, active: boolean }) => {
  const angle = (index / total) * Math.PI * 2;
  const radius = active ? 400 : 340;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const depth = Math.sin(angle + Math.PI/2);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{ 
        opacity: 1, 
        scale: active ? 1.4 : (0.9 + (depth + 1) * 0.1),
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        filter: active ? "blur(0px) brightness(1.2)" : `blur(${Math.abs(depth) * 1.5}px) brightness(${0.5 + (depth + 1) * 0.25})`,
        zIndex: Math.floor((depth + 1) * 10)
      }}
      transition={{ 
        type: "spring",
        stiffness: 40,
        damping: 12,
        delay: index * 0.08 
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
    >
      <div className="relative">
        <div 
          style={{ 
            width: radius,
            transform: `rotate(${angle + Math.PI}rad)`,
            transformOrigin: 'left center',
          }}
          className={`absolute left-1/2 top-1/2 h-px transition-all duration-1000 ${active ? 'bg-gradient-to-r from-sinai-glow-orange to-transparent opacity-80' : 'bg-white/5 opacity-10'} pointer-events-none`}
        />

        <div className={`relative w-24 h-24 flex items-center justify-center rounded-[2rem] border backdrop-blur-3xl transition-all duration-700 ${active ? 'bg-sinai-glow-orange/10 border-sinai-glow-orange/50 shadow-[0_0_60px_rgba(242,162,75,0.3)] rotate-[10deg]' : 'bg-white/[0.02] border-white/5 group-hover:border-white/20'}`}>
          <div className={`relative w-12 h-12 transition-all duration-500 ${active ? 'scale-125' : 'opacity-40 group-hover:opacity-100 group-hover:scale-110'}`}>
            <Image 
              src={`https://cdn.simpleicons.org/${item.slug}/white`} 
              alt={item.name} 
              fill 
              className="object-contain"
              unoptimized
            />
          </div>

          <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-center transition-all duration-500 ${active ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90'}`}>
            <div className="text-[10px] font-mono text-white tracking-[0.3em] font-black uppercase mb-1 drop-shadow-[0_0_100px_rgba(255,255,255,0.2)]">{item.name}</div>
            <div className="text-[7px] font-mono text-sinai-glow-orange/60 tracking-widest uppercase">{item.desc}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TechSingularity = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="relative w-full min-h-[1000px] flex items-center justify-center py-20 overflow-visible bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="relative z-20 flex items-center justify-center scale-125 lg:scale-150">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute w-64 h-64 border border-sinai-glow-orange/20 rounded-full border-dashed" />
        
        <div className="relative w-48 h-48 rounded-full bg-black/40 backdrop-blur-3xl border border-white/10 flex items-center justify-center overflow-hidden group shadow-[0_0_80px_rgba(242,162,75,0.2)]">
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.3)_0%,transparent_70%)]" />
          <div className="relative z-10 flex flex-col items-center">
            <Smartphone className="w-12 h-12 text-sinai-glow-orange mb-3 animate-pulse" />
            <div className="text-[10px] font-mono text-white tracking-[0.5em] font-black uppercase">Mobile</div>
            <div className="text-[8px] font-mono text-sinai-glow-orange tracking-[0.2em] font-bold">ECOSYSTEM</div>
          </div>
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[3px] border-sinai-glow-orange/10 border-t-sinai-glow-orange/40 rounded-full" />
        </div>
      </div>

      <div className="absolute inset-0 z-30 pointer-events-none">
        {MOBILE_TECH.map((item, i) => (
          <div key={item.name} className="pointer-events-auto" onMouseEnter={() => setHoveredNode(item.name)} onMouseLeave={() => setHoveredNode(null)}>
            <TechSingularityNode item={item} index={i} total={MOBILE_TECH.length} active={hoveredNode === item.name} />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-10 w-px h-64 bg-gradient-to-b from-transparent via-sinai-glow-orange to-transparent" />
        <div className="absolute bottom-1/4 right-10 w-px h-64 bg-gradient-to-b from-transparent via-sinai-glow-orange to-transparent" />
      </div>
    </div>
  );
};

// --- Sub-Components ---

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
  return <span className={className}>{displayedText}</span>;
};

const NeuralCore = () => {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-sinai-glow-orange/10 rounded-full border-dashed" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute inset-16 border border-white/5 rounded-full border-dashed" />
      <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-white/[0.05] to-transparent flex items-center justify-center backdrop-blur-3xl border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute w-56 h-56 rounded-full bg-sinai-glow-orange/20 blur-[60px]" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="px-3 py-1 rounded-sm border border-sinai-glow-orange/40 bg-sinai-glow-orange/5 mb-4 relative overflow-hidden group-hover:border-sinai-glow-orange transition-colors">
            <div className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.3em] font-black flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-sinai-glow-orange animate-pulse" />
              MOBILE_ENGINE_V3.0
            </div>
            <motion.div animate={{ left: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-8 bg-white/20 skew-x-12 -translate-x-full" />
          </div>
          <div className="relative">
            <h3 className="text-6xl font-black tracking-[-0.05em] text-white flex flex-col items-center leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-sinai-glow-orange/50">APEX</span>
              <span className="text-[10px] font-mono tracking-[1.5em] text-sinai-glow-orange/60 ml-[1.5em] -mt-1 font-bold">EXPERTS</span>
            </h3>
          </div>
        </div>
      </div>
      <motion.div animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 0.5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[450px] h-[450px] border-2 border-sinai-glow-orange/30 rounded-full" />
    </div>
  );
};

const OrbitalNode = ({ cap, index, total, active, onEnter, onLeave }: any) => {
  const angle = (index / total) * Math.PI * 2;
  const radius = 320; 
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  return (
    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: active ? 1.2 : 1, left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }} transition={{ delay: index * 0.1, duration: 0.4 }} className="absolute -translate-x-1/2 -translate-y-1/2 group pointer-events-auto" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className="relative w-28 h-28 flex items-center justify-center cursor-pointer">
        <div className={`absolute inset-0 bg-white/[0.03] border rounded-[2rem] rotate-45 transition-all duration-500 ${active ? 'rotate-90 border-sinai-glow-orange shadow-[0_0_30px_rgba(242,162,75,0.3)] bg-sinai-glow-orange/5' : 'border-white/10 group-hover:border-white/30'}`} />
        <div className={`relative z-10 transition-colors duration-500 ${active ? 'text-sinai-glow-orange scale-110' : 'text-zinc-500 group-hover:text-white'}`}>{cap.icon}</div>
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
        <div className="flex items-center gap-4"><div className="px-4 py-1.5 rounded-full bg-sinai-glow-orange/10 border border-sinai-glow-orange/30 text-sinai-glow-orange text-[9px] font-mono font-bold tracking-widest uppercase">Mobile_Capability // {cap.id}</div><div className="h-px flex-1 bg-white/5" /></div>
        <div className="space-y-6"><h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">{cap.title}</h3><p className="text-xl text-zinc-400 font-light leading-relaxed"><StreamingText text={cap.desc} delay={100} /></p></div>
        <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-600"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse" />ENGINE_SYNC: ACTIVE</span><span className="w-px h-4 bg-white/10" /><span>ARM_V9: COMPATIBLE</span></div>
      </div>
    </div>
  );
};

const Particles = ({ count = 20 }: { count?: number }) => {
  const [mounted, setMounted] = useState(false);
  const [positions, setPositions] = useState<{ left: string, top: string, delay: number, duration: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    const newPositions = [...Array(count)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5
    }));
    setPositions(newPositions);
  }, [count]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            delay: pos.delay
          }}
          className="absolute w-1 h-1 bg-sinai-glow-orange rounded-full blur-[1px]"
          style={{
            left: pos.left,
            top: pos.top
          }}
        />
      ))}
    </div>
  );
};

const MobileHero = () => (
  <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-black">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(242,162,75,0.08)_0%,transparent_50%)]" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-12 text-left">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4"><div className="h-px w-12 bg-sinai-glow-orange/30" /><span className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[9px] uppercase tracking-[0.5em] text-sinai-glow-orange font-bold">MOBILE_ENGINEERING // SOL_04</span></div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white">Mobile <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-white/40">Mastery.</span></h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-xl font-light leading-relaxed">We engineer high-performance native and cross-platform mobile experiences that prioritize fluid motion, advanced security, and world-class engagement.</p>
          </div>
          <div className="flex flex-wrap gap-6 pt-4">
            <Link href="/#contact" className="group relative px-12 py-6 rounded-full overflow-hidden bg-sinai-glow-orange text-white font-bold text-sm tracking-[0.3em] uppercase transition-all hover:shadow-[0_0_50px_rgba(242,162,75,0.4)]"><span className="relative z-10">Initialize Project</span><div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" /></Link>
            <Link href="#capabilities" className="px-12 py-6 rounded-full bg-white/[0.03] border border-white/10 text-white font-bold text-sm tracking-[0.3em] uppercase hover:bg-white/[0.08] hover:border-white/20 transition-all">Capability Registry</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
          <div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.15)] group">
            <Image src="/images/mobile-dev-hero.png" alt="Mobile Excellence" fill className="object-cover group-hover:scale-110 transition-transform duration-[5000ms] brightness-75" priority />
            <motion.div animate={{ top: ["-10%", "110%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sinai-glow-orange/40 to-transparent z-20 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </div>
    <div className="absolute inset-0 pointer-events-none"><Particles count={8} /></div>
  </section>
);

export default function MobileDevelopmentPage() {
  const [activeCapId, setActiveCapId] = useState<string | null>(null);
  const activeCap = MOBILE_CAPABILITIES.find(c => c.id === activeCapId);

  return (
    <main className="bg-[#050505] text-white min-h-screen selection:bg-sinai-glow-orange selection:text-black font-sans">
      <Header />
      <MobileHero />
      
      {/* Capability Hub */}
      <section id="capabilities" className="py-48 relative overflow-hidden bg-[#030303] min-h-[1000px]">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-32">
              <div className="inline-flex items-center gap-4 mb-8"><div className="w-8 h-px bg-sinai-glow-orange/50" /><span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Mobile_Orchestrator // V3.0</span><div className="w-8 h-px bg-sinai-glow-orange/50" /></div>
              <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tight leading-none text-white">The Mobile <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white/40">Capability Hub</span></h2>
            </div>
          </SectionReveal>
          <div className="relative max-w-7xl mx-auto h-[700px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><NeuralCore /></div>
            <div className="absolute inset-0 z-30 pointer-events-none">
              {MOBILE_CAPABILITIES.map((cap, i) => (
                <OrbitalNode key={cap.id} cap={cap} index={i} total={MOBILE_CAPABILITIES.length} active={activeCapId === cap.id} onEnter={() => setActiveCapId(cap.id)} onLeave={() => setActiveCapId(null)} />
              ))}
            </div>
            <div className="relative z-50 w-full max-w-4xl px-4 pointer-events-none">
              <AnimatePresence mode="wait">{activeCap && (
                <motion.div key={activeCap.id} initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -10 }} transition={{ duration: 0.3, ease: "easeOut" }}><CapabilityDetailView cap={activeCap} /></motion.div>
              )}</AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- Deep Dive Sections (Mirroring Web Page Style) --- */}

      {/* 01: Custom Mobile App Development */}
      <section className="pt-64 pb-32 relative bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <SectionReveal>
              <div className="space-y-16 text-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4"><div className="w-12 h-px bg-sinai-glow-orange/30" /><span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Deep_Dive // 01</span></div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-white">Custom Mobile <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30 text-balance">App Development</span></h2>
                </div>
                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/20 transition-colors">
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-sinai-glow-orange/30 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 text-white"><div className="w-2 h-2 rounded-full bg-sinai-glow-orange animate-pulse" />Premium App Architectures</h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">We engineer bespoke mobile applications that combine native performance with cinematic design. From enterprise solutions to consumer-facing masterpieces, we build for impact.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "iOS Development", desc: "Native Swift/SwiftUI masterpieces." },
                      { title: "Android Development", desc: "Kotlin-first robust engineering." },
                      { title: "Cross-Platform", desc: "Flutter & React Native excellence." },
                      { title: "Business Apps", desc: "Scalable enterprise mobile solutions." },
                      { title: "Performance", desc: "Optimizing for buttery smooth FPS." },
                      { title: "Support", desc: "24/7 technical surveillance.", isCTA: true }
                    ].map((service, i) => (
                      service.isCTA ? (
                        <Link href="/#contact" key={i} className="p-6 rounded-2xl bg-sinai-glow-orange/10 border border-sinai-glow-orange/40 hover:bg-sinai-glow-orange/20 transition-all duration-300 relative overflow-hidden"><div className="relative z-10"><div className="text-[9px] font-mono text-white mb-2 tracking-[0.1em] font-black uppercase flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />{service.title}</div><p className="text-[10px] text-white/70 leading-tight uppercase tracking-tighter">{service.desc}</p></div></Link>
                      ) : (
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/30 transition-all duration-300 group/item"><div className="text-[9px] font-mono text-sinai-glow-orange mb-2 tracking-[0.1em] font-black uppercase">{service.title}</div><p className="text-[10px] text-zinc-500 group-hover/item:text-zinc-300 transition-colors leading-tight uppercase tracking-tighter">{service.desc}</p></div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal><div className="relative"><div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group"><Image src="/images/mobile-dev-hero.png" alt="Custom Mobile App Development" fill className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50" /><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" /><motion.div animate={{ top: ["-10%", "110%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-sinai-glow-orange/20 to-transparent z-20 pointer-events-none" /></div></div></SectionReveal>
          </div>
        </div>
      </section>

      {/* 02: UI/UX for Mobile Apps */}
      <section className="py-32 relative bg-[#030303] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <SectionReveal><div className="relative order-2 lg:order-1"><div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group"><Image src="/images/mobile-uiux.png" alt="UI/UX Mastery" fill className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50" /><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" /><motion.div animate={{ top: ["-10%", "110%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-sinai-glow-orange/20 to-transparent z-20 pointer-events-none" /></div></div></SectionReveal>
            <SectionReveal>
              <div className="space-y-16 text-left order-1 lg:order-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-4"><div className="w-12 h-px bg-sinai-glow-orange/30" /><span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Deep_Dive // 02</span></div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-white">UI/UX for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30 text-balance">Mobile Apps</span></h2>
                </div>
                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/20 transition-colors">
                    <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-sinai-glow-orange/30 rounded-tr-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 text-white"><div className="w-2 h-2 rounded-full bg-sinai-glow-orange animate-pulse" />Immersive Experiences</h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">We design interfaces that feel alive. Our focus on fluid motion, intuitive patterns, and haptic feedback ensures your app is not just used, but enjoyed.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "UI Design", desc: "Glassmorphic & modern interfaces." },
                      { title: "UX Optimization", desc: "Frictionless user journey flows." },
                      { title: "Prototyping", desc: "Interactive high-fidelity motions." },
                      { title: "Design Systems", desc: "Atomic & scalable UI components." },
                      { title: "Visual Design", desc: "Cinematic & brand-aligned aesthetics." },
                      { title: "Support", desc: "Continuous design evolution.", isCTA: true }
                    ].map((service, i) => (
                      service.isCTA ? (
                        <Link href="/#contact" key={i} className="p-6 rounded-2xl bg-sinai-glow-orange/10 border border-sinai-glow-orange/40 hover:bg-sinai-glow-orange/20 transition-all duration-300 relative overflow-hidden"><div className="relative z-10"><div className="text-[9px] font-mono text-white mb-2 tracking-[0.1em] font-black uppercase flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />{service.title}</div><p className="text-[10px] text-white/70 leading-tight uppercase tracking-tighter">{service.desc}</p></div></Link>
                      ) : (
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/30 transition-all duration-300 group/item"><div className="text-[9px] font-mono text-sinai-glow-orange mb-2 tracking-[0.1em] font-black uppercase">{service.title}</div><p className="text-[10px] text-zinc-500 group-hover/item:text-zinc-300 transition-colors leading-tight uppercase tracking-tighter">{service.desc}</p></div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 03: Backend & API Integration */}
      <section className="py-32 relative bg-[#050505] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <SectionReveal>
              <div className="space-y-16 text-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4"><div className="w-12 h-px bg-sinai-glow-orange/30" /><span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Deep_Dive // 03</span></div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-white text-balance">Backend & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">API Integration</span></h2>
                </div>
                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/20 transition-colors">
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-sinai-glow-orange/30 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 text-white"><div className="w-2 h-2 rounded-full bg-sinai-glow-orange animate-pulse" />The Digital Backbone</h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">We build the infrastructure that powers your app. From complex API orchestrations to secure user authentication, our backends are engineered for scale and speed.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "API Integration", desc: "Seamless orchestration & REST/GraphQL." },
                      { title: "Authentication", desc: "Secure multi-factor user management." },
                      { title: "Database Connect", desc: "Optimized data sync & offline-first." },
                      { title: "Third-Party Sync", desc: "Integrating CRM, ERP, and payment nodes." },
                      { title: "Cloud Scale", desc: "Serverless & automated infrastructure." },
                      { title: "Support", desc: "Technical surveillance & optimization.", isCTA: true }
                    ].map((service, i) => (
                      service.isCTA ? (
                        <Link href="/#contact" key={i} className="p-6 rounded-2xl bg-sinai-glow-orange/10 border border-sinai-glow-orange/40 hover:bg-sinai-glow-orange/20 transition-all duration-300 relative overflow-hidden"><div className="relative z-10"><div className="text-[9px] font-mono text-white mb-2 tracking-[0.1em] font-black uppercase flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />{service.title}</div><p className="text-[10px] text-white/70 leading-tight uppercase tracking-tighter">{service.desc}</p></div></Link>
                      ) : (
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/30 transition-all duration-300 group/item"><div className="text-[9px] font-mono text-sinai-glow-orange mb-2 tracking-[0.1em] font-black uppercase">{service.title}</div><p className="text-[10px] text-zinc-500 group-hover/item:text-zinc-300 transition-colors leading-tight uppercase tracking-tighter">{service.desc}</p></div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal><div className="relative"><div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group"><Image src="/images/mobile-backend.png" alt="Backend Core" fill className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50" /><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" /><motion.div animate={{ top: ["-10%", "110%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-sinai-glow-orange/20 to-transparent z-20 pointer-events-none" /></div></div></SectionReveal>
          </div>
        </div>
      </section>

      {/* 04: Mobile App Maintenance & Enhancement */}
      <section className="py-32 relative bg-[#030303] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <SectionReveal><div className="relative order-2 lg:order-1"><div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group"><Image src="/images/mobile-dev-hero.png" alt="Maintenance Hub" fill className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50" /><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" /><motion.div animate={{ top: ["-10%", "110%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-sinai-glow-orange/20 to-transparent z-20 pointer-events-none" /></div></div></SectionReveal>
            <SectionReveal>
              <div className="space-y-16 text-left order-1 lg:order-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-4"><div className="w-12 h-px bg-sinai-glow-orange/30" /><span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Deep_Dive // 04</span></div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-white text-balance">Maintenance <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">& Enhancement</span></h2>
                </div>
                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/20 transition-colors">
                    <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-sinai-glow-orange/30 rounded-tr-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 text-white"><div className="w-2 h-2 rounded-full bg-sinai-glow-orange animate-pulse" />Life Cycle Excellence</h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">Apps require constant care. We provide continuous monitoring, performance tuning, and feature updates to ensure your product remains at the cutting edge of the market.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Performance Opt", desc: "Speed & responsiveness tuning." },
                      { title: "Updates & Fixes", desc: "Proactive bug resolution & OS sync." },
                      { title: "Enhancements", desc: "New feature rollouts & evolution." },
                      { title: "Support", desc: "24/7 technical surveillance." },
                      { title: "Security Audits", desc: "Continuous vulnerability protection." },
                      { title: "Support", desc: "Engagement initialization.", isCTA: true }
                    ].map((service, i) => (
                      service.isCTA ? (
                        <Link href="/#contact" key={i} className="p-6 rounded-2xl bg-sinai-glow-orange/10 border border-sinai-glow-orange/40 hover:bg-sinai-glow-orange/20 transition-all duration-300 relative overflow-hidden"><div className="relative z-10"><div className="text-[9px] font-mono text-white mb-2 tracking-[0.1em] font-black uppercase flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />{service.title}</div><p className="text-[10px] text-white/70 leading-tight uppercase tracking-tighter">{service.desc}</p></div></Link>
                      ) : (
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/30 transition-all duration-300 group/item"><div className="text-[9px] font-mono text-sinai-glow-orange mb-2 tracking-[0.1em] font-black uppercase">{service.title}</div><p className="text-[10px] text-zinc-500 group-hover/item:text-zinc-300 transition-colors leading-tight uppercase tracking-tighter">{service.desc}</p></div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-48 relative overflow-hidden bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-32">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-sinai-glow-orange/50" />
                <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Singularity // STACK</span>
                <div className="w-8 h-px bg-sinai-glow-orange/50" />
              </div>
              <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tight leading-none text-white">
                The Mobile <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white/40">Tech Stack</span>
              </h2>
            </div>
          </SectionReveal>

          <TechSingularity />
        </div>
      </section>

      {/* Final CTA Section - Cinematic Masterpiece */}
      <section className="py-64 relative overflow-hidden bg-black">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-sinai-glow-orange animate-pulse" />
                  <span className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.4em] font-black uppercase">Engagement_Initialization // V5.0</span>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] text-white">
                  Ready to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-sinai-glow-orange/20">Scale Your Vision?</span>
                </h2>
                <p className="text-xl md:text-3xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed text-balance">
                  Join forces with <span className="text-white font-bold">APEX Experts</span> to engineer the next generation of digital excellence.
                </p>
              </div>

              <div className="flex flex-col items-center gap-8 pt-8">
                <Link href="/#contact" className="group relative px-24 py-10 rounded-full overflow-hidden bg-sinai-glow-orange text-white font-black text-xl tracking-[0.4em] uppercase transition-all hover:shadow-[0_0_100px_rgba(242,162,75,0.6)] hover:scale-105 active:scale-95 duration-500">
                  <span className="relative z-10">Initialize Project</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                  
                  {/* Internal Shimmer */}
                  <motion.div 
                    animate={{ left: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                  />
                </Link>

                <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
                  <span className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-green-500/50" />
                    Secure_Node: Active
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
          Apex_Experts_Creative_Studio<br />
          System_Build_Hash: 0x5a1118f
        </div>
      </section>
    </main>
  );
}
