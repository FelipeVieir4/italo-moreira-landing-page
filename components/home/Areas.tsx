import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { areas, servicesByArea, serviceHref, getArea } from "@/content/services/catalog";

export default function Areas() {
  const featured = areas.filter((a) => a.featured);
  const criminal = getArea("criminal");
  const CriminalIcon = criminal.icon;

  return (
    <section id="atuacao" className="section bg-paper">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div data-reveal>
            <p className="eyebrow">Áreas de atuação</p>
            <h2 className="heading-lg mt-5 max-w-[18ch] text-ink">
              Proteção para o seu patrimônio, sua família e seus direitos.
            </h2>
          </div>
          <p data-reveal className="max-w-md text-[1.05rem] leading-relaxed text-muted lg:justify-self-end">
            Atuação concentrada em poucas áreas, para conhecer a fundo os problemas que mais afetam o dia a dia das
            pessoas — e responder a eles com técnica e agilidade.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {featured.map((area, i) => {
            const Icon = area.icon;
            const list = servicesByArea(area.id);
            return (
              <article
                key={area.id}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="group relative flex flex-col rounded-3xl border border-line bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-gold-light transition-colors duration-500 group-hover:bg-gold-light group-hover:text-ink">
                    <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="font-display text-4xl text-line" aria-hidden="true">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">{area.name}</p>
                <h3 className="mt-3 font-display text-[1.75rem] leading-[1.12] text-ink">{area.headline}</h3>
                <p className="mt-4 text-[0.97rem] leading-relaxed text-muted">{area.summary}</p>

                <ul className="mt-8 space-y-1 border-t border-line pt-5">
                  {list.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={serviceHref(s)}
                        className="flex items-center justify-between gap-4 rounded-lg py-2 text-[0.95rem] font-semibold text-ink transition-colors hover:text-gold-dark"
                      >
                        {s.name}
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div
          data-reveal
          className="mt-5 flex flex-col gap-6 rounded-3xl border border-line bg-paper-2/60 p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-center gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-ink/10 text-ink">
              <CriminalIcon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-sans text-base font-bold tracking-normal text-ink">Também atuo em {criminal.name}</h3>
              <p className="mt-1 text-sm text-muted">{criminal.summary}</p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-2">
            {servicesByArea("criminal").map((s) => (
              <li key={s.slug}>
                <Link
                  href={serviceHref(s)}
                  className="chip border-ink/10 bg-white text-ink hover:border-gold hover:text-gold-dark"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
