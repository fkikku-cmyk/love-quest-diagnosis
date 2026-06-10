import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getAbsoluteUrl, seoKeywords, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "ラブクエスト診断について",
  description: "ラブクエスト診断は、恋愛傾向をRPG風の16タイプで楽しめる娯楽目的の恋愛タイプ診断サイトです。",
  keywords: [...seoKeywords, "サイトについて", "恋愛傾向"],
  alternates: {
    canonical: getAbsoluteUrl("/about"),
  },
  openGraph: {
    title: `ラブクエスト診断について | ${siteName}`,
    description: "恋愛傾向をRPG風の16タイプで楽しめる、娯楽目的の恋愛タイプ診断サイトです。",
    url: getAbsoluteUrl("/about"),
    images: ["/love-quest-title.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `ラブクエスト診断について | ${siteName}`,
    description: "恋愛傾向をRPG風の16タイプで楽しめる診断サイトです。",
    images: ["/love-quest-title.jpg"],
  },
};

export default function AboutPage() {
  return (
    <LegalPage
      title="ラブクエスト診断について"
      description="ラブクエスト診断は、恋愛傾向を16タイプの恋愛ジョブとして楽しめるスマホ向け診断サイトです。"
      sections={[
        {
          title: "このサイトでできること",
          body: (
            <>
              <p>24問の質問に答えると、恋愛で出やすい傾向を4つの軸から分析し、16タイプの恋愛ジョブとして表示します。</p>
              <p>結果ページでは、タイプの特徴、恋愛ステータス、相性の良いタイプ、SNSで共有しやすい結果カードを見ることができます。</p>
            </>
          ),
        },
        {
          title: "診断の楽しみ方",
          body: (
            <>
              <p>自分の恋愛傾向を読むだけでなく、友達や気になる人と結果を比べることで、連絡ペースや距離感の違いを楽しく話せます。</p>
              <p>タイプ図鑑や読み物記事もあわせて見ると、自分とは違う恋愛スタイルへの理解が深まります。</p>
            </>
          ),
        },
        {
          title: "注意事項",
          body: (
            <>
              <p>本サイトの診断結果は娯楽目的のコンテンツです。医学的、心理学的、恋愛相談、法律相談などの専門的な診断や助言ではありません。</p>
              <p>結果は相手や自分を決めつけるためではなく、コミュニケーションのきっかけとしてお楽しみください。</p>
            </>
          ),
        },
      ]}
    />
  );
}
