import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { Calendar, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[#06080a] text-white pt-40 pb-40 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1000px] pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-sinai-glow-orange/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Navigation / Back Button */}
        <SectionReveal>
          <div className="flex items-center justify-between mb-24">
            <Link href="/blog" className="group flex items-center gap-4 text-[10px] font-mono tracking-[0.5em] text-zinc-500 hover:text-white transition-colors uppercase">
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-sinai-glow-orange group-hover:border-sinai-glow-orange group-hover:text-white transition-all">
                <ArrowLeft className="w-4 h-4" />
              </div>
              Back to Archive
            </Link>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-zinc-500 hover:text-white">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-zinc-500 hover:text-white">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </SectionReveal>

        {/* Header Section */}
        <SectionReveal>
          <div className="max-w-5xl mx-auto space-y-12 mb-24">
            <div className="flex flex-wrap gap-4">
              {post.categories?.map((cat: string) => (
                <span key={cat} className="px-4 py-1.5 rounded-full bg-sinai-glow-orange/10 border border-sinai-glow-orange/30 text-sinai-glow-orange text-[9px] font-mono font-bold uppercase tracking-widest">
                  {cat}
                </span>
              ))}
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white uppercase">
              {post.title}
            </h1>

            <p className="text-2xl md:text-3xl text-zinc-500 font-light leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-12 pt-12 border-t border-white/5">
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10">
                  <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Author_Node</div>
                  <div className="text-lg font-bold text-white uppercase tracking-tight">{post.author.name}</div>
                </div>
              </div>

              <div className="h-12 w-px bg-white/5 hidden md:block" />

              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Published_At</div>
                <div className="text-lg font-bold text-white font-mono uppercase tracking-tight">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </div>
              </div>

              <div className="h-12 w-px bg-white/5 hidden md:block" />

              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Status</div>
                <div className="flex items-center gap-2 text-lg font-bold text-green-500 font-mono uppercase tracking-tight">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live_Node
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Main Image */}
        <SectionReveal>
          <div className="relative aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(242,162,75,0.05)] mb-32">
            <Image
              src={post.mainImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06080a] via-transparent to-transparent opacity-40" />
          </div>
        </SectionReveal>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="prose prose-invert max-w-none space-y-10">
              {post.body.map((block: any, i: number) => {
                if (block.type === "h2") return <h2 key={i} className="text-4xl font-black tracking-tighter uppercase mt-20 mb-10 text-white leading-tight">{block.text}</h2>;
                if (block.type === "p") return <p key={i} className="text-xl text-zinc-400 font-light leading-relaxed mb-10">{block.text}</p>;
                return null;
              })}
            </div>
          </SectionReveal>
        </div>

        {/* Footer / CTA */}
        <SectionReveal>
          <div className="mt-64 p-20 rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl relative overflow-hidden text-center space-y-10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-sinai-glow-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 space-y-6">
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Was this insight valuable?</h3>
              <p className="text-xl text-zinc-500 font-light max-w-xl mx-auto">Join our private network to receive tactical AI intelligence directly in your inbox.</p>
            </div>
            <div className="relative z-10 pt-8 flex justify-center gap-8">
              <button className="px-12 py-6 rounded-full bg-sinai-glow-orange text-white font-black text-xs uppercase tracking-[0.4em] hover:shadow-[0_0_50px_rgba(242,162,75,0.4)] hover:scale-105 transition-all duration-500">
                Subscribe to Intelligence
              </button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </article>
  );
}
