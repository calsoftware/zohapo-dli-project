import { useState } from "react";

export default function Tabs({ tabs, idPrefix = "tabs" }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div role="tablist" aria-label="Content tabs" className="flex flex-wrap gap-2 border-b border-slate-200 pb-1">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            id={`${idPrefix}-tab-${index}`}
            role="tab"
            aria-selected={active === index}
            aria-controls={`${idPrefix}-panel-${index}`}
            onClick={() => setActive(index)}
            className={`focus-ring rounded-t-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
              active === index
                ? "bg-violet-50 text-violet-700 border-b-2 border-brand-violet"
                : "text-slate-500 hover:text-ink-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          id={`${idPrefix}-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`${idPrefix}-tab-${index}`}
          hidden={active !== index}
          className="pt-6"
        >
          {active === index && tab.content}
        </div>
      ))}
    </div>
  );
}
