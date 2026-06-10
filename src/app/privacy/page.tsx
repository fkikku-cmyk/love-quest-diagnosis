import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getAbsoluteUrl, seoKeywords } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "ラブクエスト診断のプライバシーポリシー。アクセス解析、Cookie、広告、アフィリエイトリンクを導入する場合の方針を記載しています。",
  keywords: [...seoKeywords, "プライバシーポリシー"],
  alternates: {
    canonical: getAbsoluteUrl("/privacy"),
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="プライバシーポリシー"
      description="ラブクエスト診断をご利用いただく際の情報の取り扱いについてまとめています。"
      sections={[
        {
          title: "取得する情報",
          body: (
            <>
              <p>当サイトは、診断結果の保存や表示のために、回答内容や診断結果をお使いの端末内のlocalStorageへ保存します。</p>
              <p>これらの情報はサーバーへ送信せず、外部APIも使用していません。</p>
            </>
          ),
        },
        {
          title: "Cookie・アクセス解析について",
          body: (
            <>
              <p>今後、サイト改善のためにGoogle Analyticsなどのアクセス解析ツールを導入する場合があります。</p>
              <p>導入する場合、Cookie等を利用して匿名の利用状況を取得することがあります。</p>
            </>
          ),
        },
        {
          title: "広告・アフィリエイトについて",
          body: (
            <>
              <p>今後、Google AdSenseなどの広告配信サービスや、恋愛・占い・心理テスト関連のアフィリエイトリンクを掲載する場合があります。</p>
              <p>広告配信事業者がCookieを使用し、ユーザーの興味に応じた広告を表示する場合があります。</p>
            </>
          ),
        },
        {
          title: "免責事項",
          body: (
            <p>診断結果は娯楽・自己理解を目的としたものであり、恋愛や人間関係の結果を保証するものではありません。</p>
          ),
        },
      ]}
    />
  );
}
