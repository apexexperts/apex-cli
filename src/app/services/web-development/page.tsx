"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Globe, Palette, CloudUpload, ShieldCheck, Layers, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { SectionReveal } from "@/components/SectionReveal";

interface WebTechItem {
  name: string;
  slug: string;
  desc: string;
  isLocal?: boolean;
}

interface WebCapability {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Content Data ---

const TECH_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    items: [
      { name: "Next.js 15", slug: "nextdotjs", desc: "App Router" },
      { name: "React 19", slug: "react", desc: "Reactive UI" },
      { name: "Tailwind CSS", slug: "tailwindcss", desc: "Styling" },
      { name: "TypeScript", slug: "typescript", desc: "Typed Logic" },
      { name: "Framer Motion", slug: "framer", desc: "Animations" },
      { name: "GSAP", slug: "greensock", desc: "Orchestration" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    items: [
      { name: "Node.js", slug: "nodedotjs", desc: "Runtime" },
      { name: "PostgreSQL", slug: "postgresql", desc: "Storage" },
      { name: "Redis", slug: "redis", desc: "Cache" },
      { name: "Python", slug: "python", desc: "AI / Data" },
      { name: "GraphQL", slug: "graphql", desc: "Unified API" },
      { name: "Auth0", slug: "auth0", desc: "Security" }
    ]
  },
  {
    id: "infra",
    title: "Infrastructure & DevOps",
    items: [
      { name: "AWS", slug: "/images/aws.svg", isLocal: true, desc: "Cloud" },
      { name: "Vercel", slug: "vercel", desc: "Deployment" },
      { name: "Docker", slug: "docker", desc: "Containers" },
      { name: "GitHub", slug: "github", desc: "CI/CD" },
      { name: "Terraform", slug: "terraform", desc: "IaC" },
      { name: "Cloudflare", slug: "cloudflare", desc: "Edge" }
    ]
  }
];

const TechSingularityNode = ({ item, index, total, active }: { item: WebTechItem, index: number, total: number, active: boolean }) => {
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
        {/* Dynamic Connection Thread */}
        <div 
          style={{ 
            width: radius,
            transform: `rotate(${angle + Math.PI}rad)`,
            transformOrigin: 'left center',
          }}
          className={`absolute left-1/2 top-1/2 h-px transition-all duration-1000 ${active ? 'bg-gradient-to-r from-sinai-glow-orange to-transparent opacity-80' : 'bg-white/5 opacity-10'} pointer-events-none`}
        />

        {/* Brand Logo Container */}
        <div className={`relative w-24 h-24 flex items-center justify-center rounded-[2rem] border backdrop-blur-3xl transition-all duration-700 ${active ? 'bg-sinai-glow-orange/10 border-sinai-glow-orange/50 shadow-[0_0_60px_rgba(242,162,75,0.3)] rotate-[10deg]' : 'bg-white/[0.02] border-white/5 group-hover:border-white/20'}`}>
          <div className={`relative w-12 h-12 transition-all duration-500 ${active ? 'scale-125' : 'opacity-40 group-hover:opacity-100 group-hover:scale-110'}`}>
            <Image 
              src={item.isLocal ? item.slug : `https://cdn.simpleicons.org/${item.slug}/white`} 
              alt={item.name} 
              fill 
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Holographic Label */}
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
  const [activeTab, setActiveTab] = useState("frontend");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const categories = TECH_CATEGORIES;
  const activeItems = categories.find(c => c.id === activeTab)?.items || [];

