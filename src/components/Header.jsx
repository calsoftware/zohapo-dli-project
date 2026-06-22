import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Header() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(navItems.map((item) => item.id));

  const handleNavigate = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-900/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <button
          onClick={() => handleNavigate("home")}
          className="focus-ring flex items-center gap-2 text-white"
          aria-label="Zohapo home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet shadow-glow">
            <Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">Zohapo</span>
        </button>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              aria-current={activeId === item.id ? "true" : undefined}
              className={`focus-ring rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                activeId === item.id
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleNavigate("research")}
          className="focus-ring hidden rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 xl:inline-block"
        >
          View the Evidence
        </button>

        <button
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg text-white xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 xl:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`focus-ring rounded-lg px-4 py-3 text-left text-sm font-medium ${
                    activeId === item.id ? "bg-white/10 text-white" : "text-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
