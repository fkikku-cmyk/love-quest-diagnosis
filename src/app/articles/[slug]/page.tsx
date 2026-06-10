import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleDetail } from "@/components/ArticleDetail";
import { articleMap, articles } from "@/data/articles";
import { getAbsoluteUrl, seoKeywords, siteName } from "@/lib/site";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articleMap[slug];

  if (!article) {
    return {
      title: "記事が見つかりません",
    };
  }

  const url = getAbsoluteUrl(`/articles/${article.slug}`);

  return {
    title: article.title,
    description: article.description,
    keywords: [...seoKeywords, "恋愛コラム", "恋愛コミュニケーション"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${article.title} | ${siteName}`,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      images: ["/love-quest-title.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${siteName}`,
      description: article.description,
      images: ["/love-quest-title.jpg"],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articleMap[slug];

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}
