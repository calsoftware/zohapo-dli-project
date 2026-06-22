import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import { iconMap, FallbackIcon } from "./ui/iconMap";
import { impactMetrics } from "../data/content";

export default function ImpactMetricsSection() {
  return (
    <div>
      <SectionHeading
        eyebrow="Evidence and Measurement"
        heading="How impact will be proven, not assumed"
        subheading="Five measurable indicators planned for the Phase 4 pilot, turning tutor analytics and the employability passport into evidence funders and stakeholders can act on."
        align="center"
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {impactMetrics.map((item, i) => {
          const Icon = iconMap[item.icon] ?? FallbackIcon;
          return (
            <Card key={item.metric} delay={i * 0.06}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-brand-teal">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h4 className="mt-4 font-display text-base font-bold text-ink-900">{item.metric}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.target}</p>
              <p className="mt-3 text-xs font-medium text-slate-500">
                <span className="font-semibold text-ink-900">Measured by: </span>
                {item.measure}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
