import { AmbientEffects } from "@/components/ambient-effects/ambient-effects";
import { CinematicSection } from "@/components/cinematic-section/cinematic-section";
import { CtaSection } from "@/components/cta/cta-section";
import { HeroSection } from "@/components/hero/hero-section";
import { ProblemSection } from "@/components/problem/problem-section";
import { ProcessSection } from "@/components/process/process-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ServicesSection } from "@/components/services/services-section";
import { SiteHeader } from "@/components/site-header/site-header";
import { TechStackSection } from "@/components/tech-stack/tech-stack-section";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <AmbientEffects />
      <SiteHeader />

      <main id="main-content" className="relative z-10">
        <HeroSection />
        <CinematicSection />
        <ProblemSection />
        <ServicesSection />
        <TechStackSection />
        <ProjectsSection />
        <ProcessSection />
        <CtaSection />
      </main>
    </div>
  );
}