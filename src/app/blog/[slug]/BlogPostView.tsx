"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.mainImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "APEX Experts AI Solutions",
      url: "https://apexexperts.net",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://apexexperts.net/blog/${post.slug}`,
    },
    keywords: post.categories.join(", "),
  };
  let headingIndex = 0;

  return (
    <article className="min-h-screen bg-[#06080a] text-white pt-40 pb-40 overflow-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
                <Link 
                  key={cat} 
                  href={`/blog/topic/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-1.5 rounded-full bg-sinai-glow-orange/10 border border-sinai-glow-orange/30 text-sinai-glow-orange text-[9px] font-mono font-bold uppercase tracking-widest hover:bg-sinai-glow-orange hover:text-white transition-all"
                >
                  {cat}
                </Link>
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
                  <div className="mt-1 text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em]">{post.author.role}</div>
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
            {/* Technical Synopsis Card */}
            <div className="mb-20 p-10 rounded-[2.5rem] bg-sinai-glow-orange/[0.03] border border-sinai-glow-orange/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Bookmark className="w-8 h-8 text-sinai-glow-orange" />
              </div>
              <div className="space-y-4">
                <div className="text-[10px] font-mono text-sinai-glow-orange tracking-[0.4em] uppercase font-black">Technical_Synopsis</div>
                <p className="text-xl text-zinc-300 font-light leading-relaxed italic">
                  {post.synopsis ?? post.excerpt}
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-12">
              {post.body.map((block, i) => {
                if (block.type === "h2") {
                  const headingNumber = String(++headingIndex).padStart(2, "0");
                  return (
                    <h2 key={i} className="text-4xl md:text-5xl font-black tracking-tighter uppercase mt-24 mb-12 text-white leading-tight flex items-center gap-6">
                      <span className="text-sinai-glow-orange/40 font-mono text-2xl">{headingNumber}</span>
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "p") return <p key={i} className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-12">{block.text}</p>;
                if (block.type === "image") return (
                  <div key={i} className="my-20 space-y-6">
                    <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl">
                      <Image
                        src={block.src}
                        alt={block.caption}
                        fill
                        sizes="(max-width: 768px) 100vw, 896px"
                        className="object-cover brightness-90 hover:brightness-100 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </div>
                    <div className="flex items-center gap-4 px-6">
                      <div className="w-2 h-2 rounded-full bg-sinai-glow-orange animate-pulse" />
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{block.caption}</span>
                    </div>
                  </div>
                );
                return null;
              })}
            </div>
          </SectionReveal>
        </div>

        {/* Related Posts / Next Steps */}
        <SectionReveal>
          <div className="mt-48 pt-24 border-t border-white/5 space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4">
                <div className="text-sinai-glow-orange font-mono text-[10px] tracking-[0.4em] uppercase font-black">Knowledge_Expansion</div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Related Insights</h2>
              </div>
              <Link href="/blog" className="text-[10px] font-mono text-zinc-500 hover:text-white transition-colors uppercase tracking-widest border-b border-white/10 pb-2">
                Explore Full Archive
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {BLOG_POSTS.filter(p => p.slug !== post.slug && p.categories.some(cat => post.categories.includes(cat)))
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group space-y-8"
                  >
                    <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden border border-white/10">
                      <Image 
                        src={relatedPost.mainImage} 
                        alt={relatedPost.title} 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06080a] via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="space-y-4 px-4">
                      <div className="flex gap-3">
                        {relatedPost.categories.slice(0, 1).map(cat => (
                          <span key={cat} className="text-[9px] font-mono text-sinai-glow-orange tracking-widest uppercase">{cat}</span>
                        ))}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase group-hover:text-sinai-glow-orange transition-colors duration-300">
                        {relatedPost.title}
                      </h3>
                      <p className="text-zinc-500 font-light leading-relaxed line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </SectionReveal>

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
