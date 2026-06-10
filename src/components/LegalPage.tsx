import type { ReactNode } from "react";
import { PixelButton } from "@/components/PixelButton";
import { RpgFrame } from "@/components/RpgFrame";

type LegalSection = {
  title: string;
  body: ReactNode;
};

type LegalPageProps = {
  title: string;
  description: string;
  sections: LegalSection[];
};

export function LegalPage({ title, description, sections }: LegalPageProps) {
  return (
    <div className="space-y-5 py-4">
      <RpgFrame>
        <div className="space-y-2">
          <p className="text-[10px] font-black tracking-[0.18em] text-[#ffd36b]">LOVE QUEST GUIDE</p>
          <h1 className="text-2xl font-black leading-tight text-[#fff6d5]">{title}</h1>
          <p className="text-sm font-bold leading-7 text-[#eadcff]">{description}</p>
        </div>
      </RpgFrame>

      {sections.map((section) => (
        <RpgFrame key={section.title}>
          <div className="space-y-3">
            <h2 className="text-lg font-black leading-7 text-[#ffd36b]">{section.title}</h2>
            <div className="space-y-3 text-sm font-bold leading-7 text-[#eadcff]">{section.body}</div>
          </div>
        </RpgFrame>
      ))}

      <div className="grid gap-3">
        <PixelButton href="/" variant="ghost">タイトルへ戻る</PixelButton>
      </div>
    </div>
  );
}
