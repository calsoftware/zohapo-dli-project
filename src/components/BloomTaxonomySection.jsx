import { BrainCircuit, ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Badge from "./ui/Badge";
import { bloomTaxonomy, bloomAlignmentStatement } from "../data/content";

const levelColor = {
  Remember: "emerald",
  Understand: "blue",
  Analyse: "violet",
  Apply: "teal",
  Create: "rose",
  Evaluate: "amber",
};

export default function BloomTaxonomySection() {
  return (
    <section id="bloom" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Depth of Learning"
          heading="Bloom's Taxonomy Alignment"
          subheading="Mapping each learning outcome to its intended cognitive depth, from understanding and analysis through to application, creation and evaluation."
          align="center"
        />

        <div className="mt-10 rounded-xl2 border border-violet-100 bg-violet-50/60 p-5 sm:p-6">
          <p className="flex items-start gap-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            <BrainCircuit className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-violet" aria-hidden="true" />
            {bloomAlignmentStatement}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {Object.entries(levelColor).map(([level, color], i, arr) => (
            <span key={level} className="flex items-center gap-2">
              <Badge color={color}>{level}</Badge>
              {i < arr.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              )}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs font-medium text-slate-500">
          A deliberate progression of increasing cognitive demand, from recall in early modules to
          evaluation and creation of evidence by Module 8.
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl2 border border-slate-200 shadow-card">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-ink-900 text-white">
              <tr>
                <th className="px-5 py-3 font-display font-bold sm:px-6">Learning Outcome</th>
                <th className="px-5 py-3 font-display font-bold sm:px-6">Main Bloom's Level</th>
                <th className="px-5 py-3 font-display font-bold sm:px-6">Rationale</th>
              </tr>
            </thead>
            <tbody>
              {bloomTaxonomy.map((row, i) => (
                <tr key={row.outcome} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border-t border-slate-200 px-5 py-4 font-semibold text-ink-900 sm:px-6">
                    {row.outcome}
                  </td>
                  <td className="border-t border-slate-200 px-5 py-4 sm:px-6">
                    <div className="flex flex-wrap gap-2">
                      {row.levels.map((level) => (
                        <Badge key={level} color={levelColor[level]}>
                          {level}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="border-t border-slate-200 px-5 py-4 text-slate-600 sm:px-6">
                    {row.rationale}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
