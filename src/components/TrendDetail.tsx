import {
  AlertTriangle,
  BadgePercent,
  CheckCircle2,
  Lightbulb,
  ListChecks,
  Radar,
  Sparkle,
  Target
} from "lucide-react";
import type { TrendSignal } from "@/lib/types";

interface TrendDetailProps {
  trend: TrendSignal;
}

export default function TrendDetail({ trend }: TrendDetailProps) {
  return (
    <article className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-subtle">
      <header className="flex flex-col gap-3">
        <span className="flex w-fit items-center gap-2 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-secondary">
          <Sparkle className="h-4 w-4" />
          Strategic Signal
        </span>
        <h2 className="text-2xl font-semibold text-white">{trend.title}</h2>
        <p className="text-sm leading-relaxed text-slate-300">{trend.summary}</p>
      </header>

      <section className="grid gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-sm text-slate-200">
        <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          <Radar className="h-4 w-4" />
          Key Metrics
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {trend.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/5 bg-white/5 p-4 text-slate-100"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{stat.label}</p>
              <p className="mt-1 text-2xl font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-sm text-slate-200">
        <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          <Target className="h-4 w-4" />
          Actions
        </h3>
        <ul className="grid gap-3">
          {trend.recommendedActions.map((action) => (
            <li
              key={action}
              className="flex gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-200"
            >
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-400" />
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-sm text-slate-200">
        <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          <AlertTriangle className="h-4 w-4" />
          Watchlist
        </h3>
        <ul className="grid gap-3">
          {trend.watchlist.map((item) => (
            <li key={item} className="flex gap-3 rounded-2xl border border-orange-500/10 bg-orange-500/5 p-4">
              <Lightbulb className="mt-1 h-4 w-4 flex-shrink-0 text-orange-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-sm text-slate-300">
        <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          <ListChecks className="h-4 w-4" />
          Supporting Signals
        </h3>
        <ul className="space-y-2">
          {trend.supportingSignals.map((signal) => (
            <li key={signal} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3">
              <BadgePercent className="h-4 w-4 text-brand-accent" />
              <span>{signal}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
