"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/#services" },
  { label: "PROJECTS", href: "/#projects" },
  { label: "CONTACT", href: "/contact" },
];

const SERVICES_DATA = [
  {
    id: "ai-automation",
    title: "AI & Process Automation",
    desc: "Revolutionizing workflows with intelligent autonomous agents and robotic process automation (RPA) engineered for maximum operational efficiency.",
    href: "/services/ai-automation",
    image: "/images/project2.png",
    detail: "Autonomous Agents // Intelligent Workflows",
    tech: ["python", "openai", "anthropic", "huggingface", "langchain", "pytorch"],
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
    tech: ["oracle", "javascript", "css3", "html5", "git", "nodedotjs"],
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
    image: "/images/web-dev-cinematic.png",
    detail: "Next.js 15 // Cinematic UI Masterclass",
    tech: ["nextdotjs", "react", "tailwindcss", "typescript", "framer", "greensock", "nodedotjs", "postgresql"],
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
    tech: ["swift", "kotlin", "flutter", "react", "firebase", "supabase", "apple", "googleplay"],
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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(SERVICES_DATA[0]);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string, label: string) => {
    if (label === "ABOUT" && pathname === "/about") return true;
    if (label === "SERVICES" && pathname.startsWith("/services")) return true;
    if (label === "CONTACT" && pathname === "/contact") return true;
    return pathname === href;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative flex items-center justify-between p-2 rounded-2xl border transition-all duration-500 ${
          scrolled 
            ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl" 
            : "bg-transparent border-transparent"
        }`}>
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 group pl-4">
            <div className="w-10 h-10 rounded-xl bg-sinai-glow-orange flex items-center justify-center shadow-[0_0_20px_rgba(138,59,19,0.3)] group-hover:shadow-[0_0_30px_rgba(138,59,19,0.6)] transition-all relative overflow-hidden">
              <span className="text-white font-black text-lg z-10">AE</span>
              <div className="absolute inset-0 opacity-40 scale-150">
                <Image 
                  src="/images/brand-logo-ae.png" 
                  alt="APEX Experts" 
                  fill 
                  sizes="40px"
                  className="object-cover" 
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter text-white uppercase leading-none">APEX Experts</span>
              <span className="text-[8px] font-mono text-sinai-glow-orange tracking-[0.3em] uppercase font-bold">Engineering_Studio</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href, link.label);
              
              if (link.label === "SERVICES") {
                return (
                  <div 
                    key={link.label}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="relative"
                  >
                    <button 
                      className={`px-5 py-2 text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300 relative ${
                        active || isServicesOpen ? "text-sinai-glow-orange" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {(active || isServicesOpen) && (
                        <motion.div 
                          layoutId="nav-dot"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sinai-glow-orange rounded-full"
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl z-50">
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="bg-[#0a0a0a]/95 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden"
                          >
                            <div className="grid grid-cols-1 lg:grid-cols-5 h-full min-h-[500px]">
                              {/* Left Column: Services List */}
                              <div className="lg:col-span-3 p-10 lg:p-14 border-r border-white/5 space-y-12 text-left">
                                <div className="flex items-center gap-4 text-zinc-500">
                                  <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-left">Service_Registry // SOL_04</span>
                                  <div className="h-px flex-1 bg-white/5" />
                                </div>

                                <div className="grid gap-2 text-left">
                                  {SERVICES_DATA.map((service) => (
                                    <Link 
                                      key={service.id}
                                      href={service.href}
                                      onClick={() => setIsServicesOpen(false)}
                                      onMouseEnter={() => setHoveredService(service)}
                                      className={`group/item flex items-start gap-6 p-6 rounded-2xl transition-all duration-500 text-left ${
                                        hoveredService.id === service.id ? "bg-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]" : "hover:bg-white/[0.01]"
                                      }`}
                                    >
                                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 border ${
                                        hoveredService.id === service.id ? "bg-sinai-glow-orange text-white border-sinai-glow-orange shadow-[0_0_20px_rgba(242,162,75,0.3)]" : "bg-white/5 text-zinc-500 border-white/5 group-hover/item:border-white/10"
                                      }`}>
                                        {service.icon}
                                      </div>
                                      <div className="space-y-2 flex-1 text-left">
                                        <h3 className={`text-xl font-bold tracking-tight transition-colors duration-500 text-left ${
                                          hoveredService.id === service.id ? "text-white" : "text-zinc-500 group-hover/item:text-zinc-300"
                                        }`}>
                                          {service.title}
                                        </h3>
                                        <p className={`text-sm leading-relaxed transition-colors duration-500 max-w-md text-left ${
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
                                    <div className="absolute inset-0 z-0">
                                      <Image 
                                        src={hoveredService.image} 
                                        alt=""
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 40vw"
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
                                            sizes="(max-width: 1024px) 100vw, 40vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        </div>
                                      </div>

                                      <div className="space-y-4 pt-10">
                                        <div className="flex flex-col gap-6">
                                          <div className="flex items-center gap-3">
                                            {hoveredService?.tech?.map((slug: string) => (
                                              <div key={slug} className="group/tech relative">
                                                <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center p-1.5 hover:border-sinai-glow-orange/40 transition-colors">
                                                  {slug === 'openai' ? (
                                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white opacity-40 group-hover/tech:opacity-100 transition-opacity">
                                                      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                                                    </svg>
                                                  ) : slug === 'oracle' ? (
                                                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white opacity-40 group-hover/tech:opacity-100 transition-opacity">
                                                      <path d="M7.957359,18.9123664 C4.11670252,18.9123664 1,15.803458 1,11.9617373 C1,8.12000773 4.11670252,5 7.957359,5 L16.0437948,5 C19.8855156,5 23,8.12000773 23,11.9617373 C23,15.803458 19.8855156,18.9123664 16.0437948,18.9123664 L7.957359,18.9123664 L7.957359,18.9123664 Z M15.8639176,16.4585488 C18.352201,16.4585488 20.3674397,14.448858 20.3674397,11.9617373 C20.3674397,9.47460595 18.352201,7.45381934 15.8639176,7.45381934 L8.1360824,7.45381934 C5.64895285,7.45381934 3.63255855,9.47460595 3.63255855,11.9617373 C3.63255855,14.448858 5.64895285,16.4585488 8.1360824,16.4585488 L15.8639176,16.4585488 L15.8639176,16.4585488 Z" />
                                                    </svg>
                                                  ) : slug === 'css3' ? (
                                                    <svg role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white opacity-40 group-hover/tech:opacity-100 transition-opacity">
                                                      <path d="M24.235 6.519l-16.47-0.004 0.266 3.277 12.653 0.002-0.319 3.394h-8.298l0.3 3.215h7.725l-0.457 4.403-3.636 1.005-3.694-1.012-0.235-2.637h-3.262l0.362 4.817 6.829 2.128 6.714-1.912 1.521-16.675zM2.879 1.004h26.242l-2.387 26.946-10.763 3.045-10.703-3.047z" />
                                                    </svg>
                                                  ) : (
                                                    <img 
                                                      src={`https://cdn.simpleicons.org/${slug}/fff`} 
                                                      alt={slug}
                                                      className="w-5 h-5 object-contain opacity-40 group-hover/tech:opacity-100 transition-opacity"
                                                    />
                                                  )}
                                                </div>
                                                
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-md bg-[#1a1a1a] border border-white/10 opacity-0 group-hover/tech:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover/tech:translate-y-0 shadow-2xl z-50">
                                                  <div className="text-[8px] font-mono text-white tracking-widest uppercase whitespace-nowrap">
                                                    {slug.replace('dotjs', '.js').replace('tailwindcss', 'Tailwind').replace('nextdotjs', 'Next.js').replace('nodedotjs', 'Node.js').replace('postgresql', 'Postgres').replace('greensock', 'GSAP').replace('huggingface', 'Hugging Face').replace('openai', 'OpenAI').replace('googleplay', 'Google Play').replace('anthropic', 'Claude AI')}
                                                  </div>
                                                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#1a1a1a]" />
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                          <div className="space-y-2">
                                            <div className="text-[10px] font-mono text-zinc-500 tracking-[0.5em] uppercase">{hoveredService.detail}</div>
                                            <h4 className="text-3xl font-black tracking-tighter text-white uppercase leading-none">{hoveredService.title}</h4>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                </AnimatePresence>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-5 py-2 text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300 relative ${
                    active ? "text-sinai-glow-orange" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.div 
                      layoutId="nav-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sinai-glow-orange rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hidden sm:flex items-center gap-3 px-6 py-2.5 rounded-full bg-white text-black hover:bg-sinai-glow-orange hover:text-white transition-all duration-500 text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_10px_30px_rgba(255,255,255,0.1)] group">
              Connect_Node
              <div className="w-1.5 h-1.5 rounded-full bg-sinai-glow-orange group-hover:bg-white animate-pulse" />
            </Link>

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
            <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-[0.03] mix-blend-overlay" />
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
