"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Compass,
  Cpu,
  Filter,
  LayoutDashboard,
  LineChart,
  Map,
  Search,
  Sparkles
} from "lucide-react";
import { marketingBrief } from "@/lib/data";
import type { TrendCategory, TrendSignal } from "@/lib/types";
import { cn } from "@/lib/utils";
import TrendCard from "./TrendCard";
import TrendDetail from "./TrendDetail";

const categoryEmojis: Record<TrendCategory, string> = {
  seo: "🔍",
  smm: "📱",
  content: "📝",
  paid: "💰",
  analytics: "📊",
  emerging: "🤖"
};

export default function TrendExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<TrendCategory>("seo");
  const [activeTrendId, setActiveTrendId] = useState<string | null>(null);

  const filteredTrends = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return marketingBrief.trends.filter((trend) => {
      const matchesCategory = trend.category === activeCategory;

      if (!term) return matchesCategory;

      const termMatch =
        trend.title.toLowerCase().includes(term) ||
        trend.summary.toLowerCase().includes(term) ||
        trend.recommendedActions.some((action) => action.toLowerCase().includes(term)) ||
        trend.supportingSignals.some((signal) => signal.toLowerCase().includes(term));

      return matchesCategory && termMatch;
    });
  }, [activeCategory, searchTerm]);

  useEffect(() => {
    if (filteredTrends.length === 0) {
      setActiveTrendId(null);
      return;
    }

    if (!activeTrendId || !filteredTrends.some((trend) => trend.id === activeTrendId)) {
      setActiveTrendId(filteredTrends[0].id);
    }
  }, [filteredTrends, activeTrendId]);

  const activeTrend: TrendSignal | null =
    filteredTrends.find((trend) => trend.id === activeTrendId) ?? filteredTrends[0] ?? null;

  return (
    <div className="flex flex-col gap-12">
      <section className="grid gap-5 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-subtle">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          <Sparkles className="h-4 w-4" />
          Strategic Narratives
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {marketingBrief.metaNarratives.map((narrative) => (
            <div
              key={narrative.title}
              className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200"
            >
              <h3 className="text-base font-semibold text-white">{narrative.title}</h3>
              <p className="leading-relaxed text-slate-300">{narrative.description}</p>
              <div className="rounded-xl border border-brand-accent/30 bg-brand-accent/10 p-4 text-slate-100">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">Implication</p>
                <p className="mt-2 text-sm leading-relaxed">{narrative.implication}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-subtle">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-slate-400">
              <Compass className="h-4 w-4" />
              Signal Explorer
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Navigate Channel Intelligence</h2>
            <p className="text-sm text-slate-300">
              Filter by discipline, surface high-confidence insights, and grab recommended plays to
              activate now.
            </p>
          </div>
          <div className="flex w-full gap-3 md:w-80">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search signals, actions, or sources"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 py-2 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-brand-primary/60 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
              />
            </div>
          </div>
        </header>

        <div className="flex flex-wrap gap-3">
          {marketingBrief.categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-brand-primary/40 hover:bg-brand-primary/10",
                {
                  "border-brand-primary bg-brand-primary/20 text-white shadow-subtle":
                    activeCategory === category.id
                }
              )}
            >
              <span className="text-lg">{categoryEmojis[category.id]}</span>
              <span>
                <span className="block font-semibold">{category.label}</span>
                <span className="mt-0.5 block text-xs text-slate-400">{category.focus}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-slate-950/40 p-6">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filtered Signals
              </span>
              <span>{filteredTrends.length} active</span>
            </div>
            <div className="grid gap-4">
              {filteredTrends.map((trend) => (
                <TrendCard
                  key={trend.id}
                  trend={trend}
                  isActive={activeTrend?.id === trend.id}
                  onSelect={() => setActiveTrendId(trend.id)}
                />
              ))}
              {filteredTrends.length === 0 && (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-slate-400">
                  No signals yet. Adjust search terms or explore another category.
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <section className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 text-sm text-slate-200">
              <header className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                <LayoutDashboard className="h-4 w-4" />
                Channel Health Metrics
              </header>
              <div className="mt-4 grid gap-4">
                {marketingBrief.categories
                  .filter((category) => category.id === activeCategory)
                  .map((category) => (
                    <div key={category.id} className="grid gap-4">
                      <div className="grid gap-3 sm:grid-cols-3">
                        {category.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-2xl border border-white/5 bg-white/5 p-4 text-slate-100"
                          >
                            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                              {metric.label}
                            </p>
                            <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                              Trend: {metric.trend === "up" ? "↑" : metric.trend === "down" ? "↓" : "→"}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="grid gap-3 rounded-2xl border border-brand-primary/20 bg-brand-primary/5 p-5">
                        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand-primary">
                          <Cpu className="h-4 w-4" />
                          Quick Wins
                        </p>
                        <ul className="grid gap-2">
                          {category.quickWins.map((win) => (
                            <li key={win} className="rounded-xl border border-white/5 bg-white/5 p-3">
                              {win}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid gap-3 rounded-2xl border border-brand-secondary/20 bg-brand-secondary/5 p-5">
                        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand-secondary">
                          <LineChart className="h-4 w-4" />
                          Strategic Moves
                        </p>
                        <ul className="grid gap-2">
                          {category.strategicMoves.map((move) => (
                            <li key={move} className="rounded-xl border border-white/5 bg-white/5 p-3">
                              {move}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </section>

            {activeTrend && <TrendDetail trend={activeTrend} />}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-subtle">
        <header className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          <Map className="h-4 w-4" />
          Activation Playbook
        </header>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Audit",
              description:
                "Benchmark your current SEO, creative, and analytics maturity. Map gaps against the metrics highlighted in each channel."
            },
            {
              title: "Prioritize",
              description:
                "Stack-rank plays by business impact and effort. Ship high-impact quick wins in the next 30 days, and prototype strategic moves per quarter."
            },
            {
              title: "Operationalize",
              description:
                "Create pods that blend strategy, creative, and data. Plug AI copilots into existing workflows with shared KPIs."
            }
          ].map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200"
            >
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
