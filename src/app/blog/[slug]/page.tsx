import React from "react";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blog";
import BlogPostView from "./BlogPostView";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.categories,
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [post.mainImage],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.categories,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.mainImage],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) notFound();

  return <BlogPostView params={params} />;
}
