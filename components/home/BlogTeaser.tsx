import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/blog";

export default function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="section bg-paper-2/70">
      <div className="container-site">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div data-reveal>
            <p className="eyebrow">Blog</p>
            <h2 className="heading-lg mt-5 max-w-[20ch] text-ink">Informação clara para você decidir com segurança</h2>
          </div>
          <Link data-reveal href="/blog" className="link-arrow shrink-0">
            Ver todos os artigos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <li key={post.slug} data-reveal style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
