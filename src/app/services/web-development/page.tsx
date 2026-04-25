import { Metadata } from "next";
import { getCspNonce } from "@/lib/csp";
import WebDevelopmentClient from "./WebDevelopmentClient";

export const metadata: Metadata = {
  title: "Web Engineering — High-Performance Next.js Architectures",
  description: "Crafting high-performance, cinematic web experiences with production-grade Next.js architectures, immersive design, and technical mastery.",
  alternates: {
    canonical: "https://apexexperts.net/services/web-development",
  },
  openGraph: {
    title: "Web Engineering — High-Performance Next.js Architectures",
    description: "Crafting high-performance, cinematic web experiences with production-grade Next.js architectures.",
    url: "https://apexexperts.net/services/web-development",
    images: [
      {
        url: "/images/og-web-development.png",
        width: 1200,
        height: 630,
        alt: "Web Engineering Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Engineering — High-Performance Next.js Architectures",
    description: "Crafting high-performance, cinematic web experiences with production-grade Next.js architectures.",
    images: ["/images/og-web-development.png"],
  },
};

export default async function WebDevelopmentPage() {
  const nonce = await getCspNonce();

  return (
    <>
      <script
        nonce={nonce}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web Engineering",
            "description": "High-performance Next.js web development and cinematic digital experiences.",
            "provider": {
              "@type": "Organization",
              "name": "APEX Experts AI Solutions"
            }
          }),
        }}
      />
      <WebDevelopmentClient />
    </>
  );
}
