"use client";

import { useRef } from "react";
import { AxisMeter } from "@/components/AxisMeter";
import { AdSlot } from "@/components/AdSlot";
import { useLanguage } from "@/components/LanguageProvider";
import { MonetizationCTA } from "@/components/MonetizationCTA";
import { PixelButton } from "@/components/PixelButton";
import { ResultStatusCard } from "@/components/ResultStatusCard";
import { RpgFrame } from "@/components/RpgFrame";
import { ShareButtons } from "@/components/ShareButtons";
import { uiText } from "@/lib/uiText";
import type { DiagnosisResult, LoveType } from "@/types/diagnosis";

type ResultCardProps = {
  result: DiagnosisResult;
  type: LoveType;
};

export function ResultCard({ result, type }: ResultCardProps) {
  const statusCardRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();
  const ui = uiText[language];

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <ResultStatusCard type={type} cardRef={statusCardRef} />
        <ShareButtons type={type} />
      </div>

      <RpgFrame>
        <div className="space-y-4">
          <h2 className="text-lg font-black text-[#fff6d5]">4軸ステータス</h2>
          <AxisMeter scores={result.scores} left="P" right="S" leftText="情熱" rightText="安定" />
          <AxisMeter scores={result.scores} left="L" right="F" leftText="主導" rightText="寄り添い" />
          <AxisMeter scores={result.scores} left="R" right="G" leftText="ロマン" rightText="現実" />
          <AxisMeter scores={result.scores} left="E" right="I" leftText="表現" rightText="内省" />
        </div>
      </RpgFrame>

      <MonetizationCTA variant="result" />

      <div className="grid gap-3">
        <PixelButton href="/quiz" variant="primary">{ui.retry}</PixelButton>
        <PixelButton href="/quiz" variant="secondary">別の回答で試す</PixelButton>
        <PixelButton href="/types" variant="ghost">{ui.library}</PixelButton>
        <PixelButton href="/" variant="ghost">{ui.backToTitle}</PixelButton>
      </div>

      <AdSlot placement="result-bottom" />
    </div>
  );
}
