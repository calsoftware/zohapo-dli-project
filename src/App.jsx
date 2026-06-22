import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectOverview from "./components/ProjectOverview";
import ResearchSection from "./components/ResearchSection";
import WhySection from "./components/WhySection";
import PersonasSection from "./components/PersonasSection";
import WhatSection from "./components/WhatSection";
import HowSection from "./components/HowSection";
import AssessmentSection from "./components/AssessmentSection";
import BloomTaxonomySection from "./components/BloomTaxonomySection";
import ImpactSection from "./components/ImpactSection";
import ImplementationSection from "./components/ImplementationSection";
import FinalSection from "./components/FinalSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink-900"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <ProjectOverview />
        <ResearchSection />
        <WhySection />
        <PersonasSection />
        <WhatSection />
        <HowSection />
        <AssessmentSection />
        <BloomTaxonomySection />
        <ImpactSection />
        <ImplementationSection />
        <FinalSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
