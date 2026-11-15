import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, Info, List } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PostCard from "@/components/blog/PostCard";
import ShareButtons from "@/components/blog/ShareButtons";
import Toc from "@/components/blog/Toc";
import JsonLd from "@/components/seo/JsonLd";
import { InstagramIcon } from "@/components/icons";
import { formatDate, getAllPosts, getPost, getRelatedPosts } from "@/lib/blog";
import { breadcrumbJsonLd, ids } from "@/lib/schema";
import { absoluteUrl, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  const image = post.cover ?? site.images.og;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author, url: site.url }],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      images: [{ url: image, alt: post.coverAlt ?? post.title }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [image] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);
  const related = getRelatedPosts(post);
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.category, path: `/blog/categoria/${post.categorySlug}` },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: absoluteUrl(post.cover ?? site.images.og),
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          inLanguage: "pt-BR",
          articleSection: post.category,
          keywords: post.tags.join(", "),
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          author: { "@type": "Person", "@id": ids.person, name: post.author, url: site.url },
          publisher: { "@type": "Organization", "@id": ids.firm, name: site.name, logo: { "@type": "ImageObject", url: absoluteUrl("/icon.png") } },
        }}
      />
      <JsonLd data={breadcrumbJsonLd([...crumbs, { name: post.title, path: `/blog/${post.slug}` }])} />

      <article>
        <header className="grain relative overflow-hidden bg-ink pt-[var(--header-h)] text-paper">
          <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-gold/[0.1] blur-[120px]" />
          <div className="container-site relative pb-36 pt-12 md:pb-48 md:pt-16">
            <div className="mx-auto max-w-5xl">
              <Breadcrumbs items={crumbs} />
              <Link
                href={`/blog/categoria/${post.categorySlug}`}
                className="chip mt-10 border-gold-light/40 text-gold-light hover:bg-gold-light hover:text-ink"
              >
                {post.category}
              </Link>
              <h1 className="mt-6 max-w-4xl font-display text-[2.4rem] leading-[1.06] sm:text-5xl lg:text-[3.6rem]">{post.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-paper/70">{post.description}</p>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-paper/60">
                <span className="flex items-center gap-3">
                  <Image src={site.images.avatar} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-2 ring-gold/40" />
                  <span>
                    <span className="block font-semibold text-paper">{post.author}</span>
                    <span className="block text-xs">{site.oab}</span>
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-gold-light" aria-hidden="true" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold-light" aria-hidden="true" />
                  {post.readingMinutes} min de leitura
                </span>
              </div>
            </div>
          </div>
        </header>

        {post.cover && (
          <div className="container-site relative -mt-28 md:-mt-36">
            <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-3xl bg-ink-700 shadow-lift md:aspect-[2/1]">
              <Image src={post.cover} alt={post.coverAlt ?? ""} fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
            </div>
          </div>
        )}

        <div className="container-site py-14 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
            <div className="min-w-0">
              {post.toc.length > 2 && (
                <details className="mb-10 rounded-2xl border border-line bg-white px-5 py-4 lg:hidden">
                  <summary className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink">
                    <List className="h-4 w-4 text-gold-dark" aria-hidden="true" />
                    Neste artigo
                  </summary>
                  <div className="mt-4">
                    <Toc items={post.toc} />
                  </div>
                </details>
              )}

              <div className="prose-article max-w-prose" dangerouslySetInnerHTML={{ __html: post.html }} />

              <div className="mt-12 flex max-w-prose gap-3 rounded-2xl border border-line bg-paper-2/60 p-5 text-sm leading-relaxed text-muted">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                <p>
                  Este conteúdo tem caráter informativo e não substitui a análise individual do seu caso por um advogado.
                  {post.updated && <> Atualizado em {formatDate(post.updated)}.</>}
                </p>
              </div>

              {post.tags.length > 0 && (
                <ul className="mt-8 flex max-w-prose flex-wrap gap-2" aria-label="Assuntos">
                  {post.tags.map((t) => (
                    <li key={t} className="chip border-line bg-white text-muted">
                      #{t}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-10 flex max-w-prose items-center justify-between gap-4 border-y border-line py-5 lg:hidden">
                <span className="text-sm font-semibold text-ink">Compartilhe</span>
                <ShareButtons url={url} title={post.title} />
              </div>

              {/* CTA */}
              <div className="grain relative mt-12 max-w-prose overflow-hidden rounded-3xl bg-ink p-8 text-paper sm:p-10">
                <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />
                <p className="eyebrow eyebrow-light relative">Precisa de orientação?</p>
                <h2 className="relative mt-4 font-display text-[1.9rem] leading-tight">Passou por uma situação parecida?</h2>
                <p className="relative mt-3 leading-relaxed text-paper/70">
                  Cada caso tem detalhes que fazem diferença. Envie uma mensagem e receba uma orientação inicial sobre os
                  próximos passos.
                </p>
                <WhatsAppButton
                  label="Falar com o advogado"
                  message={`Olá, Dr. Italo! Li o artigo "${post.title}" e gostaria de falar sobre o meu caso.`}
                  className="relative mt-7"
                  trackingId={`post-${post.slug}`}
                />
              </div>

              {/* Autor */}
              <div className="mt-8 flex max-w-prose flex-col gap-5 rounded-3xl border border-line bg-white p-7 sm:flex-row sm:items-center">
                <Image src={site.images.avatar} alt="" width={80} height={80} className="h-20 w-20 shrink-0 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Sobre o autor</p>
                  <p className="mt-1 font-display text-2xl font-semibold text-ink">{site.lawyer}</p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                    Advogado ({site.oab}) com atuação em Direito do Consumidor, Bancário e Cível, em Belo Horizonte e
                    online para todo o Brasil.
                  </p>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-gold-dark"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {site.social.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-10">
                {post.toc.length > 0 && (
                  <nav aria-label="Neste artigo">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Neste artigo</p>
                    <Toc items={post.toc} />
                  </nav>
                )}
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Compartilhe</p>
                  <ShareButtons url={url} title={post.title} />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-paper-2/70 py-20 md:py-24">
          <div className="container-site">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="heading-md text-ink">Continue lendo</h2>
              <Link href="/blog" className="link-arrow">
                Ver todos os artigos
              </Link>
            </div>
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug} data-reveal>
                  <PostCard post={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
