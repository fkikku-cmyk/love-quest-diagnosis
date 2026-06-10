import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getAbsoluteUrl, getSiteUrl, seoKeywords, siteName } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "ラブクエスト診断 | 恋愛タイプ診断・相性診断",
    template: "%s | ラブクエスト診断",
  },
  description: "24問で恋愛傾向と相性がわかる、スマホ向け16タイプ恋愛ジョブ診断。",
  keywords: [...seoKeywords, "RPG診断", "恋愛傾向"],
  verification: {
    google: "QeqUGUsDLKwIfSIaHDUB80eIPQpQwKCakMMg056Yhjw",
  },
  alternates: {
    canonical: getAbsoluteUrl("/"),
  },
  openGraph: {
    title: siteName,
    description: "24問であなたの恋愛タイプと相性の良いタイプがわかる恋愛診断。",
    url: getAbsoluteUrl("/"),
    siteName,
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/love-quest-title.jpg",
        width: 1024,
        height: 1024,
        alt: "ラブクエスト診断のタイトルロゴ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "24問であなたの恋愛タイプと相性の良いタイプがわかる恋愛診断。",
    images: ["/love-quest-title.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <LanguageProvider>
          <LanguageSwitcher />
          <main className="mx-auto min-h-screen w-full max-w-[430px] px-4 pb-6">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
