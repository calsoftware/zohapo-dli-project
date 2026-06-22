import { motion } from "framer-motion";
import { Wallet, Users, Cpu, ShieldAlert, CheckCircle2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { implementation } from "../data/content";

export default function ImplementationSection() {
  return (
    <section id="implementation" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Implementation — The What If Checklist"
          heading="Turning the design into a deliverable"
          subheading="Budget, timeline, team and technology considerations for moving Zohapo from concept to pilot."
          align="center"
        />

        {/* Timeline */}
        <div className="mt-12">
          <h3 className="text-center font-display text-xl font-bold text-ink-900">Phased Timeline</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {implementation.timeline.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative rounded-xl2 border border-slate-200 bg-white p-5 shadow-card"
              >
                <span className="font-display text-xs font-bold uppercase tracking-wide text-brand-violet">
                  {phase.phase}
                </span>
                <p className="mt-2 font-display text-sm font-bold text-ink-900">{phase.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{phase.description}</p>
                {i < implementation.timeline.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-slate-300 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Budget + Team + Tech */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <Panel icon={Wallet} title="Budget Considerations" accent="text-brand-blue" bg="bg-blue-50">
            <ul className="mt-3 space-y-3">
              {implementation.budget.map((b) => (
                <li key={b.item} className="text-sm">
                  <p className="font-semibold text-ink-900">{b.item}</p>
                  <p className="text-slate-600">{b.note}</p>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel icon={Users} title="Project Team" accent="text-brand-violet" bg="bg-violet-50">
            <ul className="mt-3 space-y-2">
              {implementation.team.map((role) => (
                <li key={role} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-violet" /> {role}
                </li>
              ))}
            </ul>
          </Panel>

          <Panel icon={Cpu} title="Technology" accent="text-brand-teal" bg="bg-teal-50">
            <ul className="mt-3 space-y-2">
              {implementation.technology.map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-teal" /> {tech}
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        {/* Risks */}
        <div className="mt-16">
          <h3 className="text-center font-display text-xl font-bold text-ink-900">Risks and Mitigations</h3>
          <div className="mt-8 space-y-4">
            {implementation.risks.map((r, i) => (
              <motion.div
                key={r.risk}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid gap-3 rounded-xl2 border border-slate-200 bg-white p-5 shadow-card sm:grid-cols-[1fr_1fr]"
              >
                <p className="flex items-start gap-2 text-sm text-slate-700">
                  <ShieldAlert className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-500" />
                  <span><span className="font-semibold text-ink-900">Risk: </span>{r.risk}</span>
                </p>
                <p className="flex items-start gap-2 text-sm text-slate-700 sm:border-l sm:border-slate-200 sm:pl-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                  <span><span className="font-semibold text-ink-900">Mitigation: </span>{r.mitigation}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Panel({ icon: Icon, title, accent, bg, children }) {
  return (
    <div className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-card">
      <p className="flex items-center gap-2 font-display text-base font-bold text-ink-900">
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${bg}`}>
          <Icon className={`h-4 w-4 ${accent}`} aria-hidden="true" />
        </span>
        {title}
      </p>
      {children}
    </div>
  );
}
