import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About APEX Experts — Architecting Digital Intelligence",
  description: "Meet the elite engineering team at APEX Experts. We bridge the gap between complex AI capabilities and real-world enterprise scalability.",
  alternates: {
    canonical: "https://apex-experts.net/about",
  },
  openGraph: {
    title: "About APEX Experts — Architecting Digital Intelligence",
    description: "Meet the elite engineering team at APEX Experts. We bridge the gap between complex AI capabilities and real-world enterprise scalability.",
    url: "https://apex-experts.net/about",
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

export default function AboutPage() {
  return (
    <>
      <script
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
                "url": "https://apex-experts.net/logo.png"
              }
            }
          }),
        }}
      />
      <AboutClient />
    </>
  );
}
