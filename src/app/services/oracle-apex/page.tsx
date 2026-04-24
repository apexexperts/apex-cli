import { Metadata } from "next";
import OracleApexClient from "./OracleApexClient";

export const metadata: Metadata = {
  title: "Oracle APEX Development — Mission-Critical Low-Code",
  description: "Technical mastery in Oracle APEX. End-to-end engineering of mission-critical applications, AI integration, and legacy migration with database precision.",
  alternates: {
    canonical: "https://apex-experts.net/services/oracle-apex",
  },
  openGraph: {
    title: "Oracle APEX Development — Mission-Critical Low-Code",
    description: "Technical mastery in Oracle APEX. End-to-end engineering of mission-critical applications, AI integration, and legacy migration.",
    url: "https://apex-experts.net/services/oracle-apex",
    images: [
      {
        url: "/images/og-oracle-apex.png",
        width: 1200,
        height: 630,
        alt: "Oracle APEX Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oracle APEX Development — Mission-Critical Low-Code",
    description: "Technical mastery in Oracle APEX. End-to-end engineering of mission-critical applications, AI integration, and legacy migration.",
    images: ["/images/og-oracle-apex.png"],
  },
};

export default function OracleApexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Oracle APEX Development",
            "description": "Enterprise-grade Oracle APEX development and modernization services.",
            "provider": {
              "@type": "Organization",
              "name": "APEX Experts AI Solutions"
            },
            "serviceType": "Software Development",
            "areaServed": "Global"
          }),
        }}
      />
      <OracleApexClient />
    </>
  );
}
