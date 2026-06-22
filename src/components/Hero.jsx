import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Bot, TrendingUp, ShieldCheck, ClipboardCheck } from "lucide-react";
import ProgressRing from "./ui/ProgressRing";

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
              onClick={() => scrollTo("research")}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3.5 text-sm font-semibold shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Explore the LX Design Plan
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              onClick={() => scrollTo("who")}
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              View the Learner Journey
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

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white px-5 py-3 shadow-2xl sm:block">
            <p className="text-[11px] font-medium text-slate-500">Sector personalised for</p>
            <p className="font-display text-sm font-bold text-ink-900">Cyber Security · Retail · Care</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
