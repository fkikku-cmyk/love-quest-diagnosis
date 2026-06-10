import type { Metadata } from "next";
import { QuizPageContent } from "@/components/QuizPageContent";
import { getAbsoluteUrl, seoKeywords } from "@/lib/site";

export const metadata: Metadata = {
  title: "診断をはじめる | ラブクエスト診断",
  description: "24問の5段階回答で、情熱・主導・ロマン・表現など4軸からあなたの恋愛タイプを診断します。",
  keywords: [...seoKeywords, "恋愛傾向", "恋愛心理テスト"],
  alternates: {
    canonical: getAbsoluteUrl("/quiz"),
  },
  openGraph: {
    title: "診断をはじめる | ラブクエスト診断",
    description: "24問の5段階回答で、あなたの恋愛ジョブと相性タイプを診断します。",
    url: getAbsoluteUrl("/quiz"),
    images: ["/love-quest-title.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "診断をはじめる | ラブクエスト診断",
    description: "24問であなたの恋愛ジョブと相性タイプを診断します。",
    images: ["/love-quest-title.jpg"],
  },
};

export default function QuizPage() {
  return <QuizPageContent />;
}
