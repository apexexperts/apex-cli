"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  ChevronDown, Search, Check, 
  Cpu, Database, Globe, Smartphone, Layers, MoreHorizontal 
} from "lucide-react";

const COUNTRIES = [
  { name: "Egypt", code: "+20", flag: "🇪🇬" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Qatar", code: "+974", flag: "🇶🇦" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼" },
];

const SERVICES = [
  { name: "AI Automation", icon: <Cpu className="w-4 h-4" /> },
  { name: "Oracle APEX Solutions", icon: <Database className="w-4 h-4" /> },
  { name: "Web Development", icon: <Globe className="w-4 h-4" /> },
  { name: "Mobile Development", icon: <Smartphone className="w-4 h-4" /> },
  { name: "Enterprise Software", icon: <Layers className="w-4 h-4" /> },
  { name: "Other", icon: <MoreHorizontal className="w-4 h-4" /> },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export function ContactInterface() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [selectedService, setSelectedService] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) setIsCountryOpen(false);
      if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) setIsServiceOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCountrySelect = (country: typeof COUNTRIES[0]) => {
    setSelectedCountry(country);
    setIsCountryOpen(false);
    setTimeout(() => phoneInputRef.current?.focus(), 100);
  };

  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(countrySearch.toLowerCase()) || 
    c.code.includes(countrySearch)
  );

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-[#050505] flex flex-col justify-center">
      
      {/* ── Background Atmosphere (Matching About) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-sinai-glow-orange/[0.05] blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-sinai-glow-orange/[0.03] blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, #f2a24b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="max-w-7xl mx-auto relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* ── Left Side: Brand & Identity (RESTORED TO GLORY) ── */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-sinai-glow-orange" />
                <span className="text-[11px] font-mono text-sinai-glow-orange tracking-[0.5em] uppercase font-black">Link_Initialization_V4.0</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] uppercase">
                Initiate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-white/20">The Link.</span>
              </h1>
              <p className="text-zinc-500 text-xl md:text-2xl font-light leading-relaxed max-w-md border-l-2 border-sinai-glow-orange/20 pl-8 italic">
                Secure a direct high-bandwidth neural connection with our architectural core. Strategic mastery begins here.
              </p>
            </motion.div>

            {/* Real Contact Data HUD */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-x-12 gap-y-6 pt-4 opacity-70">
              <div className="space-y-1">
                <div className="text-[8px] font-mono text-zinc-600 tracking-widest uppercase font-black">Digital_Mail</div>
                <div className="text-[10px] font-mono text-white tracking-widest font-bold">info@apexexperts.net</div>
              </div>
              <div className="space-y-1">
                <div className="text-[8px] font-mono text-zinc-600 tracking-widest uppercase font-black">Direct_Line</div>
                <div className="text-[10px] font-mono text-sinai-glow-orange tracking-widest font-bold">+201022034499</div>
              </div>
              <div className="space-y-1">
                <div className="text-[8px] font-mono text-zinc-600 tracking-widest uppercase font-black">Headquarters</div>
                <div className="text-[10px] font-mono text-white tracking-widest font-bold">Alexandria, EGYPT</div>
              </div>
            </motion.div>
          </div>

          {/* ── Right Side: Professional High-End Form ── */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              variants={itemVariants}
              className="glass p-10 md:p-14 rounded-[3.5rem] border border-white/10 shadow-2xl relative"
            >
              <form className="relative z-10 space-y-8">
                {/* Identity Group */}
                <div className="grid md:grid-cols-2 gap-8">
                  <PremiumField label="Full Name" placeholder="Your full identity" />
                  <PremiumField label="Email Address" placeholder="name@company.com" type="email" />
                </div>

                {/* Professional Context */}
                <div className="grid md:grid-cols-2 gap-8">
                  <PremiumField label="Job Title" placeholder="Architect / CTO" />
                  <PremiumField label="Company" placeholder="Organization name" />
                </div>

                {/* Geographic & Direct Link */}
                <div className="grid md:grid-cols-2 gap-8 relative">
                  <div className={`space-y-3 relative transition-all ${isCountryOpen ? 'z-[110]' : 'z-10'}`} ref={countryRef}>
                    <label className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-black ml-4">Origin_Point</label>
                    <div 
                      onClick={() => setIsCountryOpen(!isCountryOpen)}
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.06] transition-all relative z-10"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{selectedCountry.flag}</span>
                        <span className="text-white text-sm font-bold tracking-tight">{selectedCountry.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Absolute container for the dropdown to prevent any layout shift in the space-y flow */}
                    <div className="absolute top-full left-0 right-0 z-[100]">
                      <AnimatePresence>
                        {isCountryOpen && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="mt-4 bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                          >
                            <div className="p-4 border-b border-white/5 flex items-center gap-3 bg-white/[0.02]">
                              <Search className="w-4 h-4 text-zinc-500" />
                              <input 
                                autoFocus
                                type="text" 
                                placeholder="Search country..."
                                className="bg-transparent w-full text-white text-sm focus:outline-none"
                                value={countrySearch}
                                onChange={(e) => setCountrySearch(e.target.value)}
                              />
                            </div>
                            <div className="max-h-56 overflow-y-auto custom-scrollbar bg-[#0f0f0f]">
                              {filteredCountries.map((country) => (
                                <div 
                                  key={country.name}
                                  onClick={() => handleCountrySelect(country)}
                                  className="px-8 py-4 flex items-center justify-between hover:bg-sinai-glow-orange/10 cursor-pointer transition-colors group"
                                >
                                  <div className="flex items-center gap-4">
                                    <span className="text-xl">{country.flag}</span>
                                    <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{country.name}</span>
                                  </div>
                                  <span className="text-zinc-600 font-mono text-[10px] group-hover:text-sinai-glow-orange">{country.code}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-black ml-4">Direct_Link (Phone)</label>
                    <div className="relative">
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 font-mono text-base font-bold">
                        {selectedCountry.code}
                      </div>
                      <input 
                        ref={phoneInputRef}
                        type="tel" 
                        placeholder="Mobile connection"
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl pl-16 pr-6 py-4 text-white text-base focus:outline-none focus:border-sinai-glow-orange/30 transition-all placeholder:text-white/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-3 relative" ref={serviceRef}>
                  <label className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-black ml-4">Objective_Domain</label>
                  <div 
                    onClick={() => setIsServiceOpen(!isServiceOpen)}
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.06] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      {selectedService ? (
                        <>
                          <span className="text-sinai-glow-orange/60">
                            {SERVICES.find(s => s.name === selectedService)?.icon}
                          </span>
                          <span className="text-sm font-bold tracking-tight text-white">
                            {selectedService}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm font-bold tracking-tight text-white/20">
                          Select relevant service...
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${isServiceOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {/* Absolute container for the dropdown */}
                  <div className="absolute top-full left-0 right-0 z-[100]">
                    <AnimatePresence>
                      {isServiceOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="mt-4 bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                        >
                          {SERVICES.map((service) => (
                            <div 
                              key={service.name}
                              onClick={() => { setSelectedService(service.name); setIsServiceOpen(false); }}
                              className="px-8 py-4 flex items-center justify-between hover:bg-sinai-glow-orange/10 cursor-pointer transition-colors group"
                            >
                              <div className="flex items-center gap-4">
                                <span className="text-zinc-500 group-hover:text-sinai-glow-orange transition-colors">
                                  {service.icon}
                                </span>
                                <span className="text-xs text-zinc-300 group-hover:text-white">{service.name}</span>
                              </div>
                              {selectedService === service.name && <Check className="w-4 h-4 text-sinai-glow-orange" />}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Message Box */}
                <div className="space-y-3">
                  <label className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-black ml-4">Project_Intel (Message)</label>
                  <textarea 
                    rows={4}
                    placeholder="Briefly describe your requirements or vision..."
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white text-base focus:outline-none focus:border-sinai-glow-orange/30 transition-all placeholder:text-white/20 resize-none font-bold tracking-tight"
                  />
                </div>

                {/* Submission Block */}
                <div className="pt-6">
                  <button className="btn-premium w-full py-8 text-lg font-black uppercase tracking-[0.5em] hover:scale-[1.01] active:scale-[0.99] transition-all relative overflow-hidden group">
                    <span className="relative z-10">Send Message</span>
                  </button>
                  <div className="mt-8 flex justify-center items-center gap-6 text-[8px] font-mono text-zinc-700 tracking-[0.3em] uppercase">
                    <span>Protocol: Stable</span>
                    <span className="w-px h-3 bg-white/5" />
                    <span className="text-sinai-glow-orange/60">Secure Transmission Active</span>
                  </div>
                </div>

              </form>
            </motion.div>
          </div>

        </div>
      </motion.div>
      <HUDDecor />
    </div>
  );
}

const PremiumField = ({ label, placeholder, type = "text" }: any) => (
  <div className="space-y-3">
    <label className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-black ml-4">{label}</label>
    <input 
      type={type}
      placeholder={placeholder}
      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white text-base focus:outline-none focus:border-sinai-glow-orange/30 transition-all placeholder:text-white/20 font-bold tracking-tight"
    />
  </div>
);

const HUDDecor = () => (
  <>
    <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[18vh] font-black tracking-[0.8em] select-none vertical-text hidden lg:block pointer-events-none">
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent">
        APEX Experts
      </span>
      <div className="absolute inset-0 blur-[40px] bg-sinai-glow-orange/[0.05] -z-10" />
    </div>
  </>
);
