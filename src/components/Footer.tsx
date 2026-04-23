"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-32 pb-16 px-6 md:px-12 border-t border-white/5 bg-[#06080a] overflow-hidden">
      {/* Massive Background Branding (Watermark) */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[25vw] font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap tracking-tighter">
        APEX EXPERTS
      </div>

      {/* Cinematic Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-sinai-glow-orange/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sinai-glow-orange flex items-center justify-center shadow-[0_0_30px_rgba(138,59,19,0.4)]">
                <span className="text-white font-black text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white uppercase">APEX Experts</span>
                <span className="text-[9px] font-mono text-sinai-glow-orange tracking-[0.4em] uppercase font-bold">AI Engineering Studio</span>
              </div>
            </div>
            <p className="text-lg text-zinc-500 max-w-sm leading-relaxed text-balance">
              Architecting the next generation of production-grade AI systems with technical precision and strategic depth.
            </p>
            
            <div className="flex items-center gap-5">
              <SocialIcon href="#" icon={<XIcon />} label="X" />
              <SocialIcon href="#" icon={<LinkedInIcon />} label="LinkedIn" />
              <SocialIcon href="#" icon={<GitHubIcon />} label="GitHub" />
              <SocialIcon href="#" icon={<DiscordIcon />} label="Discord" />
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-12">
            <FooterLinkGroup 
              title="Navigation" 
              links={[
                { name: "About", href: "/#about" },
                { name: "Services", href: "/#services" },
                { name: "Process", href: "/#process" },
                { name: "Projects", href: "/#projects" },
                { name: "Blog", href: "/#blog" }
              ]} 
            />
            <FooterLinkGroup 
              title="Solutions" 
              links={[
                { name: "AI & Process Automation", href: "/services/ai-automation" },
                { name: "Oracle APEX development", href: "/services/oracle-apex" },
                { name: "Web Development", href: "/#services" },
                { name: "Mobile Development", href: "/#services" }
              ]} 
            />
            <FooterLinkGroup 
              title="Intelligence" 
              links={[
                { name: "NeuralStream 2.0", href: "#" },
                { name: "Contextual Engine", href: "#" },
                { name: "Stratis AI", href: "#" },
                { name: "Dossiers", href: "#" }
              ]} 
            />
            
            <div className="space-y-6">
              <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] font-bold">HQ_LOC</h4>
              <div className="space-y-3">
                <div className="text-xs text-zinc-400 font-mono leading-relaxed">
                  37.7749° N<br />
                  122.4194° W
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest">LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em]">
            © {currentYear} APEX Experts AI Solutions. Engineered with absolute precision.
          </div>
          <div className="flex gap-10">
            <Link href="#" className="text-[10px] font-mono text-zinc-700 hover:text-white transition-colors uppercase tracking-[0.3em]">Privacy_Protocol</Link>
            <Link href="#" className="text-[10px] font-mono text-zinc-700 hover:text-white transition-colors uppercase tracking-[0.3em]">Terms_Of_Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div className="space-y-6">
      <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] font-bold">{title}</h4>
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="text-xs text-zinc-500 hover:text-sinai-glow-orange transition-all hover:translate-x-1 duration-300">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} aria-label={label} className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-sinai-glow-orange/40 hover:bg-sinai-glow-orange/[0.05] transition-all duration-500 group">
      <div className="w-5 h-5 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
    </Link>
  );
}

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 0 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
);
const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.176 2.419 0 1.334-.956 2.419-2.176 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.176 2.419 0 1.334-.946 2.419-2.176 2.419z"/></svg>
);
