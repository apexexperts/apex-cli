import React from "react";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blog";
import BlogTopicView from "./BlogTopicView";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const getTopicSlug = (category: string) => category.toLowerCase().replace(/\s+/g, "-");

export function generateStaticParams() {
  const topics = Array.from(
    new Set(BLOG_POSTS.flatMap((post) => post.categories.map(getTopicSlug)))
  );

  return topics.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topicName = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  
  const exists = BLOG_POSTS.some(post => 
    post.categories.some(cat => getTopicSlug(cat) === slug.toLowerCase())
  );

  if (!exists) return { title: "Topic Not Found" };

  return {
    title: `${topicName} Research & Insights`,
    description: `Exploring technical architectures and strategy in the field of ${topicName.toLowerCase()}.`,
    alternates: {
      canonical: `/blog/topic/${slug}`,
    },
    openGraph: {
      title: `${topicName} Research & Insights`,
      description: `Exploring technical architectures and strategy in the field of ${topicName.toLowerCase()}.`,
      url: `/blog/topic/${slug}`,
      type: "website",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const exists = BLOG_POSTS.some(post => 
    post.categories.some(cat => getTopicSlug(cat) === slug.toLowerCase())
  );
  if (!exists) notFound();

  return <BlogTopicView params={params} />;
}
