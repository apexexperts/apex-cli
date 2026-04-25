import React from "react";
import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Production Registry | Projects",
  description: "A definitive catalog of our production-grade AI deployments, engineering tools, and cinematic web experiences.",
  alternates: {
    canonical: "https://apexexperts.net/projects",
  },
  openGraph: {
    title: "Production Registry | Projects",
    description: "Explore the technical precision and elite aesthetic execution of our production-grade deployments.",
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
    title: "Production Registry | Projects",
    description: "Explore the technical precision and elite aesthetic execution of our production-grade deployments.",
    images: ["/images/og-projects.png"],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
