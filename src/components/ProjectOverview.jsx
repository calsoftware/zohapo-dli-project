import { motion } from "framer-motion";
import { Ban } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { overview, sectors } from "../data/content";

export default function ProjectOverview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={overview.eyebrow} heading={overview.heading} align="center" />

        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-slate-600">
          {overview.body.map((p) => (
            <p key={p} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {sectors.map((sector, i) => (
            <motion.span
              key={sector}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
            >
              {sector}
            </motion.span>
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {overview.notList.map((item) => (
            <div key={item.label} className="rounded-xl2 border border-slate-200 bg-slate-50 p-5">
              <p className="flex items-center gap-2 font-display text-sm font-bold text-ink-900">
                <Ban className="h-4 w-4 text-rose-500" aria-hidden="true" />
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
