import Image from "next/image";
import { ArrowDown, MapPin, MessageCircle } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { GoogleIcon, StarIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { formatRating, googleReviews, hasRating, reviewsPageUrl } from "@/lib/reviews";

const topics = [
  "Golpe do PIX",
  "Fraudes bancárias",
  "Empréstimo não contratado",
  "Descontos indevidos",
  "Juros abusivos",
  "Negativação indevida",
  "Cobranças indevidas",
  "Divórcio",
  "Pensão e guarda",
  "Contratos",
];

export default function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-ink pt-[var(--header-h)] text-paper">
      {/* Iluminação de fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-gold/[0.13] blur-[120px]" />
        <div className="absolute -bottom-60 -left-40 h-[30rem] w-[30rem] rounded-full bg-[#2a3a66]/40 blur-[120px]" />
        <div className="absolute inset-y-0 left-[8%] hidden w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block" />
      </div>

      <div className="container-site relative grid items-center gap-14 pb-16 pt-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:pb-24 lg:pt-14">
        <div>
          <p data-reveal className="eyebrow eyebrow-light">
            Advogado em {site.city} · {site.oab}
          </p>

          <h1 data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties} className="heading-xl mt-7 max-w-[13ch]">
            Recupere sua <em className="font-medium text-gold-light">dignidade financeira.</em>
          </h1>

          <p
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            className="mt-7 max-w-xl text-[1.06rem] leading-relaxed text-paper/75 sm:text-lg"
          >
            Advocacia cível, do consumidor e bancária para quem foi vítima de golpes, fraudes e cobranças abusivas —
            e para as questões de família que pedem cuidado e discrição. Atendimento próximo, transparente e sigiloso.
          </p>

          <div
            data-reveal
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <WhatsAppButton label="Agendar atendimento" trackingId="hero-whatsapp" />
            <a href="#atuacao" className="btn-ghost-light">
              Áreas de atuação
              <ArrowDown aria-hidden="true" />
            </a>
          </div>

          <dl
            data-reveal
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
            className="mt-12 grid max-w-xl grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-4"
          >
            {hasRating ? (
              <a href={reviewsPageUrl} target="_blank" rel="noopener noreferrer" className="group block">
                <dt className="flex items-center gap-2 text-sm font-semibold text-paper">
                  <GoogleIcon className="h-4 w-4" />
                  {formatRating(googleReviews.rating!)}
                  <span className="flex text-gold-light" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5" />
                    ))}
                  </span>
                </dt>
                <dd className="mt-1 text-[0.8rem] text-paper/55 group-hover:text-paper/80">
                  {googleReviews.userRatingCount} avaliações no Google
                </dd>
              </a>
            ) : (
              <div>
                <dt className="text-sm font-semibold text-paper">{site.oab}</dt>
                <dd className="mt-1 text-[0.8rem] text-paper/55">Advogado inscrito</dd>
              </div>
            )}
            <div>
              <dt className="flex items-center gap-2 text-sm font-semibold text-paper">
                <MapPin className="h-4 w-4 text-gold-light" aria-hidden="true" />
                BH e todo o Brasil
              </dt>
              <dd className="mt-1 text-[0.8rem] text-paper/55">Presencial e online</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-sm font-semibold text-paper">
                <MessageCircle className="h-4 w-4 text-gold-light" aria-hidden="true" />
                Contato direto
              </dt>
              <dd className="mt-1 text-[0.8rem] text-paper/55">Com o próprio advogado</dd>
            </div>
          </dl>
        </div>

        {/* Retrato */}
        <div data-reveal style={{ "--reveal-delay": "200ms" } as React.CSSProperties} className="relative mx-auto w-full max-w-[25rem] lg:max-w-[28rem]">
          <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border border-gold/35 sm:translate-x-6 sm:translate-y-6" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full bg-[#8f8780]">
            <Image
              src={site.images.portrait}
              alt="Retrato do advogado Italo Moreira, de terno escuro e gravata bordô"
              fill
              priority
              sizes="(min-width: 1024px) 448px, 400px"
              className="object-cover object-[50%_12%]"
            />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
          </div>
          <div className="absolute -left-3 bottom-8 rounded-2xl bg-paper px-5 py-4 text-ink shadow-lift sm:-left-8">
            <p className="font-display text-xl font-semibold leading-none">Italo Moreira</p>
            <p className="mt-1.5 text-xs font-medium text-muted">Advogado · {site.oab}</p>
          </div>
        </div>
      </div>

      {/* Faixa de temas */}
      <div className="relative border-t border-white/[0.08] bg-ink-950/60">
        <div className="marquee group flex overflow-hidden py-5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="marquee-track flex shrink-0 items-center gap-10 pr-10 text-[0.8rem] font-medium uppercase tracking-[0.18em] text-paper/45"
            >
              {topics.map((t) => (
                <li key={t} className="flex items-center gap-10 whitespace-nowrap">
                  {t}
                  <span className="h-1 w-1 rotate-45 bg-gold/70" aria-hidden="true" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
