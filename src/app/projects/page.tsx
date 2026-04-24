"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { ArrowRight, Terminal, Database, Layout } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    slug: "asklyze",
    title: "Asklyze",
    client: "Strategic Research AI",
    desc: "An enterprise-grade autonomous research agent that synthesizes complex market data into actionable intelligence.",
    detailedDesc: "Asklyze represents the pinnacle of agentic AI. It doesn't just search; it reasons. By connecting to dozens of real-time data sources, it creates a coherent narrative of market shifts before they happen.",
    image: "/images/asklyze-premium.png",
    tags: ["Agentic AI", "Market Intelligence", "Next.js"],
    icon: <Terminal className="w-8 h-8" />,
    specs: { status: "PRODUCTION", deployment: "AWS_CLOUD", build: "0x7F41" }
  },
  {
    id: "02",
    slug: "myquery",
    title: "MyQuery",
    client: "Data Engineering Tool",
    desc: "Advanced SQL orchestration and database visualization platform for high-performance engineering teams.",
    detailedDesc: "Built for data engineers by data engineers. MyQuery provides a cinematic interface for managing complex Oracle and PostgreSQL clusters with unparalleled visual precision.",
    image: "/images/myquery-premium.png",
    tags: ["SQL Orchestration", "React", "Data Viz"],
    icon: <Database className="w-8 h-8" />,
    specs: { status: "ACTIVE", deployment: "VPC_ENCLOSED", build: "0x2B92" }
  },
  {
    id: "03",
    slug: "tasto",
    title: "Tasto",
    client: "E-Commerce Experience",
    desc: "A cinematic, premium e-commerce platform redefining digital retail through motion-first design.",
    detailedDesc: "Tasto proves that high-performance doesn't have to mean boring. We've created a sub-100ms LCP experience that maintains the visual depth of a luxury fashion editorial.",
    image: "/images/tasto-premium.png",
    tags: ["E-Commerce", "GSAP", "Performance"],
    icon: <Layout className="w-8 h-8" />,
    specs: { status: "PRODUCTION", deployment: "EDGE_CDN", build: "0x11A4" }
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#06080a] text-white pt-40 pb-40 overflow-hidden relative selection:bg-sinai-glow-orange selection:text-black">
      {/* Background Architectural Grid (Parity with Services/Home) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#f2a24b 0.5px, transparent 0.5px), linear-gradient(90deg, #f2a24b 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }} />
      
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sinai-glow-orange/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cinematic Page Header - Terminal Style (Total Parity) */}
        <SectionReveal>
          <div className="max-w-5xl mx-auto mb-32 space-y-12">
            <div className="flex items-center gap-6">
              <div className="h-px w-20 bg-sinai-glow-orange/30" />
              <div className="px-4 py-1.5 rounded-sm bg-sinai-glow-orange/10 border border-sinai-glow-orange/40">
                <span className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.5em] font-black uppercase">PRODUCTION_REGISTRY // DEPLOYMENT_ARCHIVE</span>
              </div>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase">
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-white/40">Deployments.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <p className="text-2xl text-zinc-400 font-light leading-relaxed italic">
                A definitive catalog of our production-grade deployments. Each entry represents a collision of technical precision and elite aesthetic execution.
              </p>
              <div className="flex flex-col justify-end items-start md:items-end gap-4 text-[10px] font-mono text-zinc-700 tracking-[0.3em] uppercase text-right">
                <div>{"// REGISTRY_SECURE: YES"}</div>
                <div>{"// ENCRYPTION: AES_256"}</div>
                <div>{"// ACCESS_LEVEL: GLOBAL_STRATEGIC"}</div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Projects Grid - Mirroring Services Page Structure Exactly */}
        <div className="max-w-7xl mx-auto space-y-32">
          {PROJECTS.map((project) => (
            <SectionReveal key={project.id}>
              <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                {/* Left: Metadata & ID */}
                <div className="lg:col-span-1 hidden lg:flex flex-col items-center pt-4">
                  <div className="text-4xl font-black text-white/5 group-hover:text-sinai-glow-orange/20 transition-colors duration-500">{project.id}</div>
                  <div className="h-40 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent mt-6" />
                </div>

                {/* Center: Main Content */}
                <div className="lg:col-span-7 space-y-12">
                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-sinai-glow-orange group-hover:border-sinai-glow-orange/40 transition-all duration-500 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-sinai-glow-orange/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {project.icon}
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">{project.client}</div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white group-hover:text-sinai-glow-orange transition-colors duration-500">
                          {project.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-2xl text-zinc-400 font-light leading-relaxed italic">
                      {project.detailedDesc}
                    </p>
                  </div>

                  {/* Technical Spec HUD (Mirroring Services Specs) */}
                  <div className="grid grid-cols-3 gap-6 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl group-hover:border-sinai-glow-orange/10 transition-colors">
                    {Object.entries(project.specs).map(([key, val]) => (
                      <div key={key}>
                        <div className="text-[8px] font-mono text-zinc-600 mb-1 uppercase tracking-widest">{key}</div>
                        <div className="text-sm font-bold text-white tracking-tight uppercase">{val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-5 py-2 rounded-full bg-white/[0.02] border border-white/5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 group-hover:border-white/10 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: CTA & Media Preview (Mirroring Services Box) */}
                <div className="lg:col-span-4 lg:pt-4">
                  <Link href={`/projects/${project.slug}`} className="group/btn relative block rounded-[3.5rem] bg-white/[0.02] border border-white/10 overflow-hidden hover:border-sinai-glow-orange/40 transition-all duration-500">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover scale-105 group-hover/btn:scale-110 transition-transform duration-1000 brightness-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                      
                      {/* Scanning Line */}
                      <motion.div 
                        animate={{ top: ["-10%", "110%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-px bg-sinai-glow-orange/40 z-20"
                      />
                    </div>

                    <div className="p-10 space-y-8 relative">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.4em] uppercase font-black">Initialization</span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-sinai-glow-orange group-hover/btn:border-sinai-glow-orange transition-all">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="text-2xl font-black uppercase text-white leading-none">Access Project <br/> Archive</div>
                        <p className="text-sm text-zinc-500 group-hover/btn:text-zinc-300 transition-colors">Explore full deployment strategy and technical execution details.</p>
                      </div>
                    </div>
                  </Link>
                </div>

              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Global Footer System Status */}
        <div className="mt-64 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-12">
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest mb-1">Status</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest leading-none">REGISTRY_ONLINE</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest mb-1">Security</span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">ENCRYPTED_VAULT_V4</span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-zinc-800 tracking-[0.5em] uppercase hidden lg:block text-right">
            Apex_Experts_Production_Registry_Core<br />
            System_Build_Hash: 0x92AF_B122
          </div>
        </div>
      </div>

      {/* Background Particles Parity */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: ["110vh", "-10vh"], opacity: [0, 0.6, 0] }}
            transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "linear", delay: i * 3 }}
            className="absolute w-px h-24 bg-gradient-to-t from-transparent via-sinai-glow-orange to-transparent"
            style={{ left: `${15 * i}%` }}
          />
        ))}
      </div>
    </main>
  );
}
