import React from "react";
import { Metadata } from "next";
import { AsklyzeClient } from "./AsklyzeClient";

export const metadata: Metadata = {
  title: "Asklyze | Plugin for Oracle APEX",
  description: "A native Oracle APEX plugin that integrates conversational AI intelligence directly into your database applications. Query complex schemas with natural language.",
  alternates: {
    canonical: "https://apexexperts.net/projects/asklyze",
  },
  openGraph: {
    title: "Asklyze | Plugin for Oracle APEX",
    description: "Transform complex data into conversational intelligence within Oracle APEX. Explore the ASKLYZE plugin.",
    url: "https://apexexperts.net/projects/asklyze",
    type: "website",
  },
};

export default function AsklyzePage() {
  return <AsklyzeClient />;
}
