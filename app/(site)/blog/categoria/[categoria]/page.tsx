import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndex from "@/components/blog/BlogIndex";
import { getCategories, getPostsByCategory } from "@/lib/blog";
import { site } from "@/lib/site";

type Props = { params: Promise<{ categoria: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategories().map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const cat = getCategories().find((c) => c.slug === categoria);
  if (!cat) return {};
  const path = `/blog/categoria/${cat.slug}`;
  const description = `Artigos sobre ${cat.name} escritos pelo advogado Italo Moreira: orientações práticas em linguagem clara.`;
  return {
    title: `${cat.name} — Artigos`,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, title: `${cat.name} | Blog ${site.name}`, description, images: [site.images.og] },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { categoria } = await params;
  const cat = getCategories().find((c) => c.slug === categoria);
  if (!cat) notFound();

  return (
    <BlogIndex
      posts={getPostsByCategory(cat.slug)}
      title={cat.name}
      intro={`Artigos e orientações sobre ${cat.name.toLowerCase()}, com informações práticas para entender seus direitos.`}
      activeCategory={{ name: cat.name, slug: cat.slug }}
    />
  );
}
