// Professional AI generated portraits for the learner personas, framed in a
// coloured ring matching each persona's brand colour, with a small badge
// hinting at their occupational context (cyber security, retail, etc.).
import { Laptop, ShoppingBag, FileText, Heart, Headphones, HardHat, Check } from "lucide-react";
import aishaImg from "../../assets/personas/aisha.jpg";
import johnImg from "../../assets/personas/john.jpg";
import sophieImg from "../../assets/personas/sophie.jpg";
import lauraImg from "../../assets/personas/laura.jpg";
import rachelImg from "../../assets/personas/rachel.jpg";
import arjunImg from "../../assets/personas/arjun.jpg";

const images = {
  aisha: aishaImg,
  john: johnImg,
  sophie: sophieImg,
  laura: lauraImg,
  rachel: rachelImg,
  arjun: arjunImg,
};

const ringColors = {
  blue: { base: "ring-blue-200", active: "ring-blue-400" },
  amber: { base: "ring-amber-200", active: "ring-amber-400" },
  violet: { base: "ring-violet-200", active: "ring-violet-400" },
  teal: { base: "ring-teal-200", active: "ring-teal-400" },
  rose: { base: "ring-rose-200", active: "ring-rose-400" },
  emerald: { base: "ring-emerald-200", active: "ring-emerald-400" },
};

const badgeColors = {
  blue: "#2563EB",
  amber: "#D97706",
  violet: "#7C3AED",
  teal: "#0D9488",
  rose: "#E11D48",
  emerald: "#059669",
};

// Small corner badge hinting at each persona's occupational context, so the
// portrait reads as "cyber security", "retail" etc. at a glance.
const contextIcons = {
  aisha: Laptop,
  john: ShoppingBag,
  sophie: FileText,
  laura: Heart,
  rachel: Headphones,
  arjun: HardHat,
};

export default function PersonaPortrait({ id, accent = "blue", name, className = "", active = false }) {
  const src = images[id];
  if (!src) return null;
  const Icon = contextIcons[id];
  const ringSet = ringColors[accent] ?? ringColors.blue;
  const ring = active ? ringSet.active : ringSet.base;
  const badgeColor = badgeColors[accent] ?? badgeColors.blue;

  return (
    <span className={`relative inline-block flex-shrink-0 ${className}`}>
      <span
        className={`flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white ring-4 transition-all duration-200 ${ring} ${
          active ? "ring-offset-2 ring-offset-white" : ""
        }`}
      >
        <img
          src={src}
          alt={name ? `Illustrated portrait of ${name}` : ""}
          className="h-full w-full object-cover"
        />
      </span>

      {active ? (
        <span
          className="absolute -top-0.5 -right-0.5 flex h-[34%] w-[34%] items-center justify-center rounded-full border-2 border-white bg-emerald-500"
          style={{ boxShadow: "0 1px 4px rgba(15,23,42,0.35)" }}
        >
          <Check className="h-[60%] w-[60%] text-white" strokeWidth={3} aria-hidden="true" />
        </span>
      ) : (
        Icon && (
          <span
            className="absolute bottom-0 right-0 flex h-[32%] w-[32%] items-center justify-center rounded-full bg-white"
            style={{ boxShadow: "0 1px 4px rgba(15,23,42,0.35)" }}
          >
            <Icon className="h-[62%] w-[62%]" style={{ color: badgeColor }} strokeWidth={2.4} aria-hidden="true" />
          </span>
        )
      )}
    </span>
  );
}
