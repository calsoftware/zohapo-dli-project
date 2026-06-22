import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, ShieldAlert, Smartphone, Heart, Lightbulb, CheckCircle2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Badge from "./ui/Badge";
import { personas, personaDesignDecisions } from "../data/content";

const ringColor = {
  blue: "ring-blue-200 bg-blue-600",
  amber: "ring-amber-200 bg-amber-500",
  violet: "ring-violet-200 bg-violet-600",
  teal: "ring-teal-200 bg-teal-600",
  rose: "ring-rose-200 bg-rose-500",
  emerald: "ring-emerald-200 bg-emerald-600",
};

export default function PersonasSection() {
  const [activeId, setActiveId] = useState(personas[0].id);
  const active = personas.find((p) => p.id === activeId);

  return (
    <section id="who" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Who of Learning"
          heading="Six learners. Six employment goals. One platform."
          subheading="Each persona represents a realistic employability learner who has potential and motivation, but requires structured support to become work-ready."
          align="center"
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setActiveId(persona.id)}
              aria-pressed={activeId === persona.id}
              className={`focus-ring group rounded-xl2 border p-4 text-left transition-all ${
                activeId === persona.id
                  ? "border-brand-violet bg-white shadow-glow"
                  : "border-slate-200 bg-white/60 hover:bg-white"
              }`}
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white ring-4 ${
                  ringColor[persona.color]
                }`}
              >
                {persona.initials}
              </span>
              <p className="mt-3 font-display text-sm font-bold text-ink-900">{persona.name}</p>
              <p className="text-xs text-slate-500">{persona.sector}</p>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-8 rounded-xl2 border border-slate-200 bg-white p-6 shadow-card sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-full text-lg font-bold text-white ring-4 ${
                    ringColor[active.color]
                  }`}
                >
                  {active.initials}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink-900">{active.name}</h3>
                  <p className="text-sm text-slate-500">Age {active.age}</p>
                </div>
              </div>
              <Badge color={active.color}>{active.sector}</Badge>
            </div>

            <p className="mt-6 max-w-3xl leading-relaxed text-slate-600">{active.bio}</p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <DetailBlock icon={Target} title="Goals and Aspirations" items={active.goals} accent="text-brand-blue" bg="bg-blue-50" />
              <DetailBlock icon={ShieldAlert} title="Barriers to Learning" items={active.barriers} accent="text-rose-500" bg="bg-rose-50" />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-5">
                <p className="flex items-center gap-2 font-display text-sm font-bold text-ink-900">
                  <Smartphone className="h-4 w-4 text-brand-violet" aria-hidden="true" /> Technology
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{active.technology}</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-5">
                <p className="flex items-center gap-2 font-display text-sm font-bold text-ink-900">
                  <Heart className="h-4 w-4 text-brand-teal" aria-hidden="true" /> Digital Learning Preferences
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{active.preferences}</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-violet-100 bg-violet-50/60 p-5">
              <p className="flex items-center gap-2 font-display text-sm font-bold text-ink-900">
                <Lightbulb className="h-4 w-4 text-brand-violet" aria-hidden="true" /> Design Implications for Zohapo
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {active.designImplications.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-violet" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Cross-persona design decisions */}
        <div className="mt-16">
          <h3 className="text-center font-display text-2xl font-bold text-ink-900">
            Design decisions shaped by the personas
          </h3>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {personaDesignDecisions.map((decision, i) => (
              <motion.span
                key={decision}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {decision}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailBlock({ icon: Icon, title, items, accent, bg }) {
  return (
    <div className={`rounded-xl ${bg} p-5`}>
      <p className="flex items-center gap-2 font-display text-sm font-bold text-ink-900">
        <Icon className={`h-4 w-4 ${accent}`} aria-hidden="true" /> {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-slate-600">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
