import type { Metadata } from "next";
import { ArticleList } from "@/components/ArticleList";
import { PixelButton } from "@/components/PixelButton";
import { QuestHeader } from "@/components/QuestHeader";
import { RpgFrame } from "@/components/RpgFrame";
import { getAbsoluteUrl, seoKeywords, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "恋愛診断コラム",
  description: "ラブクエスト診断の楽しみ方、16タイプ恋愛診断、相性、恋愛コミュニケーションに関する読み物一覧です。",
  keywords: [...seoKeywords, "恋愛コラム", "恋愛コミュニケーション"],
  alternates: {
    canonical: getAbsoluteUrl("/articles"),
  },
  openGraph: {
    title: `恋愛診断コラム | ${siteName}`,
    description: "診断結果の読み方や相性タイプの楽しみ方を紹介する恋愛コラム一覧です。",
    url: getAbsoluteUrl("/articles"),
    images: ["/love-quest-title.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `恋愛診断コラム | ${siteName}`,
    description: "恋愛タイプ診断をもっと楽しむための読み物一覧です。",
    images: ["/love-quest-title.jpg"],
  },
};

export default function ArticlesPage() {
  return (
    <div className="space-y-6 py-4">
      <QuestHeader
        eyebrow="LOVE COLUMN"
        title="恋愛診断コラム"
        description="診断結果の見方や、相性・連絡ペース・SNS共有の楽しみ方をまとめました。"
      />
      <RpgFrame>
        <p className="text-sm font-bold leading-7 text-[#eadcff]">
          ラブクエスト診断は娯楽として楽しむ恋愛タイプ診断です。記事では、結果を決めつけに使うのではなく、自分と相手の違いをやさしく知るためのヒントを紹介します。
        </p>
      </RpgFrame>
      <ArticleList />
      <div className="grid gap-3">
        <PixelButton href="/quiz">冒険をはじめる</PixelButton>
        <PixelButton href="/" variant="ghost">タイトルへ戻る</PixelButton>
      </div>
    </div>
  );
}
