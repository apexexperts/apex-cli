import { Metadata } from "next";
import MobileDevelopmentClient from "./MobileDevelopmentClient";

export const metadata: Metadata = {
  title: "Mobile Architecture — Premium iOS & Android Engineering",
  description: "Engineering premium native and cross-platform mobile apps with world-class UX/UI. High-performance iOS and Android architectures for the digital elite.",
  alternates: {
    canonical: "https://apex-experts.net/services/mobile-development",
  },
  openGraph: {
    title: "Mobile Architecture — Premium iOS & Android Engineering",
    description: "Engineering premium native and cross-platform mobile apps with world-class UX/UI.",
    url: "https://apex-experts.net/services/mobile-development",
    images: [
      {
        url: "/images/og-mobile-development.png",
        width: 1200,
        height: 630,
        alt: "Mobile Architecture Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Architecture — Premium iOS & Android Engineering",
    description: "Engineering premium native and cross-platform mobile apps with world-class UX/UI.",
    images: ["/images/og-mobile-development.png"],
  },
};

export default function MobileDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile Architecture",
            "description": "Premium iOS and Android mobile development and UX/UI engineering.",
            "provider": {
              "@type": "Organization",
              "name": "APEX Experts AI Solutions"
            }
          }),
        }}
      />
      <MobileDevelopmentClient />
    </>
  );
}
