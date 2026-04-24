import { Metadata } from "next";
import AIAutomationClient from "./AIAutomationClient";

export const metadata: Metadata = {
  title: "AI & Process Automation — Autonomous Enterprise Agents",
  description: "Revolutionizing enterprise workflows with intelligent autonomous agents and cognitive RPA architectures. Engineer the future of digital intelligence.",
  alternates: {
    canonical: "https://apex-experts.net/services/ai-automation",
  },
  openGraph: {
    title: "AI & Process Automation — Autonomous Enterprise Agents",
    description: "Revolutionizing enterprise workflows with intelligent autonomous agents and cognitive RPA architectures.",
    url: "https://apex-experts.net/services/ai-automation",
    images: [
      {
        url: "/images/og-ai-automation.png",
        width: 1200,
        height: 630,
        alt: "AI & Process Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Process Automation — Autonomous Enterprise Agents",
    description: "Revolutionizing enterprise workflows with intelligent autonomous agents and cognitive RPA architectures.",
    images: ["/images/og-ai-automation.png"],
  },
};

export default function AIAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI & Process Automation",
            "description": "Autonomous enterprise intelligence through agentic workflows and cognitive RPA.",
            "provider": {
              "@type": "Organization",
              "name": "APEX Experts AI Solutions"
            }
          }),
        }}
      />
      <AIAutomationClient />
    </>
  );
}
