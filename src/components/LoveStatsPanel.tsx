"use client";

import type { LoveStats } from "@/types/diagnosis";
import { useLanguage } from "@/components/LanguageProvider";
import { StatBar } from "@/components/StatBar";

type LoveStatsPanelProps = {
  stats: LoveStats;
};

const statLabels = {
  ja: {
    passion: "情熱",
    loyalty: "一途",
    sweetness: "甘え力",
    stability: "安定感",
    romance: "ロマン",
    strategy: "駆け引き",
  },
  en: {
    passion: "Passion",
    loyalty: "Loyalty",
    sweetness: "Sweetness",
    stability: "Stability",
    romance: "Romance",
    strategy: "Strategy",
  },
  ko: {
    passion: "열정",
    loyalty: "일편단심",
    sweetness: "애교력",
    stability: "안정감",
    romance: "로망",
    strategy: "밀당",
  },
} satisfies Record<string, Record<keyof LoveStats, string>>;

const statKeys: Array<{
  key: keyof LoveStats;
}> = [
  { key: "passion" },
  { key: "loyalty" },
  { key: "sweetness" },
  { key: "stability" },
  { key: "romance" },
  { key: "strategy" },
];

export function LoveStatsPanel({ stats }: LoveStatsPanelProps) {
  const { language } = useLanguage();
  const labels = statLabels[language];

  return (
    <div className="grid gap-2">
      {statKeys.map((stat) => (
        <StatBar key={stat.key} label={labels[stat.key]} value={stats[stat.key]} />
      ))}
    </div>
  );
}
