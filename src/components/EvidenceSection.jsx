import { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import StatCard from "./ui/StatCard";
import { evidenceStats, evidenceNarrative, evidenceFootnote, references } from "../data/content";

export default function EvidenceSection() {
  const [showRefs, setShowRefs] = useState(false);

  return (
    <div id="evidence" className="mt-24 sm:mt-32">
      <SectionHeading
        eyebrow="Evidence of Need"
        heading="Why Zohapo Matters Now"
        subheading="A short, cited snapshot of the labour-market evidence behind Zohapo — not a long report."
        align="center"
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {evidenceStats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} delay={i * 0.06} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-10 max-w-3xl text-center leading-relaxed text-slate-600"
      >
        {evidenceNarrative}
      </motion.p>

      <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
        {evidenceFootnote}
      </p>

      <div className="mx-auto mt-8 max-w-3xl">
        <button
          onClick={() => setShowRefs((v) => !v)}
          aria-expanded={showRefs}
          aria-controls="references-panel"
          className="focus-ring mx-auto flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
        >
          <BookOpen className="h-4 w-4 text-brand-violet" aria-hidden="true" />
          Sources and References
          <ChevronDown className={`h-4 w-4 transition-transform ${showRefs ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>

        <AnimatePresence initial={false}>
          {showRefs && (
            <motion.div
              id="references-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="mt-5 space-y-3 rounded-xl2 border border-slate-200 bg-slate-50 p-5">
                {references.map((ref) => (
                  <li key={ref.source} className="text-sm leading-relaxed text-slate-600">
                    <span className="font-semibold text-ink-900">{ref.source}: </span>
                    {ref.detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
