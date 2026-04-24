import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog";

const getTopicSlug = (category: string) => category.toLowerCase().replace(/\s+/g, "-");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://apex-experts.net";

  const routes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/projects",
    "/services",
    "/services/ai-automation",
    "/services/oracle-apex",
    "/services/web-development",
    "/services/mobile-development",
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const topicRoutes = Array.from(
    new Set(BLOG_POSTS.flatMap((post) => post.categories.map(getTopicSlug)))
  ).map((topic) => ({
    url: `${baseUrl}/blog/topic/${topic}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...topicRoutes];
}
