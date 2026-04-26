import { TerminalHero } from "@/components/TerminalHero";
import { SectionReveal } from "@/components/SectionReveal";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { getCspNonce } from "@/lib/csp";

export default async function Home() {
  const nonce = await getCspNonce();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://apexexperts.net/#organization",
        name: "APEX Experts AI Solutions",
        url: "https://apexexperts.net",
        logo: {
          "@type": "ImageObject",
          url: "https://apexexperts.net/images/logo.png",
        },
        image: "https://apexexperts.net/images/dark-logo.jpg",
        description:
          "APEX Experts AI Solutions builds practical AI systems, Oracle APEX applications, business dashboards, automation workflows, and custom web and mobile software for real business operations.",
      },
      {
        "@type": "WebSite",
        "@id": "https://apexexperts.net/#website",
        name: "APEX Experts AI Solutions",
        url: "https://apexexperts.net",
        publisher: {
          "@id": "https://apexexperts.net/#organization",
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <>
      <script
        nonce={nonce}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <section className="relative">
        {/* ── Hero: Cinematic CLI Experience ── */}
        <TerminalHero />

        {/* ── Page Content ── */}
        <div className="relative">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* ── About ── */}
            <SectionReveal>
              <AboutSection />
            </SectionReveal>

            <div className="section-separator my-24" aria-hidden="true" />

            {/* ── Services ── */}
            <SectionReveal>
              <ServicesSection />
            </SectionReveal>

            <div className="section-separator my-24" aria-hidden="true" />

            {/* ── Process ── */}
            <SectionReveal>
              <ProcessSection />
            </SectionReveal>

            <div className="section-separator my-24" aria-hidden="true" />

            {/* ── Projects ── */}
            <SectionReveal>
              <ProjectsSection />
            </SectionReveal>

            <div className="section-separator my-24" aria-hidden="true" />

            {/* ── Testimonials ── */}
            <SectionReveal>
              <TestimonialsSection />
            </SectionReveal>

            <div className="section-separator my-24" aria-hidden="true" />

            {/* ── Blog ── */}
            <SectionReveal>
              <BlogSection />
            </SectionReveal>

            <div className="section-separator my-24" aria-hidden="true" />

            {/* ── Contact ── */}
            <SectionReveal>
              <ContactSection />
            </SectionReveal>

            <div className="h-24" />
          </div>
        </div>
      </section>
    </>
  );
}
