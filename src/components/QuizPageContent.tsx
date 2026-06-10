"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { QuestionPanel } from "@/components/QuestionPanel";
import { PixelButton } from "@/components/PixelButton";
import { QuestHeader } from "@/components/QuestHeader";
import { questions } from "@/data/questions";
import { calculateResult, isQuizComplete } from "@/lib/calculateResult";
import { clearAnswers, loadAnswers, saveAnswers, saveResult } from "@/lib/storage";
import { uiText } from "@/lib/uiText";
import type { AnswerMap, AnswerValue } from "@/types/diagnosis";

export function QuizPageContent() {
  const router = useRouter();
  const { language } = useLanguage();
  const ui = uiText[language];
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    const saved = loadAnswers();
    setAnswers(saved);
    const firstUnanswered = questions.findIndex((question) => !saved[question.id]);
    setCurrentIndex(firstUnanswered === -1 ? questions.length - 1 : firstUnanswered);
  }, []);

  const selectedAnswer = useMemo(
    () => answers[currentQuestion.id],
    [answers, currentQuestion.id],
  );

  function handleAnswer(value: AnswerValue) {
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: value,
    };
    setAnswers(nextAnswers);
    saveAnswers(nextAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((index) => index + 1);
      return;
    }

    if (isQuizComplete(nextAnswers)) {
      const result = calculateResult(nextAnswers);
      saveResult(result);
      router.push("/result");
    }
  }

  function handleBack() {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  }

  function handleReset() {
    clearAnswers();
    setAnswers({});
    setCurrentIndex(0);
  }

  return (
    <div className="space-y-6">
      <QuestHeader
        eyebrow="24 QUESTIONS"
        title={ui.quizTitle}
        description={ui.quizDescription}
      />
      <QuestionPanel
        question={currentQuestion}
        current={currentIndex + 1}
        total={questions.length}
        answer={selectedAnswer}
        canGoBack={currentIndex > 0}
        onAnswer={handleAnswer}
        onBack={handleBack}
      />
      <div className="grid gap-3">
        <PixelButton type="button" variant="ghost" className="w-full" onClick={handleReset}>
          {ui.resetQuiz}
        </PixelButton>
        <PixelButton href="/" variant="ghost" className="w-full">
          {ui.backToTitle}
        </PixelButton>
      </div>
    </div>
  );
}
