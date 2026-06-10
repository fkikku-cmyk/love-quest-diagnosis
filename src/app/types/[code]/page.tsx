import { notFound } from "next/navigation";
import { TypeDetailContent } from "@/components/TypeDetailContent";
import { loveTypeMap, loveTypes } from "@/data/types";
import { getAbsoluteUrl, seoKeywords } from "@/lib/site";
import type { TypeCode } from "@/types/diagnosis";

type TypeDetailPageProps = {
  params: Promise<{
    code: string;
  }>;
};

export function generateStaticParams() {
  return loveTypes.map((type) => ({
    code: type.code,
  }));
}

export async function generateMetadata({ params }: TypeDetailPageProps) {
  const { code } = await params;
  const type = loveTypeMap[code as TypeCode];

  if (!type) {
    return {
      title: "タイプ詳細 | ラブクエスト診断",
    };
  }

  return {
    title: `${type.jobName}（${type.code}）| 恋愛ジョブ診断 | ラブクエスト診断`,
    description: `${type.jobName}タイプの恋愛傾向、連絡スタイル、相性の良いタイプを紹介。${type.description}`,
    keywords: [...seoKeywords, "RPG診断", "恋愛傾向", type.jobName, type.code],
    alternates: {
      canonical: getAbsoluteUrl(`/types/${type.code}`),
    },
    openGraph: {
      title: `${type.jobName}（${type.code}）| ラブクエスト診断`,
      description: `${type.jobName}タイプの恋愛傾向、連絡スタイル、相性の良いタイプを紹介。`,
      url: getAbsoluteUrl(`/types/${type.code}`),
      images: [type.imageSrc],
    },
    twitter: {
      card: "summary_large_image",
      title: `${type.jobName}（${type.code}）| ラブクエスト診断`,
      description: `${type.jobName}タイプの恋愛傾向と相性をチェック。`,
      images: [type.imageSrc],
    },
  };
}

export default async function TypeDetailPage({ params }: TypeDetailPageProps) {
  const { code } = await params;
  const type = loveTypeMap[code as TypeCode];

  if (!type) {
    notFound();
  }

  return <TypeDetailContent type={type} />;
}
