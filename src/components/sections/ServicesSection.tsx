"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "01",
    title: "AI & Process Automation",
    desc: "Revolutionizing workflows with intelligent autonomous agents and robotic process automation (RPA) engineered for maximum operational efficiency.",
    tags: ["Agentic AI", "RPA", "Workflow Optimization"],
    icon: (
      <div className="relative w-12 h-12">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <motion.circle cx="12" cy="12" r="9" stroke="url(#grad1)" strokeWidth="1.5" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} strokeDasharray="4 4" />
          <motion.circle cx="12" cy="12" r="5" stroke="url(#grad1)" strokeWidth="2" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F2A24B" />
              <stop offset="100%" stopColor="#8A3B13" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 bg-sinai-glow-orange/20 blur-xl rounded-full" />
      </div>
    ),
    diagram: (
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none group-hover:opacity-20 transition-opacity">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeDasharray="5 5" fill="none" />
          <motion.path d="M100 20 L100 180 M20 100 L180 100" stroke="currentColor" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        </svg>
      </div>
    )
  },
  {
    id: "02",
    title: "Oracle APEX development",
    desc: "Building world-class, data-centric enterprise applications using Oracle APEX with unparalleled speed, database precision, and enterprise-grade scalability.",
    tags: ["Low-Code Elite", "Database Design", "Oracle Cloud"],
    icon: (
      <div className="relative w-14 h-14">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-[0_0_10px_rgba(242,162,75,0.2)]">
          {/* Ruler (Back Layer) - Top-Left to Bottom-Right (\) - THICKER */}
          <path 
            d="M5.5 2.5 L2.5 5.5 L18.5 21.5 L21.5 18.5 Z" 
            fill="url(#apexGradRuler)" 
          />
          {/* Ruler Hole */}
          <circle cx="6.5" cy="6.5" r="1.5" fill="#000" fillOpacity="0.4" />
          {/* Ticks */}
          <line x1="10" y1="10" x2="12" y2="8" stroke="#000" strokeOpacity="0.3" strokeWidth="0.8" />
          <line x1="13" y1="13" x2="15" y2="11" stroke="#000" strokeOpacity="0.3" strokeWidth="0.8" />
          <line x1="16" y1="16" x2="18" y2="14" stroke="#000" strokeOpacity="0.3" strokeWidth="0.8" />

          {/* Pencil (Front Layer) - Bottom-Left to Top-Right (/) - THICKER */}
          <motion.g
            animate={{ 
              y: [-0.5, 0.5, -0.5],
              rotate: [-1, 1, -1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Pencil Body */}
            <path d="M5.5 21.5 L2.5 18.5 L18.5 2.5 L21.5 5.5 Z" fill="url(#apexGradPencil)" />
            {/* Eraser End at Top-Right */}
            <path d="M18.5 2.5 L21.5 5.5 L23.5 3.5 L20.5 0.5 Z" fill="#FF5252" />
            {/* Metal Ring */}
            <path d="M17 4 L18 3 L20.5 5.5 L19.5 6.5 Z" fill="#C0C0C0" />
            {/* Wood Tip at Bottom-Left */}
            <path d="M5.5 21.5 L2.5 18.5 L0.5 23.5 Z" fill="#E8C39E" />
            {/* Graphite Lead at Bottom-Left */}
            <path d="M2 21 L0.5 23.5 L3 23.5 Z" fill="#333" />
          </motion.g>

          <defs>
            <linearGradient id="apexGradRuler" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F2A24B" />
              <stop offset="100%" stopColor="#FFCC33" />
            </linearGradient>
            <linearGradient id="apexGradPencil" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2196F3" />
              <stop offset="100%" stopColor="#4A90E2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    diagram: (
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none group-hover:opacity-20 transition-opacity">
        <svg width="200" height="200" viewBox="0 0 200 200">
          {[...Array(5)].map((_, i) => (
            <motion.rect key={i} x={40} y={40 + i * 25} width={120} height={15} stroke="currentColor" fill="none" animate={{ x: [40, 50, 40] }} transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }} />
          ))}
        </svg>
      </div>
    )
  },
  {
    id: "03",
    title: "Web Development",
    desc: "Crafting high-performance, cinematic web experiences using modern frameworks and production-grade architectures that prioritize user engagement.",
    tags: ["Next.js", "React", "Scalable UI"],
    icon: (
      <div className="relative w-12 h-12">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <motion.path d="M12 2l10 5v10l-10 5-10-5V7l10-5z" stroke="url(#grad3)" strokeWidth="1.5" initial={{ strokeDashoffset: 0 }} animate={{ strokeDashoffset: [0, 100] }} strokeDasharray="10 5" transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
          <circle cx="12" cy="12" r="3" fill="white" className="animate-pulse" />
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F2A24B" />
              <stop offset="100%" stopColor="#4A90E2" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full" />
      </div>
    ),
    diagram: (
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none group-hover:opacity-20 transition-opacity">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <motion.path d="M50 100 Q100 20 150 100 T250 100" stroke="currentColor" fill="none" strokeDasharray="10 5" initial={{ strokeDashoffset: 0 }} animate={{ strokeDashoffset: -100 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
        </svg>
      </div>
    )
  },
  {
    id: "04",
    title: "Mobile Development",
    desc: "Engineering premium native and cross-platform mobile applications that prioritize speed, advanced security, and world-class UX/UI design.",
    tags: ["iOS/Android", "React Native", "Secure Mobile"],
    icon: (
      <div className="relative w-12 h-12">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <rect x="5" y="2" width="14" height="20" rx="3" stroke="url(#grad4)" strokeWidth="1.5" />
          <motion.path d="M5 18h14" stroke="url(#grad4)" strokeWidth="1" animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} />
          <circle cx="12" cy="19" r="1" fill="white" />
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F2A24B" />
              <stop offset="100%" stopColor="#8A3B13" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 bg-sinai-glow-orange/10 blur-xl rounded-full" />
      </div>
    ),
    diagram: (
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none group-hover:opacity-20 transition-opacity">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <motion.path d="M100 20 L180 160 L20 160 Z" stroke="currentColor" fill="none" initial={{ strokeDashoffset: 0 }} animate={{ strokeDashoffset: [0, 400] }} transition={{ duration: 10, repeat: Infinity }} />
        </svg>
      </div>
    )
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-28 py-32 border-t border-white/5 relative">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: "linear-gradient(#F2A24B 1px, transparent 1px), linear-gradient(90deg, #F2A24B 1px, transparent 1px)", backgroundSize: "60px 60px" }} 
      />

      <div className="flex items-center gap-4 mb-20 relative z-10">
        <div className="h-px w-12 bg-gradient-to-r from-sinai-glow-orange to-transparent" />
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-sinai-glow-orange font-bold">
          02 // Solutions
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {SERVICES.map((service) => (
          <Link
            key={service.id}
            href={
              service.id === "01" ? "/services/ai-automation" : 
              service.id === "02" ? "/services/oracle-apex" : 
              service.id === "03" ? "/services/web-development" : 
              service.id === "04" ? "/services/mobile-development" : 
              "#"
            }
            className="group relative rounded-[3rem] p-12 overflow-hidden transition-all duration-500 bg-white/[0.02] border border-white/10 hover:border-sinai-glow-orange/40 hover:bg-white/[0.04] flex flex-col min-h-[420px]"
          >
            {/* Technical Corner ID */}
            <div className="absolute top-10 right-12 font-mono text-[10px] text-zinc-600 group-hover:text-sinai-glow-orange transition-colors">
              [ SOL_{service.id} ]
            </div>

            {/* Background Diagram */}
            {service.diagram}

            {/* Icon & Content */}
            <div className="relative z-10 space-y-10 h-full flex flex-col">
              <div className="w-24 h-24 rounded-[2rem] bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-sinai-glow-orange/20 transition-all duration-500 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {service.icon}
              </div>

              <div className="space-y-6">
                <h3 className="text-4xl font-bold tracking-tight text-white group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-xl text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Technical Tags */}
              <div className="pt-8 mt-auto flex flex-wrap gap-3">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[10px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-300 group-hover:border-white/10 transition-all font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sinai-glow-orange/15 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </Link>
        ))}
      </div>

      {/* Footer System Status */}
      <div className="mt-20 flex justify-between items-center text-[9px] font-mono text-zinc-700 uppercase tracking-[0.3em]">
        <span>// Operation Units Online</span>
        <div className="flex gap-4 text-zinc-500">
          <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-green-500/40" /> SYSTEM: STABLE</span>
          <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-sinai-glow-orange/40" /> NODES: ACTIVE</span>
        </div>
      </div>
    </section>
  );
}
