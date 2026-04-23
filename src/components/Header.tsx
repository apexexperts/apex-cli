"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PROCESS", href: "#process" },
  { label: "PROJECTS", href: "#projects" },
  { label: "BLOG", href: "#blog" },
];

const SERVICES_DATA = [
  {
    id: "ai-automation",
    title: "AI & Process Automation",
    desc: "Revolutionizing workflows with intelligent autonomous agents and robotic process automation (RPA) engineered for maximum operational efficiency.",
    href: "/services/ai-automation",
    image: "/images/project2.png",
    detail: "Autonomous Agents // Intelligent Workflows",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: "oracle-apex",
    title: "Oracle APEX development",
    desc: "Building world-class, data-centric enterprise applications using Oracle APEX with unparalleled speed, database precision, and enterprise-grade scalability.",
    href: "/services/oracle-apex",
    image: "/images/project3.png",
    detail: "Enterprise Architecture // Database Precision",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M5.5 2.5 L2.5 5.5 L18.5 21.5 L21.5 18.5 Z" fill="currentColor" fillOpacity="0.3" />
        <path d="M5.5 21.5 L2.5 18.5 L18.5 2.5 L21.5 5.5 Z" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "web-dev",
    title: "Web Development",
    desc: "Crafting high-performance, cinematic web experiences using modern frameworks and production-grade architectures that prioritize user engagement.",
    href: "/services/web-development",
    image: "/images/web-dev-hero.png",
    detail: "Next.js 15 // Cinematic UI Masterclass",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2l10 5v10l-10 5-10-5V7l10-5z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "mobile-dev",
    title: "Mobile Development",
    desc: "Engineering premium native and cross-platform mobile applications that prioritize speed, advanced security, and world-class UX/UI design.",
    href: "/services/mobile-development",
    image: "/images/mobile-dev-hero.png",
    detail: "iOS & Android // Fluid Motion Systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 18h14" stroke="currentColor" strokeWidth="1" />
        <circle cx="12" cy="19" r="1" fill="currentColor" />
      </svg>
    )
  }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState(SERVICES_DATA[0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 py-6 ${
        scrolled ? "py-4" : "py-8"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-2xl border border-white/5 px-6 py-3 relative z-[101] ${
        scrolled ? "bg-black/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-white/10" : "bg-transparent border-transparent"
      }`}>
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-sinai-glow-orange flex items-center justify-center shadow-[0_0_20px_rgba(138,59,19,0.3)] group-hover:shadow-[0_0_30px_rgba(138,59,19,0.6)] transition-all relative overflow-hidden">
            <span className="text-white font-black text-xl z-10">AE</span>
            <div className="absolute inset-0 opacity-40 scale-150">
              <Image src="/images/brand-logo-ae.png" alt="" fill className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter text-white uppercase leading-none">APEX Experts</span>
            <span className="text-[8px] font-mono text-sinai-glow-orange tracking-[0.3em] uppercase font-bold">Engineering_Studio</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link: { label: string; href: string }) => (
            <div 
              key={link.label}
              className="relative group/link"
              onMouseEnter={() => {
                if (link.label === "SERVICES") setActiveDropdown("services");
                else setActiveDropdown(null);
              }}
            >
              <Link 
                href={link.href}
                className={`text-[10px] font-mono transition-colors tracking-[0.3em] font-bold relative py-4 flex items-center gap-2 ${
                  activeDropdown === "services" && link.label === "SERVICES" ? "text-sinai-glow-orange" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
                {link.label === "SERVICES" && (
                  <motion.span 
                    animate={{ rotate: activeDropdown === "services" ? 180 : 0 }}
                    className="w-2 h-2 border-b-2 border-r-2 border-current rotate-45 -mt-1 origin-center" 
                  />
                )}
                <span className={`absolute -bottom-1 left-0 h-px bg-sinai-glow-orange transition-all duration-300 ${
                  activeDropdown === "services" && link.label === "SERVICES" ? "w-full" : "w-0 group-hover/link:w-full"
                }`} />
              </Link>
            </div>
          ))}
        </nav>

        {/* Action Area */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:flex items-center gap-3 px-6 py-2.5 rounded-full bg-white text-black hover:bg-sinai-glow-orange hover:text-white transition-all duration-500 text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
            Connect_Node
            <div className="w-1.5 h-1.5 rounded-full bg-sinai-glow-orange group-hover:bg-white animate-pulse" />
          </button>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
          >
            <div className={`h-px bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
            <div className={`h-px bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "w-4"}`} />
            <div className={`h-px bg-white transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
          </button>
        </div>
      </div>

      {/* Super Premium Mega Dropdown */}
      <AnimatePresence>
        {activeDropdown === "services" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl bg-[#0a0a0a]/95 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 h-full min-h-[500px]">
              {/* Left Column: Services List */}
              <div className="lg:col-span-3 p-10 lg:p-14 border-r border-white/5 space-y-12">
                <div className="flex items-center gap-4 text-zinc-500">
                  <span className="font-mono text-[9px] tracking-[0.4em] uppercase">Service_Registry // SOL_04</span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>

                <div className="grid gap-2">
                  {SERVICES_DATA.map((service) => (
                    <Link 
                      key={service.id}
                      href={service.href}
                      onMouseEnter={() => setHoveredService(service)}
                      className={`group/item flex items-start gap-6 p-6 rounded-2xl transition-all duration-500 ${
                        hoveredService.id === service.id ? "bg-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" : "hover:bg-white/[0.01]"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 border ${
                        hoveredService.id === service.id ? "bg-sinai-glow-orange text-white border-sinai-glow-orange shadow-[0_0_20px_rgba(242,162,75,0.3)]" : "bg-white/5 text-zinc-500 border-white/5 group-hover/item:border-white/10"
                      }`}>
                        {service.icon}
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className={`text-xl font-bold tracking-tight transition-colors duration-500 ${
                          hoveredService.id === service.id ? "text-white" : "text-zinc-500 group-hover/item:text-zinc-300"
                        }`}>
                          {service.title}
                        </h3>
                        <p className={`text-sm leading-relaxed transition-colors duration-500 max-w-md ${
                          hoveredService.id === service.id ? "text-zinc-400" : "text-zinc-600 line-clamp-1"
                        }`}>
                          {service.desc}
                        </p>
                      </div>
                      <motion.div 
                        animate={{ x: hoveredService.id === service.id ? 0 : -10, opacity: hoveredService.id === service.id ? 1 : 0 }}
                        className="text-sinai-glow-orange pt-1"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Column: Dynamic Preview */}
              <div className="lg:col-span-2 relative bg-black/40 overflow-hidden flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredService.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex-1 flex flex-col p-12 lg:p-16 relative"
                  >
                    {/* Background Visual */}
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={hoveredService.image} 
                        alt={hoveredService.title}
                        fill
                        className="object-cover opacity-20 blur-sm scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col justify-between">
                      <div className="space-y-8">
                        <div className="inline-block px-3 py-1 rounded-sm bg-sinai-glow-orange/10 border border-sinai-glow-orange/20">
                          <span className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.3em] font-black uppercase">Technical_Preview</span>
                        </div>
                        
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                          <Image 
                            src={hoveredService.image} 
                            alt={hoveredService.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                      </div>

                      <div className="space-y-4 pt-10">
                        <div className="text-[10px] font-mono text-zinc-500 tracking-[0.5em] uppercase">{hoveredService.detail}</div>
                        <h4 className="text-3xl font-black tracking-tighter text-white uppercase leading-none">{hoveredService.title}</h4>
                        <div className="flex items-center gap-3 text-sinai-glow-orange">
                          <span className="text-[9px] font-mono font-bold tracking-widest uppercase">Explore_Capabilities</span>
                          <div className="h-px w-12 bg-sinai-glow-orange/30" />
                        </div>
                      </div>
                    </div>

                    {/* HUD Decorations */}
                    <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-white/5 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-white/5 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#06080a] flex flex-col p-12 lg:hidden"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            <div className="flex justify-between items-center mb-20">
              <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">System_Navigation</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white text-xs font-mono uppercase tracking-widest">Close_X</button>
            </div>
            
            <nav className="flex flex-col gap-8">
              {NAV_LINKS.map((link: { label: string; href: string }, i: number) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-5xl font-black text-zinc-800 hover:text-sinai-glow-orange transition-colors tracking-tighter uppercase"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto space-y-6">
              <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Operational_Status</div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-white font-mono">ALL_SYSTEMS_OPTIMAL</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
