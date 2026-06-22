import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  dark = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-[0.18em] mb-3 px-3 py-1 rounded-full ${
            dark
              ? "bg-white/10 text-brand-teal border border-white/15"
              : "bg-violet-100 text-violet-700"
          }`}
        >
          {eyebrow}
        </span>
      )}
      {heading && (
        <h2
          className={`font-display text-3xl sm:text-4xl font-bold leading-tight ${
            dark ? "text-white" : "text-ink-900"
          }`}
        >
          {heading}
        </h2>
      )}
      {subheading && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {subheading}
        </p>
      )}
    </motion.div>
  );
}
