"use client";

import Image from "next/image";
import { AdSlot } from "@/components/AdSlot";
import { useLanguage } from "@/components/LanguageProvider";
import { PixelButton } from "@/components/PixelButton";
import { RpgFrame } from "@/components/RpgFrame";
import { StartQuestButton } from "@/components/StartQuestButton";
import { uiText } from "@/lib/uiText";

export function HomeContent() {
  const { language } = useLanguage();
  const ui = uiText[language];

  return (
    <div className="flex min-h-[calc(100vh-48px)] flex-col justify-between gap-6">
      <div className="space-y-6">
        <div className="pixel-corners mx-auto mt-4 max-w-[320px] overflow-hidden border-4 border-[#ffd36b] bg-[#ff9bc1] p-1 shadow-[0_8px_0_#050318,0_0_28px_rgba(255,79,145,0.45)]">
          <div className="pixel-corners relative overflow-hidden border-2 border-[#fff6d5] bg-[radial-gradient(circle_at_50%_30%,#ffe8f5_0%,#ffc2df_48%,#7d5bd6_100%)]">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[length:14px_14px]" />
            <Image
              src="/love-quest-title.jpg"
              alt="ラブクエスト診断のタイトルロゴ"
              width={1024}
              height={1024}
              priority
              className="relative aspect-square w-full scale-[1.22] object-cover mix-blend-multiply [image-rendering:pixelated]"
            />
          </div>
        </div>

        <p className="mx-auto max-w-[320px] text-center text-sm font-bold leading-7 text-[#eadcff]">
          {ui.homeDescription}
        </p>

        <RpgFrame>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-2">
              {["P/S", "L/F", "R/G", "E/I"].map((axis) => (
                <div
                  key={axis}
                  className="pixel-corners border-2 border-[#ffd36b] bg-[#ff4f91] px-2 py-3 text-center text-xs font-black text-white shadow-[0_3px_0_#6f173f]"
                >
                  {axis}
                </div>
              ))}
            </div>
            <p className="text-sm font-bold leading-7 text-[#eadcff]">
              {ui.homeAxisDescription}
            </p>
          </div>
        </RpgFrame>
      </div>

      <div className="grid gap-3">
        <StartQuestButton className="w-full text-base">{ui.start}</StartQuestButton>
        <PixelButton href="/types" variant="ghost" className="w-full">{ui.library}</PixelButton>
        <AdSlot placement="home-bottom" />
      </div>
    </div>
  );
}
