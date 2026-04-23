import { TerminalHero } from "@/components/TerminalHero";
import { SectionReveal } from "@/components/SectionReveal";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";

export default function Home() {
  return (
    <>
      {/* ── Hero: Cinematic CLI Experience ── */}
      <TerminalHero />

      {/* ── Page Content ── */}
      <div className="relative">
        {/* Ambient background for content area */}
        <div
          className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-background via-background to-transparent pointer-events-none"
          aria-hidden="true"
        />

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
    </>
  );
}
