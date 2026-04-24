import React from "react";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blog";
import BlogPostView from "./BlogPostView";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.mainImage],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
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
