"use client";

import { AdSlot } from "@/components/AdSlot";
import { useLanguage } from "@/components/LanguageProvider";
import { MonetizationCTA } from "@/components/MonetizationCTA";
import { PixelButton } from "@/components/PixelButton";
import { QuestHeader } from "@/components/QuestHeader";
import { TypeGallery } from "@/components/TypeGallery";
import { uiText } from "@/lib/uiText";

export function TypesPageContent() {
  const { language } = useLanguage();
  const ui = uiText[language];

  return (
    <div className="space-y-6">
      <QuestHeader
        eyebrow="JOB LIBRARY"
        title={ui.libraryTitle}
        description={ui.libraryDescription}
      />
      <div className="pixel-corners border-4 border-[#ffd36b] bg-[#ff9bc1] p-1 shadow-[0_6px_0_#050318]">
        <div className="pixel-corners border-2 border-[#7d5bd6] bg-[#17113a] px-4 py-3 text-center text-xs font-black leading-6 text-[#fff6d5]">
          {ui.libraryBanner}
        </div>
      </div>
      <div className="grid gap-3">
        <PixelButton href="/quiz" className="w-full">{ui.start}</PixelButton>
        <PixelButton href="/" variant="ghost" className="w-full">{ui.backToTitle}</PixelButton>
      </div>
      <TypeGallery />
      <MonetizationCTA variant="library" />
      <AdSlot placement="types-bottom" />
    </div>
  );
}
