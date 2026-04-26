import React from "react";
import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects | Projects",
  description: "A selection of APEX Experts products and project-ready platforms.",
  alternates: {
    canonical: "https://apexexperts.net/projects",
  },
  openGraph: {
    title: "Projects | Projects",
    description: "Explore the AI, analytics, Oracle APEX, web, and SaaS product work from APEX Experts of our production-grade deployments.",
    url: "https://apexexperts.net/projects",
    type: "website",
    images: [
      {
        url: "/images/og-projects.png",
        width: 1200,
        height: 630,
        alt: "APEX Experts Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Projects",
    description: "Explore the AI, analytics, Oracle APEX, web, and SaaS product work from APEX Experts of our production-grade deployments.",
    images: ["/images/og-projects.png"],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
