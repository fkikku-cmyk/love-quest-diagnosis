export const siteName = "ラブクエスト診断";

const fallbackSiteUrl = "https://love-quest-diagnosis.vercel.app";

export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;

  try {
    return new URL(url).origin;
  } catch {
    return fallbackSiteUrl;
  }
}

export function getAbsoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}

export const seoKeywords = [
  "恋愛診断",
  "恋愛タイプ診断",
  "16タイプ診断",
  "相性診断",
  "恋愛ジョブ診断",
  "ラブクエスト診断",
];