  return (
    <div className="relative w-full min-h-[1000px] flex items-center justify-center py-20 overflow-visible">
      {/* Central Web Sphere - The Core */}
      <div className="relative z-20 flex items-center justify-center scale-125 lg:scale-150">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 border border-sinai-glow-orange/20 rounded-full border-dashed"
        />
        
        <div className="relative w-48 h-48 rounded-full bg-black/40 backdrop-blur-3xl border border-white/10 flex items-center justify-center overflow-hidden group shadow-[0_0_80px_rgba(242,162,75,0.2)]">
          {/* Internal Glowing Core */}
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.3)_0%,transparent_70%)]"
          />
          
          <div className="relative z-10 flex flex-col items-center">
            <Globe className="w-12 h-12 text-sinai-glow-orange mb-3 animate-pulse" />
            <div className="text-[10px] font-mono text-white tracking-[0.5em] font-black">WEB</div>
            <div className="text-[8px] font-mono text-sinai-glow-orange tracking-[0.2em] font-bold">ECOSYSTEM</div>
          </div>

          {/* Spinning Outer Ring */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-[3px] border-sinai-glow-orange/10 border-t-sinai-glow-orange/40 rounded-full"
          />
        </div>

        {/* Tab Selectors orbiting the Core */}
        <div className="absolute -top-64 flex gap-4 bg-white/[0.03] backdrop-blur-3xl border border-white/5 p-2 rounded-full z-40">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-3 rounded-full text-[9px] font-mono tracking-[0.3em] uppercase transition-all duration-700 ${
                activeTab === cat.id 
                  ? "bg-sinai-glow-orange text-white shadow-[0_0_40px_rgba(242,162,75,0.5)] scale-105" 
                  : "text-zinc-500 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat.id}
            </button>
          ))}
        </div>
      </div>

      {/* Orbital Tech Constellation */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {activeItems.map((item, i) => (
            <div key={`${activeTab}-${item.name}`} className="pointer-events-auto" onMouseEnter={() => setHoveredNode(item.name)} onMouseLeave={() => setHoveredNode(null)}>
              <TechSingularityNode 
                item={item} 
                index={i} 
                total={activeItems.length} 
                active={hoveredNode === item.name}
              />
            </div>
          ))}
        </AnimatePresence>
      </div>

      {/* Technical HUD Overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-10 w-px h-64 bg-gradient-to-b from-transparent via-sinai-glow-orange to-transparent" />
        <div className="absolute bottom-1/4 right-10 w-px h-64 bg-gradient-to-b from-transparent via-sinai-glow-orange to-transparent" />
      </div>
    </div>
  );
};
const WEB_CAPABILITIES = [
  {
    id: "01",
    title: "Cloud Infrastructure",
    desc: "Automated deployment pipelines and serverless scaling on AWS, Vercel, or GCP, engineered for high-availability and zero-downtime environments.",
    icon: <CloudUpload className="w-8 h-8" />,
    image: "/images/project2.png"
  },
  {
    id: "02",
    title: "Security & Scale",
    desc: "Hardened security protocols and elastic architectures designed to handle millions of concurrent users with military-grade encryption and protection.",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "/images/project3.png"
  },
  {
    id: "03",
    title: "Cinematic UI/UX",
    desc: "Motion-first design systems that combine aesthetic precision with functional utility for an immersive and memorable digital journey.",
    icon: <Palette className="w-8 h-8" />,
    image: "/images/project1.png"
  },
  {
    id: "04",
    title: "Full-Stack Architecture",
    desc: "Scalable backend systems and complex API orchestrations integrated with modern frontend frameworks for seamless end-to-end masterclass engineering.",
    icon: <Layers className="w-8 h-8" />,
    image: "/images/project2.png"
  },
  {
    id: "05",
    title: "Website Optimization & Support",
    desc: "Elite performance tuning, SEO dominance, and 24/7 technical support to ensure your digital presence remains optimal and synchronized.",
    icon: <Zap className="w-8 h-8" />,
    image: "/images/project3.png"
  }
];

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
              APEX_ENGINE_V2.0
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
              {i === 0 ? "REACT_19" : i === 1 ? "NEXT_JS" : "V8_ENG"}
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

const OrbitalNode = ({ cap, index, total, active, onEnter, onLeave }: { cap: WebCapability, index: number, total: number, active: boolean, onEnter: () => void, onLeave: () => void }) => {
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

const CapabilityDetailView = ({ cap }: { cap: WebCapability }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-12 rounded-[4rem] relative overflow-hidden group pointer-events-auto">
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

      <div className="space-y-8 relative z-10 text-left">
        <div className="flex items-center gap-4">
          <div className="px-4 py-1.5 rounded-full bg-sinai-glow-orange/10 border border-sinai-glow-orange/30 text-sinai-glow-orange text-[9px] font-mono font-bold tracking-widest uppercase">
            Web_Capability // {cap.id}
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
            ENGINE_SYNC: ACTIVE
          </span>
          <span className="w-px h-4 bg-white/10" />
          <span>V8_VER: 12.4.X</span>
        </div>
      </div>
    </div>
  );
};

const Particles = ({ count = 10 }: { count?: number }) => {
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
          initial={{ x: pos.x, y: "110%" }}
          animate={{ y: "-10%", rotate: 360 }}
          transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear", delay: pos.delay }}
          className="absolute w-1 h-1 bg-sinai-glow-orange/20 rounded-full blur-[1px]"
        />
      ))}
    </>
  );
};

const WebDevelopmentHero = () => {
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
                  WEB_ENGINEERING // SOL_03
                </span>
              </div>
              
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white">
                Web <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-white/40">
                  Mastery.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zinc-400 max-w-xl font-light leading-relaxed">
                We craft high-performance, cinematic web experiences using production-grade architectures that prioritize speed, security, and world-class engagement.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <Link href="/contact" className="group relative px-12 py-6 rounded-full overflow-hidden bg-sinai-glow-orange text-white font-bold text-sm tracking-[0.3em] uppercase transition-all hover:shadow-[0_0_50px_rgba(242,162,75,0.4)]">
                <span className="relative z-10">Initialize Engagement</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              
              <Link href="#capabilities" className="px-12 py-6 rounded-full bg-white/[0.03] border border-white/10 text-white font-bold text-sm tracking-[0.3em] uppercase hover:bg-white/[0.08] hover:border-white/20 transition-all">
                Registry Details
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/5">
              {[
                { label: "FRAME_TIME", value: "60FPS" },
                { label: "CORE_VITAL", value: "A+" },
                { label: "STACK_TYPE", value: "MODERN" }
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
                src="/images/web-dev-hero-orange.png" 
                alt="Web Development Excellence" 
                fill 
                sizes="(max-width: 1200px) 100vw, 800px"
                className="object-cover group-hover:scale-110 transition-transform duration-[5000ms] brightness-75"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              {/* Technical HUD Overlays */}
              <div className="absolute top-10 right-10 text-[8px] font-mono text-sinai-glow-orange/80 tracking-[0.2em] text-right">
                RUNTIME: STABLE<br />
                STACK_SYNC: OPTIMAL
              </div>
              
              <div className="absolute bottom-10 left-10 text-[8px] font-mono text-zinc-500 tracking-[0.2em]">
                V8_ENGINE_V12.4<br />
                © APEX_EXPERTS_WEB
              </div>

              {/* Scanning Line Animation */}
              <motion.div 
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sinai-glow-orange/40 to-transparent z-20 pointer-events-none"
              />
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

export default function WebDevelopmentPage() {
  const [activeCapId, setActiveCapId] = useState<string | null>(null);
  const activeCap = WEB_CAPABILITIES.find(c => c.id === activeCapId);

  return (
    <div className="relative bg-[#050505] text-white min-h-screen selection:bg-sinai-glow-orange selection:text-black">
      <Header />
      
      <WebDevelopmentHero />
      
      {/* Capability Hub */}
      <section id="capabilities" className="py-48 relative overflow-hidden bg-[#030303] min-h-[1000px]">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-32">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-sinai-glow-orange/50" />
                <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Web_Orchestrator // V2.0</span>
                <div className="w-8 h-px bg-sinai-glow-orange/50" />
              </div>
              <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tight leading-none">
                The Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white/40">Capability Hub</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="relative max-w-7xl mx-auto h-[700px] flex items-center justify-center">
            <div className="absolute inset-0 z-50 pointer-events-none">
              {WEB_CAPABILITIES.map((cap, i) => (
                <OrbitalNode 
                  key={cap.id} 
                  cap={cap} 
                  index={i} 
                  total={WEB_CAPABILITIES.length}
                  active={activeCapId === cap.id}
                  onEnter={() => setActiveCapId(cap.id)}
                  onLeave={() => setActiveCapId(null)}
                />
              ))}
            </div>

            <div className="relative w-full max-w-4xl h-full flex items-center justify-center z-40 pointer-events-none">
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
          RUNTIME: STABLE<br />
          STACK_PIPELINE: ACTIVE<br />
          V8_STATUS: OPTIMAL
        </div>
      </section>

      {/* Deep Dive: Custom Website Development - Technical Design // 01 */}
      <section className="pt-64 pb-32 relative bg-[#050505] overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <SectionReveal>
              <div className="space-y-16 text-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-sinai-glow-orange/30" />
                    <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Deep_Dive // 01</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                    Custom <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30 text-balance">Website <br /> Development</span>
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/20 transition-colors">
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-sinai-glow-orange/30 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-sinai-glow-orange animate-pulse" />
                      Premium Web Architectures
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">
                      We specialize in crafting bespoke digital experiences that combine high-authority design with production-grade engineering. Our websites are engineered for scale, speed, and cinematic user engagement across all platforms.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Corporate Websites", desc: "High-authority digital presence for enterprises." },
                      { title: "Business Websites", desc: "Scalable solutions for operational growth." },
                      { title: "Landing Pages", desc: "High-conversion masterpieces with maximum impact." },
                      { title: "Multi-Language", desc: "Globalized architectures & RTL support." },
                      { title: "Performance Tuning", desc: "Optimizing for Core Web Vitals excellence." },
                      { title: "Support", desc: "24/7 surveillance & optimization.", isCTA: true }
                    ].map((service, i) => (
                      service.isCTA ? (
                        <Link href="/contact" key={i} className="p-6 rounded-2xl bg-sinai-glow-orange/10 border border-sinai-glow-orange/40 hover:bg-sinai-glow-orange/20 transition-all duration-300 group/item relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/20 to-transparent opacity-50" />
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
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/30 transition-all duration-300 group/item">
                          <div className="text-[9px] font-mono text-sinai-glow-orange mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap">{service.title}</div>
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
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group">
                  <Image 
                    src="/images/web-custom-dev.png" 
                    alt="Custom Website Development" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50"
                  />
                  
                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Scanning Line */}
                  <motion.div 
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-sinai-glow-orange/20 to-transparent z-20 pointer-events-none"
                  />

                  {/* Technical Frame Markers */}
                  <div className="absolute top-10 left-10 text-[8px] font-mono text-sinai-glow-orange/60 tracking-widest">
                    V8_ENGINE: ACTIVE<br />
                    RENDER_TIME: 14MS
                  </div>
                  <div className="absolute bottom-10 right-10 text-[8px] font-mono text-zinc-500 text-right">
                    NEXT_JS_V15<br />
                    © APEX EXPERTS SOLUTIONS
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-12 top-1/4 p-6 rounded-3xl bg-black/80 backdrop-blur-3xl border border-sinai-glow-orange/30 z-30 shadow-2xl max-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-sinai-glow-orange mb-2 tracking-widest font-black">CORE_VITALS</div>
                  <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ width: ["0%", `${70 + i * 10}%`, "0%"] }}
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

      {/* Deep Dive: Full-Stack Web Development - Technical Design // 02 */}
      <section className="py-32 relative bg-[#030303] overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            {/* Image on the Left */}
            <SectionReveal>
              <div className="relative order-2 lg:order-1">
                {/* Main Holographic Core */}
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group">
                  <Image 
                    src="/images/web-fullstack-dev.png" 
                    alt="Full-Stack Architecture" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50"
                  />
                  
                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Scanning Line */}
                  <motion.div 
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-sinai-glow-orange/20 to-transparent z-20 pointer-events-none"
                  />

                  {/* Technical Frame Markers */}
                  <div className="absolute top-10 right-10 text-[8px] font-mono text-sinai-glow-orange/60 tracking-widest text-right">
                    STACK_SYNC: OPTIMAL<br />
                    LATENCY: 8MS
                  </div>
                  <div className="absolute bottom-10 left-10 text-[8px] font-mono text-zinc-500">
                    FULL_STACK_ORCHESTRATOR<br />
                    © APEX EXPERTS SOLUTIONS
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-12 top-1/4 p-6 rounded-3xl bg-black/80 backdrop-blur-3xl border border-sinai-glow-orange/30 z-30 shadow-2xl max-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-sinai-glow-orange mb-2 tracking-widest font-black">SYSTEM_HEALTH</div>
                  <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-sinai-glow-orange animate-pulse" />
                        <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            animate={{ width: ["10%", `${60 + i * 10}%`, "10%"] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            className="h-full bg-sinai-glow-orange/60"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </SectionReveal>

            {/* Content on the Right */}
            <SectionReveal>
              <div className="space-y-16 text-left order-1 lg:order-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-sinai-glow-orange/30" />
                    <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Deep_Dive // 02</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                    Full-Stack <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30 text-balance">Web <br /> Development</span>
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/20 transition-colors">
                    <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-sinai-glow-orange/30 rounded-tr-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-sinai-glow-orange animate-pulse" />
                      End-to-End Mastery
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">
                      Our full-stack engineers orchestrate the perfect symphony between reactive frontends and robust, scalable backends. We build the entire nervous system of your digital platform, from complex database schemas to intuitive admin control centers.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Frontend Dev", desc: "Reactive, high-fidelity UI engineering." },
                      { title: "Backend Dev", desc: "Scalable server-side logic & API design." },
                      { title: "Database Integration", desc: "Complex data modeling & optimization." },
                      { title: "Admin Dashboards", desc: "Powerful internal management systems." },
                      { title: "API Orchestration", desc: "Seamless third-party & internal syncing." },
                      { title: "Support", desc: "Continuous technical maintenance.", isCTA: true }
                    ].map((service, i) => (
                      service.isCTA ? (
                        <Link href="/contact" key={i} className="p-6 rounded-2xl bg-sinai-glow-orange/10 border border-sinai-glow-orange/40 hover:bg-sinai-glow-orange/20 transition-all duration-300 group/item relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/20 to-transparent opacity-50" />
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
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/30 transition-all duration-300 group/item">
                          <div className="text-[9px] font-mono text-sinai-glow-orange mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap">{service.title}</div>
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

      {/* Deep Dive: E-Commerce & Portal Development - Technical Design // 03 */}
      <section className="py-32 relative bg-[#050505] overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            {/* Content on the Left */}
            <SectionReveal>
              <div className="space-y-16 text-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-sinai-glow-orange/30" />
                    <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Deep_Dive // 03</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-balance">
                    E-Commerce <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">& Portal Development</span>
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/20 transition-colors">
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-sinai-glow-orange/30 rounded-tl-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-sinai-glow-orange animate-pulse" />
                      Global Transaction Engines
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">
                      We engineer high-conversion E-Commerce ecosystems and secure organizational portals. From complex booking logic to multi-tier membership systems, our platforms are built to handle high-frequency transactions with unmatched security and speed.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "E-Commerce Websites", desc: "Feature-rich, scalable digital storefronts." },
                      { title: "Customer Portals", desc: "Self-service hubs for client engagement." },
                      { title: "Booking Platforms", desc: "Complex reservation & scheduling logic." },
                      { title: "Member Portals", desc: "Secure multi-tier access management." },
                      { title: "Payment Systems", desc: "Military-grade encryption & orchestration." },
                      { title: "Support", desc: "Technical surveillance & optimization.", isCTA: true }
                    ].map((service, i) => (
                      service.isCTA ? (
                        <Link href="/contact" key={i} className="p-6 rounded-2xl bg-sinai-glow-orange/10 border border-sinai-glow-orange/40 hover:bg-sinai-glow-orange/20 transition-all duration-300 group/item relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/20 to-transparent opacity-50" />
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
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/30 transition-all duration-300 group/item">
                          <div className="text-[9px] font-mono text-sinai-glow-orange mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap">{service.title}</div>
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

            {/* Image on the Right */}
            <SectionReveal>
              <div className="relative">
                {/* Main Holographic Core */}
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group">
                  <Image 
                    src="/images/web-ecommerce-portal.png" 
                    alt="E-Commerce & Portal Core" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50"
                  />
                  
                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Scanning Line */}
                  <motion.div 
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-sinai-glow-orange/20 to-transparent z-20 pointer-events-none"
                  />

                  {/* Technical Frame Markers */}
                  <div className="absolute top-10 left-10 text-[8px] font-mono text-sinai-glow-orange/60 tracking-widest">
                    PAYMENT_GATE: SECURE<br />
                    USER_NODES: 2.4k ACTIVE
                  </div>
                  <div className="absolute bottom-10 right-10 text-[8px] font-mono text-zinc-500 text-right">
                    PORTAL_ARCH_V2<br />
                    © APEX EXPERTS SOLUTIONS
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-12 top-1/4 p-6 rounded-3xl bg-black/80 backdrop-blur-3xl border border-sinai-glow-orange/30 z-30 shadow-2xl max-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-sinai-glow-orange mb-2 tracking-widest font-black">TRANSACTION_LOAD</div>
                  <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ width: ["10%", `${40 + i * 15}%`, "10%"] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
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

      {/* Deep Dive: Website Optimization & Support - Technical Design // 04 */}
      <section className="py-32 relative bg-[#030303] overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(242,162,75,0.03)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            {/* Image on the Left */}
            <SectionReveal>
              <div className="relative order-2 lg:order-1">
                {/* Main Holographic Core */}
                <div className="relative aspect-square max-w-2xl mx-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group">
                  <Image 
                    src="/images/web-opt-support.png" 
                    alt="Website Optimization Hub" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-[3000ms] brightness-50"
                  />
                  
                  {/* Dynamic HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Scanning Line */}
                  <motion.div 
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-sinai-glow-orange/20 to-transparent z-20 pointer-events-none"
                  />

                  {/* Technical Frame Markers */}
                  <div className="absolute top-10 right-10 text-[8px] font-mono text-sinai-glow-orange/60 tracking-widest text-right">
                    SURVEILLANCE: ACTIVE<br />
                    UPTIME: 99.99%
                  </div>
                  <div className="absolute bottom-10 left-10 text-[8px] font-mono text-zinc-500">
                    OPTIMIZATION_ENGINE_V4<br />
                    © APEX EXPERTS SOLUTIONS
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-12 top-1/4 p-6 rounded-3xl bg-black/80 backdrop-blur-3xl border border-sinai-glow-orange/30 z-30 shadow-2xl max-w-[200px]"
                >
                  <div className="text-[10px] font-mono text-sinai-glow-orange mb-2 tracking-widest font-black">SECURITY_STATUS</div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[8px] font-mono text-white/40">
                      <span>FIREWALL</span>
                      <span className="text-green-500">SECURE</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["100%", "90%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-full bg-green-500/50"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[8px] font-mono text-white/40">
                      <span>THREATS</span>
                      <span className="text-sinai-glow-orange">ZERO</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SectionReveal>

            {/* Content on the Right */}
            <SectionReveal>
              <div className="space-y-16 text-left order-1 lg:order-2">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-sinai-glow-orange/30" />
                    <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] font-bold uppercase">Technical_Deep_Dive // 04</span>
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-balance">
                    Optimization <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-sinai-glow-orange/30">& Support</span>
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative group hover:border-sinai-glow-orange/20 transition-colors">
                    <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-sinai-glow-orange/30 rounded-tr-3xl" />
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-sinai-glow-orange animate-pulse" />
                      Continuous Performance Mastery
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-lg">
                      A website is a living organism. We provide continuous technical surveillance, performance tuning, and security hardening to ensure your digital asset remains at the absolute peak of its potential, 24 hours a day, 7 days a week.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Website Redesign", desc: "Modernizing legacy interfaces for today." },
                      { title: "Performance Tuning", desc: "Core Web Vitals & speed optimization." },
                      { title: "Security Enhancements", desc: "Hardening & vulnerability protection." },
                      { title: "Maintenance & Support", desc: "Proactive updates & bug resolution." },
                      { title: "SEO Optimization", desc: "Technical SEO & search dominance." },
                      { title: "Support", desc: "24/7 technical surveillance.", isCTA: true }
                    ].map((service, i) => (
                      service.isCTA ? (
                        <Link href="/contact" key={i} className="p-6 rounded-2xl bg-sinai-glow-orange/10 border border-sinai-glow-orange/40 hover:bg-sinai-glow-orange/20 transition-all duration-300 group/item relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/20 to-transparent opacity-50" />
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
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/30 transition-all duration-300 group/item">
                          <div className="text-[9px] font-mono text-sinai-glow-orange mb-2 tracking-[0.1em] font-black uppercase whitespace-nowrap">{service.title}</div>
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

      {/* Tech Stack Section - Super Premium Interactive Experience */}
      <section className="py-64 relative bg-black overflow-hidden">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(242,162,75,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal>
            <div className="text-center mb-32 space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-sinai-glow-orange animate-pulse" />
                <span className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.4em] font-black uppercase">Technical_Ecosystem // V5.0</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white/40">Tech Stack.</span>
              </h2>
              <p className="text-zinc-500 max-w-2xl mx-auto font-light text-lg">
                We leverage the world&apos;s most advanced frameworks and architectural patterns to build digital empires.
              </p>
            </div>
          </SectionReveal>

          {/* Holographic Tech Deck */}
          <div className="relative max-w-6xl mx-auto">
            <TechSingularity />
          </div>
        </div>

        {/* Ambient Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <Particles count={15} />
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
                <p className="text-xl md:text-3xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed">
                  Join forces with <span className="text-white font-bold">APEX Experts</span> to engineer the next generation of digital excellence.
                </p>
              </div>

              <div className="flex flex-col items-center gap-8 pt-8">
                <Link href="/contact" className="group relative px-24 py-10 rounded-full overflow-hidden bg-sinai-glow-orange text-white font-black text-xl tracking-[0.4em] uppercase transition-all hover:shadow-[0_0_100px_rgba(242,162,75,0.6)] hover:scale-105 active:scale-95 duration-500">
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
    </div>
  );
}
