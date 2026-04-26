import React from "react";
import { Metadata } from "next";
import { TastoClient } from "./TastoClient";

export const metadata: Metadata = {
  title: "Tasto | SaaS Revenue Metrics",
  description: "A SaaS revenue metrics platform for tracking MRR, churn, retention, and forecasts. Turn complex recurring revenue into a clear system of record with predictive AI growth modeling.",
  alternates: {
    canonical: "https://apexexperts.net/projects/tasto",
  },
  openGraph: {
    title: "Tasto | SaaS Revenue Metrics",
    description: "The unified system of record for SaaS growth. Explore the Tasto revenue intelligence deployment.",
    url: "https://apexexperts.net/projects/tasto",
    type: "website",
    images: [
      {
        url: "/images/tasto-premium.png",
        width: 1200,
        height: 630,
        alt: "Tasto Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasto | SaaS Revenue Metrics",
    description: "The unified system of record for SaaS growth.",
    images: ["/images/tasto-premium.png"],
  },
};

export default function TastoPage() {
  return <TastoClient />;
}
