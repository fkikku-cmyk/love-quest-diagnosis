import type { Metadata } from "next";
import { TypesPageContent } from "@/components/TypesPageContent";
import { getAbsoluteUrl, seoKeywords } from "@/lib/site";

export const metadata: Metadata = {
  title: "恋愛ジョブ図鑑 | ラブクエスト診断",
  description: "ラブクエスト診断の16タイプ一覧。恋愛タイプ診断、相性診断、恋愛ジョブごとの傾向を図鑑形式で確認できます。",
  keywords: [...seoKeywords, "タイプ図鑑", "恋愛傾向"],
  alternates: {
    canonical: getAbsoluteUrl("/types"),
  },
  openGraph: {
    title: "恋愛ジョブ図鑑 | ラブクエスト診断",
    description: "16タイプの恋愛ジョブ一覧。各タイプの恋愛傾向、連絡スタイル、相性を確認できます。",
    url: getAbsoluteUrl("/types"),
    images: ["/love-quest-title.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "恋愛ジョブ図鑑 | ラブクエスト診断",
    description: "16タイプの恋愛ジョブ一覧。各タイプの恋愛傾向と相性を確認できます。",
    images: ["/love-quest-title.jpg"],
  },
};

export default function TypesPage() {
  return <TypesPageContent />;
}
