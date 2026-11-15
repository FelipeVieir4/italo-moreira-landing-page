import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate, type PostMeta } from "@/lib/blog";

type Props = {
  post: PostMeta;
  variant?: "default" | "featured";
  priority?: boolean;
};

export default function PostCard({ post, variant = "default", priority = false }: Props) {
  const href = `/blog/${post.slug}`;

  if (variant === "featured") {
    return (
      <article className="group relative grid overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-line lg:grid-cols-[1.15fr_1fr]">
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[26rem]">
          {post.cover && (
            <Image
              src={post.cover}
              alt={post.coverAlt ?? ""}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          )}
        </div>
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
            <span>Destaque</span>
            <span className="h-px w-6 bg-gold/50" aria-hidden="true" />
            <span>{post.category}</span>
          </div>
          <h2 className="mt-5 font-display text-[2rem] leading-[1.08] text-ink sm:text-[2.5rem]">
            <Link href={href} className="after:absolute after:inset-0">
              {post.title}
            </Link>
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{post.description}</p>
          <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-6 text-sm text-muted">
            <span>
              <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min de leitura
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-line transition-shadow duration-300 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        {post.cover && (
          <Image
            src={post.cover}
            alt={post.coverAlt ?? ""}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-paper backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-[1.6rem] leading-[1.12] text-ink">
          <Link href={href} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-muted">{post.description}</p>
        <p className="mt-auto pt-6 text-[0.8rem] text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min
        </p>
      </div>
    </article>
  );
}
