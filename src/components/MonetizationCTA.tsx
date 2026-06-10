import { PixelButton } from "@/components/PixelButton";

type MonetizationCTAProps = {
  variant?: "result" | "library" | "detail";
};

const copy = {
  result: {
    title: "相性の良いタイプ、身近にいるかも。",
    body: "友達にも診断してもらって、タイプや相性を比べてみよう。恋愛の距離感や連絡ペースの違いが見えてきます。",
  },
  library: {
    title: "16タイプを見比べてみよう",
    body: "気になるタイプを見比べると、連絡のしかたや距離の縮め方のヒントになります。",
  },
  detail: {
    title: "このタイプとの関係を深掘りする",
    body: "相性の良いタイプや似ているタイプを見て、価値観の合う相手との関わり方を考えてみよう。",
  },
} as const;

export function MonetizationCTA({ variant = "result" }: MonetizationCTAProps) {
  const item = copy[variant];

  return (
    <section className="pixel-corners border-4 border-[#ffd36b] bg-[#ff9bc1] p-1 shadow-[0_6px_0_#050318]">
      <div className="pixel-corners space-y-3 border-2 border-[#fff6d5] bg-[#17113a] p-4">
        <div>
          <p className="text-[10px] font-black tracking-[0.18em] text-[#ffd36b]">NEXT QUEST</p>
          <h2 className="mt-1 text-lg font-black leading-7 text-[#fff6d5]">{item.title}</h2>
          <p className="mt-2 text-sm font-bold leading-7 text-[#eadcff]">{item.body}</p>
        </div>
        <div className="grid gap-2">
          <PixelButton href="/types" variant="secondary" className="w-full">
            16タイプを見てみる
          </PixelButton>
          <PixelButton href="/quiz" variant="ghost" className="w-full">
            もう一度冒険する
          </PixelButton>
        </div>
      </div>
    </section>
  );
}
