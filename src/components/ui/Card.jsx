import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  delay = 0,
  hover = true,
  as: Component = motion.div,
}) {
  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`rounded-xl2 border border-slate-200 bg-white shadow-card p-6 ${
        hover ? "transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg" : ""
      } ${className}`}
    >
      {children}
    </Component>
  );
}
