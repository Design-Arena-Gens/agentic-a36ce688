import type { JSX } from "react";
import { ArrowUpRight, BarChart3, BrainCircuit, Flame, Timer } from "lucide-react";
import type { TrendSignal } from "@/lib/types";
import { cn } from "@/lib/utils";

const impactIcons: Record<TrendSignal["impact"], JSX.Element> = {
  high: <Flame className="h-4 w-4 text-orange-400" />,
  medium: <BarChart3 className="h-4 w-4 text-sky-400" />,
  experimental: <BrainCircuit className="h-4 w-4 text-purple-400" />
};

const impactCopy: Record<TrendSignal["impact"], string> = {
  high: "High impact",
  medium: "Material impact",
  experimental: "Experimental"
};

const maturityCopy: Record<TrendSignal["maturity"], string> = {
  scaling: "Scaling quickly",
  adoption: "In market now",
  emerging: "Emerging"
};

const timeframeCopy: Record<TrendSignal["timeframe"], string> = {
  now: "Activate Now",
  next: "Prototype Next",
  later: "Future Watch"
};

interface TrendCardProps {
  trend: TrendSignal;
  isActive: boolean;
  onSelect: () => void;
}

export default function TrendCard({ trend, isActive, onSelect }: TrendCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/50 p-5 text-left transition hover:border-white/20 hover:bg-slate-900 shadow-subtle",
        { "border-brand-primary/60 bg-brand-primary/10": isActive }
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400">
          <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[11px]">
            {impactIcons[trend.impact]}
            {impactCopy[trend.impact]}
          </span>
          <span>{maturityCopy[trend.maturity]}</span>
        </div>
        <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-300">
          <Timer className="h-3.5 w-3.5" />
          {timeframeCopy[trend.timeframe]}
        </span>
      </div>
      <div>
        <h3 className="font-semibold text-white">{trend.title}</h3>
        <p className="mt-2 text-sm text-slate-300 line-clamp-3">{trend.summary}</p>
      </div>
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Confidence: {(trend.confidence * 100).toFixed(0)}%</span>
        <span className="inline-flex items-center gap-1 text-brand-secondary group-hover:text-brand-accent">
          Explore
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}
