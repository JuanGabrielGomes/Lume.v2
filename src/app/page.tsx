import { CinematicSection } from "@/components/cinematic-section/cinematic-section";
import { CtaSection } from "@/components/cta/cta-section";
import { EtherealBackground } from "@/components/ethereal-background/ethereal-background";
import { HeroSection } from "@/components/hero/hero-section";
import { LivingGradient } from "@/components/living-gradient/living-gradient";
import { LumeOrb } from "@/components/lume-orb/lume-orb";
import { ProcessSection } from "@/components/process/process-section";
import { ProofStripSection } from "@/components/proof-strip/proof-strip-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ServicesSection } from "@/components/services/services-section";
import { SiteHeader } from "@/components/site-header/site-header";
import { TechStackSection } from "@/components/tech-stack/tech-stack-section";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--foreground)]">
      <LivingGradient />
      <EtherealBackground />
      <LumeOrb />
      <SiteHeader />

      <main id="main-content" className="relative z-10">
        <HeroSection />
        <ProofStripSection />
        <CinematicSection />
        <ServicesSection />
        <TechStackSection />
        <ProcessSection />
        <ProjectsSection />
        <CtaSection />
      </main>
    </div>
  );
}
