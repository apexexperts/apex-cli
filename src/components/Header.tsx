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

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-2xl border border-white/5 px-6 py-3 ${
        scrolled ? "bg-black/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-white/10" : "bg-transparent border-transparent"
      }`}>
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-sinai-glow-orange flex items-center justify-center shadow-[0_0_20px_rgba(138,59,19,0.3)] group-hover:shadow-[0_0_30px_rgba(138,59,19,0.6)] transition-all relative overflow-hidden">
            <span className="text-white font-black text-xl z-10">AE</span>
            {/* Subtle Overlay of the 3D logo for texture */}
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
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-[10px] font-mono text-zinc-400 hover:text-white transition-colors tracking-[0.3em] font-bold relative group/link"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-sinai-glow-orange transition-all duration-300 group-hover/link:w-full" />
            </Link>
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
              {NAV_LINKS.map((link, i) => (
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
