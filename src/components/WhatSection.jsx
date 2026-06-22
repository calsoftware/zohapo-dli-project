import { Bot, User, FileCheck2, Eye } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Accordion from "./ui/Accordion";
import { modules, sectorPersonalisation } from "../data/content";

export default function WhatSection() {
  const items = modules.map((mod) => ({
    key: mod.number,
    badge: (
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-violet font-display text-sm font-bold text-white">
        {mod.number}
      </span>
    ),
    title: mod.title,
    content: (
      <div className="space-y-5">
        <p className="text-sm font-medium leading-relaxed text-ink-900">
          <span className="font-bold">Objective: </span>
          {mod.objective}
        </p>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Key Topics</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {mod.topics.map((topic) => (
              <span key={topic} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <InfoBlock icon={Bot} title="AI Role" text={mod.aiRole} accent="text-brand-violet" bg="bg-violet-50" />
          <InfoBlock icon={User} title="Learner Activity" text={mod.learnerActivity} accent="text-brand-blue" bg="bg-blue-50" />
          <InfoBlock icon={FileCheck2} title="Evidence Output" text={mod.evidenceOutput} accent="text-brand-teal" bg="bg-teal-50" />
          <InfoBlock icon={Eye} title="Tutor Visibility" text={mod.tutorVisibility} accent="text-amber-600" bg="bg-amber-50" />
        </div>
      </div>
    ),
  }));

  return (
    <section id="what" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The What of Learning"
          heading="An eight-module employability readiness journey"
          subheading="Zohapo does not teach the full technical content of each sector. It develops confidence, workplace understanding, communication, teamwork, problem solving, interview readiness and employability evidence — with the AI personalising examples to each learner's sector."
          align="center"
        />

        <div className="mt-10 flex flex-col items-center gap-3 rounded-xl2 border border-slate-200 bg-slate-50 p-6 text-center sm:flex-row sm:justify-center sm:gap-6">
          <span className="font-display text-sm font-bold text-ink-900">Generic employability modules</span>
          <span className="text-slate-400">+</span>
          <span className="font-display text-sm font-bold text-brand-violet">AI sector personalisation</span>
          <span className="text-slate-400">=</span>
          <span className="font-display text-sm font-bold text-brand-teal">Personalised readiness journey</span>
        </div>

        <div className="mt-10">
          <Accordion items={items} idPrefix="module" />
        </div>

        <div className="mt-14">
          <h3 className="text-center font-display text-xl font-bold text-ink-900">
            How content adapts across a mixed-sector cohort
          </h3>
          <div className="mt-6 overflow-hidden rounded-xl2 border border-slate-200 shadow-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-ink-900 text-white">
                <tr>
                  <th className="px-5 py-3 font-display font-bold sm:px-6">Learner Sector</th>
                  <th className="px-5 py-3 font-display font-bold sm:px-6">Example of Personalisation</th>
                </tr>
              </thead>
              <tbody>
                {sectorPersonalisation.map((row, i) => (
                  <tr key={row.sector} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border-t border-slate-200 px-5 py-3 font-semibold text-ink-900 sm:px-6">{row.sector}</td>
                    <td className="border-t border-slate-200 px-5 py-3 text-slate-600 sm:px-6">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ icon: Icon, title, text, accent, bg }) {
  return (
    <div className={`rounded-xl ${bg} p-4`}>
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink-900">
        <Icon className={`h-4 w-4 ${accent}`} aria-hidden="true" /> {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}
