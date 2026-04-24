import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";

export default async function BlogPage() {
  const posts = BLOG_POSTS;

  return (
    <div className="min-h-screen bg-[#06080a] text-white pt-32 pb-20 overflow-hidden">
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
            <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl font-light leading-relaxed mt-12">
              Exploring the frontiers of autonomous intelligence, data engineering, and the future of enterprise systems.
            </p>
          </div>
        </SectionReveal>

        {/* Featured Post (if exists) */}
        {posts.length > 0 && (
          <SectionReveal>
            <div className="mb-40 group">
              <Link href={`/blog/${posts[0].slug}`} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 lg:p-12 transition-all hover:bg-white/[0.04] hover:border-sinai-glow-orange/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="lg:col-span-7 aspect-[16/9] relative rounded-2xl overflow-hidden shadow-2xl">
                  {posts[0].mainImage && (
                    <Image
                      src={posts[0].mainImage}
                      alt={posts[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="lg:col-span-5 space-y-8 relative z-10">
                  <div className="flex flex-wrap gap-4">
                    {posts[0].categories?.map((cat: string) => (
                      <span key={cat} className="px-3 py-1 rounded-full bg-sinai-glow-orange/10 border border-sinai-glow-orange/30 text-sinai-glow-orange text-[9px] font-mono font-bold uppercase tracking-widest">
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight uppercase group-hover:text-sinai-glow-orange transition-colors">
                    {posts[0].title}
                  </h2>
                  
                  <p className="text-zinc-400 text-lg font-light line-clamp-3">
                    {posts[0].excerpt}
                  </p>

                  <div className="flex items-center gap-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest pt-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-sinai-glow-orange" />
                      {new Date(posts[0].publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-2">
                      <User className="w-3 h-3 text-sinai-glow-orange" />
                      {posts[0].author?.name}
                    </span>
                  </div>

                  <div className="pt-8">
                    <div className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white">
                      Read Full Insight
                      <div className="w-12 h-px bg-sinai-glow-orange group-hover:w-20 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </SectionReveal>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {posts.slice(1).map((post: any) => (
            <SectionReveal key={post.id}>
              <Link href={`/blog/${post.slug}`} className="group block space-y-6">
                <div className="aspect-[4/3] relative rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-950">
                  {post.mainImage && (
                    <Image
                      src={post.mainImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-[3s] opacity-80 group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <div className="w-10 h-10 rounded-full bg-sinai-glow-orange flex items-center justify-center text-white shadow-[0_0_20px_rgba(242,162,75,0.4)]">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 px-2">
                  <div className="flex gap-4">
                    {post.categories?.slice(0, 1).map((cat: string) => (
                      <span key={cat} className="text-sinai-glow-orange text-[8px] font-mono font-bold uppercase tracking-[0.3em]">
                        {cat}
                      </span>
                    ))}
                    <span className="text-zinc-700 text-[8px] font-mono uppercase tracking-[0.3em]">
                      // 0x{post.id.slice(-4)}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold tracking-tight leading-tight uppercase group-hover:text-sinai-glow-orange transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-sm font-light line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-6 pt-4 border-t border-white/5 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-800" />
                    <span>{post.author?.name}</span>
                  </div>
                </div>
              </Link>
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
            <div className="flex justify-center pt-8">
              <Link href="/admin" className="px-8 py-4 rounded-full bg-white/[0.02] border border-white/10 text-[10px] font-mono tracking-widest uppercase hover:bg-sinai-glow-orange hover:text-white transition-all">
                Login to Studio
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
