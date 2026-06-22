import { motion } from "framer-motion";
import { Search, Users2, UserSearch, IdCard, PenTool } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import EvidenceSection from "./EvidenceSection";
import { researchStages } from "../data/content";

const icons = [Search, Users2, UserSearch, IdCard, PenTool];

export default function ResearchSection() {
  return (
    <section id="research" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Research and Needs Analysis"
          heading="How the learning need was identified"
          subheading="Zohapo is not driven by technology alone. The design was shaped by a structured needs analysis spanning desk research, stakeholder reflection and learner-level investigation."
          align="center"
        />

        <div className="relative mt-14">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-blue via-brand-violet to-brand-teal lg:block"
            aria-hidden="true"
          />
          <ol className="space-y-6 lg:space-y-10">
            {researchStages.map((stage, index) => {
              const Icon = icons[index % icons.length];
              const isEven = index % 2 === 0;
              return (
                <motion.li
                  key={stage.id}
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className={`relative flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 ${
                    isEven ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={isEven ? "lg:text-right" : ""}>
                    <div className={`flex items-center gap-3 ${isEven ? "lg:justify-end" : ""}`}>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-violet text-white shadow-card">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-display text-sm font-bold uppercase tracking-wide text-slate-500">
                        Stage {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold text-ink-900">{stage.title}</h3>
                  </div>
                  <div className="rounded-xl2 border border-slate-200 bg-white p-5 shadow-card">
                    <p className="text-sm leading-relaxed text-slate-600">{stage.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <EvidenceSection />
      </div>
    </section>
  );
}
