import { motion } from "framer-motion";
import {
  Users,
  Bot,
  TrendingUp,
  ShieldCheck,
  ClipboardCheck,
  Drama,
  Mic,
  Compass,
  BarChart3,
  Award,
} from "lucide-react";
import ProgressRing from "./ui/ProgressRing";

const contextCapabilities = [
  { icon: Bot, label: "AI coaching" },
  { icon: Drama, label: "Scenario practice" },
  { icon: Mic, label: "Interview preparation" },
  { icon: Compass, label: "Transferable skills discovery" },
  { icon: BarChart3, label: "Tutor analytics" },
  { icon: Award, label: "Digital employability passport" },
];

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-mesh-hero pb-24 pt-32 text-white sm:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] [background-size:28px_28px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
            AI Powered Employability Readiness
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Zohapo
          </h1>
          <p className="mt-3 font-display text-2xl font-semibold gradient-text sm:text-3xl">
            From Potential to Opportunity
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            An AI powered employability readiness learning solution for mixed learner cohorts.
          </p>

          <p className="mt-4 max-w-xl leading-relaxed text-slate-400">
            Zohapo helps learners build confidence, practise workplace scenarios, prepare for
            interviews, evidence their skills and become work ready, while giving tutors
            visibility of learner progress, gaps and readiness.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("who")}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3.5 text-sm font-semibold shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Users className="h-4 w-4" aria-hidden="true" />
              Learner Personas
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-teal" /> Evidence informed design</span>
            <span className="flex items-center gap-2"><ClipboardCheck className="h-4 w-4 text-brand-teal" /> 6 learner personas</span>
            <span className="flex items-center gap-2"><Bot className="h-4 w-4 text-brand-teal" /> 8-module readiness journey</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="glass rounded-xl2 p-5 shadow-2xl sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">Learner Dashboard</p>
                <p className="font-display text-lg font-semibold">Welcome back, Aisha</p>
              </div>
              <span className="rounded-full bg-brand-teal/15 px-3 py-1 text-xs font-semibold text-brand-teal">
                Module 7 of 8
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="col-span-1 flex flex-col items-center justify-center rounded-xl bg-white/5 p-4">
                <ProgressRing percent={78} size={84} stroke={8} color="#2DD4BF" label="Readiness" />
              </div>

              <div className="col-span-1 rounded-xl bg-white/5 p-4">
                <p className="flex items-center gap-1.5 text-xs text-slate-400"><TrendingUp className="h-3.5 w-3.5 text-brand-teal" /> Confidence trend</p>
                <svg viewBox="0 0 120 50" className="mt-3 h-12 w-full">
                  <polyline
                    fill="none"
                    stroke="#60A5FA"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="0,42 20,36 40,30 60,28 80,18 100,14 120,6"
                  />
                </svg>
                <p className="mt-1 text-xs font-semibold text-brand-blue">+34% since Module 1</p>
              </div>

              <div className="col-span-2 rounded-xl bg-white/5 p-4 sm:col-span-1">
                <p className="text-xs text-slate-400">Employability Passport</p>
                <p className="mt-2 font-display text-2xl font-bold">12 / 16</p>
                <p className="text-xs text-slate-400">Evidence items collected</p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-blue-500/10 p-4">
              <p className="flex items-center gap-2 text-xs font-semibold text-brand-violet">
                <Bot className="h-4 w-4" /> AI Coach
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                "Strong answer on handling a phishing report, Aisha. Let's tighten your STAR
                structure for the SOC analyst mock interview next."
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-[11px] text-slate-400">Tutor insight</p>
                <p className="mt-1 text-sm font-semibold text-white">3 learners ready for live interview practice</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3">
                <p className="text-[11px] text-slate-400">Workshop focus</p>
                <p className="mt-1 text-sm font-semibold text-white">Confidence in technical explanations</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-14 max-w-7xl px-5 sm:px-8 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass overflow-hidden rounded-xl2 shadow-2xl"
        >
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
                Context
              </span>
              <p className="mt-5 leading-relaxed text-slate-300">
                Zohapo is designed for training providers, employability organisations, colleges,
                adult learning providers and job placement programmes that support learners into
                employment, placement or career transition. It responds to a real challenge in
                employability training: tutors and stakeholders often lack clear visibility of how
                ready learners are for work, especially when learners have different career goals,
                confidence levels, digital skills and sector interests.
              </p>
              <p className="mt-4 leading-relaxed text-slate-300">
                Zohapo supports this by combining AI coaching, scenario practice, interview
                preparation, transferable skills discovery, tutor analytics and a digital
                employability passport. The aim is to help learners move from general
                employability awareness to confident, evidenced and sector relevant work
                readiness.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {contextCapabilities.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <Icon className="h-5 w-5 text-brand-teal" aria-hidden="true" />
                  <p className="text-sm font-semibold text-white">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
