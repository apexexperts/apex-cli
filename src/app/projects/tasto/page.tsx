import React from "react";
import { Metadata } from "next";
import { TastoClient } from "./TastoClient";

export const metadata: Metadata = {
  title: "Tasto | SaaS Revenue Metrics",
  description: "A cinematic, premium e-commerce and SaaS metrics platform. Turn complex recurring revenue into a clear system of record with predictive AI growth modeling.",
  alternates: {
    canonical: "https://apexexperts.net/projects/tasto",
  },
  openGraph: {
    title: "Tasto | SaaS Revenue Metrics",
    description: "The unified system of record for SaaS growth. Explore the Tasto revenue intelligence deployment.",
    url: "https://apexexperts.net/projects/tasto",
    type: "website",
  },
};

export default function TastoPage() {
  return <TastoClient />;
}
