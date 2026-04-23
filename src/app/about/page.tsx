"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-[#050505] text-white selection:bg-sinai-glow-orange selection:text-black overflow-hidden">
      
      {/* CEO Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sinai-glow-orange/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sinai-glow-orange/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left: Founder Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                {/* Decorative Frame Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-sinai-glow-orange/30 rounded-tl-3xl z-10" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-sinai-glow-orange/30 rounded-br-3xl z-10" />
                
                <Image 
                  src="/images/avatars/ahmed.png"
                  alt="Ahmed Al-Saied - Founder & CEO"
                  fill
                  className="object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[3s] ease-out grayscale hover:grayscale-0"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                
                {/* Name Tag HUD */}
                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.4em] uppercase mb-1">Architect & Visionary</div>
                  <h3 className="text-2xl font-black tracking-tighter uppercase">Ahmed Al-Saied</h3>
                  <div className="w-12 h-[2px] bg-sinai-glow-orange mt-3" />
                </div>
              </div>
            </motion.div>

            {/* Right: CEO Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-sinai-glow-orange" />
                  <span className="text-xs font-mono text-sinai-glow-orange tracking-[0.5em] uppercase">Leadership Message</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                  Word from <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white">The Founder</span>
                </h1>
              </div>

              <div className="space-y-6 text-zinc-400 text-lg md:text-xl leading-relaxed font-light italic">
                <p className="relative">
                  <span className="absolute -left-8 -top-4 text-6xl font-serif text-sinai-glow-orange/20">"</span>
                  At APEX Experts, we don't just build software; we engineer the future of digital intelligence. Our mission is to bridge the gap between complex AI capabilities and real-world enterprise scalability.
                </p>
                <p>
                  Every line of code we write, every model we train, and every interface we design is driven by a single obsession: <span className="text-white font-medium">Technical Excellence without Compromise.</span>
                </p>
                <p className="relative">
                  We are here to empower visionaries with the tools they need to redefine what's possible in their industries.<span className="absolute -right-8 -bottom-4 text-6xl font-serif text-sinai-glow-orange/20 rotate-180">"</span>
                </p>
              </div>

              <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-1 hover:border-sinai-glow-orange/30 transition-colors group/card">
                  <span className="text-3xl font-black text-white group-hover/card:text-sinai-glow-orange transition-colors">17+</span>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest leading-tight">Years<br/>Experience</span>
                </div>
                <div className="px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-1 hover:border-sinai-glow-orange/30 transition-colors group/card">
                  <span className="text-3xl font-black text-white group-hover/card:text-sinai-glow-orange transition-colors">Oracle</span>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest leading-tight">APEX<br/>Specialist</span>
                </div>
                <div className="px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-1 hover:border-sinai-glow-orange/30 transition-colors group/card">
                  <span className="text-3xl font-black text-white group-hover/card:text-sinai-glow-orange transition-colors">Data</span>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest leading-tight">Driven<br/>Logic</span>
                </div>
                <div className="px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-1 hover:border-sinai-glow-orange/30 transition-colors group/card">
                  <span className="text-3xl font-black text-white group-hover/card:text-sinai-glow-orange transition-colors">AI</span>
                  <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest leading-tight">Native<br/>Philosophy</span>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-8">
                <div className="h-[1px] flex-1 bg-white/10" />
                <div className="flex flex-col items-end">
                  <div className="text-sm font-mono text-white tracking-widest uppercase">Ahmed Al-Saied</div>
                  <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">Founder & CEO</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experimental Vision & Mission: The Neural Spine */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#050505]">
        {/* Background Architectural Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #f2a24b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative">
          
          {/* Central Logical Spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sinai-glow-orange/30 to-transparent hidden md:block">
            <motion.div 
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-1 h-20 bg-sinai-glow-orange shadow-[0_0_15px_#f2a24b] -left-[1.5px]"
            />
          </div>

          <div className="space-y-40">
            
            {/* Vision Node */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="relative order-2 md:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8 relative z-10"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.5em] uppercase">Phase_01</span>
                    <div className="h-px w-20 bg-sinai-glow-orange/20" />
                  </div>
                  <h2 className="text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8] opacity-10 absolute -top-10 -left-10 select-none">Vision</h2>
                  <h3 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-none text-left">
                    Architecting <br/>
                    <span className="text-sinai-glow-orange">The Future</span>
                  </h3>
                  <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-md font-light italic text-left">
                    To be the global architectural benchmark for AI-native enterprise solutions, redefining how businesses interact with data through the lens of technical mastery.
                  </p>
                  <div className="flex items-center gap-6 pt-4">
                    <div className="w-12 h-12 rounded-full border border-sinai-glow-orange/20 flex items-center justify-center group-hover:border-sinai-glow-orange transition-colors">
                      <div className="w-2 h-2 rounded-full bg-sinai-glow-orange animate-ping" />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Global_Standard_Protocol</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="hidden md:flex justify-center order-1 md:order-2">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className="w-80 h-80 relative"
                >
                  <div className="absolute inset-0 border-[0.5px] border-sinai-glow-orange/20 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-10 border-[0.5px] border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-sinai-glow-orange/5 rounded-full blur-3xl" />
                    <span className="text-sinai-glow-orange font-mono text-xs tracking-widest uppercase text-center">Target_Vision</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Mission Node */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="hidden md:flex justify-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className="w-80 h-80 relative"
                >
                  <div className="absolute inset-0 border-t border-l border-white/10 rounded-3xl rotate-45 animate-pulse" />
                  <div className="absolute inset-10 border-b border-r border-sinai-glow-orange/20 rounded-3xl -rotate-45" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                    <span className="text-white font-mono text-xs tracking-widest uppercase text-center">Execution_Core</span>
                  </div>
                </motion.div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8 relative z-10 text-right md:text-left md:pl-20"
                >
                  <div className="flex items-center gap-4 justify-end md:justify-start">
                    <div className="h-px w-20 bg-white/20" />
                    <span className="text-white font-mono text-[10px] tracking-[0.5em] uppercase">Phase_02</span>
                  </div>
                  <h2 className="text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8] opacity-10 absolute -top-10 -right-10 md:-left-10 select-none">Mission</h2>
                  <h3 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-none text-right md:text-left">
                    Engineering <br/>
                    <span className="text-white">The Impact</span>
                  </h3>
                  <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-md ml-auto md:ml-0 font-light italic text-right md:text-left">
                    Empowering global industries through radical innovation and database-driven intelligence. We engineer scalable architectures that transform complexity into simplicity.
                  </p>
                  <div className="flex items-center gap-6 pt-4 justify-end md:justify-start">
                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Active_Deployment_Logic</span>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Floating Background Labels */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 text-[15vh] font-black text-white/[0.02] uppercase tracking-[0.5em] select-none vertical-text hidden lg:block">
          Evolution
        </div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[15vh] font-black text-sinai-glow-orange/[0.02] uppercase tracking-[0.5em] select-none vertical-text hidden lg:block">
          Architecture
        </div>
      </section>

      {/* Experimental Engineering DNA: The Architectural Schematics */}
      <section className="relative py-48 px-6 bg-[#030303] overflow-hidden">
        {/* Background Mesh Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#f2a24b 0.5px, transparent 0.5px), linear-gradient(90deg, #f2a24b 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }} />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="mb-32 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-px bg-sinai-glow-orange" />
              <span className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.5em] uppercase text-left">Strategic_DNA // Schema_v2.0</span>
            </motion.div>
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-left">
              Engineering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white">Foundations</span>
            </h2>
          </div>

          {/* The Schematic Grid */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-y-24 items-center">
            
            {/* Visual Logic Bridge (The Lines) */}
            <div className="absolute inset-0 hidden lg:block pointer-events-none">
              <svg className="w-full h-full opacity-10">
                <motion.path 
                  d="M 200 100 L 800 100 L 800 400 L 200 400 Z" 
                  stroke="#f2a24b" 
                  strokeWidth="0.5" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
                <circle cx="200" cy="100" r="2" fill="#f2a24b" />
                <circle cx="800" cy="100" r="2" fill="#f2a24b" />
                <circle cx="800" cy="400" r="2" fill="#f2a24b" />
                <circle cx="200" cy="400" r="2" fill="#f2a24b" />
              </svg>
            </div>

            {/* DNA Nodes */}
            {[
              { id: "01", title: "Precision", col: "lg:col-span-5", align: "left", desc: "Military-grade structural integrity in every byte.", tech: "ERR_TOLERANCE: 0.0001%" },
              { id: "02", title: "Intelligence", col: "lg:col-span-5 lg:col-start-8", align: "right", desc: "Autonomous reasoning embedded in the architecture.", tech: "NEURAL_SYNAPSE: 4.2ms" },
              { id: "03", title: "Precision", col: "lg:col-span-5", align: "left", desc: "Enterprise-grade Oracle database supremacy.", tech: "QUERY_PRECISION: NANO" },
              { id: "04", title: "Cinematic", col: "lg:col-span-5 lg:col-start-8", align: "right", desc: "The intersection of high-engineering and art.", tech: "MOTION_FIDELITY: 120fps" }
            ].map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`${node.col} relative group cursor-crosshair`}
              >
                <div className={`space-y-6 ${node.align === 'right' ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`flex items-center gap-4 ${node.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                    <span className="text-4xl font-black text-white/5 group-hover:text-sinai-glow-orange/20 transition-colors duration-500">{node.id}</span>
                    <div className="h-px w-12 bg-white/10 group-hover:w-20 group-hover:bg-sinai-glow-orange/40 transition-all duration-500" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase text-white group-hover:text-sinai-glow-orange transition-all duration-500">
                      {node.title}
                    </h3>
                    <p className="text-zinc-500 text-lg max-w-sm group-hover:text-zinc-300 transition-colors duration-500 mx-auto lg:mx-0">
                      {node.desc}
                    </p>
                  </div>

                  <div className={`flex items-center gap-3 pt-4 font-mono text-[9px] tracking-[0.3em] text-zinc-600 ${node.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                    <span className="group-hover:text-sinai-glow-orange transition-colors">{node.tech}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-sinai-glow-orange group-hover:animate-ping" />
                  </div>
                </div>

                {/* Floating Meta-Data */}
                <div className="absolute -top-10 -right-10 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                  <div className="text-[8px] font-mono text-sinai-glow-orange/40 p-4 border-l border-t border-sinai-glow-orange/20">
                    COORD_X: {Math.random().toFixed(4)}<br/>
                    COORD_Y: {Math.random().toFixed(4)}<br/>
                    SIG_STRENGTH: NOMINAL
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global HUD Decorations */}
        <div className="absolute top-20 left-10 text-white/5 font-mono text-[10px] tracking-widest hidden lg:block uppercase select-none">
          Blueprint_Archive // Sec_09
        </div>
        <div className="absolute bottom-20 right-10 text-white/5 font-mono text-[10px] tracking-widest hidden lg:block uppercase select-none">
          Architecture_Verified // 2024
        </div>
      </section>

      {/* Experimental Tech Ecosystem: The Kinetic Matrix */}
      <section className="relative py-48 px-6 bg-[#050505] overflow-hidden">
        {/* Animated Neural Background (CSS-based) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f2a24b_1px,transparent_1px)] bg-[size:100px_100px] animate-[pulse_8s_infinite]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            {/* Left Side: Tech Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-sinai-glow-orange animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase">Tech_Ecosystem // Integrated</span>
                </div>
                <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
                  The <br/>
                  <span className="text-sinai-glow-orange">Power</span> Matrix
                </h2>
                <p className="text-zinc-400 text-xl leading-relaxed max-w-lg font-light italic">
                  We don't just use tools; we engineer ecosystems. Our tech stack is a curated symphony of enterprise-grade reliability and cutting-edge AI innovation.
                </p>
              </div>

              {/* Live System Telemetry List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "AI_CORE", val: "ANTHROPIC_CLAUDE", status: "STABLE" },
                  { label: "DB_ENGINE", val: "ORACLE_26", status: "NEXT_GEN" },
                  { label: "FRONTEND", val: "NEXT.JS", status: "OPTIMIZED" },
                  { label: "BACKEND", val: "NODE_PRO_MAX", status: "SCALABLE" }
                ].map((item, i) => (
                  <div key={item.label} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 group hover:border-sinai-glow-orange/30 transition-all duration-500">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-mono text-zinc-600 tracking-widest uppercase">{item.label}</span>
                      <span className="text-[8px] font-mono text-sinai-glow-orange uppercase tracking-widest">{item.status}</span>
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-sinai-glow-orange transition-colors">{item.val}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: The Neural Core Visual (Upgraded with Tech Galaxy) */}
            <div className="relative aspect-square flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center scale-90 lg:scale-100">
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
                <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-white/[0.05] to-transparent flex items-center justify-center backdrop-blur-3xl border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.1)] group">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                  
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-sinai-glow-orange/20 blur-[60px]"
                  />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="px-3 py-1 rounded-sm border border-sinai-glow-orange/40 bg-sinai-glow-orange/5 mb-4 relative overflow-hidden group-hover:border-sinai-glow-orange transition-colors">
                      <div className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.3em] font-black flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-sinai-glow-orange animate-pulse" />
                        POWER_MATRIX_v3.0
                      </div>
                    </div>

                    <div className="relative">
                      <h3 className="text-4xl lg:text-6xl font-black tracking-[-0.05em] text-white flex flex-col items-center leading-none">
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-sinai-glow-orange/50">APEX</span>
                        <span className="text-[8px] font-mono tracking-[1.5em] text-sinai-glow-orange/60 ml-[1.5em] -mt-1 font-bold">EXPERTS</span>
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Orbiting Tech Logos Galaxy */}
                {[
                  { id: "oracle", slug: "oracle", color: "#F80000" },
                  { id: "anthropic", slug: "anthropic", color: "#D19A66" },
                  { id: "nextdotjs", slug: "nextdotjs", color: "#FFFFFF" },
                  { id: "react", slug: "react", color: "#61DAFB" },
                  { id: "nodedotjs", slug: "nodedotjs", color: "#339933" },
                  { id: "python", slug: "python", color: "#3776AB" },
                  { id: "tailwindcss", slug: "tailwindcss", color: "#06B6D4" },
                  { id: "openai", slug: "openai", color: "#412991" }
                ].map((tech, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const radius = 280; // Distance from center
                  return (
                    <motion.div
                      key={tech.id}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30 + i * 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      <motion.div
                        style={{ 
                          left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                          top: `calc(50% + ${Math.sin(angle) * radius}px)`
                        }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 flex items-center justify-center p-3 pointer-events-auto hover:border-sinai-glow-orange/50 transition-all group shadow-2xl"
                      >
                        <img 
                          src={`https://cdn.simpleicons.org/${tech.slug}/fff`} 
                          className="w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                          alt={tech.id}
                          style={{ filter: `drop-shadow(0 0 10px ${tech.color}44)` }}
                        />
                        {/* Technical Label on Hover */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/60 px-2 py-1 rounded-sm border border-white/5">
                          {tech.id.toUpperCase()}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Floating Scanning Ring */}
                <motion.div 
                  animate={{ scale: [0.8, 1.3, 0.8], opacity: [0, 0.4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-[500px] h-[500px] lg:w-[650px] lg:h-[650px] border border-sinai-glow-orange/20 rounded-full"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
