import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, MessagesSquare } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Faq, { faqJsonLd } from "@/components/ui/Faq";
import CtaBand from "@/components/ui/CtaBand";
import PostCard from "@/components/blog/PostCard";
import JsonLd from "@/components/seo/JsonLd";
import { servicePages } from "@/content/services/pages";
import { getArea, getService, services, serviceHref } from "@/content/services/catalog";
import { getAllPosts } from "@/lib/blog";
import { breadcrumbJsonLd, ids } from "@/lib/schema";
import { absoluteUrl, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages[slug];
  if (!page) return {};
  const path = `/${slug}`;
  return {
    title: { absolute: page.seo.title },
    description: page.seo.description,
    keywords: page.seo.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: page.seo.title,
      description: page.seo.description,
      images: [{ url: site.images.og, width: 1200, height: 630 }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = servicePages[slug];
  const entry = getService(slug);
  if (!page || !entry) notFound();

  const area = getArea(entry.area);
  const others = services.filter((s) => s.slug !== slug && s.area === entry.area).concat(
    services.filter((s) => s.area !== entry.area && s.area !== "criminal" && entry.area !== "criminal").slice(0, 3),
  );
  const related = area.blogCategory ? getAllPosts().filter((p) => p.category === area.blogCategory).slice(0, 3) : [];
  const message = `Olá, Dr. Italo! Gostaria de falar sobre ${entry.name.toLowerCase()}.`;
  const crumbs = [
    { name: "Início", path: "/" },
    { name: "Áreas de atuação", path: "/#atuacao" },
    { name: entry.name, path: `/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: entry.name,
          serviceType: area.name,
          description: page.seo.description,
          url: absoluteUrl(`/${slug}`),
          provider: { "@type": "LegalService", "@id": ids.firm, name: site.name },
          areaServed: [
            { "@type": "City", name: "Belo Horizonte" },
            { "@type": "Country", name: "Brasil" },
          ],
        }}
      />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      {page.faq.length > 0 && <JsonLd data={faqJsonLd(page.faq)} />}

      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ink pt-[var(--header-h)] text-paper">
        <Image src={page.heroImage} alt="" fill priority sizes="100vw" className="object-cover opacity-[0.16]" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div className="container-site relative pb-20 pt-12 md:pb-28 md:pt-16">
          <Breadcrumbs items={[{ name: "Início", path: "/" }, { name: "Áreas de atuação", path: "/#atuacao" }, { name: entry.name }]} />
          <p data-reveal className="eyebrow eyebrow-light mt-10">
            {area.name}
          </p>
          <h1 data-reveal className="heading-xl mt-6 max-w-3xl">
            {page.title.trim()}
          </h1>
          <p data-reveal className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">
            {page.subTitle}
          </p>
          <div data-reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton label={page.ctaPrimary.label} message={message} trackingId={`service-${slug}`} />
            <a href="#duvidas" className="btn-ghost-light">
              Dúvidas frequentes
            </a>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-paper py-20 md:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
          <div className="max-w-prose">
            {page.tagline && (
              <p data-reveal className="border-l-2 border-gold pl-6 font-display text-[1.6rem] leading-snug text-ink sm:text-[1.85rem]">
                {page.tagline}
              </p>
            )}

            <h2 data-reveal className="heading-md mt-14 text-ink">
              O que você precisa saber
            </h2>
            {page.description.map((block, i) => (
              <div key={i} data-reveal className="mt-6 space-y-6 text-[1.05rem] leading-relaxed text-muted">
                {block.p && <p>{block.p}</p>}
                {block.ul && block.ul.length > 0 && (
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {block.ul.map((item) => (
                      <li key={item} className="flex gap-3 rounded-xl border border-line bg-white px-4 py-3.5 text-[0.97rem] text-body">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {block.p2 && <p>{block.p2}</p>}
              </div>
            ))}

            <h2 data-reveal className="heading-md mt-16 text-ink">
              Como posso ajudar
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {page.benefits.map((b, i) => (
                <li
                  key={b}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                  className="rounded-2xl bg-ink p-6 text-paper"
                >
                  <span className="font-display text-3xl text-gold-light">0{i + 1}</span>
                  <p className="mt-3 font-medium leading-snug">{b}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-line">
              <div className="flex items-center gap-4">
                <Image src={site.images.avatar} alt="" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-display text-xl font-semibold text-ink">{site.lawyer}</p>
                  <p className="text-xs text-muted">Advogado · {site.oab}</p>
                </div>
              </div>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">
                Conte brevemente o que aconteceu. Você recebe uma orientação inicial sobre os próximos passos.
              </p>
              <WhatsAppButton label="Conversar agora" message={message} className="mt-6 w-full" trackingId={`aside-${slug}`} />
              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted">
                <MessagesSquare className="h-3.5 w-3.5" aria-hidden="true" />
                Presencial em BH e online em todo o Brasil
              </p>
            </div>

            {others.length > 0 && (
              <nav aria-label="Outras áreas" className="rounded-3xl border border-line p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">Outras áreas</p>
                <ul className="mt-4 divide-y divide-line">
                  {others.map((s) => (
                    <li key={s.slug}>
                      <Link href={serviceHref(s)} className="flex items-center justify-between gap-3 py-3 text-[0.95rem] font-semibold text-ink hover:text-gold-dark">
                        {s.name}
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </aside>
        </div>
      </section>

      {/* FAQ */}
      {page.faq.length > 0 && (
        <section id="duvidas" className="bg-paper-2/70 py-20 md:py-24">
          <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div data-reveal>
              <p className="eyebrow">Dúvidas frequentes</p>
              <h2 className="heading-lg mt-5 text-ink">Perguntas sobre {entry.name.toLowerCase()}</h2>
            </div>
            <div data-reveal>
              <Faq items={page.faq} />
            </div>
          </div>
        </section>
      )}

      {/* Artigos relacionados */}
      {related.length > 0 && (
        <section className="bg-paper py-20 md:py-24">
          <div className="container-site">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div data-reveal>
                <p className="eyebrow">Do blog</p>
                <h2 className="heading-md mt-4 text-ink">Leituras sobre {area.name}</h2>
              </div>
              <Link href="/blog" className="link-arrow">
                Ver todos os artigos
              </Link>
            </div>
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((post) => (
                <li key={post.slug} data-reveal>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <div className={related.length > 0 ? "" : "pt-20 md:pt-28"}>
        <CtaBand message={message} />
      </div>
    </>
  );
}
