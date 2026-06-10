import type { Rarity } from "@/types/diagnosis";

type RarityBadgeProps = {
  rarity: Rarity;
};

const rarityStyles: Record<Rarity, string> = {
  N: "bg-[#5f4aa8] text-[#fff6d5]",
  R: "bg-[#36b6ff] text-[#06142f]",
  SR: "bg-[#ff9bc1] text-[#351128]",
  SSR: "bg-[#ffd36b] text-[#3b1a05]",
};

export function RarityBadge({ rarity }: RarityBadgeProps) {
  return (
    <span
      className={`pixel-corners inline-flex min-h-8 items-center border-2 border-[#fff6d5] px-3 py-1 text-xs font-black shadow-[0_3px_0_#050318] ${rarityStyles[rarity]}`}
    >
      {rarity}
    </span>
  );
}
