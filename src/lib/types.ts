export type TrendCategory =
  | "seo"
  | "smm"
  | "content"
  | "paid"
  | "analytics"
  | "emerging";

export interface TrendSignal {
  id: string;
  title: string;
  summary: string;
  impact: "high" | "medium" | "experimental";
  maturity: "scaling" | "adoption" | "emerging";
  timeframe: "now" | "next" | "later";
  stats: Array<{
    label: string;
    value: string;
  }>;
  recommendedActions: string[];
  watchlist: string[];
  category: TrendCategory;
  confidence: number;
  supportingSignals: string[];
}

export interface NarrativeInsight {
  title: string;
  description: string;
  implication: string;
}

export interface CategoryDescriptor {
  id: TrendCategory;
  label: string;
  focus: string;
  metrics: Array<{
    label: string;
    value: string;
    trend: "up" | "flat" | "down";
  }>;
  quickWins: string[];
  strategicMoves: string[];
}

export interface MarketingIntelligence {
  categories: CategoryDescriptor[];
  trends: TrendSignal[];
  metaNarratives: NarrativeInsight[];
  signalHighlights: string[];
  timeHorizons: string[];
}
