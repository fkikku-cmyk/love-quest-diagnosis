import { AdSlot } from "@/components/AdSlot";
import { MonetizationCTA } from "@/components/MonetizationCTA";
import { PixelButton } from "@/components/PixelButton";
import { RpgFrame } from "@/components/RpgFrame";
import type { Article } from "@/data/articles";

type ArticleDetailProps = {
  article: Article;
};

export function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <article className="space-y-5 py-4">
      <RpgFrame>
        <div className="space-y-3">
          <p className="text-[10px] font-black tracking-[0.18em] text-[#ffd36b]">LOVE QUEST COLUMN</p>
          <h1 className="text-2xl font-black leading-tight text-[#fff6d5]">{article.title}</h1>
          <p className="text-sm font-bold leading-7 text-[#eadcff]">{article.description}</p>
          <p className="text-xs font-black text-[#ff9bc1]">
            {article.publishedAt} / {article.readingTime}
          </p>
        </div>
      </RpgFrame>

      <RpgFrame>
        <div className="space-y-4 text-sm font-bold leading-8 text-[#f5ecff]">
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </RpgFrame>

      <MonetizationCTA variant="detail" />
      <AdSlot placement="article-bottom" />

      <div className="grid gap-3">
        <PixelButton href="/quiz">冒険をはじめる</PixelButton>
        <PixelButton href="/articles" variant="ghost">記事一覧へ戻る</PixelButton>
        <PixelButton href="/types" variant="ghost">恋愛ジョブ図鑑を見る</PixelButton>
      </div>
    </article>
  );
}
