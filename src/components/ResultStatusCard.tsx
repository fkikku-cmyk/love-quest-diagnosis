"use client";

import type { RefObject } from "react";
import { CompatibilityList } from "@/components/CompatibilityList";
import { PixelAvatar } from "@/components/PixelAvatar";
import { RarityBadge } from "@/components/RarityBadge";
import { StatBar } from "@/components/StatBar";
import type { LoveStats, LoveType } from "@/types/diagnosis";

type ResultStatusCardProps = {
  type: LoveType;
  cardRef?: RefObject<HTMLElement | null>;
};

const statLabels: Record<keyof LoveStats, string> = {
  passion: "情熱",
  loyalty: "一途",
  sweetness: "甘え力",
  stability: "安定感",
  romance: "ロマン",
  strategy: "駆け引き",
};

const statKeys = Object.keys(statLabels) as Array<keyof LoveStats>;

export function ResultStatusCard({ type, cardRef }: ResultStatusCardProps) {
  return (
    <section
      ref={cardRef}
      className="pixel-corners mx-auto w-full max-w-[390px] overflow-hidden border-4 border-[#ffd36b] bg-[#ff9bc1] p-1 shadow-[0_10px_0_#050318,0_0_42px_rgba(255,155,193,0.5)]"
    >
      <div className="pixel-corners relative overflow-hidden border-2 border-[#fff6d5] bg-[#120b2f] p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,155,193,0.28),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(255,211,107,0.22),transparent_24%),linear-gradient(180deg,rgba(95,74,168,0.34),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:12px_12px]" />

        <div className="relative space-y-4">
          <header className="text-center">
            <p className="text-xs font-black tracking-[0.22em] text-[#ffd36b]">ラブクエスト診断</p>
            <p className="mt-2 text-[11px] font-black text-[#ff9bc1]">あなたの恋愛タイプ</p>
          </header>

          <div className={`pixel-corners relative border-2 border-[#ffd36b] bg-gradient-to-br ${type.themeColor} p-2`}>
            <div className="absolute inset-0 bg-[#fff6d5]/10" />
            <div className="relative mx-auto w-[96%] max-w-[340px]">
              <PixelAvatar type={type} variant="hero" />
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <RarityBadge rarity={type.rarity} />
              <span className="text-xs font-black text-[#ffd36b]">/ {type.code}</span>
            </div>
            <h1 className="mt-2 text-3xl font-black leading-tight text-[#fff6d5] drop-shadow-[0_3px_0_#6f173f]">
              {type.jobName}
            </h1>
            <p className="mt-2 text-sm font-black leading-6 text-[#ff9bc1]">{type.title}</p>
          </div>

          <div className="pixel-corners border-2 border-[#ffd36b] bg-[#27174f] p-3">
            <p className="text-sm font-black leading-6 text-[#fff6d5]">{type.shareCatch}</p>
            <p className="mt-2 text-xs font-bold leading-6 text-[#eadcff]">{type.description}</p>
            <p className="mt-2 text-xs font-bold leading-6 text-[#eadcff]">{type.longDescription}</p>
          </div>

          <div className="pixel-corners border-2 border-[#7d5bd6] bg-[#09061f] p-3">
            <h2 className="text-sm font-black text-[#ffd36b]">恋愛ステータス</h2>
            <div className="mt-3 grid gap-2">
              {statKeys.map((key) => (
                <StatBar key={key} label={statLabels[key]} value={type.stats[key]} variant="stars" />
              ))}
            </div>
          </div>

          <div className="pixel-corners border-2 border-[#ff9bc1] bg-[#09061f] p-3">
            <h2 className="text-sm font-black text-[#ffd36b]">相性◎</h2>
            <p className="mt-1 text-xs font-black text-[#ff9bc1]">このタイプの人、私のパーティに来てください</p>
            <div className="mt-3">
              <CompatibilityList type={type} compact />
            </div>
          </div>

          <div className="pixel-corners border-2 border-[#ffd36b] bg-[#2a174f] px-3 py-2 text-center">
            <p className="text-xs font-black leading-5 text-[#fff6d5]">{type.viralComment}</p>
            <p className="mt-2 text-xs font-black tracking-[0.08em] text-[#ffd36b]">#ラブクエスト診断</p>
          </div>
        </div>
      </div>
    </section>
  );
}
