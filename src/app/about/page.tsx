import { Metadata } from "next";
import { getCspNonce } from "@/lib/csp";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About APEX Experts — Architecting Digital Intelligence",
  description: "Meet the elite engineering team at APEX Experts. We bridge the gap between complex AI capabilities and real-world enterprise scalability.",
  alternates: {
    canonical: "https://apexexperts.net/about",
  },
  openGraph: {
    title: "About APEX Experts — Architecting Digital Intelligence",
    description: "Meet the elite engineering team at APEX Experts. We bridge the gap between complex AI capabilities and real-world enterprise scalability.",
    url: "https://apexexperts.net/about",
    images: [
      {
        url: "/images/og-about.png",
        width: 1200,
        height: 630,
        alt: "About APEX Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About APEX Experts — Architecting Digital Intelligence",
    description: "Meet the elite engineering team at APEX Experts. We bridge the gap between complex AI capabilities and real-world enterprise scalability.",
    images: ["/images/og-about.png"],
  },
};

export default async function AboutPage() {
  const nonce = await getCspNonce();

  return (
    <>
      <script
        nonce={nonce}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About APEX Experts",
            "description": "Meet the elite engineering team at APEX Experts. We bridge the gap between complex AI capabilities and real-world enterprise scalability.",
            "publisher": {
              "@type": "Organization",
              "name": "APEX Experts AI Solutions",
              "logo": {
                "@type": "ImageObject",
                "url": "https://apexexperts.net/logo.png"
              }
            }
          }),
        }}
      />
      <AboutClient />
    </>
  );
}
