import { motion } from "framer-motion";
import { ArrowUp, Compass } from "lucide-react";
import { finalStatement } from "../data/content";

export default function FinalSection() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden bg-mesh-hero py-24 text-center text-white sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="leading-relaxed text-slate-300"
        >
          {finalStatement}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12"
        >
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Zohapo</h2>
          <p className="mt-3 font-display text-xl font-semibold gradient-text">From Potential to Opportunity</p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-900 shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Return to Top
          </button>
          <button
            onClick={() => scrollTo("who")}
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Compass className="h-4 w-4" aria-hidden="true" />
            Explore the Learner Journey
          </button>
        </div>
      </div>
    </section>
  );
}
