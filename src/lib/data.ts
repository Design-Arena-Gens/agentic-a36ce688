import type { MarketingIntelligence } from "./types";

export const marketingBrief: MarketingIntelligence = {
  signalHighlights: [
    "Search behavior is shifting toward zero-click, AI enriched answers; organic CTR dropped 14% YoY on commercial SERPs.",
    "Short-form social video now drives 54% of assisted conversions in full-funnel tracking as TikTok and Reels shopping integrations mature.",
    "First-party data activation is accelerating: 61% of CMOs replatformed their analytics stack in the last 12 months to support AI modeling.",
    "Paid media efficiency requires creative automation; generative asset testing cuts CPA by 18-32% when combined with audience layering."
  ],
  timeHorizons: ["Ship Now", "Prototype Q2-Q3", "Watchlist 2025+"],
  categories: [
    {
      id: "seo",
      label: "SEO & Discoverability",
      focus: "Align content structure with Search Generative Experience (SGE) and answer engine optimization while defending authority signals.",
      metrics: [
        { label: "SGE Inclusion Rate", value: "38%", trend: "up" },
        { label: "Organic CTR Delta", value: "-12%", trend: "down" },
        { label: "Entity Coverage", value: "72%", trend: "up" }
      ],
      quickWins: [
        "Spin up FAQ clusters tagged with schema that explicitly map intents tied to revenue journeys.",
        "Deploy real-time log file parsing to catch crawl waste created by AI answer features."
      ],
      strategicMoves: [
        "Invest in productized expert perspectives and gated data assets to signal experience (E-E-A-T).",
        "Rebuild topical maps with vector embeddings to surface semantic gaps faster than competitors."
      ]
    },
    {
      id: "smm",
      label: "Social Media & Community",
      focus:
        "Turn algorithm-friendly video into conversion pathways while deepening community loops inside private channels.",
      metrics: [
        { label: "Short-Form ROAS Lift", value: "1.8x", trend: "up" },
        { label: "Community Retention", value: "86%", trend: "up" },
        { label: "Influencer CPM", value: "$24", trend: "flat" }
      ],
      quickWins: [
        "Use serialized storytelling formats (3-5 part arcs) to boost completion and save rate signals.",
        "Activate TikTok Creative Assistant prompts to ship 15 assets/week without hiring net-new creators."
      ],
      strategicMoves: [
        "Launch membership layers (Discord, Geneva, Slack) with value loops tied to product milestones.",
        "Operationalize employee advocacy micro-networks to stabilize reach amid algorithm volatility."
      ]
    },
    {
      id: "content",
      label: "Content & Lifecycle",
      focus: "Blend human POV with AI-assisted production to answer intent clusters across the full lifecycle.",
      metrics: [
        { label: "AI-Assisted Velocity", value: "+34%", trend: "up" },
        { label: "Content-to-Pipeline Ratio", value: "0.42", trend: "up" },
        { label: "Retention Content ROI", value: "28%", trend: "up" }
      ],
      quickWins: [
        "Build modular content atoms (hooks, proofs, objections) inside Notion/Asana to recombine fast.",
        "Ship voice-of-customer libraries sourced from support transcripts and community threads."
      ],
      strategicMoves: [
        "Stand up an editorial intelligence squad to prioritize content with revenue-weighted scoring.",
        "Deploy AI content QA that checks brand voice, compliance, and topical authority at scale."
      ]
    },
    {
      id: "paid",
      label: "Paid & Performance",
      focus: "Hybrid automation stacks that pair algorithmic bidding with creative and audience intelligence.",
      metrics: [
        { label: "Creative Refresh Cycle", value: "9 days", trend: "down" },
        { label: "Incrementality Lift", value: "+21%", trend: "up" },
        { label: "CAC Efficiency", value: "-17%", trend: "up" }
      ],
      quickWins: [
        "Layer commerce signals (server-side conversions + LTV tiers) into Meta’s Advantage+ Shopping campaigns.",
        "Test AI-generated copy variations in Google PMax with rule-based budget reallocation."
      ],
      strategicMoves: [
        "Adopt media mix modeling that ingests offline + organic signals to defend budgets.",
        "Stand up creative pods that merge motion design, UGC, and data science for high-velocity testing."
      ]
    },
    {
      id: "analytics",
      label: "Measurement & Data",
      focus: "Close the gap between privacy-safe data capture and predictive activation across channels.",
      metrics: [
        { label: "Server-Side Events", value: "68%", trend: "up" },
        { label: "Attribution Confidence", value: "74%", trend: "up" },
        { label: "Model Refresh Rate", value: "Weekly", trend: "up" }
      ],
      quickWins: [
        "Deploy consent gating with progressive profiling to grow addressable audiences without drop-off.",
        "Run dark social UTM capture experiments using share-tracking overlays."
      ],
      strategicMoves: [
        "Merge CDP and reverse ETL workflows to orchestrate micro-segment journeys in near real time.",
        "Train marketing mix models on synthetic cohorts to stress test spend allocation scenarios."
      ]
    },
    {
      id: "emerging",
      label: "Emerging Tech & Experiments",
      focus: "Prototype AI agents, spatial experiences, and identity layers that future-proof acquisition.",
      metrics: [
        { label: "AI Agent Adoption", value: "44%", trend: "up" },
        { label: "Spatial Commerce Trials", value: "19 brands", trend: "up" },
        { label: "Web3 Loyalty Usage", value: "12%", trend: "flat" }
      ],
      quickWins: [
        "Launch GPT-powered concierge flows that triage inbound leads inside Slack or Teams.",
        "Test shoppable livestream pilots with AR overlays for hero products."
      ],
      strategicMoves: [
        "Design portable identity wallets that translate loyalty status across platforms.",
        "Invest in synthetic influencer pipelines with transparent disclosure frameworks."
      ]
    }
  ],
  trends: [
    {
      id: "sge-experience-layer",
      title: "Search Generative Experience (SGE) Optimization",
      summary:
        "Google’s SGE is live in 120+ countries delivering pre-click answers. Brands must optimize entity markup and concise, expertise-forward content to be cited by AI overviews.",
      impact: "high",
      maturity: "adoption",
      timeframe: "now",
      stats: [
        { label: "SGE Traffic Share", value: "23%" },
        { label: "Answer Citation CTR", value: "18%" },
        { label: "Structured Data Coverage", value: "71%" }
      ],
      recommendedActions: [
        "Update schema with `speakable`, `FAQ`, and `howto` entities mapped to revenue-driving intents.",
        "Build answer briefs that hit clarity, authority, and brevity benchmarks for AI summarization.",
        "Instrument GSC API to monitor click cannibalization in near real time."
      ],
      watchlist: [
        "Ongoing lawsuits could alter attribution mechanics.",
        "Microsoft Prometheus upgrades may intensify Bing competition."
      ],
      category: "seo",
      confidence: 0.82,
      supportingSignals: [
        "Google documentation on AI Overviews (May 2024)",
        "SERP volatility index from Semrush Sensor (Jan-Feb 2025)"
      ]
    },
    {
      id: "topical-authority-graphs",
      title: "Vector-Based Topical Authority Graphs",
      summary:
        "Teams are mapping intents with vector databases to quantify topical authority and auto-suggest content expansions, beating manual keyword clustering.",
      impact: "high",
      maturity: "scaling",
      timeframe: "next",
      stats: [
        { label: "Content Gap Coverage", value: "+38%" },
        { label: "Brief Creation Time", value: "-55%" },
        { label: "Top 3 Rankings Lift", value: "+19%" }
      ],
      recommendedActions: [
        "Pair embeddings from OpenAI text-embedding-3-large with proprietary engagement signals.",
        "Automate gap surfacing with weekly refreshes tied to search console exports.",
        "Align briefs with product narrative to reinforce E-E-A-T."
      ],
      watchlist: [
        "Model drift increasing hallucination risk without human QA.",
        "Privacy legislation around log file processing."
      ],
      category: "seo",
      confidence: 0.76,
      supportingSignals: ["BrightEdge research on intent clustering (Dec 2024)", "Ahrefs SERP features report"]
    },
    {
      id: "social-commerce-video",
      title: "Shoppable Short-Form Video",
      summary:
        "TikTok Shop, Instagram Checkout, and YouTube Shopping converge to enable direct conversion from short-form video with native cart experiences.",
      impact: "high",
      maturity: "adoption",
      timeframe: "now",
      stats: [
        { label: "Conversion Rate Lift", value: "2.1x" },
        { label: "Average Order Value", value: "$68" },
        { label: "Attributed Revenue YoY", value: "+47%" }
      ],
      recommendedActions: [
        "Embed SKU-level metadata into video scripts for dynamic product tagging.",
        "Use micro-influencer squads to localize content and push authenticity scores.",
        "Connect fulfillment systems to social commerce APIs to avoid stock-outs."
      ],
      watchlist: [
        "Potential regulatory scrutiny on TikTok Commerce in the US.",
        "Logistics burden as order volumes spike."
      ],
      category: "smm",
      confidence: 0.79,
      supportingSignals: [
        "Shopify x TikTok Shop benchmark report (Feb 2025)",
        "Instagram Checkout adoption notes from Meta earnings call (Q4 2024)"
      ]
    },
    {
      id: "community-flywheels",
      title: "Community Flywheel Monetization",
      summary:
        "Brands shift from broadcast to membership models, monetizing communities through tiered access, co-creation, and gated experiences.",
      impact: "medium",
      maturity: "adoption",
      timeframe: "next",
      stats: [
        { label: "Member ARPU", value: "$29" },
        { label: "Churn Reduction", value: "-24%" },
        { label: "Referral Share", value: "33%" }
      ],
      recommendedActions: [
        "Launch backstage Discord or Slack hubs aligned to product lifecycle stages.",
        "Offer member-led AMAs and roadmap voting to reinforce belonging.",
        "Track qualitative signals (sentiment, share of voice) with AI summarization."
      ],
      watchlist: [
        "Community fatigue without strong value loops.",
        "Moderation complexity as participation scales."
      ],
      category: "smm",
      confidence: 0.68,
      supportingSignals: [
        "GWI community economy index (Jan 2025)",
        "Circle platform benchmark on paid community retention (Nov 2024)"
      ]
    },
    {
      id: "ai-assisted-editorial",
      title: "AI-Assisted Editorial Pods",
      summary:
        "Editorial teams integrate AI copilots for ideation, outlining, and QA, boosting velocity while preserving human POV and brand guardrails.",
      impact: "high",
      maturity: "scaling",
      timeframe: "now",
      stats: [
        { label: "Production Velocity", value: "+37%" },
        { label: "Editorial QA Time", value: "-42%" },
        { label: "Engagement Delta", value: "+18%" }
      ],
      recommendedActions: [
        "Stand up prompt libraries aligned to persona pains, proof points, and tone.",
        "Blend AI outlines with SME interviews to keep originality high.",
        "Use automated fact-checking scripts before publishing."
      ],
      watchlist: [
        "Brand voice dilution without strong governance.",
        "Potential copyright claims around AI-generated visuals."
      ],
      category: "content",
      confidence: 0.81,
      supportingSignals: ["Content Marketing Institute 2025 report", "Jasper State of AI Content (2024)"]
    },
    {
      id: "incrementality-ai",
      title: "Always-On Incrementality Modeling",
      summary:
        "Marketing teams combine geo experiments, synthetic control groups, and AI forecasting to continuously measure paid media incrementality.",
      impact: "high",
      maturity: "adoption",
      timeframe: "next",
      stats: [
        { label: "Incremental Revenue Capture", value: "+24%" },
        { label: "Budget Reallocation Speed", value: "48h" },
        { label: "Waste Reduction", value: "-19%" }
      ],
      recommendedActions: [
        "Pipe clean POS and CRM data into MMM models refreshed weekly.",
        "Run holdout experiments whenever algorithmic bidding changes.",
        "Present dashboards that translate stats into exec-ready narratives."
      ],
      watchlist: [
        "Signal loss from privacy sandboxes limiting cross-device stitching.",
        "Overfitting risk without data science oversight."
      ],
      category: "paid",
      confidence: 0.74,
      supportingSignals: [
        "Google Ads measurement roadmap (2025)",
        "Meta incrementality playbook updates (Dec 2024)"
      ]
    },
    {
      id: "first-party-cdp",
      title: "Unified First-Party Data Activation",
      summary:
        "CDP + reverse ETL stacks synchronize product, marketing, and support data to enable predictive journeys and suppression models.",
      impact: "high",
      maturity: "adoption",
      timeframe: "now",
      stats: [
        { label: "Addressable Audience Growth", value: "+41%" },
        { label: "Lifecycle Conversion Uplift", value: "+22%" },
        { label: "Cost per Personalization", value: "-28%" }
      ],
      recommendedActions: [
        "Stand up consent-first data capture with progressive profiling and value exchange.",
        "Use propensity scoring to trigger lifecycle messaging at micro-moments.",
        "Feed support sentiment data into churn prediction models."
      ],
      watchlist: [
        "Upcoming EU AI Act guidelines on automated decisioning.",
        "Data residency requirements per region."
      ],
      category: "analytics",
      confidence: 0.83,
      supportingSignals: [
        "Twilio Segment State of Personalization (2025)",
        "Snowflake and Hightouch partnership announcements (Jan 2025)"
      ]
    },
    {
      id: "agentic-marketing-teams",
      title: "Agentic Marketing Co-Pilots",
      summary:
        "AI agents coordinate campaign planning, channel ops, and insights generation, acting as autonomous teammates executing briefs.",
      impact: "medium",
      maturity: "emerging",
      timeframe: "later",
      stats: [
        { label: "Task Automation", value: "35%" },
        { label: "Cycle Time Reduction", value: "-29%" },
        { label: "Pilot Satisfaction", value: "4.2/5" }
      ],
      recommendedActions: [
        "Define RACI between humans and agents with audit trails.",
        "Start with sandboxed playbooks (reporting, QA, routing) before expanding.",
        "Measure agent performance with guardrail metrics (bias, hallucinations)."
      ],
      watchlist: [
        "Regulatory requirements for disclosure of AI co-creation.",
        "Security posture for third-party agent frameworks."
      ],
      category: "emerging",
      confidence: 0.61,
      supportingSignals: ["OpenAI GPTs for Work case studies (2025)", "HubSpot agentic automation roadmap"]
    }
  ],
  metaNarratives: [
    {
      title: "Experience-Led Search replaces keyword-first strategies",
      description:
        "SGE, Bing Copilot, Perplexity, and ecosystem players are providing answers before click-through, demanding brand-owned data, entity clarity, and topical authority.",
      implication:
        "SEO leaders need to act like product managers for knowledge assets, shipping structured content that feeds AI systems and captures demand via owned experiences."
    },
    {
      title: "Community and creators reshape the funnel",
      description:
        "Streaming-first creators and micro-communities now influence mid-funnel validation. Social commerce native tools reward consistent, high-volume experimentation.",
      implication:
        "Marketing teams must build creator operations, leverage UGC contractually, and articulate POV-driven narratives to stay relevant."
    },
    {
      title: "Data design underpins every marketing win",
      description:
        "Server-side measurement, modeled conversions, and privacy-safe identifiers are baseline. AI copilots require unified, labeled, high-quality data sets.",
      implication:
        "CMOs must prioritize first-party data infrastructure, continuous experimentation, and transparent governance to keep performance intelligence trustworthy."
    }
  ]
};
