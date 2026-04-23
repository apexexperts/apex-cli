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

      {/* Human Intelligence Nexus (Original Planetary Version) */}
      <section className="relative py-48 px-6 bg-[#030303] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-sinai-glow-orange/20 rounded-full animate-[ping_10s_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="mb-32 space-y-6 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm"
            >
              <span className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.6em] uppercase">Human_Intelligence_Nexus</span>
            </motion.div>
            <h2 className="text-6xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
              The <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Architects</span>
            </h2>
          </div>

          <div className="relative h-[800px] lg:h-[1000px] w-full mt-20 flex items-center justify-center">
            {/* Neural Web Background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.15]">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f2a24b" stopOpacity="0" />
                  <stop offset="50%" stopColor="#f2a24b" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#f2a24b" stopOpacity="0" />
                </linearGradient>
              </defs>
              <circle cx="50%" cy="50%" r="15%" stroke="white" strokeWidth="0.1" fill="none" className="opacity-20" />
              <circle cx="50%" cy="50%" r="30%" stroke="white" strokeWidth="0.1" fill="none" className="opacity-10" />
              <circle cx="50%" cy="50%" r="45%" stroke="white" strokeWidth="0.1" fill="none" className="opacity-5" />
            </svg>

            {[
              { id: "01", name: "Asma Ali", role: "MARKETING MANAGER", pos: "top-[15%] left-[50%] -translate-x-1/2", side: "top-full mt-8 left-1/2 -translate-x-1/2", img: "/images/project2.png", skills: ["Growth", "Branding", "Strategy"] },
              { id: "02", name: "Hisham Mohamed", role: "SALES MANAGER", pos: "top-[25%] right-[15%]", side: "right-full mr-8 top-0", img: "/images/project3.png", skills: ["Enterprise", "Relations", "Scale"] },
              { id: "03", name: "Amr Mohamed", role: "TEAM LEADER", pos: "top-[50%] right-[5%] -translate-y-1/2", side: "right-full mr-8 top-1/2 -translate-y-1/2", img: "/images/avatars/Amr.png", skills: ["Management", "Agile", "Delivery"] },
              { id: "04", name: "Micheal Magdy", role: "SR. SOFTWARE ENG.", pos: "bottom-[25%] right-[15%]", side: "right-full mr-8 bottom-0", img: "/images/avatars/mich.png", skills: ["Backend", "Architecture", "Scaling"] },
              { id: "05", name: "Abdelrahman Ibrahim", role: "SR. SOFTWARE ENG.", pos: "bottom-[15%] left-[50%] -translate-x-1/2", side: "bottom-full mb-8 left-1/2 -translate-x-1/2", img: "/images/avatars/abd.png", skills: ["Frontend", "Performance", "Logic"] },
              { id: "06", name: "Mario Milad", role: "PRODUCT DESIGNER", pos: "bottom-[25%] left-[15%]", side: "left-full ml-8 bottom-0", img: "/images/web-dev-cinematic.png", skills: ["Visuals", "Motion", "UX Logic"] },
              { id: "07", name: "Reham Samer", role: "QUALITY ENGINEERING", pos: "top-[50%] left-[5%] -translate-y-1/2", side: "left-full ml-8 top-1/2 -translate-y-1/2", img: "/images/project3.png", skills: ["Testing", "QA Automation", "UAT"] },
              { id: "08", name: "Maha Salam", role: "SYSTEM ADMIN", pos: "top-[25%] left-[15%]", side: "left-full ml-8 top-0", img: "/images/mobile-dev-hero.png", skills: ["Infrastructure", "Cloud", "Security"] }
            ].map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className={`absolute ${member.pos} group z-20 hover:z-50`}
              >
                <div className="relative cursor-pointer">
                  <div className="absolute inset-0 -m-8 border border-sinai-glow-orange/20 rounded-full group-hover:border-sinai-glow-orange/60 transition-all duration-700 animate-[spin_15s_linear_infinite]" />
                  <div className="w-24 h-24 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-sinai-glow-orange transition-all duration-700 bg-zinc-900 shadow-2xl relative">
                    <Image src={member.img} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-sinai-glow-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className={`absolute ${member.side} w-64 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-50`}>
                    <div className="p-6 rounded-2xl bg-black/90 backdrop-blur-xl border border-sinai-glow-orange/20 space-y-3 shadow-3xl">
                      <div className="space-y-1">
                        <div className="text-[8px] font-mono text-sinai-glow-orange tracking-[0.4em] uppercase">Identity_Node_{member.id}</div>
                        <h3 className="text-xl font-black tracking-tighter text-white uppercase">{member.name}</h3>
                        <p className="text-[10px] font-mono text-zinc-500 tracking-widest leading-none">{member.role}</p>
                      </div>
                      <div className="h-px w-full bg-white/5" />
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map(skill => (
                          <span key={skill} className="text-[7px] font-mono px-2 py-1 bg-white/5 border border-white/10 text-zinc-400 rounded-sm">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Power Matrix: Tech Ecosystem */}
      <section className="relative py-48 px-6 bg-[#050505] overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-px bg-sinai-glow-orange" />
                  <span className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.5em] uppercase">Tech_Telemetry</span>
                </div>
                <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-none">The Power <br/><span className="text-white">Matrix</span></h2>
                <p className="text-zinc-400 text-xl font-light max-w-lg leading-relaxed italic">Our stack is engineered for extreme performance and enterprise-grade reliability.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Core Engine", tech: "Oracle APEX", desc: "Enterprise data logic at peak scale." },
                  { title: "AI Layer", tech: "Claude / Gemini", desc: "Advanced reasoning and automation." },
                  { title: "Frontend", tech: "Next.js / React", desc: "Fluid, high-performance experiences." },
                  { title: "Design", tech: "Architectural UX", desc: "Systematic, scalable design systems." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/20 transition-colors">
                    <h4 className="text-[10px] font-mono text-sinai-glow-orange uppercase mb-2 tracking-widest">{item.title}</h4>
                    <div className="text-xl font-bold text-white mb-2">{item.tech}</div>
                    <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square flex items-center justify-center">
              <div className="absolute inset-0 border border-white/5 rounded-full" />
              <div className="absolute inset-20 border border-white/5 rounded-full" />
              <div className="absolute inset-40 border border-white/10 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-tr from-sinai-glow-orange/10 to-transparent rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="relative w-40 h-40 bg-zinc-900 rounded-full border-2 border-sinai-glow-orange flex items-center justify-center shadow-[0_0_50px_rgba(242,162,75,0.2)]">
                <Image src="/images/oracle-apex-hero-v1_1776958757733.png" alt="Oracle" fill className="object-contain p-8 grayscale hover:grayscale-0 transition-all" />
              </div>
              {[
                { label: "Claude", pos: "top-0 left-1/2 -translate-x-1/2", img: "/images/cognitive_data_synthesis_core_1776954400075.png" },
                { label: "Next.js", pos: "bottom-1/4 -right-10", img: "/images/brand_logo_mark_ae_1776963173769.png" },
                { label: "AI Core", pos: "bottom-1/4 -left-10", img: "/images/agentic_orchestration_core_1776953703734.png" }
              ].map((sat, i) => (
                <motion.div key={i} animate={{ rotate: 360 }} transition={{ duration: 25 + (i * 5), repeat: Infinity, ease: "linear" }} className="absolute inset-0 pointer-events-none">
                  <div className={`absolute ${sat.pos} w-20 h-20 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center p-4 pointer-events-auto hover:border-sinai-glow-orange/50 transition-colors shadow-2xl`}>
                    <Image src={sat.img} alt={sat.label} fill className="object-contain p-4 grayscale hover:grayscale-0 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
}
