"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { ArrowRight, Bot, Database, Globe, Smartphone } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    slug: "ai-automation",
    title: "AI & Process Automation",
    desc: "Revolutionizing enterprise workflows with intelligent autonomous agents and cognitive RPA architectures.",
    detailedDesc: "We engineer autonomous agents that can perceive, reason, and execute complex workflows without constant human intervention. Our systems connect to your core databases and analyze trends to suggest and implement adjustments in real-time.",
    tags: ["Agentic AI", "RPA", "LLM Ops"],
    icon: <Bot className="w-8 h-8" />,
    specs: { engine: "NeuralCore v4", latency: "<10ms", autonomy: "Level 5" }
  },
  {
    id: "02",
    slug: "oracle-apex",
    title: "Oracle APEX Development",
    desc: "Building mission-critical enterprise applications with database precision and low-code speed.",
    detailedDesc: "Leveraging the world's most advanced low-code platform to build data-centric applications that are secure, scalable, and fully integrated with your Oracle ecosystem. We specialize in complex ERP and CRM customizations.",
    tags: ["Low-Code Elite", "Database Design", "Oracle Cloud"],
    icon: <Database className="w-8 h-8" />,
    specs: { engine: "Oracle 23c", precision: "Nano", scale: "Enterprise" }
  },
  {
    id: "03",
    slug: "web-development",
    title: "Web Engineering",
    desc: "Crafting high-performance, cinematic web experiences with production-grade Next.js architectures.",
    detailedDesc: "Creating the intersection of high-engineering and digital art. We build scalable, motion-first web platforms that prioritize performance (100 Lighthouse scores) and user engagement through immersive design.",
    tags: ["Next.js", "GSAP", "Scalable UI"],
    icon: <Globe className="w-8 h-8" />,
    specs: { engine: "Vercel Edge", motion: "120fps", lighthouse: "100" }
  },
  {
    id: "04",
    slug: "mobile-development",
    title: "Mobile Architecture",
    desc: "Engineering premium native and cross-platform mobile apps with world-class UX/UI.",
    detailedDesc: "Focusing on military-grade structural integrity for mobile. We deliver high-performance iOS and Android applications with advanced security layers and seamless cross-device synchronization.",
    tags: ["iOS/Android", "React Native", "Secure Mobile"],
    icon: <Smartphone className="w-8 h-8" />,
    specs: { engine: "Native Core", security: "AES-256", sync: "Real-time" }
  }
];

export default function ServicesClient() {
  return (
    <main className="min-h-screen bg-[#06080a] text-white pt-40 pb-40 overflow-hidden relative selection:bg-sinai-glow-orange selection:text-black">
      {/* Background Architectural Grid (Parity with Homepage) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#f2a24b 0.5px, transparent 0.5px), linear-gradient(90deg, #f2a24b 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }} />
      
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sinai-glow-orange/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cinematic Page Header - Terminal Style (Parity with TerminalHero) */}
        <SectionReveal>
          <div className="max-w-5xl mx-auto mb-32 space-y-12">
            <div className="flex items-center gap-6">
              <div className="h-px w-20 bg-sinai-glow-orange/30" />
              <div className="px-4 py-1.5 rounded-sm bg-sinai-glow-orange/10 border border-sinai-glow-orange/40">
                <span className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.5em] font-black uppercase">SYSTEM_MANIFEST // CORE_CAPABILITIES</span>
              </div>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase">
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-white/40">Architectures.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <p className="text-2xl text-zinc-400 font-light leading-relaxed italic">
                A definitive catalog of our engineering operation units. Each module is designed to transform complex enterprise challenges into streamlined technical advantages.
              </p>
              <div className="flex flex-col justify-end items-start md:items-end gap-4 text-[10px] font-mono text-zinc-700 tracking-[0.3em] uppercase">
                <div>{"// STATUS: ALL_SYSTEMS_OPERATIONAL"}</div>
                <div>{"// LOCATION: GLOBAL_DISTRIBUTION_NODE"}</div>
                <div>{"// VERSION: 2024.1.Q2"}</div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Services Grid - High Fidelity / Premium Version of Homepage Design */}
        <div className="max-w-7xl mx-auto space-y-32">
          {SERVICES.map((service) => (
            <SectionReveal key={service.id}>
              <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                
                {/* Left: Metadata & ID */}
                <div className="lg:col-span-1 hidden lg:flex flex-col items-center pt-4">
                  <div className="text-4xl font-black text-white/5 group-hover:text-sinai-glow-orange/20 transition-colors duration-500">{service.id}</div>
                  <div className="h-40 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent mt-6" />
                </div>

                {/* Center: Main Content */}
                <div className="lg:col-span-7 space-y-12">
                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-sinai-glow-orange group-hover:border-sinai-glow-orange/40 transition-all duration-500 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-sinai-glow-orange/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service.icon}
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">Capability_Module</div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white group-hover:text-sinai-glow-orange transition-colors duration-500">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-2xl text-zinc-400 font-light leading-relaxed">
                      {service.detailedDesc}
                    </p>
                  </div>

                  {/* Technical Spec HUD */}
                  <div className="grid grid-cols-3 gap-6 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl group-hover:border-sinai-glow-orange/10 transition-colors">
                    {Object.entries(service.specs).map(([key, val]) => (
                      <div key={key}>
                        <div className="text-[8px] font-mono text-zinc-600 mb-1 uppercase tracking-widest">{key}</div>
                        <div className="text-sm font-bold text-white tracking-tight uppercase">{val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-5 py-2 rounded-full bg-white/[0.02] border border-white/5 text-[10px] font-mono text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 group-hover:border-white/10 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: CTA & Interactive Element */}
                <div className="lg:col-span-4 lg:pt-20">
                  <Link href={`/services/${service.slug}`} className="group/btn relative block p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/10 overflow-hidden hover:border-sinai-glow-orange/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-sinai-glow-orange/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 ease-out" />
                    
                    <div className="relative z-10 space-y-8">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.4em] uppercase font-black">Initialization</span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-sinai-glow-orange group-hover/btn:border-sinai-glow-orange transition-all">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="text-2xl font-black uppercase text-white leading-none">Access Full <br/> Technical Spec</div>
                        <p className="text-sm text-zinc-500 group-hover/btn:text-zinc-300 transition-colors">Retrieve deep architectural documentation and deployment strategies.</p>
                      </div>
                    </div>

                    {/* Technical HUD Decoration */}
                    <div className="absolute bottom-6 right-8 text-[8px] font-mono text-zinc-800 tracking-widest uppercase opacity-40">
                      SECURE_NODE_ACCESS
                    </div>
                  </Link>
                </div>

              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Global System Status Footer */}
        <div className="mt-64 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-12">
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest mb-1">Status</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest leading-none">ALL_SYSTEMS_NOMINAL</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest mb-1">Architecture</span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">DISTRIBUTED_CORE_V2</span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-zinc-800 tracking-[0.5em] uppercase hidden lg:block text-right">
            Apex_Experts_Operations_Registry<br />
            System_Build_Hash: 0x92AF_B122
          </div>
        </div>
      </div>

      {/* Background Particles (Parity with Home) */}
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
