import { motion } from "framer-motion";

export default function StatCard({ value, label, detail, citation, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="relative overflow-hidden rounded-xl2 border border-slate-200 bg-white p-6 shadow-card"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-violet/15" />
      <p className="font-display text-3xl sm:text-4xl font-extrabold gradient-text">{value}</p>
      <p className="mt-2 font-semibold text-ink-900">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</p>
      <span className="mt-4 inline-block text-[11px] font-medium text-slate-600">{citation}</span>
    </motion.div>
  );
}
