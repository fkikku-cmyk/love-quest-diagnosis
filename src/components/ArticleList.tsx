import Link from "next/link";
import { articles } from "@/data/articles";

export function ArticleList() {
  return (
    <div className="grid gap-3">
      {articles.map((article) => (
        <Link
          key={article.slug}
          href={`/articles/${article.slug}`}
          className="pixel-corners block border-2 border-[#ffd36b] bg-[#17113a]/95 p-4 shadow-[0_5px_0_#050318] transition hover:brightness-110"
        >
          <p className="text-[10px] font-black tracking-[0.16em] text-[#ff9bc1]">
            LOVE COLUMN / {article.readingTime}
          </p>
          <h2 className="mt-2 text-lg font-black leading-7 text-[#fff6d5]">{article.title}</h2>
          <p className="mt-2 text-sm font-bold leading-7 text-[#eadcff]">{article.description}</p>
          <p className="mt-3 text-xs font-black text-[#ffd36b]">続きを読む</p>
        </Link>
      ))}
    </div>
  );
}
