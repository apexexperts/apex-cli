import React from "react";
import { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

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
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
