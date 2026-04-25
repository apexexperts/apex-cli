"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants, useReducedMotion } from "framer-motion";
import { ChevronDown, Search, Check, Loader2, 
  Cpu, Database, Globe, Smartphone, Layers, MoreHorizontal 
} from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";
import { Turnstile } from "@marsidev/react-turnstile";

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

export function ContactInterface() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [selectedService, setSelectedService] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  
  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) setIsCountryOpen(false);
      if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) setIsServiceOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const effectiveReduceMotion = mounted ? shouldReduceMotion : false;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: effectiveReduceMotion ? 0 : 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: effectiveReduceMotion ? 0 : 30, filter: effectiveReduceMotion ? "none" : "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: effectiveReduceMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: effectiveReduceMotion ? 0 : 10 }
  };

  const handleCountrySelect = (country: typeof COUNTRIES[0]) => {
    setSelectedCountry(country);
    setIsCountryOpen(false);
    setTimeout(() => phoneInputRef.current?.focus(), 100);
  };

  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(countrySearch.toLowerCase()) || 
    c.code.includes(countrySearch)
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    const formData = new FormData(event.currentTarget);
    
    // Add custom selections to formData
    formData.append("country", selectedCountry.name);
    formData.append("country_code", selectedCountry.code);
    formData.append("service", selectedService);
    formData.append("turnstileToken", turnstileToken || "");

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setIsSuccess(true);
      } else {
        setFormError(result.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setFormError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-[#050505] flex flex-col justify-center">
      
      {/* ── Background Atmosphere (Matching About) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-[800px] h-[800px] bg-sinai-glow-orange/[0.05] blur-[150px] ${effectiveReduceMotion ? '' : 'animate-pulse'}`} />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-sinai-glow-orange/[0.03] blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, #f2a24b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        className="max-w-7xl mx-auto relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* ── Left Side: Brand & Identity ── */}
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
              className="glass p-10 md:p-14 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: effectiveReduceMotion ? 1 : 0.9, filter: effectiveReduceMotion ? "none" : "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    className="py-20 text-center space-y-8"
                  >
                    <div className="w-24 h-24 bg-sinai-glow-orange/20 rounded-full flex items-center justify-center mx-auto border border-sinai-glow-orange/30">
                      <Check className="w-12 h-12 text-sinai-glow-orange" strokeWidth={3} />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-4xl font-black text-white uppercase tracking-tight">Transmission Received</h2>
                      <p className="text-zinc-500 text-lg max-w-sm mx-auto">
                        Your architectural inquiry has been secured. Our core team will initiate contact shortly.
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-[10px] font-mono text-sinai-glow-orange uppercase tracking-[0.5em] font-black hover:opacity-70 transition-opacity"
                    >
                      [ Return_to_Console ]
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    exit={{ opacity: 0, scale: effectiveReduceMotion ? 1 : 0.95, filter: effectiveReduceMotion ? "none" : "blur(10px)" }}
                    onSubmit={handleSubmit}
                    className="relative z-10 space-y-8"
                  >
                    {/* Identity Group */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <PremiumField 
                        id="full_name"
                        name="name" 
                        label="Full Name" 
                        placeholder="Your full identity" 
                        autoComplete="name"
                        required 
                      />
                      <PremiumField 
                        id="email_address"
                        name="email" 
                        label="Email Address" 
                        placeholder="name@company.com" 
                        type="email" 
                        autoComplete="email"
                        required 
                      />
                    </div>

                    {/* Professional Context */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <PremiumField 
                        id="job_title"
                        name="job_title" 
                        label="Job Title" 
                        placeholder="Architect / CTO" 
                        autoComplete="organization-title"
                      />
                      <PremiumField 
                        id="company_name"
                        name="company" 
                        label="Company" 
                        placeholder="Organization name" 
                        autoComplete="organization"
                      />
                    </div>

                    {/* Geographic & Direct Link */}
                    <div className="grid md:grid-cols-2 gap-8 relative">
                      <div className={`space-y-3 relative transition-all ${isCountryOpen ? 'z-[110]' : 'z-10'}`} ref={countryRef}>
                        <label 
                          htmlFor="country-trigger" 
                          className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-black ml-4"
                        >
                          Origin_Point
                        </label>
                        <div 
                          id="country-trigger"
                          role="button"
                          tabIndex={0}
                          aria-haspopup="listbox"
                          aria-expanded={isCountryOpen}
                          onClick={() => !isSubmitting && setIsCountryOpen(!isCountryOpen)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              !isSubmitting && setIsCountryOpen(!isCountryOpen);
                            }
                          }}
                          className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.06] transition-all relative z-10 focus:ring-2 focus:ring-sinai-glow-orange/30 outline-none"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{selectedCountry.flag}</span>
                            <span className="text-white text-sm font-bold tracking-tight">{selectedCountry.name}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} />
                        </div>

                        <div className="absolute top-full left-0 right-0 z-[100]">
                          <AnimatePresence>
                            {isCountryOpen && (
                              <motion.div 
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="mt-4 bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                              >
                                <div className="p-4 border-b border-white/5 flex items-center gap-3 bg-white/[0.02]">
                                  <Search className="w-4 h-4 text-zinc-500" />
                                  <input 
                                    id="country-search"
                                    name="country-search"
                                    autoFocus
                                    type="text" 
                                    aria-label="Search country"
                                    placeholder="Search country..."
                                    className="bg-transparent w-full text-white text-sm focus:outline-none"
                                    value={countrySearch}
                                    onChange={(e) => setCountrySearch(e.target.value)}
                                  />
                                </div>
                                <div className="max-h-56 overflow-y-auto custom-scrollbar bg-[#0f0f0f]" role="listbox">
                                  {filteredCountries.map((country) => (
                                    <div 
                                      key={country.name}
                                      role="option"
                                      tabIndex={0}
                                      aria-selected={selectedCountry.name === country.name}
                                      onClick={() => handleCountrySelect(country)}
                                      onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                          e.preventDefault();
                                          handleCountrySelect(country);
                                        }
                                      }}
                                      className="px-8 py-4 flex items-center justify-between hover:bg-sinai-glow-orange/10 cursor-pointer transition-colors group outline-none focus:bg-sinai-glow-orange/20"
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
                        <label 
                          htmlFor="phone-input" 
                          className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-black ml-4"
                        >
                          Direct_Link (Phone)
                        </label>
                        <div className="relative">
                          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 font-mono text-base font-bold">
                            {selectedCountry.code}
                          </div>
                          <input 
                            id="phone-input"
                            ref={phoneInputRef}
                            name="phone"
                            type="tel" 
                            autoComplete="tel"
                            disabled={isSubmitting}
                            placeholder="Mobile connection"
                            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl pl-16 pr-6 py-4 text-white text-base focus:outline-none focus:border-sinai-glow-orange/30 transition-all placeholder:text-white/20 disabled:opacity-50"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-3 relative" ref={serviceRef}>
                      <label 
                        htmlFor="service-trigger" 
                        className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-black ml-4"
                      >
                        Objective_Domain
                      </label>
                      <div 
                        id="service-trigger"
                        role="button"
                        tabIndex={0}
                        aria-haspopup="listbox"
                        aria-expanded={isServiceOpen}
                        onClick={() => !isSubmitting && setIsServiceOpen(!isServiceOpen)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            !isSubmitting && setIsServiceOpen(!isServiceOpen);
                          }
                        }}
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.06] transition-all focus:ring-2 focus:ring-sinai-glow-orange/30 outline-none"
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
                      
                      <div className="absolute top-full left-0 right-0 z-[100]">
                        <AnimatePresence>
                          {isServiceOpen && (
                            <motion.div 
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="mt-4 bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
                              role="listbox"
                            >
                              {SERVICES.map((service) => (
                                <div 
                                  key={service.name}
                                  role="option"
                                  tabIndex={0}
                                  aria-selected={selectedService === service.name}
                                  onClick={() => { setSelectedService(service.name); setIsServiceOpen(false); }}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                      e.preventDefault();
                                      setSelectedService(service.name);
                                      setIsServiceOpen(false);
                                    }
                                  }}
                                  className="px-8 py-4 flex items-center justify-between hover:bg-sinai-glow-orange/10 cursor-pointer transition-colors group outline-none focus:bg-sinai-glow-orange/20"
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
                      <label 
                        htmlFor="message" 
                        className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-black ml-4"
                      >
                        Project_Intel (Message)
                      </label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4}
                        required
                        disabled={isSubmitting}
                        placeholder="Briefly describe your requirements or vision..."
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white text-base focus:outline-none focus:border-sinai-glow-orange/30 transition-all placeholder:text-white/20 resize-none font-bold tracking-tight disabled:opacity-50"
                      />
                    </div>

                    {/* Honeypot for Spam Protection */}
                    <input 
                      type="text" 
                      name="honeypot" 
                      className="hidden" 
                      tabIndex={-1} 
                      autoComplete="off" 
                    />

                    {/* Security Verification (Invisible Mode) */}
                    <div className="flex justify-center h-0 overflow-hidden">
                      <Turnstile
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                        onSuccess={(token: string) => setTurnstileToken(token)}
                        options={{
                          theme: "dark",
                          appearance: "interaction-only",
                        }}
                      />
                    </div>

                    {/* Submission Block */}
                    <div className="pt-6 space-y-4">
                      {formError && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-xs font-mono tracking-widest text-center uppercase">
                          [ Error: {formError} ]
                        </div>
                      )}
                      <button 
                        disabled={isSubmitting}
                        className="btn-premium w-full py-8 text-lg font-black uppercase tracking-[0.5em] hover:scale-[1.01] active:scale-[0.99] transition-all relative overflow-hidden group disabled:opacity-50 disabled:hover:scale-100"
                      >
                        <div className="relative z-10 flex items-center justify-center gap-4">
                          {isSubmitting ? (
                            <>
                              <Loader2 className={`w-6 h-6 text-sinai-glow-orange ${effectiveReduceMotion ? '' : 'animate-spin'}`} />
                              <span>Transmitting...</span>
                            </>
                          ) : (
                            <span>Send Message</span>
                          )}
                        </div>
                      </button>
                      <div className="mt-8 flex justify-center items-center gap-6 text-[8px] font-mono text-zinc-700 tracking-[0.3em] uppercase">
                        <span>Protocol: Stable</span>
                        <span className="w-px h-3 bg-white/5" />
                        <span className={(isSubmitting && !effectiveReduceMotion) ? "animate-pulse text-sinai-glow-orange" : "text-sinai-glow-orange/60"}>
                          {isSubmitting ? "Uploading Data..." : "Secure Transmission Active"}
                        </span>
                      </div>
                    </div>

                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </motion.div>
      <HUDDecor />
    </div>
  );
}

interface PremiumFieldProps {
  label: string;
  placeholder: string;
  name: string;
  id: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}

const PremiumField = ({ label, placeholder, name, id, type = "text", required = false, autoComplete }: PremiumFieldProps) => (
  <div className="space-y-3">
    <label 
      htmlFor={id} 
      className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-black ml-4"
    >
      {label}
    </label>
    <input 
      id={id}
      name={name}
      type={type}
      required={required}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white text-base focus:outline-none focus:border-sinai-glow-orange/30 transition-all placeholder:text-white/20 font-bold tracking-tight disabled:opacity-50"
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
