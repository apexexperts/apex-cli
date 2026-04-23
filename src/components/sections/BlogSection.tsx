"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  complexity: "L1" | "L2" | "L3";
}

const POSTS: Post[] = [
  {
    id: "01",
    title: "Scaling Neural Inference in Distributed Environments",
    category: "ENGINEERING",
    date: "OCT 12, 2026",
    readTime: "8 MIN",
    image: "/images/project1.png", // Reusing cinematic images for consistency
    excerpt: "Exploring the bottlenecks of real-time LLM inference and the architectural shifts required for sub-50ms latency in global clusters.",
    complexity: "L3"
  },
  {
    id: "02",
    title: "The Future of RAG: Beyond Vector Search",
    category: "RESEARCH",
    date: "OCT 08, 2026",
    readTime: "12 MIN",
    image: "/images/project2.png",
    excerpt: "Moving from simple semantic retrieval to agentic knowledge graph synthesis for enterprise-grade context awareness.",
    complexity: "L2"
  },
  {
    id: "03",
    title: "Autonomous Logistics: A Case Study in CV",
    category: "CASE_STUDY",
    date: "SEP 28, 2026",
    readTime: "6 MIN",
    image: "/images/project3.png",
    excerpt: "How we implemented YOLOv10 for a global shipping giant, achieving 99.8% accuracy in high-motion environments.",
    complexity: "L1"
  }
];

export function BlogSection() {
  const featured = POSTS[0];
  const others = POSTS.slice(1);

  return (
    <section id="blog" className="py-40 relative">
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-sinai-glow-orange" />
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-sinai-glow-orange font-bold">
            05 // Intellectual Capital
          </span>
        </div>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
          TECHNICAL <span className="opacity-40 italic">INSIGHTS.</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        
        {/* Featured Post - Large Cinematic Card */}
        <div className="lg:col-span-7 group">
          <Link href="#" className="block space-y-8">
            <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/10 bg-black shadow-2xl">
              <Image 
                src={featured.image} 
                alt={featured.title} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 opacity-60" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute top-8 left-8 flex gap-3">
                <span className="px-3 py-1 rounded-full bg-sinai-glow-orange text-[9px] font-black text-white uppercase tracking-widest">{featured.category}</span>
                <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[9px] font-black text-white uppercase tracking-widest">{featured.complexity}</span>
              </div>
            </div>
            <div className="space-y-4 px-4">
              <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                <span>{featured.date}</span>
                <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                <span>{featured.readTime} READ</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-white group-hover:text-sinai-glow-orange transition-colors duration-500 leading-tight">
                {featured.title}
              </h3>
              <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl">
                {featured.excerpt}
              </p>
            </div>
          </Link>
        </div>

        {/* Other Posts - Refined Technical List */}
        <div className="lg:col-span-5 flex flex-col gap-12 lg:pt-4">
          {others.map((post) => (
            <Link key={post.id} href="#" className="group block pb-12 border-b border-white/5 last:border-0">
              <div className="flex gap-8 items-start">
                <div className="relative w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-black">
                  <Image src={post.image} alt={post.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                    <span className="text-sinai-glow-orange">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-sinai-glow-orange transition-colors duration-300 leading-tight">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.2em]">{post.readTime} // COMPLEXITY_{post.complexity}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* CTA: View All */}
          <div className="pt-8">
            <Link href="#" className="group flex items-center gap-4 text-[10px] font-mono text-zinc-400 uppercase tracking-[0.5em] hover:text-white transition-colors">
              VIEW_ALL_INSIGHTS
              <div className="w-8 h-px bg-zinc-800 group-hover:w-16 group-hover:bg-sinai-glow-orange transition-all duration-500" />
            </Link>
          </div>
        </div>

      </div>

      {/* Decorative Grid and Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
