import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getAbsoluteUrl, seoKeywords, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "ラブクエスト診断へのお問い合わせページ。ご意見、不具合報告、広告掲載等についての案内です。",
  keywords: [...seoKeywords, "お問い合わせ"],
  alternates: {
    canonical: getAbsoluteUrl("/contact"),
  },
  openGraph: {
    title: `お問い合わせ | ${siteName}`,
    description: "ラブクエスト診断へのお問い合わせ、ご意見、不具合報告、広告掲載等についての案内です。",
    url: getAbsoluteUrl("/contact"),
    images: ["/love-quest-title.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `お問い合わせ | ${siteName}`,
    description: "ラブクエスト診断へのお問い合わせページです。",
    images: ["/love-quest-title.jpg"],
  },
};

export default function ContactPage() {
  return (
    <LegalPage
      title="お問い合わせ"
      description="ご意見、不具合報告、掲載内容に関するお問い合わせについて。"
      sections={[
        {
          title: "お問い合わせ方法",
          body: (
            <>
              <p>現在、専用フォームは準備中です。公開時には、運営者の連絡用メールアドレスまたは問い合わせフォームを設置してください。</p>
              <p>
                連絡先の表示例：
                <a className="text-[#ffd36b] underline" href="mailto:fkikku@gmail.com">
                  fkikku@gmail.com
                </a>
              </p>
              <p>不具合報告の際は、利用端末、ブラウザ、発生したページ、操作内容を添えていただけると確認しやすくなります。</p>
            </>
          ),
        },
        {
          title: "広告・提携について",
          body: (
            <p>恋愛、占い、心理テスト、マッチング、ライフスタイル関連の広告・提携枠を今後設置する場合があります。</p>
          ),
        },
        {
          title: "返信について",
          body: (
            <p>すべてのお問い合わせに返信できるとは限りませんが、サイト改善の参考にさせていただきます。</p>
          ),
        },
      ]}
    />
  );
}
