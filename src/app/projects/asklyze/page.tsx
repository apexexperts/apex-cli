import React from "react";
import { Metadata } from "next";
import { AsklyzeClient } from "./AsklyzeClient";

export const metadata: Metadata = {
  title: "Asklyze | Plugin for Oracle APEX",
  description: "A native Oracle APEX plugin that integrates natural-language questions, reports, charts, and dashboards inside Oracle APEX. Query complex schemas with natural language.",
  alternates: {
    canonical: "https://apexexperts.net/projects/asklyze",
  },
  openGraph: {
    title: "Asklyze | Plugin for Oracle APEX",
    description: "Ask questions about Oracle APEX data and turn the results into useful reports. within Oracle APEX. Explore the ASKLYZE plugin.",
    url: "https://apexexperts.net/projects/asklyze",
    type: "website",
    images: [
      {
        url: "/images/asklyze-premium.png",
        width: 1200,
        height: 630,
        alt: "Asklyze Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asklyze | Plugin for Oracle APEX",
    description: "Ask questions about Oracle APEX data and turn the results into useful reports. within Oracle APEX.",
    images: ["/images/asklyze-premium.png"],
  },
};

export default function AsklyzePage() {
  return <AsklyzeClient />;
}
