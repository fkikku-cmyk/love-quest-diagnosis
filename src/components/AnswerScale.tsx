"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { uiText } from "@/lib/uiText";
import type { AnswerValue } from "@/types/diagnosis";

type AnswerScaleProps = {
  value?: AnswerValue;
  leftLabel: string;
  rightLabel: string;
  onChange: (value: AnswerValue) => void;
};

const values: AnswerValue[] = [1, 2, 3, 4, 5];

export function AnswerScale({ value, leftLabel, rightLabel, onChange }: AnswerScaleProps) {
  const { language } = useLanguage();
  const ui = uiText[language];

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-5 gap-2">
        {values.map((answer) => (
          <button
            key={answer}
            type="button"
            onClick={() => onChange(answer)}
            className={`pixel-corners aspect-square border-2 border-[#f7c85f] text-lg font-black shadow-[0_3px_0_#050318] transition hover:brightness-110 active:translate-y-1 active:shadow-none ${
              value === answer ? "bg-[#ff4f91] text-white" : "bg-[#17113a] text-[#fff6d5]"
            }`}
            aria-label={`${ui.selectAnswer} ${answer}`}
          >
            {answer}
          </button>
        ))}
      </div>
      <div className="flex justify-between text-[11px] font-bold text-[#eadcff]">
        <span>{leftLabel}</span>
        <span>{ui.neutral}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );
}
