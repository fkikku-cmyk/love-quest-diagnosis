"use client";

import { useEffect, useState } from "react";
import { ResultCard } from "@/components/ResultCard";
import { StartQuestButton } from "@/components/StartQuestButton";
import { loveTypeMap } from "@/data/types";
import { loadResult } from "@/lib/storage";
import type { DiagnosisResult } from "@/types/diagnosis";

export function ResultPageContent() {
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  useEffect(() => {
    const savedResult = loadResult();
    if (savedResult) {
      setResult(savedResult);
      return;
    }
  }, []);

  if (!result) {
    return (
      <div className="flex min-h-[calc(100vh-48px)] flex-col justify-center gap-6">
        <StartQuestButton className="w-full">冒険へ進む</StartQuestButton>
      </div>
    );
  }

  return <ResultCard result={result} type={loveTypeMap[result.code]} />;
}
