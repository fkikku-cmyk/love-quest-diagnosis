import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { getAbsoluteUrl, seoKeywords, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "ラブクエスト診断のプライバシーポリシー。アクセス解析、Cookie、広告、アフィリエイトリンクを導入する場合の方針を記載しています。",
  keywords: [...seoKeywords, "プライバシーポリシー"],
  alternates: {
    canonical: getAbsoluteUrl("/privacy"),
  },
  openGraph: {
    title: `プライバシーポリシー | ${siteName}`,
    description: "ラブクエスト診断の情報の取り扱い、Cookie、広告、アクセス解析に関する方針です。",
    url: getAbsoluteUrl("/privacy"),
    images: ["/love-quest-title.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `プライバシーポリシー | ${siteName}`,
    description: "ラブクエスト診断のプライバシーポリシーです。",
    images: ["/love-quest-title.jpg"],
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
              <p>お問い合わせをいただく場合、返信や確認のためにメールアドレス、問い合わせ内容、端末・ブラウザ情報などを確認する場合があります。</p>
            </>
          ),
        },
        {
          title: "Cookie・アクセス解析について",
          body: (
            <>
              <p>今後、サイト改善のためにGoogle Analyticsなどのアクセス解析ツールを導入する場合があります。</p>
              <p>導入する場合、Cookie等を利用して匿名の利用状況を取得することがあります。</p>
              <p>Cookieはブラウザ設定により無効化できます。ただし、一部機能の表示や利便性に影響する場合があります。</p>
            </>
          ),
        },
        {
          title: "広告・アフィリエイトについて",
          body: (
            <>
              <p>今後、Google AdSenseなどの広告配信サービスや、恋愛・占い・心理テスト関連のアフィリエイトリンクを掲載する場合があります。</p>
              <p>広告配信事業者がCookieを使用し、ユーザーの興味に応じた広告を表示する場合があります。</p>
              <p>広告やアフィリエイトリンクを掲載する場合でも、診断結果そのものが広告主によって変更されることはありません。</p>
            </>
          ),
        },
        {
          title: "個人情報の管理",
          body: (
            <p>取得した情報がある場合は、目的の範囲内で適切に管理し、法令に基づく場合を除き、本人の同意なく第三者へ提供しません。</p>
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
