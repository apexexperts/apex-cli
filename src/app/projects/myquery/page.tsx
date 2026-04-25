import React from "react";
import { Metadata } from "next";
import { MyQueryClient } from "./MyQueryClient";

export const metadata: Metadata = {
  title: "MyQuery | AI-Powered Data Analytics",
  description: "Advanced SQL orchestration and database visualization platform for high-performance engineering teams. Transform complex data into cinematic insights.",
  alternates: {
    canonical: "https://apexexperts.net/projects/myquery",
  },
  openGraph: {
    title: "MyQuery | AI-Powered Data Analytics",
    description: "Empower your entire organization with instant answers. Explore the MyQuery AI analytics deployment.",
    url: "https://apexexperts.net/projects/myquery",
    type: "website",
    images: [
      {
        url: "/images/myquery-premium.png",
        width: 1200,
        height: 630,
        alt: "MyQuery Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyQuery | AI-Powered Data Analytics",
    description: "Empower your entire organization with instant answers.",
    images: ["/images/myquery-premium.png"],
  },
};

export default function MyQueryPage() {
  return <MyQueryClient />;
}
