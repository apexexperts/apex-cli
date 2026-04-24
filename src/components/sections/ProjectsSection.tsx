"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  metrics: Record<string, string>;
  image: string;
  logo?: string;
  videoUrl?: string;
  desc: string;
  features?: string[];
  ctaText?: string;
  tech: string[];
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "ASKLYZE",
    client: "APEX EXPERTS",
    category: "AI INSIGHTS PLUGIN",
    metrics: { dashboards: "Native", charts: "AI-Gen", reports: "Automated" },
    image: "/images/asklyze-premium.png",
    logo: "/images/asklyze-logo.png",
    desc: "Oracle APEX plugin for AI-powered business insights. Turn natural-language questions into reports, charts, and dashboards inside Oracle APEX with zero data movement.",
    features: [
      "Fast Time to Value",
      "Natural-Language Analytics",
      "Built Inside Oracle APEX",
      "Zero Data Movement",
      "Less Effort, More Productivity",
      "Purpose-Built for Oracle APEX"
    ],
    ctaText: "Explore ASKLYZE",
    tech: ["Oracle APEX", "Oracle Database", "Natural Language", "AI Analytics"]
  },
  {
    id: "02",
    title: "MyQuery",
    client: "APEX EXPERTS",
    category: "AI ANALYTICS PLATFORM",
    metrics: { velocity: "Instant", sql: "Zero", integrations: "22+" },
    image: "/images/myquery-premium.png",
    logo: "/images/myquery-logo.png",
    desc: "The AI analytics platform that puts data in everyone's hands. Type a question in plain English, and get accurate reports, charts, and dashboards instantly without SQL.",
    features: [
      "Instant Decision Velocity",
      "Accessibility Without Compromise",
      "Data Team Leverage",
      "Governed Self-Service",
      "22+ Native Integrations",
      "Auto-Generated Dashboards"
    ],
    ctaText: "Explore MyQuery",
    tech: ["Natural Language", "AI Analytics", "150+ Connections"]
  },
  {
    id: "03",
    title: "Tasto",
    client: "APEX EXPERTS",
    category: "SAAS METRICS & GROWTH",
    metrics: { mrr_sync: "Real-time", forecasts: "AI-Driven", retention: "Cohorts" },
    image: "/images/tasto-premium.png",
    logo: "/images/tasto-logo.png",
    desc: "Tasto unites analytics, forecasting, and benchmarks into one real-time view. Turn recurring revenue into a system of record with automated subscription tracking across multiple billing systems.",
    features: [
      "Unified SaaS Clarity",
      "Predictive Growth Forecasting",
      "Cohort Analysis & Retention",
      "Global Benchmarking",
      "Multi-Billing System Sync",
      "Accurate MRR Reporting"
    ],
    ctaText: "Explore Tasto",
    tech: ["Financial AI", "SaaS Analytics", "Forecasting", "Billing Integration"]
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-40 !bg-transparent">
      {/* Decorative Blur - Exact match from ProcessSection background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sinai-glow-orange/5 blur-[120px] pointer-events-none" />

      {/* Aggressive Reset for any inherited glows */}
      <style jsx>{`
        section#projects::after, section#projects::before { display: none !important; }
      `}</style>
      {/* Header Section - Clean & Strong */}
      <div className="max-w-7xl mx-auto px-6 mb-40 relative z-10 !bg-transparent">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-sinai-glow-orange" />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-sinai-glow-orange font-bold">
                04 // Selected Works
              </span>
            </div>
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.85] uppercase">
              Engineering <br />
              <span className="text-zinc-800">Excellence.</span>
            </h2>
          </div>
          <div className="max-w-sm text-right hidden md:block">
            <p className="text-zinc-500 font-mono text-[10px] leading-relaxed tracking-widest uppercase">
              Curated selection of high-performance <br />
              AI implementations & digital systems.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Feed */}
      <div className="container mx-auto px-6 space-y-64 relative z-10">
        {PROJECTS.map((project, index) => (
          <ProjectShowcase key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
    >
      {/* Media Column */}
      <motion.div 
        style={{ y: isEven ? y : 0 }}
        className={`lg:col-span-7 relative ${isEven ? "" : "lg:order-2"}`}
      >
        <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-zinc-950 border border-white/5 group shadow-2xl">
          <ProjectMedia project={project} />
          
          {/* Internal Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
          <div className="absolute inset-0 bg-sinai-glow-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Subtle Technical Label */}
          <div className="absolute top-8 left-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
            <div className="w-1 h-1 rounded-full bg-sinai-glow-orange animate-pulse" />
            <span className="text-[8px] font-mono text-white/60 tracking-[0.4em] uppercase">Deployment_Active // 0x{project.id}</span>
          </div>
        </div>
      </motion.div>

      {/* Info Column */}
      <div className={`lg:col-span-5 space-y-12 ${isEven ? "" : "lg:order-1"}`}>
        <div className="space-y-8">
          {project.logo ? (
            <div className="relative w-32 h-16 mb-8">
              <Image 
                src={project.logo} 
                alt={`${project.title} logo`} 
                fill 
                sizes="128px"
                className="object-contain object-left opacity-80" 
              />
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.4em] font-bold uppercase">{project.client}</div>
              <h3 className="text-5xl font-black tracking-tighter text-white uppercase">{project.title}</h3>
            </div>
          )}

          <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-md">
            {project.desc}
          </p>
        </div>

        {/* Minimal Metrics */}
        <div className="flex gap-16">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <div className="text-[8px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-2">{key}</div>
              <div className="text-2xl font-bold text-white font-mono tracking-tighter whitespace-nowrap">{value}</div>
              <div className="h-0.5 w-4 bg-sinai-glow-orange/20" />
            </div>
          ))}
        </div>

        {/* Tech Stack - Clean Line */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-zinc-600 font-mono text-[9px] tracking-widest uppercase border-t border-white/5 pt-8">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div>
          <button className="group relative py-4 flex items-center gap-6 overflow-hidden">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white group-hover:text-sinai-glow-orange transition-colors">
              {project.ctaText || "Explore Case Study"}
            </span>
            <div className="h-px w-12 bg-white/10 group-hover:w-20 group-hover:bg-sinai-glow-orange transition-all duration-500" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectMedia({ project }: { project: Project }) {
  if (project.videoUrl) {
    const isGif = project.videoUrl.endsWith(".gif");
    if (isGif) {
      return (
        <img 
          src={project.videoUrl} 
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2000ms]"
        />
      );
    }
    return (
      <video
        src={project.videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2000ms]"
      />
    );
  }

  return (
    <Image 
      src={project.image} 
      alt={project.title} 
      fill 
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms]"
    />
  );
}
