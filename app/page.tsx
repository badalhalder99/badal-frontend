import { AboutSection } from "@/components/sections/about-section";
import { CurriculumSection } from "@/components/sections/curriculum-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ResultsSection } from "@/components/sections/results-section";
import { SystemSection } from "@/components/sections/system-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { WorrySection } from "@/components/sections/worry-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <WorrySection />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <SystemSection />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <CurriculumSection />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <ResultsSection />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <PricingSection />
        </ScrollReveal>
      </main>
      <ScrollReveal delay={80}>
        <Footer />
      </ScrollReveal>
    </>
  );
}
