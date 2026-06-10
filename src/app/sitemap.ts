import type { MetadataRoute } from "next";
import { loveTypes } from "@/data/types";
import { getAbsoluteUrl } from "@/lib/site";

const staticRoutes = [
  "/",
  "/quiz",
  "/result",
  "/types",
  "/privacy",
  "/terms",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = staticRoutes.map((route) => ({
    url: getAbsoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  })) satisfies MetadataRoute.Sitemap;

  const typeEntries = loveTypes.map((type) => ({
    url: getAbsoluteUrl(`/types/${type.code}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticEntries, ...typeEntries];
}
