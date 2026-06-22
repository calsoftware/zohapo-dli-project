import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Bot,
  Mic,
  Users,
  BookMarked,
  Sparkles,
  ArrowUpRight,
  AlertTriangle,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import ProgressRing from "./ui/ProgressRing";

const tabs = [
  { id: "learner", label: "Learner Dashboard", icon: LayoutDashboard },
  { id: "coach", label: "AI Coach", icon: Bot },
  { id: "interview", label: "Mock Interview", icon: Mic },
  { id: "tutor", label: "Tutor Dashboard", icon: Users },
  { id: "passport", label: "Employability Passport", icon: BookMarked },
];

export default function ProductMockups() {
  const [active, setActive] = useState("learner");

  return (
    <div className="mt-24">
      <SectionHeading
        eyebrow="Product Mock Ups"
        heading="What the platform feels like"
        subheading="Static, representative mock ups of the Zohapo learner, coaching and tutor experience, illustrating the design intent for this submission."
        align="center"
      />

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              aria-pressed={active === tab.id}
              className={`focus-ring flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                active === tab.id
                  ? "border-brand-violet bg-violet-50 text-violet-700"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl2 bg-mesh-hero p-4 shadow-2xl sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {active === "learner" && <LearnerDashboardMock />}
            {active === "coach" && <AiCoachMock />}
            {active === "interview" && <MockInterviewMock />}
            {active === "tutor" && <TutorDashboardMock />}
            {active === "passport" && <PassportMock />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Frame({ title, badge, children }) {
  return (
    <div className="glass rounded-xl2 p-5 text-white sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <p className="font-display text-lg font-bold">{title}</p>
        {badge && <span className="rounded-full bg-brand-teal/15 px-3 py-1 text-xs font-semibold text-brand-teal">{badge}</span>}
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function LearnerDashboardMock() {
  return (
    <Frame title="Welcome back, Emily" badge="Retail Pathway">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4">
          <ProgressRing percent={64} size={88} color="#60A5FA" label="Confidence score" />
        </div>
        <div className="rounded-xl bg-white/5 p-4 sm:col-span-2">
          <p className="text-xs text-slate-400">Next task</p>
          <p className="mt-1 font-display text-base font-semibold">Module 5 · Handling a difficult customer scenario</p>
          <div className="mt-3 h-2 w-full rounded-full bg-white/10">
            <div className="h-2 w-[58%] rounded-full bg-gradient-to-r from-brand-blue to-brand-violet" />
          </div>
          <p className="mt-1 text-xs text-slate-400">58% of programme complete</p>
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-blue-500/10 p-4">
        <p className="flex items-center gap-2 text-xs font-semibold text-brand-violet"><Bot className="h-4 w-4" /> AI Coach prompt</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-200">
          "Great job describing a time you helped a customer. Let's add one more detail about
          how you followed up afterwards."
        </p>
      </div>
      <div className="mt-4 rounded-xl bg-white/5 p-4">
        <p className="text-xs text-slate-400">Employability passport progress</p>
        <p className="mt-1 font-display text-xl font-bold">9 / 16 evidence items</p>
      </div>
    </Frame>
  );
}

function AiCoachMock() {
  return (
    <Frame title="AI Coach · Sector: Care Work" badge="Live session">
      <div className="space-y-3">
        <ChatBubble from="ai">
          Tell me about a time you supported someone during a difficult moment, even informally.
        </ChatBubble>
        <ChatBubble from="learner">
          I used to help my grandmother with her medication routine and would stay calm when she
          got anxious about appointments.
        </ChatBubble>
        <ChatBubble from="ai">
          That's a strong example of patience and reassurance, both valued in care work. Try
          adding how you'd apply that calmness with a service user you don't know well.
        </ChatBubble>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <MiniStat label="Clarity" value="Good" />
        <MiniStat label="Confidence" value="Improving" />
        <MiniStat label="Sector fit" value="Care work" />
      </div>
    </Frame>
  );
}

function MockInterviewMock() {
  return (
    <Frame title="AI Mock Interview · Cyber Security" badge="Voice practice">
      <div className="rounded-xl bg-white/5 p-4">
        <p className="text-xs text-slate-400">Interview question</p>
        <p className="mt-1 font-display text-base font-semibold">
          "Tell me how you would explain phishing to a non technical colleague."
        </p>
      </div>
      <div className="mt-4 rounded-xl bg-white/5 p-4">
        <p className="text-xs text-slate-400">Learner response (voice transcript)</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-200">
          "I'd say a phishing email pretends to be from someone you trust to trick you into
          clicking a link or sharing details, so always check the sender before clicking."
        </p>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-4">
          <p className="flex items-center gap-2 text-xs font-semibold text-brand-teal"><Sparkles className="h-4 w-4" /> AI feedback</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-200">
            Clear, plain English explanation. Add one concrete example next time to strengthen it.
          </p>
        </div>
        <div className="flex items-center justify-center rounded-xl bg-white/5 p-4">
          <ProgressRing percent={82} size={76} color="#2DD4BF" label="Confidence after practice" />
        </div>
      </div>
    </Frame>
  );
}

function TutorDashboardMock() {
  return (
    <Frame title="Cohort Overview · Mixed Employability Group" badge="14 learners">
      <div className="grid gap-4 sm:grid-cols-3">
        <MiniStat label="Average engagement" value="86%" />
        <MiniStat label="Average readiness" value="71%" />
        <MiniStat label="Confidence trend" value="↑ 22%" />
      </div>
      <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-500/10 p-4">
        <p className="flex items-center gap-2 text-xs font-semibold text-amber-300">
          <AlertTriangle className="h-4 w-4" /> Learners needing support
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-200">
          3 learners show low confidence in technical explanation tasks, suggesting a small group
          breakout in the next workshop.
        </p>
      </div>
      <div className="mt-4 rounded-xl bg-white/5 p-4">
        <p className="text-xs text-slate-400">Common gap this week</p>
        <p className="mt-1 flex items-center gap-2 font-display text-base font-semibold">
          Structuring STAR interview answers <ArrowUpRight className="h-4 w-4 text-brand-teal" />
        </p>
      </div>
    </Frame>
  );
}

function PassportMock() {
  const rows = [
    { label: "Skills statement", status: "Complete" },
    { label: "Workplace scenario responses", status: "Complete" },
    { label: "Mock interview evidence", status: "In progress" },
    { label: "Reflection journal", status: "Complete" },
    { label: "Tutor readiness review", status: "Pending" },
  ];
  return (
    <Frame title="Digital Employability Passport · Sophie Turner" badge="75% complete">
      <ul className="divide-y divide-white/10">
        {rows.map((row) => (
          <li key={row.label} className="flex items-center justify-between py-3 text-sm">
            <span className="text-slate-200">{row.label}</span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                row.status === "Complete"
                  ? "bg-teal-500/15 text-brand-teal"
                  : row.status === "In progress"
                  ? "bg-blue-500/15 text-blue-300"
                  : "bg-white/10 text-slate-300"
              }`}
            >
              {row.status}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-xl bg-white/5 p-4">
        <p className="text-xs text-slate-400">Readiness summary</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-200">
          Sophie demonstrates strong written communication and task organisation. Recommended
          focus: confidence in live telephone scenarios before final review.
        </p>
      </div>
    </Frame>
  );
}

function ChatBubble({ from, children }) {
  const isAi = from === "ai";
  return (
    <div className={`flex ${isAi ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isAi ? "bg-white/10 text-slate-100" : "bg-gradient-to-r from-brand-blue to-brand-violet text-white"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/5 p-4 text-center">
      <p className="font-display text-xl font-bold">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
    </div>
  );
}
