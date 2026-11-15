import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PostCard from "@/components/blog/PostCard";
import CtaBand from "@/components/ui/CtaBand";
import { getAllPosts, getCategories, type PostMeta } from "@/lib/blog";

type Props = {
  posts: PostMeta[];
  title: string;
  intro: string;
  activeCategory?: { name: string; slug: string };
};

export default function BlogIndex({ posts, title, intro, activeCategory }: Props) {
  const categories = getCategories();
  const total = getAllPosts().length;
  const featured = activeCategory ? undefined : (posts.find((p) => p.featured) ?? posts[0]);
  const rest = featured ? posts.filter((p) => p.slug !== featured.slug) : posts;

  const crumbs = activeCategory
    ? [{ name: "Início", path: "/" }, { name: "Blog", path: "/blog" }, { name: activeCategory.name }]
    : [{ name: "Início", path: "/" }, { name: "Blog" }];

  return (
    <>
      <section className="grain relative overflow-hidden bg-ink pt-[var(--header-h)] text-paper">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-24 h-[30rem] w-[30rem] rounded-full bg-gold/[0.12] blur-[120px]" />
        <div className="container-site relative pb-16 pt-12 md:pb-20 md:pt-16">
          <Breadcrumbs items={crumbs} />
          <p data-reveal className="eyebrow eyebrow-light mt-10">
            {activeCategory ? "Categoria" : "Blog"}
          </p>
          <h1 data-reveal className="heading-xl mt-6 max-w-4xl">
            {title}
          </h1>
          <p data-reveal className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">
            {intro}
          </p>

          <nav data-reveal aria-label="Categorias do blog" className="mt-10">
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link
                  href="/blog"
                  aria-current={!activeCategory ? "page" : undefined}
                  className={`chip ${!activeCategory ? "border-gold-light bg-gold-light text-ink" : "border-white/15 text-paper/75 hover:border-gold-light/60 hover:text-paper"}`}
                >
                  Todos <span className="ml-1.5 opacity-60">{total}</span>
                </Link>
              </li>
              {categories.map((c) => {
                const active = activeCategory?.slug === c.slug;
                return (
                  <li key={c.slug}>
                    <Link
                      href={`/blog/categoria/${c.slug}`}
                      aria-current={active ? "page" : undefined}
                      className={`chip ${active ? "border-gold-light bg-gold-light text-ink" : "border-white/15 text-paper/75 hover:border-gold-light/60 hover:text-paper"}`}
                    >
                      {c.name} <span className="ml-1.5 opacity-60">{c.count}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="container-site">
          {posts.length === 0 && <p className="text-muted">Nenhum artigo publicado ainda.</p>}

          {featured && (
            <div data-reveal>
              <PostCard post={featured} variant="featured" priority />
            </div>
          )}

          {rest.length > 0 && (
            <>
              {featured && (
                <h2 className="mt-20 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                  Artigos recentes
                </h2>
              )}
              <ul className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${featured ? "mt-8" : ""}`}>
                {rest.map((post, i) => (
                  <li key={post.slug} data-reveal style={{ "--reveal-delay": `${(i % 3) * 80}ms` } as React.CSSProperties}>
                    <PostCard post={post} priority={!featured && i < 3} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <CtaBand
        title="Tem uma dúvida sobre o seu caso?"
        text="Os artigos trazem informações gerais. Para entender o que se aplica à sua situação, fale diretamente com o advogado."
      />
    </>
  );
}
