/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight, PenLine } from "lucide-react";
import { GoogleIcon, StarIcon } from "@/components/icons";
import { formatRating, googleReviews, hasReviews, reviewsPageUrl } from "@/lib/reviews";

function Stars({ value, className = "h-4 w-4" }: { value: number; className?: string }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label={`${value} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={`${className} ${i < Math.round(value) ? "text-[#E8A93A]" : "text-line"}`} />
      ))}
    </span>
  );
}

/**
 * Avaliações do Google, atualizadas automaticamente a cada build
 * (ver scripts/fetch-google-reviews.mjs). Se não houver dados, a seção não aparece.
 */
export default function Reviews() {
  if (!hasReviews) return null;
  const { rating, userRatingCount, reviews, writeReviewUrl } = googleReviews;

  return (
    <section id="avaliacoes" className="section bg-paper">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div data-reveal>
            <p className="eyebrow">Avaliações</p>
            <h2 className="heading-lg mt-5 text-ink">O que dizem os clientes</h2>
          </div>
          <div data-reveal className="flex items-center gap-5 rounded-2xl border border-line bg-white px-6 py-5 shadow-card">
            <GoogleIcon className="h-9 w-9" />
            <div>
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-semibold leading-none text-ink">{formatRating(rating!)}</span>
                <Stars value={rating!} />
              </div>
              <p className="mt-1.5 text-sm text-muted">{userRatingCount} avaliações no Google</p>
            </div>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((r, i) => (
            <li
              key={`${r.author}-${i}`}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 80}ms` } as React.CSSProperties}
              className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-card"
            >
              <div className="flex items-center justify-between">
                {r.rating ? <Stars value={r.rating} /> : <span />}
                <GoogleIcon className="h-4 w-4 opacity-80" />
              </div>
              <blockquote className="mt-5 line-clamp-[8] flex-1 text-[0.97rem] leading-relaxed text-body">
                “{r.text}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                {r.authorPhoto ? (
                  <img
                    src={r.authorPhoto}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper">
                    {r.author.charAt(0)}
                  </span>
                )}
                <div className="min-w-0">
                  {r.authorUrl ? (
                    <a href={r.authorUrl} target="_blank" rel="noopener noreferrer" className="block truncate text-sm font-semibold text-ink hover:underline">
                      {r.author}
                    </a>
                  ) : (
                    <p className="truncate text-sm font-semibold text-ink">{r.author}</p>
                  )}
                  {r.relativeTime && <p className="text-xs text-muted">{r.relativeTime}</p>}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-10 flex flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="text-sm text-muted">Avaliações publicadas no Google e atualizadas automaticamente.</p>
          <div className="flex flex-wrap gap-3">
            <a href={reviewsPageUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark !py-3 text-sm">
              Ver todas no Google
              <ArrowUpRight aria-hidden="true" />
            </a>
            {writeReviewUrl && (
              <a href={writeReviewUrl} target="_blank" rel="noopener noreferrer" className="btn-ink !py-3 text-sm">
                <PenLine aria-hidden="true" />
                Deixar uma avaliação
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
