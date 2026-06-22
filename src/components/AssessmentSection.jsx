import { ClipboardList, Award, Bot, UserCheck } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import {
  formativeAssessment,
  summativeAssessment,
  assessmentStrategy,
  feedbackLayers,
} from "../data/content";

export default function AssessmentSection() {
  return (
    <section id="assessment" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Assessment and Feedback"
          heading="Aligned to every learning outcome"
          subheading="Assessment in Zohapo is continuous and evidence based, combining AI driven formative tasks with tutor reviewed summative evidence."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ListPanel icon={ClipboardList} title="Formative Assessment" items={formativeAssessment} accent="text-brand-blue" bg="bg-blue-50" />
          <ListPanel icon={Award} title="Summative Assessment" items={summativeAssessment} accent="text-brand-violet" bg="bg-violet-50" />
        </div>

        <h3 className="mt-16 text-center font-display text-2xl font-bold text-ink-900">
          Assessment Strategy
        </h3>
        <div className="mt-8 overflow-hidden rounded-xl2 border border-slate-200 shadow-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-ink-900 text-white">
              <tr>
                <th className="px-5 py-3 font-display font-bold sm:px-6">Learning Outcome</th>
                <th className="px-5 py-3 font-display font-bold sm:px-6">Assessment</th>
              </tr>
            </thead>
            <tbody>
              {assessmentStrategy.map((row, i) => (
                <tr key={row.outcome} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border-t border-slate-200 px-5 py-3 font-semibold text-ink-900 sm:px-6">{row.outcome}</td>
                  <td className="border-t border-slate-200 px-5 py-3 text-slate-600 sm:px-6">{row.assessment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-16 text-center font-display text-2xl font-bold text-ink-900">
          Feedback Strategy: Two Layers
        </h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <ListPanel icon={Bot} title="AI Feedback" items={feedbackLayers.ai} accent="text-brand-teal" bg="bg-teal-50" />
          <ListPanel icon={UserCheck} title="Tutor Feedback" items={feedbackLayers.tutor} accent="text-amber-600" bg="bg-amber-50" />
        </div>
      </div>
    </section>
  );
}

function ListPanel({ icon: Icon, title, items, accent, bg }) {
  return (
    <div className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-card">
      <p className="flex items-center gap-2 font-display text-base font-bold text-ink-900">
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${bg}`}>
          <Icon className={`h-4 w-4 ${accent}`} aria-hidden="true" />
        </span>
        {title}
      </p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-slate-600">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
