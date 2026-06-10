type AdSlotProps = {
  placement: "home-bottom" | "result-bottom" | "types-bottom" | "type-detail-bottom" | "article-bottom";
};

const labels: Record<AdSlotProps["placement"], string> = {
  "home-bottom": "HOME AD SLOT",
  "result-bottom": "RESULT AD SLOT",
  "types-bottom": "LIBRARY AD SLOT",
  "type-detail-bottom": "TYPE DETAIL AD SLOT",
  "article-bottom": "ARTICLE AD SLOT",
};

export function AdSlot({ placement }: AdSlotProps) {
  return (
    <aside
      data-ad-placement={placement}
      className="pixel-corners border-2 border-[#7d5bd6] bg-[#09061f]/80 p-3 text-center shadow-[inset_0_0_0_2px_rgba(255,211,107,0.1)]"
      aria-label="広告枠"
    >
      <p className="text-[10px] font-black tracking-[0.16em] text-[#ffd36b]">{labels[placement]}</p>
      <p className="mt-1 text-xs font-bold leading-5 text-[#eadcff]">
        今後おすすめコンテンツや広告を表示するためのスペースです。
      </p>
    </aside>
  );
}
