"use client";

import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";
import { ArrowLeft, Hash } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { notFound } from "next/navigation";

export default function BlogTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  // We'll treat the slug as the category name for now (kebab-case to Title Case)
  const topicName = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  
  // Filter posts that contain this category
  const filteredPosts = BLOG_POSTS.filter(post => 
    post.categories.some(cat => cat.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase())
  ).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  if (filteredPosts.length === 0) {
    const allCategories = Array.from(new Set(BLOG_POSTS.flatMap(p => p.categories.map(c => c.toLowerCase().replace(/\s+/g, '-')))));
    if (!allCategories.includes(slug.toLowerCase())) {
        notFound();
    }
  }

  return (
    <div className="min-h-screen bg-[#06080a] text-white pt-40 pb-20 overflow-hidden relative selection:bg-sinai-glow-orange selection:text-black">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-sinai-glow-orange/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Breadcrumb / Back */}
        <SectionReveal>
          <div className="mb-12">
            <Link href="/blog" className="group flex items-center gap-4 text-[10px] font-mono tracking-[0.5em] text-zinc-500 hover:text-white transition-colors uppercase">
              <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-sinai-glow-orange group-hover:border-sinai-glow-orange transition-all">
                <ArrowLeft className="w-4 h-4 text-white" />
              </div>
              Back to Archive
            </Link>
          </div>
        </SectionReveal>

        {/* Topic Header */}
        <SectionReveal>
          <div className="max-w-5xl mb-32 space-y-8">
            <div className="flex items-center gap-4">
              <Hash className="w-10 h-10 text-sinai-glow-orange opacity-50" />
              <span className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.5em] font-black uppercase">Taxonomy_Node // Topics</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase">
              {topicName}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-white/40 italic">Registry.</span>
            </h1>
            <p className="text-2xl text-zinc-500 font-light max-w-2xl leading-relaxed italic">
              Dispatches and architectural research focused on {topicName.toLowerCase()} within the APEX intelligence ecosystem.
            </p>
          </div>
        </SectionReveal>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {filteredPosts.map((post) => (
            <SectionReveal key={post.id}>
              <Link href={`/blog/${post.slug}`} className="group block space-y-8 relative">
                <div className="aspect-[4/3] relative rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl transition-all duration-700 group-hover:border-sinai-glow-orange/30">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    fill
                    className="object-cover scale-105 group-hover:scale-110 transition-transform duration-[3s] opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Hover Accent */}
                  <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                    <div className="px-6 py-2 rounded-full bg-sinai-glow-orange text-white font-black text-[9px] uppercase tracking-[0.3em]">
                      Explore_Insight
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="px-3 py-1 rounded-sm bg-white/[0.03] border border-white/10 text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
                      ID: 0x{post.id.slice(-4)}
                    </div>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>
                  
                  <h3 className="text-3xl font-black tracking-tighter uppercase leading-tight text-white group-hover:text-sinai-glow-orange transition-colors duration-500">
                    {post.title}
                  </h3>
                  
                  <p className="text-lg text-zinc-500 font-light line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-8 pt-4 text-[9px] font-mono text-zinc-700 uppercase tracking-[0.2em] font-bold">
                    <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    <span>{post.author.name}</span>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>

        {/* Global Footer System Status */}
        <div className="mt-64 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-12">
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest mb-1">Taxonomy</span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sinai-glow-orange animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest leading-none">{topicName}_NODE</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest mb-1">Index_Count</span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">{filteredPosts.length} DEPLOYMENTS</span>
            </div>
          </div>
          
          <div className="text-[10px] font-mono text-zinc-800 tracking-[0.5em] uppercase hidden lg:block text-right">
            Apex_Experts_Research_Registry<br />
            Auth_Level: Topic_Specialist
          </div>
        </div>
      </div>
    </div>
  );
}
