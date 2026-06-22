import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, ShieldAlert, Smartphone, Heart, Lightbulb, CheckCircle2, BadgeCheck } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Badge from "./ui/Badge";
import Card from "./ui/Card";
import PersonaPortrait from "./ui/PersonaPortrait";
import { iconMap, FallbackIcon } from "./ui/iconMap";
import {
  personas,
  personaDesignDecisions,
  inclusiveDesignSummary,
  inclusiveDesignFeatures,
  designConsiderations,
  learnerDiversitySnapshot,
} from "../data/content";

// Per persona accent treatment for the active tab state. Tailwind needs the
// literal class names (no dynamic string building) to pick them up at build time.
const personaAccents = {
  blue: { border: "border-blue-400", bg: "bg-blue-50", ring: "ring-blue-200", badge: "bg-blue-600", text: "text-blue-700", glow: "shadow-[0_0_0_1px_rgba(96,165,250,0.5),0_18px_32px_-14px_rgba(59,130,246,0.55)]" },
  amber: { border: "border-amber-400", bg: "bg-amber-50", ring: "ring-amber-200", badge: "bg-amber-600", text: "text-amber-700", glow: "shadow-[0_0_0_1px_rgba(251,191,36,0.5),0_18px_32px_-14px_rgba(217,119,6,0.55)]" },
  violet: { border: "border-violet-400", bg: "bg-violet-50", ring: "ring-violet-200", badge: "bg-violet-600", text: "text-violet-700", glow: "shadow-[0_0_0_1px_rgba(167,139,250,0.5),0_18px_32px_-14px_rgba(124,58,237,0.55)]" },
  teal: { border: "border-teal-400", bg: "bg-teal-50", ring: "ring-teal-200", badge: "bg-teal-600", text: "text-teal-700", glow: "shadow-[0_0_0_1px_rgba(45,212,191,0.5),0_18px_32px_-14px_rgba(13,148,136,0.55)]" },
  rose: { border: "border-rose-400", bg: "bg-rose-50", ring: "ring-rose-200", badge: "bg-rose-600", text: "text-rose-700", glow: "shadow-[0_0_0_1px_rgba(251,113,133,0.5),0_18px_32px_-14px_rgba(225,29,72,0.55)]" },
  emerald: { border: "border-emerald-400", bg: "bg-emerald-50", ring: "ring-emerald-200", badge: "bg-emerald-600", text: "text-emerald-700", glow: "shadow-[0_0_0_1px_rgba(110,231,183,0.5),0_18px_32px_-14px_rgba(5,150,105,0.55)]" },
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
          subheading="Each persona represents a realistic employability learner, reflecting the age, sector focus and background suggested by their profile, alongside the declared, hidden or emerging support needs found in real mixed cohorts."
          align="center"
        />

        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
          {learnerDiversitySnapshot.map((stat) => (
            <div key={stat.label} className="rounded-xl2 border border-slate-200 bg-white p-4 text-center shadow-card">
              <p className="font-display text-2xl font-extrabold gradient-text">{stat.value}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {personas.map((persona) => {
            const isActive = activeId === persona.id;
            const accent = personaAccents[persona.color] ?? personaAccents.blue;
            return (
              <button
                key={persona.id}
                onClick={() => setActiveId(persona.id)}
                aria-pressed={isActive}
                className={`focus-ring group relative rounded-xl2 border p-4 text-left transition-all duration-200 ${
                  isActive
                    ? `z-10 -translate-y-1 border-2 ${accent.border} ${accent.bg} ${accent.glow}`
                    : "border-slate-200 bg-white/70 shadow-sm hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-card"
                }`}
              >
                {isActive && (
                  <span
                    className={`absolute -top-2.5 right-3 flex items-center gap-1 rounded-full ${accent.badge} px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm`}
                  >
                    <BadgeCheck className="h-3 w-3" aria-hidden="true" />
                    Selected
                  </span>
                )}
                <PersonaPortrait
                  id={persona.id}
                  accent={persona.color}
                  name={persona.name}
                  active={isActive}
                  className="h-11 w-11"
                />
                <p className={`mt-3 font-display text-sm font-bold ${isActive ? accent.text : "text-ink-900"}`}>
                  {persona.name}
                </p>
                <p className="text-xs text-slate-500">{persona.sector}</p>
              </button>
            );
          })}
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
                <PersonaPortrait
                  id={active.id}
                  accent={active.color}
                  name={active.name}
                  className="h-16 w-16"
                />
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

        {/* Inclusive design implications */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="Designing for Real Cohorts"
            heading={inclusiveDesignSummary.heading}
            align="center"
          />
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-slate-600">
            {inclusiveDesignSummary.body.map((p) => (
              <p key={p} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {inclusiveDesignFeatures.map((feature, i) => {
              const Icon = iconMap[feature.icon] ?? FallbackIcon;
              return (
                <Card key={feature.title} delay={i * 0.05}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-brand-violet">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h4 className="mt-4 font-display text-base font-bold text-ink-900">{feature.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-xl2 border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <p className="flex items-center gap-2 font-display text-sm font-bold text-ink-900">
              <ShieldAlert className="h-4 w-4 text-brand-violet" aria-hidden="true" /> Design Considerations
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {designConsiderations.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-teal" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
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
