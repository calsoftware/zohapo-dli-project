import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AccordionItem({
  title,
  badge,
  children,
  isOpen,
  onToggle,
  idPrefix = "accordion",
  index = 0,
}) {
  const panelId = `${idPrefix}-panel-${index}`;
  const buttonId = `${idPrefix}-button-${index}`;

  return (
    <div className="rounded-xl2 border border-slate-200 bg-white shadow-card overflow-hidden">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
      >
        <span className="flex items-center gap-3">
          {badge}
          <span className="font-display text-base font-semibold text-ink-900 sm:text-lg">{title}</span>
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-brand-violet" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-100 px-5 pb-6 pt-4 sm:px-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accordion({ items, idPrefix = "accordion", allowMultiple = true }) {
  const [openIndexes, setOpenIndexes] = useState(() => new Set([0]));

  const toggle = (index) => {
    setOpenIndexes((prev) => {
      const next = allowMultiple ? new Set(prev) : new Set();
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={item.key ?? index}
          title={item.title}
          badge={item.badge}
          isOpen={openIndexes.has(index)}
          onToggle={() => toggle(index)}
          idPrefix={idPrefix}
          index={index}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
