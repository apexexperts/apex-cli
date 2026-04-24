"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";

export default function BlogPage() {
  const posts = BLOG_POSTS;

  // Extract unique topics and count them
  const topicsMap: Record<string, number> = {};
  posts.forEach(post => {
    post.categories.forEach(cat => {
      topicsMap[cat] = (topicsMap[cat] || 0) + 1;
    });
  });
  const uniqueTopics = Object.entries(topicsMap).map(([name, count]) => ({
    name,
    count,
    slug: name.toLowerCase().replace(/\s+/g, '-')
  }));

  return (
    <div className="min-h-screen bg-[#06080a] text-white pt-32 pb-20 overflow-hidden relative selection:bg-sinai-glow-orange selection:text-black">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sinai-glow-orange/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sinai-glow-orange/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionReveal>
          <div className="max-w-4xl mb-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-sinai-glow-orange/30" />
              <span className="text-[9px] uppercase tracking-[0.5em] text-sinai-glow-orange font-bold">
                INSIGHTS // APEX_INTELLIGENCE
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] text-white uppercase">
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sinai-glow-orange via-white to-white/40">
                Knowledge Hub.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl font-light leading-relaxed mt-12 italic">
              Exploring the frontiers of autonomous intelligence, data engineering, and the future of enterprise systems.
            </p>
          </div>
        </SectionReveal>

        {/* Taxonomy Explorer (Topics) */}
        <SectionReveal>
          <div className="mb-32 space-y-10">
            <div className="flex items-center gap-4">
              <div className="text-[10px] font-mono text-zinc-600 tracking-[0.4em] uppercase">Taxonomy_Explorer</div>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <div className="flex flex-wrap gap-6">
              {uniqueTopics.map((topic) => (
                <Link 
                  key={topic.slug} 
                  href={`/blog/topic/${topic.slug}`}
                  className="group relative flex items-center gap-6 px-8 py-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sinai-glow-orange/40 hover:bg-sinai-glow-orange/[0.05] transition-all duration-500"
                >
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-zinc-600 group-hover:text-sinai-glow-orange transition-colors">0{topic.count}</span>
                    <span className="text-sm font-black uppercase tracking-widest text-white group-hover:text-sinai-glow-orange transition-colors">{topic.name}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-sinai-glow-orange transition-all group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Featured Post */}
        {posts.length > 0 && (
          <SectionReveal>
            <div className="mb-40 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white/[0.02] border border-white/5 rounded-[4rem] p-8 lg:p-12 transition-all hover:bg-white/[0.04] hover:border-sinai-glow-orange/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="lg:col-span-7 aspect-[16/9] relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src={posts[0].mainImage}
                    alt={posts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[2s] brightness-75 group-hover:brightness-100 transition-all"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <div className="lg:col-span-5 space-y-10 relative z-10">
                  <div className="flex flex-wrap gap-4">
                    {posts[0].categories?.map((cat: string) => (
                      <Link 
                        key={cat} 
                        href={`/blog/topic/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-4 py-1.5 rounded-full bg-sinai-glow-orange/10 border border-sinai-glow-orange/30 text-sinai-glow-orange text-[9px] font-mono font-bold uppercase tracking-[0.3em] hover:bg-sinai-glow-orange hover:text-white transition-all"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                  
                  <Link href={`/blog/${posts[0].slug}`} className="block space-y-6 group/title">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight uppercase group-hover/title:text-sinai-glow-orange transition-colors">
                      {posts[0].title}
                    </h2>
                    <p className="text-zinc-500 text-xl font-light line-clamp-3 leading-relaxed italic">
                      {posts[0].excerpt}
                    </p>
                  </Link>

                  <div className="flex items-center gap-10 text-[10px] font-mono text-zinc-600 uppercase tracking-widest pt-6 border-t border-white/5">
                    <span className="flex items-center gap-3">
                      <Calendar className="w-3.5 h-3.5 text-sinai-glow-orange/50" />
                      {new Date(posts[0].publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-3">
                      <User className="w-3.5 h-3.5 text-sinai-glow-orange/50" />
                      {posts[0].author?.name}
                    </span>
                  </div>

                  <div className="pt-4">
                    <Link href={`/blog/${posts[0].slug}`} className="group/btn inline-flex items-center gap-6 px-10 py-5 rounded-full bg-sinai-glow-orange text-white font-black text-xs tracking-[0.4em] uppercase hover:shadow-[0_0_50px_rgba(242,162,75,0.4)] transition-all">
                      Initialize Insight
                      <ArrowRight className="w-4 h-4 translate-x-0 group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {posts.slice(1).map((post: any) => (
            <SectionReveal key={post.id}>
              <div className="group block space-y-8 relative">
                <Link href={`/blog/${post.slug}`} className="aspect-[4/3] relative block rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-950 transition-all duration-700 group-hover:border-sinai-glow-orange/30">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[3s] opacity-60 group-hover:opacity-100 brightness-75 group-hover:brightness-100 transition-all"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <div className="w-12 h-12 rounded-full bg-sinai-glow-orange flex items-center justify-center text-white shadow-[0_0_30px_rgba(242,162,75,0.4)]">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </Link>

                <div className="space-y-6 px-2">
                  <div className="flex gap-6 items-center">
                    {post.categories?.slice(0, 1).map((cat: string) => (
                      <Link 
                        key={cat} 
                        href={`/blog/topic/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sinai-glow-orange text-[9px] font-mono font-black uppercase tracking-[0.4em] hover:text-white transition-colors"
                      >
                        {cat}
                      </Link>
                    ))}
                    <div className="h-px flex-1 bg-white/5" />
                    <span className="text-zinc-800 text-[8px] font-mono uppercase tracking-widest font-black">
                      // 0x{post.id.slice(-4)}
                    </span>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`} className="block space-y-4">
                    <h3 className="text-3xl font-black tracking-tighter leading-tight uppercase group-hover:text-sinai-glow-orange transition-colors duration-500">
                      {post.title}
                    </h3>
                    <p className="text-zinc-500 text-lg font-light line-clamp-2 leading-relaxed italic">
                      {post.excerpt}
                    </p>
                  </Link>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-6 text-[9px] font-mono text-zinc-700 uppercase tracking-widest font-bold">
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                      <span>{post.author?.name}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-sinai-glow-orange opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[8px] uppercase tracking-widest font-black">
                      Deploy_Node
                    </Link>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="py-40 text-center space-y-12 border border-dashed border-white/10 rounded-[4rem]">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-sinai-glow-orange/5 flex items-center justify-center border border-sinai-glow-orange/10 animate-pulse text-sinai-glow-orange/40">
                <Clock className="w-10 h-10" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-black tracking-tighter uppercase">Initializing Intelligence.</h3>
              <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">The knowledge base is currently syncing. Check back soon for first entry.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
