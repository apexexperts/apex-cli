import { Metadata } from "next";
import { getCspNonce } from "@/lib/csp";
import MobileDevelopmentClient from "./MobileDevelopmentClient";

export const metadata: Metadata = {
  title: "Mobile Architecture — Premium iOS & Android Engineering",
  description: "Engineering premium native and cross-platform mobile apps with world-class UX/UI. High-performance iOS and Android architectures for the digital elite.",
  alternates: {
    canonical: "https://apexexperts.net/services/mobile-development",
  },
  openGraph: {
    title: "Mobile Architecture — Premium iOS & Android Engineering",
    description: "Engineering premium native and cross-platform mobile apps with world-class UX/UI.",
    url: "https://apexexperts.net/services/mobile-development",
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

export default async function MobileDevelopmentPage() {
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
