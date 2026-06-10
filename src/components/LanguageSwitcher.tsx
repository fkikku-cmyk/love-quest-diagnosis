"use client";

import { languages } from "@/lib/language";
import { useLanguage } from "@/components/LanguageProvider";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="mx-auto mb-4 grid w-full max-w-[430px] grid-cols-3 gap-2 px-4 pt-4">
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLanguage(item.code)}
          className={`pixel-corners min-h-9 border-2 px-2 text-[11px] font-black shadow-[0_3px_0_#050318] ${
            language === item.code
              ? "border-[#ffd36b] bg-[#ff4f91] text-white"
              : "border-[#7d5bd6] bg-[#17113a] text-[#fff6d5]"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
