"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { ArrowRight } from "lucide-react";

export function BlogSection() {
  const featured = BLOG_POSTS[0];
  const others = BLOG_POSTS.slice(1, 3);

  return (
    <section id="blog" className="py-40 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sinai-glow-orange/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-sinai-glow-orange" />
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-sinai-glow-orange font-bold">
            05 // Insights
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85]">
            Practical AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange to-white opacity-90 italic">Notes.</span>
          </h2>
          <p className="text-zinc-500 font-mono text-[9px] leading-relaxed tracking-widest uppercase max-w-xs lg:text-right">
            Short guides on AI, Oracle APEX, product delivery, and technical SEO.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Featured Post - Large Cinematic Card */}
        <div className="lg:col-span-7 group">
          <Link href={`/blog/${featured.slug}`} className="block space-y-10">
            <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl group">
              <Image 
                src={featured.mainImage} 
                alt={featured.title} 
                fill 
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-110 transition-transform duration-[3s] ease-out opacity-60 group-hover:opacity-100 transition-opacity" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              {/* Floating ID Tag */}
              <div className="absolute top-8 left-8 flex gap-3">
                <div className="px-4 py-1.5 rounded-full bg-sinai-glow-orange/20 backdrop-blur-xl border border-sinai-glow-orange/40 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-sinai-glow-orange animate-pulse" />
                  <span className="text-[9px] font-black text-white uppercase tracking-widest font-mono">PRIORITY_POST</span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-sinai-glow-orange/10 to-transparent pointer-events-none" />
            </div>

            <div className="space-y-6 px-4 relative">
              <div className="flex items-center gap-6">
                <div className="flex gap-3">
                  {featured.categories.map(cat => (
                    <span key={cat} className="text-sinai-glow-orange text-[9px] font-mono font-bold uppercase tracking-[0.3em]">{cat}</span>
                  ))}
                </div>
                <span className="w-1 h-1 bg-zinc-800 rounded-full" />
                <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest">{new Date(featured.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white group-hover:text-sinai-glow-orange transition-colors duration-500 leading-tight uppercase">
                {featured.title}
              </h3>
              
              <p className="text-lg text-zinc-500 font-light leading-relaxed max-w-2xl line-clamp-2">
                {featured.excerpt}
              </p>

              <div className="pt-4">
                <div className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-white group-hover:text-sinai-glow-orange transition-colors">
                  Read Article
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Other Posts - Refined Technical List */}
        <div className="lg:col-span-5 flex flex-col gap-16 lg:pt-4">
          {others.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block pb-12 border-b border-white/5 last:border-0 relative">
              <div className="flex gap-8 items-start">
                <div className="relative w-32 h-32 flex-shrink-0 rounded-[1.5rem] overflow-hidden border border-white/10 bg-zinc-950">
                  <Image 
                    src={post.mainImage} 
                    alt={post.title} 
                    fill 
                    sizes="128px"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" 
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
                    <span className="text-sinai-glow-orange font-bold">{post.categories[0]}</span>
                    <span className="w-1 h-1 bg-zinc-800 rounded-full" />
                    <span>0x{post.id.slice(-4)}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white group-hover:text-sinai-glow-orange transition-colors duration-300 leading-tight uppercase tracking-tighter">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-4 pt-1">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em]">Deployment_Live</span>
                    <div className="w-10 h-px bg-white/5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* CTA: View All */}
          <div className="pt-8">
            <Link href="/blog" className="group relative px-12 py-5 rounded-full border border-white/10 overflow-hidden inline-flex items-center gap-6 hover:border-sinai-glow-orange/50 transition-all duration-500">
              <div className="absolute inset-0 bg-sinai-glow-orange/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.5em] text-white">
                View All Articles
              </span>
              <div className="relative z-10 w-8 h-px bg-zinc-700 group-hover:w-12 group-hover:bg-sinai-glow-orange transition-all duration-500" />
            </Link>
          </div>
        </div>

      </div>

      {/* Decorative Grid and Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
