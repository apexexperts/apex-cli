"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-[#050505] text-white selection:bg-sinai-glow-orange selection:text-black overflow-hidden">
      
      {/* CEO Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sinai-glow-orange/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sinai-glow-orange/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-sinai-glow-orange/30 rounded-tl-3xl z-10" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-sinai-glow-orange/30 rounded-br-3xl z-10" />
                
                <Image 
                  src="/images/avatars/ahmed.png"
                  alt="Ahmed Al-Saied - Founder & CEO"
                  fill
                  className="object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[3s] ease-out grayscale hover:grayscale-0"
                  priority
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                
                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.4em] uppercase mb-1">Architect & Visionary</div>
                  <h3 className="text-2xl font-black tracking-tighter uppercase">Ahmed Al-Saied</h3>
                  <div className="w-12 h-[2px] bg-sinai-glow-orange mt-3" />
                </div>
              </div>
            </motion.div>

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
              </div>

              <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { val: "17+", label: "Years\nExperience" },
                  { val: "Oracle", label: "APEX\nSpecialist" },
                  { val: "Data", label: "Driven\nLogic" },
                  { val: "AI", label: "Native\nPhilosophy" }
                ].map((stat, i) => (
                  <div key={i} className="px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-1 hover:border-sinai-glow-orange/30 transition-colors group/card">
                    <span className="text-3xl font-black text-white group-hover/card:text-sinai-glow-orange transition-colors">{stat.val}</span>
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest leading-tight whitespace-pre-line">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission: The Neural Spine */}
      <section className="relative py-40 px-6 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #f2a24b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sinai-glow-orange/30 to-transparent hidden md:block" />

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
                  <h3 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-none text-left">
                    Architecting <br/>
                    <span className="text-sinai-glow-orange">The Future</span>
                  </h3>
                  <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-md font-light italic text-left">
                    To be the global architectural benchmark for AI-native enterprise solutions, redefining how businesses interact with data.
                  </p>
                </motion.div>
              </div>
              
              <div className="hidden md:flex justify-center order-1 md:order-2">
                <div className="w-80 h-80 relative">
                  <div className="absolute inset-0 border-[0.5px] border-sinai-glow-orange/20 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-10 border-[0.5px] border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                </div>
              </div>
            </div>

            {/* Mission Node */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="hidden md:flex justify-center">
                <div className="w-80 h-80 relative">
                  <div className="absolute inset-0 border-t border-l border-white/10 rounded-3xl rotate-45 animate-pulse" />
                  <div className="absolute inset-10 border-b border-r border-sinai-glow-orange/20 rounded-3xl -rotate-45" />
                </div>
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
                  <h3 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-none text-right md:text-left">
                    Engineering <br/>
                    <span className="text-white">The Impact</span>
                  </h3>
                  <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-md ml-auto md:ml-0 font-light italic text-right md:text-left">
                    Empowering global industries through radical innovation and database-driven intelligence.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering DNA */}
      <section className="relative py-48 px-6 bg-[#030303] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#f2a24b 0.5px, transparent 0.5px), linear-gradient(90deg, #f2a24b 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }} />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="mb-32 space-y-6 text-center">
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-px bg-sinai-glow-orange" />
              <span className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.5em] uppercase">Strategic_DNA</span>
              <div className="w-12 h-px bg-sinai-glow-orange" />
            </div>
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
              The Identity <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white">Vault</span>
            </h2>
          </div>

          {/* The Identity Vault: Architectural Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mt-20 border border-white/5 bg-white/5 relative z-10">
            {[
              { id: "01", name: "Asma Ali", role: "Marketing Manager", size: "lg:col-span-2 lg:row-span-2", img: "/images/project2.png", skills: ["Branding", "Strategy"], tag: "STRATEGY" },
              { id: "02", name: "Hisham Mohamed", role: "Sales Manager", size: "lg:col-span-1 lg:row-span-1", img: "/images/project3.png", skills: ["Enterprise", "Scale"], tag: "BUSINESS" },
              { id: "03", name: "Amr Mohamed", role: "Team Leader", size: "lg:col-span-1 lg:row-span-2", img: "/images/avatars/Amr.png", skills: ["Logic", "Agile"], tag: "ENGINEERING" },
              { id: "04", name: "Micheal Magdy", role: "Sr. Software Eng.", size: "lg:col-span-1 lg:row-span-1", img: "/images/avatars/mich.png", skills: ["Backend", "Cloud"], tag: "ENGINEERING" },
              { id: "05", name: "Abdelrahman Ibrahim", role: "Sr. Software Eng.", size: "lg:col-span-2 lg:row-span-1", img: "/images/avatars/abd.png", skills: ["Frontend", "UX Logic"], tag: "ENGINEERING" },
              { id: "06", name: "Mario Milad", role: "Product Designer", size: "lg:col-span-1 lg:row-span-1", img: "/images/web-dev-cinematic.png", skills: ["Visuals", "Motion"], tag: "DESIGN" },
              { id: "07", name: "Reham Samer", role: "Quality Eng.", size: "lg:col-span-1 lg:row-span-1", img: "/images/project3.png", skills: ["QA", "UAT"], tag: "QUALITY" },
              { id: "08", name: "Maha Salam", role: "System Admin", size: "lg:col-span-1 lg:row-span-1", img: "/images/mobile-dev-hero.png", skills: ["Security", "Linux"], tag: "OPS" }
            ].map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative group overflow-hidden bg-[#0a0a0a] border-[0.5px] border-white/10 ${member.size} min-h-[400px] cursor-crosshair`}
              >
                <div className="absolute top-4 left-4 text-[5vw] font-black text-white/[0.03] leading-none select-none pointer-events-none uppercase">
                  {member.tag}
                </div>

                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                  <Image 
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-sinai-glow-orange/40 shadow-[0_0_15px_#f2a24b] opacity-0 group-hover:opacity-100 animate-[scan_3s_linear_infinite]" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="text-[8px] font-mono text-sinai-glow-orange tracking-[0.4em] uppercase">Identity_Archive</div>
                      <h3 className="text-3xl font-black tracking-tighter text-white uppercase leading-none">{member.name}</h3>
                      <p className="text-[10px] font-mono text-zinc-500 tracking-widest">{member.role}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {member.skills.map(skill => (
                        <span key={skill} className="text-[7px] font-mono px-2 py-1 bg-sinai-glow-orange/10 border border-sinai-glow-orange/20 text-sinai-glow-orange rounded-sm uppercase">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20 group-hover:border-sinai-glow-orange transition-colors" />
                <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20 group-hover:border-sinai-glow-orange transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Animation Styles */}
      <style jsx global>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
}
