import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — Enterprise AI & Oracle APEX Architectures",
  description: "A definitive catalog of our engineering operation units. From AI automation to Oracle APEX development, we transform complex challenges into technical advantages.",
  alternates: {
    canonical: "https://apex-experts.net/services",
  },
  openGraph: {
    title: "Services — Enterprise AI & Oracle APEX Architectures",
    description: "A definitive catalog of our engineering operation units. From AI automation to Oracle APEX development, we transform complex challenges into technical advantages.",
    url: "https://apex-experts.net/services",
    images: [
      {
        url: "/images/og-services.png",
        width: 1200,
        height: 630,
        alt: "APEX Experts Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Enterprise AI & Oracle APEX Architectures",
    description: "A definitive catalog of our engineering operation units. From AI automation to Oracle APEX development, we transform complex challenges into technical advantages.",
    images: ["/images/og-services.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "APEX Experts AI Solutions Services",
            "description": "Enterprise AI engineering, Oracle APEX development, and premium digital solutions.",
            "provider": {
              "@type": "Organization",
              "name": "APEX Experts AI Solutions",
              "url": "https://apex-experts.net"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI and Software Engineering Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI & Process Automation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Oracle APEX Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Engineering"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile Architecture"
                  }
                }
              ]
            }
          }),
        }}
      />
      <ServicesClient />
    </>
  );
}
