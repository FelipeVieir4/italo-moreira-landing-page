import type { MetadataRoute } from "next";
import { getAllPosts, getCategories } from "@/lib/blog";
import { servicePages } from "@/content/services/pages";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latest = posts[0]?.updated ?? posts[0]?.date;

  return [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/blog"), lastModified: latest, changeFrequency: "weekly", priority: 0.8 },
    ...Object.keys(servicePages).map((slug) => ({
      url: absoluteUrl(`/${slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: absoluteUrl("/golpe-pix/A"), changeFrequency: "monthly", priority: 0.7 },
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: p.updated ?? p.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getCategories().map((c) => ({
      url: absoluteUrl(`/blog/categoria/${c.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
  ];
}
