import type { Metadata } from "next";
import BlogIndex from "@/components/blog/BlogIndex";
import JsonLd from "@/components/seo/JsonLd";
import { getAllPosts } from "@/lib/blog";
import { ids } from "@/lib/schema";
import { absoluteUrl, site } from "@/lib/site";

const title = "Artigos e orientações jurídicas";
const description =
  "Artigos sobre golpes e fraudes bancárias, direitos do consumidor e direito de família, escritos pelo advogado Italo Moreira em linguagem clara.";

export const metadata: Metadata = {
  title: `Blog — ${title}`,
  description,
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": [{ url: "/blog/rss.xml", title: `${site.name} — Blog` }] },
  },
  openGraph: { type: "website", url: "/blog", title: `Blog | ${site.name}`, description, images: [site.images.og] },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `Blog ${site.name}`,
          url: absoluteUrl("/blog"),
          description,
          inLanguage: "pt-BR",
          publisher: { "@id": ids.firm },
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: absoluteUrl(`/blog/${p.slug}`),
            datePublished: p.date,
          })),
        }}
      />
      <BlogIndex
        posts={posts}
        title={title}
        intro="Informação clara sobre direitos do consumidor, golpes bancários e questões de família — para você entender a sua situação e decidir com segurança."
      />
    </>
  );
}
