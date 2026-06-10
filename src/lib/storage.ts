import type { AnswerMap, DiagnosisResult } from "@/types/diagnosis";

export const ANSWERS_STORAGE_KEY = "loveQuestAnswers";
export const RESULT_STORAGE_KEY = "loveQuestResult";

export function loadAnswers(): AnswerMap {
  if (typeof window === "undefined") {
    return {};
  }

  const raw = window.localStorage.getItem(ANSWERS_STORAGE_KEY);
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) as AnswerMap;
  } catch {
    return {};
  }
}

export function saveAnswers(answers: AnswerMap) {
  window.localStorage.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(answers));
  window.localStorage.removeItem(RESULT_STORAGE_KEY);
}

export function clearAnswers() {
  window.localStorage.removeItem(ANSWERS_STORAGE_KEY);
  window.localStorage.removeItem(RESULT_STORAGE_KEY);
}

export function loadResult(): DiagnosisResult | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(RESULT_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as DiagnosisResult;
  } catch {
    return null;
  }
}

export function saveResult(result: DiagnosisResult) {
  window.localStorage.setItem(RESULT_STORAGE_KEY, JSON.stringify(result));
}
