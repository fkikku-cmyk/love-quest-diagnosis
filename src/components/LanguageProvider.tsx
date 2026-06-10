"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLanguage, type Language } from "@/lib/language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  language: defaultLanguage,
  setLanguage: () => undefined,
});

const STORAGE_KEY = "loveQuestLanguage";

function isLanguage(value: string | null): value is Language {
  return value === "ja" || value === "en" || value === "ko";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) {
      setLanguageState(saved);
    }
  }, []);

  function setLanguage(languageValue: Language) {
    setLanguageState(languageValue);
    window.localStorage.setItem(STORAGE_KEY, languageValue);
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
