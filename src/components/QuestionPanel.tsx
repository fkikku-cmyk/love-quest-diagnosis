"use client";

import { AnswerScale } from "@/components/AnswerScale";
import { useLanguage } from "@/components/LanguageProvider";
import { PixelButton } from "@/components/PixelButton";
import { QuizProgress } from "@/components/QuizProgress";
import { RpgFrame } from "@/components/RpgFrame";
import { getQuestionLocale } from "@/data/questionLocales";
import { uiText } from "@/lib/uiText";
import type { AnswerValue, Question } from "@/types/diagnosis";

type QuestionPanelProps = {
  question: Question;
  current: number;
  total: number;
  answer?: AnswerValue;
  canGoBack: boolean;
  onAnswer: (value: AnswerValue) => void;
  onBack: () => void;
};

export function QuestionPanel({
  question,
  current,
  total,
  answer,
  canGoBack,
  onAnswer,
  onBack,
}: QuestionPanelProps) {
  const { language } = useLanguage();
  const locale = getQuestionLocale(question, language);
  const ui = uiText[language];

  return (
    <RpgFrame>
      <div className="space-y-6">
        <QuizProgress current={current} total={total} />
        <div className="space-y-3">
          <p className="text-xs font-black text-[#ffd36b]">{ui.questLabel}</p>
          <h2 className="text-xl font-black leading-8 text-[#fff6d5]">{locale.text}</h2>
        </div>
        <AnswerScale
          value={answer}
          leftLabel={locale.leftLabel}
          rightLabel={locale.rightLabel}
          onChange={onAnswer}
        />
        <PixelButton
          type="button"
          variant="ghost"
          className="w-full"
          onClick={onBack}
          disabled={!canGoBack}
        >
          {ui.backQuestion}
        </PixelButton>
      </div>
    </RpgFrame>
  );
}
