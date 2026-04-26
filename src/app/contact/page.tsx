import { Metadata } from "next";
import { getCspNonce } from "@/lib/csp";
import { ContactInterface } from "../../components/contact/ContactInterface";

export const metadata: Metadata = {
  title: "Contact APEX Experts — Initiate Technical Link",
  description: "Contact our team about AI, Oracle APEX, web, or mobile development. Strategic consultation for elite AI solutions and enterprise scaling.",
  alternates: {
    canonical: "https://apexexperts.net/contact",
  },
  openGraph: {
    title: "Contact APEX Experts — Initiate Technical Link",
    description: "Contact our team about AI, Oracle APEX, web, or mobile development.",
    url: "https://apexexperts.net/contact",
    images: [
      {
        url: "/images/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact APEX Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact APEX Experts — Initiate Technical Link",
    description: "Contact our team about AI, Oracle APEX, web, or mobile development.",
    images: ["/images/og-contact.png"],
  },
};

export default async function ContactPage() {
  const nonce = await getCspNonce();

  return (
    <div className="bg-[#050505] min-h-screen selection:bg-sinai-glow-orange/30 selection:text-white overflow-x-hidden">
      <script
        nonce={nonce}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact APEX Experts",
            "description": "Contact our engineering team for AI solutions and enterprise development.",
            "mainEntity": {
              "@type": "Organization",
              "name": "APEX Experts AI Solutions",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Technical Support",
                "email": "info@apexexperts.net"
              }
            }
          }),
        }}
      />
      <ContactInterface />
    </div>
  );
}
