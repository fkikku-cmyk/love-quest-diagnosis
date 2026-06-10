import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getAbsoluteUrl, seoKeywords } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "ラブクエスト診断へのお問い合わせページ。ご意見、不具合報告、広告掲載等についての案内です。",
  keywords: [...seoKeywords, "お問い合わせ"],
  alternates: {
    canonical: getAbsoluteUrl("/contact"),
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
              <p>現在、専用フォームは準備中です。公開後は運営者のSNS、GitHub Issue、またはフォーム等の連絡先を設置する予定です。</p>
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
