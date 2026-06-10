# ラブクエスト診断

Next.js + TypeScript + Tailwind CSSで作る、スマホ向け恋愛RPG診断サイトです。

24問の5段階回答から、4軸で16タイプの恋愛ジョブに分類します。結果カードはSNS共有、X共有、PNG保存に対応しています。

## ページ

- `/` トップページ
- `/quiz` 診断ページ
- `/result` 結果ページ
- `/types` 恋愛ジョブ図鑑
- `/types/[code]` タイプ詳細
- `/privacy` プライバシーポリシー
- `/terms` 利用規約
- `/contact` お問い合わせ

## ローカル起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## 品質確認

```bash
npm run lint
npm run build
```

Vercelでは `npm run build` が実行され、Next.jsアプリとしてデプロイされます。

## GitHubへpushする手順

```bash
git status
git add .
git commit -m "Prepare Love Quest Diagnosis for public release"
git push origin main
```

ブランチ運用をしている場合は、作業ブランチをpushしてPull Requestを作成してください。

## VercelでDeployする手順

1. Vercelにログインします。
2. `Add New...` から `Project` を選びます。
3. GitHubリポジトリをImportします。
4. Framework Preset が `Next.js` になっていることを確認します。
5. Build Command は `npm run build` のままでOKです。
6. 必要に応じて Environment Variables に `NEXT_PUBLIC_SITE_URL` を設定します。
7. Deploy を実行します。

## 環境変数

本番URLが決まったら、Vercelの Environment Variables に設定してください。

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

この値は `sitemap.xml`、`robots.txt`、canonical URL、OGP URLの生成に使われます。
未設定の場合は仮のVercel公開URL向けの値を使うため、公開後は必ず正式URLへ差し替えてください。

## 独自ドメイン

独自ドメインは Vercel の `Settings > Domains` から設定します。
設定後、`NEXT_PUBLIC_SITE_URL` も独自ドメインに合わせて更新してください。

## 公開後にやること

- Google Search Console にサイトを登録します。
- `https://あなたのドメイン/sitemap.xml` を送信します。
- SNS共有時の表示を確認します。
- Google AdSense、アクセス解析、アフィリエイトを導入する場合は、プライバシーポリシーの内容と実装を一致させてください。

## 補足

- 診断結果と回答はブラウザの `localStorage` に保存されます。
- 外部APIは使用していません。
- タイプデータは `src/data/types.ts` を single source of truth として扱います。
