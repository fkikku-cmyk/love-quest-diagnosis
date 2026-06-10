import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { getAbsoluteUrl, seoKeywords, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "ラブクエスト診断 | 恋愛タイプ診断・16タイプ診断",
  description: "24問であなたの恋愛傾向を16タイプの恋愛ジョブに分類。相性診断、恋愛タイプ診断、RPG診断をスマホで楽しめます。",
  keywords: [...seoKeywords, "RPG診断", "恋愛傾向"],
  alternates: {
    canonical: getAbsoluteUrl("/"),
  },
  openGraph: {
    title: `${siteName} | 恋愛タイプ診断・16タイプ診断`,
    description: "24問であなたの恋愛傾向を16タイプの恋愛ジョブに分類。相性タイプもわかります。",
    url: getAbsoluteUrl("/"),
    images: ["/love-quest-title.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | 恋愛タイプ診断`,
    description: "24問であなたの恋愛ジョブと相性タイプがわかる診断サイト。",
    images: ["/love-quest-title.jpg"],
  },
};

export default function Home() {
  return <HomeContent />;
}
