"use client";

import { AdSlot } from "@/components/AdSlot";
import { useLanguage } from "@/components/LanguageProvider";
import { LoveTypeDetail } from "@/components/LoveTypeDetail";
import { MonetizationCTA } from "@/components/MonetizationCTA";
import { PixelButton } from "@/components/PixelButton";
import { QuestHeader } from "@/components/QuestHeader";
import { RpgFrame } from "@/components/RpgFrame";
import { loveTypeMap } from "@/data/types";
import { uiText } from "@/lib/uiText";
import type { LoveType } from "@/types/diagnosis";

type TypeDetailContentProps = {
  type: LoveType;
};

export function TypeDetailContent({ type }: TypeDetailContentProps) {
  const { language } = useLanguage();
  const ui = uiText[language];
  const relatedTypes = type.compatibleTypes.slice(0, 2).map((compatible) => loveTypeMap[compatible.code]);

  return (
    <div className="space-y-6">
      <QuestHeader eyebrow={`JOB ${type.code}`} title={type.jobName} description={type.title} />
      <LoveTypeDetail type={type} mode="detail" />

      <RpgFrame>
        <div className="space-y-4">
          <h2 className="text-lg font-black text-[#fff6d5]">関連タイプ</h2>
          <p className="text-sm font-bold leading-7 text-[#eadcff]">
            相性の良いタイプも見て、連絡ペースや距離感の違いを比べてみよう。
          </p>
          <div className="grid gap-2">
            {relatedTypes.map((related) => (
              <PixelButton key={related.code} href={`/types/${related.code}`} variant="secondary" className="w-full">
                {related.code} {related.jobName}
              </PixelButton>
            ))}
          </div>
        </div>
      </RpgFrame>

      <div className="grid gap-3">
        <PixelButton href="/types" variant="ghost">{ui.backToLibrary}</PixelButton>
        <PixelButton href="/quiz">{ui.start}</PixelButton>
        <PixelButton href="/" variant="ghost">{ui.backToTitle}</PixelButton>
      </div>

      <MonetizationCTA variant="detail" />
      <AdSlot placement="type-detail-bottom" />
    </div>
  );
}
