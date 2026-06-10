"use client";

import { CompatibilityList } from "@/components/CompatibilityList";
import { LoveStatsPanel } from "@/components/LoveStatsPanel";
import { PixelAvatar } from "@/components/PixelAvatar";
import { RarityBadge } from "@/components/RarityBadge";
import { ShareButtons } from "@/components/ShareButtons";
import { useLanguage } from "@/components/LanguageProvider";
import { uiText } from "@/lib/uiText";
import type { ReactNode } from "react";
import type { LoveType } from "@/types/diagnosis";

type LoveTypeDetailProps = {
  type: LoveType;
  mode?: "result" | "detail";
  showShare?: boolean;
};

export function LoveTypeDetail({ type, mode = "detail", showShare = false }: LoveTypeDetailProps) {
  const { language } = useLanguage();
  const ui = uiText[language];
  const isResult = mode === "result";

  return (
    <section className="pixel-corners mx-auto max-w-[390px] border-4 border-[#ffd36b] bg-[#ff9bc1] p-1 shadow-[0_10px_0_#050318,0_0_42px_rgba(255,155,193,0.45)]">
      <div className="pixel-corners space-y-4 border-2 border-[#fff6d5] bg-[#17113a] p-3.5 sm:p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-black tracking-[0.18em] text-[#ffd36b]">
              {isResult ? "LOVE QUEST RESULT" : "LOVE JOB STATUS"}
            </p>
            <p className="mt-1 text-xs font-black text-[#ff9bc1]">{type.code}</p>
          </div>
          <RarityBadge rarity={type.rarity} />
        </div>

        <div className={`pixel-corners relative overflow-hidden border-2 border-[#f7c85f] bg-gradient-to-br ${type.themeColor} p-3`}>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[length:14px_14px]" />
          <div className="relative mx-auto w-[82%] max-w-[290px]">
            <PixelAvatar type={type} variant="hero" />
          </div>
          <div className="absolute bottom-3 left-3 right-3 border-2 border-[#fff6d5] bg-[#09061f]/80 px-3 py-2 text-center text-xs font-black text-[#ffd36b]">
            {type.code} / {type.rarity}
          </div>
        </div>

        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-black leading-tight text-[#fff6d5] drop-shadow-[0_3px_0_#6f173f]">
            {type.jobName}
          </h1>
          <p className="text-sm font-black leading-6 text-[#ff9bc1]">{type.title}</p>
          <p className="pixel-corners border-2 border-[#ffd36b] bg-[#27174f] px-3 py-2 text-xs font-black leading-6 text-[#fff6d5]">
            {type.shareCatch}
          </p>
        </div>

        <CardSection title={ui.description}>
          <p className="text-sm font-bold leading-7 text-[#eadcff]">{type.description}</p>
          <p className="mt-3 text-sm font-bold leading-7 text-[#eadcff]">{type.longDescription}</p>
        </CardSection>

        <CardSection title={ui.detailedTraits}>
          <DetailBlock title="普段の性格" text={type.personality} />
          <DetailBlock title="恋愛スタイル" text={type.loveStyle} />
          <DetailBlock title="連絡と会話" text={type.communicationStyle} />
          <DetailBlock title="魅力ポイント" text={type.appealPoint} />
          <DetailBlock title="気をつけたいところ" text={type.weakPointDetail} />
          <DetailBlock title="恋がうまくいくヒント" text={type.advice} />
        </CardSection>

        <CardSection title={ui.stats}>
          <LoveStatsPanel stats={type.stats} />
        </CardSection>

        <CardSection title={ui.strengths}>
          <div className="grid gap-2">
            {type.strengths.map((strength) => (
              <p key={strength} className="pixel-corners border-2 border-[#f7c85f] bg-[#2a174f] px-3 py-2 text-xs font-black leading-5 text-[#fff6d5]">
                ✦ {strength}
              </p>
            ))}
          </div>
        </CardSection>

        <CardSection title={ui.weaknesses}>
          <div className="grid gap-2">
            {type.weaknesses.map((weakness) => (
              <p key={weakness} className="text-xs font-bold leading-6 text-[#eadcff]">
                ◇ {weakness}
              </p>
            ))}
          </div>
        </CardSection>

        <CardSection title={ui.comment}>
          <p className="text-sm font-bold leading-7 text-[#fff6d5]">{type.viralComment}</p>
        </CardSection>

        <CardSection title={ui.compatibility} subtitle={ui.partyInvite}>
          <CompatibilityList type={type} />
        </CardSection>

        {showShare ? <ShareButtons type={type} /> : null}
      </div>
    </section>
  );
}

function DetailBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-3 first:mt-0">
      <p className="text-xs font-black text-[#ffd36b]">{title}</p>
      <p className="mt-1 text-sm font-bold leading-7 text-[#eadcff]">{text}</p>
    </div>
  );
}

function CardSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="pixel-corners border-2 border-[#7d5bd6] bg-[#09061f] p-3 shadow-[inset_0_0_0_2px_rgba(255,211,107,0.12)]">
      <h2 className="text-sm font-black text-[#ffd36b]">{title}</h2>
      {subtitle ? <p className="mt-1 text-xs font-black text-[#ff9bc1]">{subtitle}</p> : null}
      <div className="mt-3">{children}</div>
    </div>
  );
}
