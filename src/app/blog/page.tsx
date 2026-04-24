import type { Metadata } from "next";
import BlogIndexView from "./BlogIndexView";

export const metadata: Metadata = {
  title: "AI Engineering Blog",
  description:
    "Technical insights from APEX Experts AI Solutions on AI automation, Oracle APEX, agentic systems, web engineering, mobile AI, security, and SEO.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "AI Engineering Blog",
    description:
      "Technical insights from APEX Experts AI Solutions on AI automation, Oracle APEX, agentic systems, web engineering, mobile AI, security, and SEO.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineering Blog",
    description:
      "Technical insights from APEX Experts AI Solutions on AI automation, Oracle APEX, agentic systems, web engineering, mobile AI, security, and SEO.",
  },
};

export default function BlogPage() {
  return <BlogIndexView />;
}
