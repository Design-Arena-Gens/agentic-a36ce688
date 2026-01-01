import TrendExplorer from "@/components/TrendExplorer";
import { marketingBrief } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing trends 2025 | Agentic Intelligence Hub",
  description:
    "Comprehensive, up-to-date intelligence on SEO, social media, content, paid media, and analytics trends shaping digital marketing in 2025."
};

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 pb-24 pt-16 sm:px-10">
      <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-10 shadow-subtle">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
              Intelligence Brief · Q1 2025
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">Agentic Digital Marketing Radar</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-300">
              Spotlighting the most actionable innovations across SEO, social media, content,
              performance, and analytics that progressive teams are shipping right now.
            </p>
          </div>
          <div className="grid gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-300 shadow-subtle sm:w-72">
            <div>
              <h2 className="text-sm font-semibold text-white">Signal Highlights</h2>
              <ul className="mt-2 space-y-1">
                {marketingBrief.signalHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-md border border-white/5 bg-white/5 px-3 py-2 text-xs leading-relaxed text-slate-300"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">Key Time Horizons</h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {marketingBrief.timeHorizons.map((horizon) => (
                  <li
                    key={horizon}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-slate-200"
                  >
                    {horizon}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
      <TrendExplorer />
    </main>
  );
}
