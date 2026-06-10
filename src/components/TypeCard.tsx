"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { PixelAvatar } from "@/components/PixelAvatar";
import { RarityBadge } from "@/components/RarityBadge";
import { uiText } from "@/lib/uiText";
import type { LoveType } from "@/types/diagnosis";

type TypeCardProps = {
  type: LoveType;
  isCurrent?: boolean;
};

export function TypeCard({ type, isCurrent = false }: TypeCardProps) {
  const { language } = useLanguage();
  const ui = uiText[language];

  return (
    <Link
      href={`/types/${type.code}`}
      className={`pixel-corners block border-4 bg-[#120b2f] p-1 shadow-[0_6px_0_#050318] transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-1 active:shadow-none ${
        isCurrent ? "border-[#ff9bc1]" : "border-[#f7c85f]"
      }`}
    >
      <div className={`pixel-corners relative overflow-hidden border-2 border-[#5f4aa8] bg-gradient-to-br ${type.themeColor} p-2`}>
        <div className="mx-auto w-[88%]">
          <PixelAvatar type={type} />
        </div>
        <div className="absolute right-4 top-3 text-lg font-black text-[#fff6d5] drop-shadow-[0_2px_0_#6f173f]">♥</div>
        <div className="absolute bottom-4 left-5 text-sm font-black text-[#ffd36b]">✦</div>
        <div className="absolute bottom-2 right-2">
          <RarityBadge rarity={type.rarity} />
        </div>
        {isCurrent ? (
          <div className="absolute left-2 top-2 border-2 border-[#fff6d5] bg-[#ff4f91] px-2 py-1 text-[10px] font-black text-white">
            {ui.currentJob}
          </div>
        ) : null}
      </div>
      <div className="space-y-2 border-x-2 border-b-2 border-[#5f4aa8] bg-[#17113a] p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-black text-[#ffd36b]">{type.code}</p>
          <p className="text-[10px] font-black text-[#ff9bc1]">{isCurrent ? ui.discovered : "JOB CARD"}</p>
        </div>
        <h2 className="text-lg font-black leading-6 text-[#fff6d5]">{type.jobName}</h2>
        <p className="text-xs font-bold leading-5 text-[#eadcff]">{type.shareCatch}</p>
      </div>
    </Link>
  );
}
