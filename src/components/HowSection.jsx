import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Laptop, Presentation as PresentationIcon, RotateCw } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import { iconMap, FallbackIcon } from "./ui/iconMap";
import { flippedFlow, modalities, learningFormats } from "../data/content";

export default function HowSection() {
  return (
    <section id="how" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The How of Learning"
          heading="A Blended Flipped Classroom Model"
          subheading="Most learning happens asynchronously on Zohapo. The face to face element becomes a workshop, informed by real learner data, rather than a traditional tutor led lesson."
          align="center"
        />

        {/* Before / During / After */}
        <div className="mt-12 grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <FlowStep icon={Laptop} title="Before the Workshop" text={flippedFlow.before} color="blue" />
          <Arrow />
          <FlowStep icon={PresentationIcon} title="During the Workshop" text={flippedFlow.during} color="violet" />
          <Arrow />
          <FlowStep icon={RotateCw} title="After the Workshop" text={flippedFlow.after} color="teal" />
        </div>

        {/* Repeating cycle */}
        <div className="mt-14 rounded-xl2 border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <p className="text-center font-display text-sm font-bold uppercase tracking-wide text-slate-500">
            The Repeating Cycle
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {flippedFlow.cycle.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-4 py-2 text-xs font-semibold text-white shadow-sm sm:text-sm"
                >
                  {step}
                </motion.span>
                {i < flippedFlow.cycle.length - 1 && (
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-300" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modalities */}
        <h3 className="mt-20 text-center font-display text-2xl font-bold text-ink-900">Learning Modalities</h3>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modalities.map((m, i) => {
            const Icon = iconMap[m.icon] ?? FallbackIcon;
            return (
              <Card key={m.title} delay={i * 0.07}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h4 className="mt-4 font-display text-base font-bold text-ink-900">{m.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Learning formats */}
        <h3 className="mt-20 text-center font-display text-2xl font-bold text-ink-900">Learning Formats</h3>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <FormatColumn title="Digital Learning Formats" items={learningFormats.digital} accent="border-brand-blue" />
          <FormatColumn title="Workshop Formats" items={learningFormats.workshop} accent="border-brand-violet" />
          <FormatColumn title="Assessment & Feedback Formats" items={learningFormats.assessment} accent="border-brand-teal" />
        </div>

        {/* Core and spoke */}
        <h3 className="mt-20 text-center font-display text-2xl font-bold text-ink-900">
          Flow Model: Core and Spoke
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          All learners follow the same eight module core. The AI builds personalised spokes around
          it, including sector scenarios, examples and feedback tailored to each learner's goal.
        </p>

        <div className="relative mt-12 flex justify-center">
          <div className="relative grid h-[340px] w-full max-w-xl place-items-center sm:h-[400px]">
            <div className="absolute z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full bg-gradient-to-br from-ink-900 to-indigo-950 text-center text-white shadow-glow sm:h-48 sm:w-48">
              <span className="font-display text-sm font-bold sm:text-base">Core Journey</span>
              <span className="mt-1 text-xs text-slate-300">8 shared modules</span>
            </div>
            {["Cyber Security", "Retail", "Care", "Admin", "Hospitality", "Construction"].map((spoke, i) => {
              const angle = (i / 6) * 2 * Math.PI - Math.PI / 2;
              const radius = 42;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              return (
                <motion.span
                  key={spoke}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 shadow-sm sm:text-sm"
                >
                  {spoke}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowStep({ icon: Icon, title, text, color }) {
  const map = {
    blue: "bg-blue-50 text-brand-blue",
    violet: "bg-violet-50 text-brand-violet",
    teal: "bg-teal-50 text-brand-teal",
  };
  return (
    <Card hover={false} className="h-full">
      <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${map[color]}`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h4 className="mt-4 font-display text-base font-bold text-ink-900">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
    </Card>
  );
}

function Arrow() {
  return (
    <>
      <ArrowRight className="mx-auto hidden h-6 w-6 text-slate-300 lg:block" aria-hidden="true" />
      <ArrowDown className="mx-auto block h-6 w-6 text-slate-300 lg:hidden" aria-hidden="true" />
    </>
  );
}

function FormatColumn({ title, items, accent }) {
  return (
    <div className={`rounded-xl2 border-t-4 ${accent} border-x border-b border-slate-200 bg-white p-6 shadow-card`}>
      <h4 className="font-display text-base font-bold text-ink-900">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-slate-600">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
