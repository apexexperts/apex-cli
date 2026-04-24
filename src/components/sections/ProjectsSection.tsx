"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  metrics: Record<string, string>;
  image: string;
  videoUrl?: string; // Support for project videos
  desc: string;
  features?: string[];
  ctaText?: string; // Support for custom button text
  tech: string[];
  layout: "wide" | "hero" | "split";
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "ASKLYZE",
    client: "APEX EXPERTS",
    category: "AI INSIGHTS PLUGIN",
    metrics: { dashboards: "Native", charts: "AI-Gen", reports: "Automated" },
    image: "/images/project1.png",
    desc: "Oracle APEX plugin for AI-powered business insights. Turn natural-language questions into reports, charts, and dashboards inside Oracle APEX with zero data movement.",
    features: [
      "Fast Time to Value",
      "Natural-Language Analytics",
      "Built Inside Oracle APEX",
      "Zero Data Movement",
      "Less Effort, More Productivity",
      "Purpose-Built for Oracle APEX"
    ],
    ctaText: "Explore ASKLYZE",
    tech: ["Oracle APEX", "Oracle Database", "Natural Language", "AI Analytics"],
    layout: "wide"
  },
  {
    id: "02",
    title: "Contextual Engine",
    client: "LEX LEGAL SYSTEMS",
    category: "LLM / RAG / Enterprise Search",
    metrics: { recall: "96%", precision: "98%", speed: "Sub-second" },
    image: "/images/project2.png",
    desc: "Enterprise-grade retrieval-augmented generation (RAG) platform optimized for processing multi-million document legal repositories with extreme precision.",
    tech: ["Pinecone", "GPT-4o", "LangGraph"],
    layout: "hero"
  },
  {
    id: "03",
    title: "Stratis AI",
    client: "QUANTUM VENTURES",
    category: "Predictive Analytics / Forecasting",
    metrics: { error_rate: "-12%", processing: "Real-time", scale: "Global" },
    image: "/images/project3.png",
    desc: "Next-generation strategic forecasting platform that leverages time-series AI to predict market shifts with industrial-grade reliability.",
    tech: ["PyTorch", "Rust", "Apache Kafka"],
    layout: "split"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 py-40 relative">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-sinai-glow-orange" />
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-sinai-glow-orange font-bold">
            04 // Selected Works
          </span>
        </div>
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-none">
          ENGINEERING <br /> <span className="opacity-20 italic">EXCELLENCE.</span>
        </h2>
      </div>

      {/* Projects Grid/Wall */}
      <div className="space-y-40">
        {PROJECTS.map((project) => (
          <div key={project.id} className="px-4 md:px-8">
            <ProjectLayoutSelector project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectLayoutSelector({ project }: { project: Project }) {
  switch (project.layout) {
    case "wide":
      return <WideLayout project={project} />;
    case "hero":
      return <HeroLayout project={project} />;
    case "split":
      return <SplitLayout project={project} />;
    default:
      return <WideLayout project={project} />;
  }
}

/* ── Wide Layout: Classic Tech Showcase ── */
function WideLayout({ project }: { project: Project }) {
  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-8 group relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-black">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
             <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
           </div>
        </div>
      </div>
      <div className="lg:col-span-4 space-y-8 lg:pl-10">
        <ProjectMeta project={project} />
      </div>
    </div>
  );
}

/* ── Hero Layout: Full-Width Immersive ── */
function HeroLayout({ project }: { project: Project }) {
  return (
    <div className="relative h-[80vh] rounded-[4rem] overflow-hidden group border border-white/5 mx-auto max-w-7xl">
      <Image 
        src={project.image} 
        alt={project.title} 
        fill 
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
        <ProjectMeta project={project} centered />
      </div>
    </div>
  );
}

/* ── Split Layout: Reverse Classic ── */
function SplitLayout({ project }: { project: Project }) {
  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-4 space-y-8 lg:pr-10 lg:order-1 order-2">
        <ProjectMeta project={project} />
      </div>
      <div className="lg:col-span-8 group relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-black lg:order-2 order-1">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </div>
    </div>
  );
}

/* ── Reusable Project Meta Component ── */
function ProjectMeta({ project, centered = false }: { project: Project; centered?: boolean }) {
  return (
    <div className={`space-y-8 ${centered ? "items-center text-center max-w-3xl" : ""}`}>
      <div className={`space-y-4 ${centered ? "flex flex-col items-center" : ""}`}>
        <div className="font-mono text-[10px] text-sinai-glow-orange tracking-[0.4em] uppercase flex items-center gap-3 font-bold">
          {project.client} <span className="w-1.5 h-1.5 rounded-full bg-sinai-glow-orange/40" /> {project.category}
        </div>
        <h3 className={`${centered ? "text-6xl md:text-8xl" : "text-5xl md:text-7xl"} font-bold tracking-tighter text-white leading-tight uppercase`}>
          {project.title}
        </h3>
      </div>

      <p className={`text-xl text-zinc-500 leading-relaxed ${centered ? "mx-auto" : "max-w-md"}`}>
        {project.desc}
      </p>

      {project.features && (
        <ul className={`space-y-3 ${centered ? "flex flex-col items-center" : ""}`}>
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-zinc-400 group/feature">
              <div className="w-1.5 h-1.5 rounded-full bg-sinai-glow-orange/60 group-hover/feature:bg-sinai-glow-orange transition-colors" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${centered ? "w-full justify-center" : ""}`}>
        {Object.entries(project.metrics).map(([key, value]) => (
          <div key={key} className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 text-left">
            <div className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest mb-1">{key}</div>
            <div className="text-[10px] font-bold text-sinai-glow-orange font-mono leading-tight">{value}</div>
          </div>
        ))}
      </div>

      <div className={`flex flex-wrap gap-2 ${centered ? "justify-center" : ""}`}>
        {project.tech.map((t) => (
          <span key={t} className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500">
            {t}
          </span>
        ))}
      </div>

      <div className={`pt-6 ${centered ? "w-full flex justify-center" : ""}`}>
        <button className="btn-premium flex items-center gap-4 group/btn">
          {project.ctaText || "Explore Intelligence"}
          <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
