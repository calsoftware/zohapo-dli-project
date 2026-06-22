import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { competitors, positioningAxes } from "../data/content";

export default function CompetitorSection() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? competitors : competitors.slice(0, 6);

  return (
    <div className="mt-24">
      <SectionHeading
        eyebrow="Comparable Products"
        heading="Where Zohapo Stands Out"
        subheading="A concise read of ten comparable platforms mapped against Zohapo. Full detail lives in the supporting Executive Summary, not on this page."
        align="center"
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex flex-col rounded-xl2 border border-slate-200 bg-white p-5 shadow-card"
          >
            <p className="font-display text-base font-bold text-ink-900">{c.name}</p>
            <p className="text-xs text-slate-500">{c.owner}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.focus}</p>
            <div className="mt-4 space-y-2 text-sm">
              <p><span className="font-semibold text-emerald-600">Strength: </span><span className="text-slate-600">{c.strength}</span></p>
              <p><span className="font-semibold text-rose-500">Gap: </span><span className="text-slate-600">{c.gap}</span></p>
            </div>
            <p className="mt-4 rounded-lg bg-violet-50 p-3 text-xs leading-relaxed text-violet-700">
              <span className="font-bold">Zohapo difference: </span>{c.differentiator}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="focus-ring flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
        >
          {expanded ? "Show fewer products" : `Show all ${competitors.length} products`}
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      {/* Positioning matrix */}
      <div className="mt-16 rounded-xl2 border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <h3 className="text-center font-display text-xl font-bold text-ink-900">Positioning Matrix</h3>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">
          {positioningAxes.zohapoPosition}
        </p>
        <div className="relative mx-auto mt-8 aspect-square max-w-md rounded-xl2 border border-slate-300 bg-white">
          <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
          <div className="absolute inset-y-0 left-1/2 w-px bg-slate-200" />

          <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-center text-[11px] font-medium text-slate-500">
            Tutor informed learning system
          </span>
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-center text-[11px] font-medium text-slate-500">
            Self service tool
          </span>
          <span className="absolute -left-2 top-1/2 hidden -translate-x-full -translate-y-1/2 text-right text-[11px] font-medium text-slate-500 lg:block">
            Generic content
          </span>
          <span className="absolute -right-2 top-1/2 hidden w-24 -translate-y-1/2 translate-x-full text-left text-[11px] font-medium text-slate-500 lg:block">
            Personalised sector support
          </span>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute right-[8%] top-[8%] flex h-20 w-20 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-violet text-center text-xs font-bold text-white shadow-glow"
          >
            Zohapo
          </motion.div>

          <Dot x={28} y={30} label="Getmee" />
          <Dot x={20} y={70} label="StandOut" />
          <Dot x={70} y={75} label="CareerVillage" />
          <Dot x={35} y={55} label="Bodyswaps" />
        </div>
      </div>
    </div>
  );
}

function Dot({ x, y, label }) {
  return (
    <span
      style={{ left: `${x}%`, top: `${y}%` }}
      className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-500"
    >
      {label}
    </span>
  );
}
