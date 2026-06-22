import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import { iconMap, FallbackIcon } from "./ui/iconMap";
import {
  whyContext,
  whyDrivers,
  learningGapStatement,
  beforeAfter,
  learningOutcomes,
} from "../data/content";

export default function WhySection() {
  return (
    <section id="why" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Why of Learning"
          heading="A clear case for Zohapo"
          align="center"
        />

        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-slate-600">
          {whyContext.body.map((p) => (
            <p key={p} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Drivers */}
        <h3 className="mt-16 text-center font-display text-2xl font-bold text-ink-900">
          Five drivers for the digital solution
        </h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyDrivers.map((driver, i) => {
            const Icon = iconMap[driver.icon] ?? FallbackIcon;
            return (
              <Card key={driver.title} delay={i * 0.06} className="flex flex-col">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-brand-violet">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h4 className="mt-4 font-display text-base font-bold text-ink-900">{driver.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{driver.description}</p>
                <p className="mt-4 flex items-start gap-2 text-sm font-medium text-brand-violet">
                  <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  {driver.response}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Learning gap */}
        <div className="mt-20 rounded-xl2 border border-violet-100 bg-violet-50/60 p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold text-ink-900">The Learning Gap</h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">{learningGapStatement}</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl2 border border-slate-200 shadow-card">
          <div className="grid grid-cols-2 bg-ink-900 text-white">
            <p className="px-5 py-3 font-display text-sm font-bold sm:px-6">Current Position</p>
            <p className="border-l border-white/10 px-5 py-3 font-display text-sm font-bold sm:px-6">
              Target Position After Zohapo
            </p>
          </div>
          {beforeAfter.map((row, i) => (
            <motion.div
              key={row.before}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={`grid grid-cols-2 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
            >
              <p className="px-5 py-4 text-sm leading-relaxed text-slate-600 sm:px-6">{row.before}</p>
              <p className="border-l border-slate-200 px-5 py-4 text-sm font-medium leading-relaxed text-ink-900 sm:px-6">
                {row.after}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Learning outcomes */}
        <h3 className="mt-20 text-center font-display text-2xl font-bold text-ink-900">
          Proposed Learning Outcomes
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          By the end of the Zohapo employability readiness journey, learners will be able to:
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learningOutcomes.map((outcome, i) => (
            <Card key={outcome} delay={i * 0.05} className="flex gap-3">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-50 font-display text-sm font-bold text-brand-teal">
                {i + 1}
              </span>
              <p className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">{outcome}</p>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-2 text-center text-xs font-medium text-slate-500">
          <CheckCircle2 className="h-4 w-4 text-brand-teal" aria-hidden="true" />
          Outcomes only. Assessment activities are mapped separately in the Assessment section.
        </p>
      </div>
    </section>
  );
}
