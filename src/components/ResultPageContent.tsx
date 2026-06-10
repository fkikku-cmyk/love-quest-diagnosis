"use client";

import { useEffect, useState } from "react";
import { PixelButton } from "@/components/PixelButton";
import { ResultCard } from "@/components/ResultCard";
import { loveTypeMap } from "@/data/types";
import { loadAnswers, loadResult, saveResult } from "@/lib/storage";
import { calculateResult, isQuizComplete } from "@/lib/calculateResult";
import type { DiagnosisResult } from "@/types/diagnosis";

export function ResultPageContent() {
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  useEffect(() => {
    const savedResult = loadResult();
    if (savedResult) {
      setResult(savedResult);
      return;
    }

    const answers = loadAnswers();
    if (isQuizComplete(answers)) {
      const calculated = calculateResult(answers);
      saveResult(calculated);
      setResult(calculated);
    }
  }, []);

  if (!result) {
    return (
      <div className="flex min-h-[calc(100vh-48px)] flex-col justify-center gap-6">
        <PixelButton href="/quiz" className="w-full">冒険へ進む</PixelButton>
      </div>
    );
  }

  return <ResultCard result={result} type={loveTypeMap[result.code]} />;
}
