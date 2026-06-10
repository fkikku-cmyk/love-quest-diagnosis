import type { Metadata } from "next";
import { ResultPageContent } from "@/components/ResultPageContent";
import { getAbsoluteUrl, seoKeywords } from "@/lib/site";

export const metadata: Metadata = {
  title: "診断結果 | ラブクエスト診断",
  description: "ラブクエスト診断の恋愛タイプ結果ページ。恋愛ジョブ、相性タイプ、恋愛ステータスをSNSでシェアできます。",
  keywords: [...seoKeywords, "恋愛ステータス", "SNSシェア"],
  alternates: {
    canonical: getAbsoluteUrl("/result"),
  },
  openGraph: {
    title: "診断結果 | ラブクエスト診断",
    description: "あなたの恋愛ジョブ、相性タイプ、恋愛ステータスをSNSでシェアできます。",
    url: getAbsoluteUrl("/result"),
    images: ["/love-quest-title.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "診断結果 | ラブクエスト診断",
    description: "あなたの恋愛ジョブ、相性タイプ、恋愛ステータスをSNSでシェアできます。",
    images: ["/love-quest-title.jpg"],
  },
};

export default function ResultPage() {
  return <ResultPageContent />;
}
