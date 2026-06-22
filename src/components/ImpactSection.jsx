import ImpactMetricsSection from "./ImpactMetricsSection";
import TutorIntelligenceSection from "./TutorIntelligenceSection";
import ProductMockups from "./ProductMockups";
import CompetitorSection from "./CompetitorSection";

export default function ImpactSection() {
  return (
    <section id="impact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ImpactMetricsSection />
        <div className="mt-24">
          <TutorIntelligenceSection />
        </div>
        <ProductMockups />
        <CompetitorSection />
      </div>
    </section>
  );
}
