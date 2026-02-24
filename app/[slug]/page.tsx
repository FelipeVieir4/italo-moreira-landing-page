import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { servicesData } from "./servicesData";
import ContactButton from "@/components/btn-Contact/btn-contact";
import WhatsAppFloatingButton from "@/components/btn-WhatsAppFloatingButton/WhatsAppFloatingButton";
import Navbar from "@/components/navbar/navbar";
import Footer from "../_sections-landing-pages/footer/footer";
import FaqComponent from "@/components/faq/faq-component";
import "./page.css";

const BASE_URL = "https://www.italomoreira.adv.br";
const validSlugs = Object.keys(servicesData);

export async function generateStaticParams() {
  return Promise.resolve(validSlugs.map((slug) => ({ slug })));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!(slug in servicesData)) return {};
  const data = servicesData[slug as keyof typeof servicesData];
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    alternates: {
      canonical: `${BASE_URL}/${slug}`,
    },
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      url: `${BASE_URL}/${slug}`,
      type: "website",
      locale: "pt_BR",
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  if (!(slug in servicesData)) {
    return notFound();
  }

  const slugData = servicesData[slug as keyof typeof servicesData];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: slugData.seo.title,
    description: slugData.seo.description,
    url: `${BASE_URL}/${slug}`,
    provider: {
      "@type": "Attorney",
      name: "Dr. Italo Moreira",
      url: BASE_URL,
      telephone: "+5531999369653",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belo Horizonte",
        addressRegion: "MG",
        addressCountry: "BR",
      },
    },
  };

  return (
    <div className="relative bg-primary text-white">
      <Script
        id={`jsonld-service-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <Navbar />
      <WhatsAppFloatingButton />

      {/* HERO */}
      <section className="relative min-h-[82vh] w-full flex items-center overflow-hidden">
        <Image
          src={slugData.heroImage}
          alt={`${slugData.title} — Italo Moreira Advocacia`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top", filter: "brightness(0.65)" }}
        />
        {/* Base scrim — garante mínimo de legibilidade em qualquer imagem */}
        <div className="absolute inset-0 bg-primary/55" />
        {/* Gradient direcional — reforça lado esquerdo onde está o texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
        {/* Vinheta superior e inferior */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-transparent to-primary/80" />

        <div className="relative w-full max-w-screen-xl mx-auto px-6 lg:px-8 pt-28 pb-16">
          {/* Back button */}
          <Link
            href="/#services"
            className="inline-flex items-center gap-1 text-white/50 hover:text-highlight font-secondary text-xs uppercase tracking-[0.2em] mb-10 transition-colors duration-200 group"
            aria-label="Voltar para todos os serviços"
          >
            <ChevronLeft className=" w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Todos os serviços
          </Link>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6" aria-hidden="true">
            <span className="block w-10 h-px bg-highlight" />
            <span className="text-white/60 font-secondary text-xs uppercase tracking-[0.25em]">
              Advocacia Especializada
            </span>
          </div>

          {/* Title */}
          <h1
            id="hero-service-section"
            className="font-primary text-white text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] uppercase mb-6"
            style={{ textShadow: "0 2px 16px rgba(2,6,23,0.9), 0 4px 32px rgba(2,6,23,0.7)" }}
          >
            {slugData.title}
          </h1>

          {/* Gold divider */}
          <div className="w-16 h-px bg-highlight/60 mb-6" aria-hidden="true" />

          {/* Subtitle */}
          <p
            id="hero-service-subtitle"
            className="font-secondary text-white text-base md:text-lg max-w-lg leading-relaxed mb-10"
            style={{ textShadow: "0 1px 10px rgba(2,6,23,0.95), 0 2px 24px rgba(2,6,23,0.8)" }}
          >
            {slugData.subTitle}
          </p>

          {/* CTA */}
          <div id="hero-cta-button">
            <ContactButton label={slugData.ctaPrimary.label} />
          </div>
        </div>
      </section>

      {/* TAGLINE + INFO */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-primary via-secondary to-primary">
        {slugData.tagline && (
          <p
            id="tagline-text"
            className="max-w-4xl mx-auto mb-10 text-slate-400 font-secondary text-base leading-relaxed border-l-2 border-highlight/40 pl-5 italic"
          >
            {slugData.tagline}
          </p>
        )}

        <div
          id="info-section"
          className="max-w-4xl mx-auto bg-primary/70 rounded-xl shadow-xl p-8 md:p-10 border border-white/10 backdrop-blur-sm"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-highlight" aria-hidden="true" />
            <span className="text-highlight/70 font-secondary text-xs uppercase tracking-[0.25em]">
              Entenda seus direitos
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-primary font-semibold uppercase tracking-wide text-highlight mb-8">
            O que você precisa saber?
          </h2>

          <div className="text-sm md:text-base font-secondary text-textPrimary space-y-6">
            {typeof slugData.description === "string" ? (
              <p className="leading-relaxed font-secondary text-white/80">
                {slugData.description}
              </p>
            ) : (
              slugData.description.map(
                (desc: { p: string; ul?: string[]; p2?: string }, idx: number) => (
                  <div key={idx} className="mb-4">
                    <p className="mb-3 leading-relaxed font-secondary text-white/80">{desc.p}</p>
                    {desc.ul && desc.ul.length > 0 && (
                      <ul className="list-none ml-2 mb-3 space-y-2">
                        {desc.ul.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-white/70 font-secondary">
                            <span className="text-highlight shrink-0 mt-0.5 font-bold">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {desc.p2 && (
                      <p className="mt-2 leading-relaxed font-secondary text-white/80">{desc.p2}</p>
                    )}
                  </div>
                )
              )
            )}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 px-6 md:px-12 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <Image
            src="./services/Patterns.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-px bg-highlight" aria-hidden="true" />
            <span className="text-white/60 font-secondary text-xs uppercase tracking-[0.25em]">
              Nossos diferenciais
            </span>
          </div>

          <h2 className="font-primary text-3xl md:text-4xl uppercase mb-10 text-white">
            Por que escolher nossos{" "}
            <span className="text-highlight italic">serviços</span>?
          </h2>

          <ul id="benefits-list" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {slugData.benefits.map((benefit: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-primary/50 p-5 border border-white/10 hover:border-highlight/30 transition-colors duration-300"
              >
                <span className="text-highlight font-bold shrink-0 mt-0.5">→</span>
                <span className="font-secondary text-white/80 text-sm md:text-base leading-relaxed">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA SECUNDÁRIO */}
      <section
        id="secondary-cta-section"
        className="py-20 bg-gradient-to-b from-primary via-secondary to-primary text-textPrimary text-center px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <Image src="./services/Patterns.svg" alt="" fill className="object-cover" />
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Centered eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-10 h-px bg-highlight/50" aria-hidden="true" />
            <span className="text-highlight/70 font-secondary text-xs uppercase tracking-[0.25em]">
              Consulta gratuita
            </span>
            <span className="block w-10 h-px bg-highlight/50" aria-hidden="true" />
          </div>

          <h2 className="font-primary text-3xl md:text-4xl uppercase mb-4">
            Agende sua consulta{" "}
            <span className="text-highlight italic">agora mesmo</span>
          </h2>

          <div className="w-12 h-px bg-highlight/30 mx-auto mb-6" aria-hidden="true" />

          <p className="text-sm md:text-lg font-secondary text-white/70 mb-8">
            Atendimento humanizado, rápido, online ou presencial.
            <br />
            Tire suas dúvidas com quem entende do assunto.
          </p>

          <ContactButton label="Falar no WhatsApp" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted text-textSecondary">
        <FaqComponent
          faqData={slugData.faq.map(
            (
              item: {
                id?: number;
                question: string;
                answer: string;
                cta?: string;
              },
              idx: number
            ) => ({
              id: item.id ?? idx,
              question: item.question,
              answer: item.answer,
              cta: item.cta ? item.cta : "",
            })
          )}
        />
      </section>

      <Footer />
    </div>
  );
}
