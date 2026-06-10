import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getAbsoluteUrl, seoKeywords } from "@/lib/site";

export const metadata: Metadata = {
  title: "利用規約",
  description: "ラブクエスト診断の利用規約。診断コンテンツ、禁止事項、免責事項、広告・外部リンクについて記載しています。",
  keywords: [...seoKeywords, "利用規約"],
  alternates: {
    canonical: getAbsoluteUrl("/terms"),
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="利用規約"
      description="ラブクエスト診断を安心して楽しんでいただくための利用条件です。"
      sections={[
        {
          title: "サービス内容",
          body: (
            <p>当サイトは、24問の回答から恋愛傾向を16タイプに分類する娯楽目的の診断コンテンツです。</p>
          ),
        },
        {
          title: "禁止事項",
          body: (
            <>
              <p>当サイトのコンテンツ、画像、文章、デザインを無断で転載・複製・再配布することを禁止します。</p>
              <p>サイト運営を妨げる行為、不正アクセス、過度な負荷を与える行為も禁止します。</p>
            </>
          ),
        },
        {
          title: "広告・外部リンク",
          body: (
            <>
              <p>今後、広告やアフィリエイトリンクを掲載する場合があります。</p>
              <p>外部サイトで発生したトラブル、購入、契約等について、当サイトは責任を負いません。</p>
            </>
          ),
        },
        {
          title: "免責事項",
          body: (
            <p>診断結果は参考情報です。恋愛、人間関係、生活上の判断はご自身の責任で行ってください。</p>
          ),
        },
      ]}
    />
  );
}
