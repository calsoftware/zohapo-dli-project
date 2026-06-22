import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { tutorIntelligence } from "../data/content";

export default function TutorIntelligenceSection() {
  return (
    <div className="mt-4">
      <SectionHeading
        eyebrow="Tutor and Provider Intelligence"
        heading="From reactive support to evidence-informed coaching"
        subheading={tutorIntelligence.body}
        align="center"
      />

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {tutorIntelligence.items.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-teal" aria-hidden="true" />
            <span className="text-sm font-medium text-slate-700">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
