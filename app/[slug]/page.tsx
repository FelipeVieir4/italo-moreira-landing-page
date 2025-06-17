import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import { servicesData } from "./servicesData";
import ContactButton from "@/components/btn-Contact/btn-contact";
import WhatsAppFloatingButton from "@/components/btn-WhatsAppFloatingButton/WhatsAppFloatingButton";
import Footer from "../_sections-landing-pages/footer/footer";
import FaqComponent from "@/components/faq/faq-component";
import GoogleRatingPage from "../_sections-landing-pages/google-rating/page";
import "./page.css";

const validSlugs = Object.keys(servicesData);

export async function generateStaticParams() {
  return Promise.resolve(validSlugs.map((slug) => ({ slug })));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  if (!(slug in servicesData)) {
    return notFound();
  }

  const slugData = servicesData[slug as keyof typeof servicesData];

  return (
    <div className="bg-primary text-white ">
      <Navbar />
      <WhatsAppFloatingButton />

      {/* HERO */}
      <section className="mt-10 relative h-[60vh] w-full flex items-center justify-center">
        <Image
          src={slugData.heroImage}
          alt={`Imagem de fundo do serviço ${slugData.title}`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-0 left-0 w-full h-full  bg-primary opacity-40"></div>
        <div className="relative z-10 px-4 w-full h-full p-8  shadow-lg  flex flex-col items-center justify-center text-center">
          <h1
            id="hero-service-section" // ANIMAÇÃO HERO TITLE
            className="text-5xl md:text-7xl font-primary font-bold uppercase tracking-wide"
          >
            {slugData.title}
          </h1>
          <h2
            id="hero-service-subtitle" // ANIMAÇÃO HERO SUBTITLE
            className="mt-4 text-lg md:text-2xl  font-secondary tracking-wide text-textPrimary "
          >
            {slugData.subTitle}
          </h2>

          <div className="flex justify-center">
            <ContactButton
              id="hero-cta-button" // ANIMAÇÃO BOTÃO HERO
              label={slugData.ctaPrimary.label}
            />
          </div>
        </div>
      </section>

      <section className="mt-12 mb-10 px-4 md:px-0  bg-gradient-to-b from-primary via-secondary to-primary max-h-fit flex flex-col items-center justify-center text-left">
        {slugData.tagline && (
          <p
            id="tagline-text" // ANIMAÇÃO TAGLINE
            className="m-4 text-thin md:text-thin font-secondary max-w-4xl text-slate-300"
          >
            {slugData.tagline}
          </p>
        )}
        <div
          id="info-section" // você pode criar animação se quiser (no seu CSS atual não tem)
          className="sticky max-w-4xl max-h-fit mx-auto bg-primary rounded-xl shadow-lg p-8 border border-white/20 backdrop-blur-sm"
        >
          <h2 className="text-2xl md:text-3xl font-primary font-semibold uppercase tracking-wide text-highlight mb-6 text-center">
            O que você precisa saber?
          </h2>
          <div className="mt-2 text-sm md:text-lg font-secondary text-textPrimary space-y-6">
            {typeof slugData.description === "string" ? (
              <p className="leading-relaxed font-secondary">
                {slugData.description}
              </p>
            ) : (
              slugData.description.map((desc, idx) => (
                <div key={idx} className="mb-4">
                  <p className="mb-2 leading-relaxed font-secondary">{desc.p}</p>
                  {desc.ul && desc.ul.length > 0 && (
                    <ul className="list-disc list-inside ml-6 mb-2 space-y-1 text-highlight font-secondary">
                      {desc.ul.map((item, i) => (
                        <li key={i} className="pl-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {desc.p2 && (
                    <p className="mt-2 leading-relaxed font-secondary">{desc.p2}</p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 text-textSecondary text-center relative max-h-fit">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
          <Image
            src="./services/Patterns.svg"
            alt="Imagem de fundo"
            fill
            className="object-cover"
            style={{
              filter: "invert(80%) sepia(1) saturate(5) hue-rotate(180deg)",
            }}
          />
        </div>

        <h2 className="font-primary text-3xl md:text-4xl uppercase mb-8 text-secondary">
          Por que escolher nossos serviços?
        </h2>

        <ul
          id="benefits-list" // ANIMAÇÃO BENEFÍCIOS (lista)
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          {slugData.benefits.map((benefit, i) => (
            <li
              key={i}
              className="bg-slate-200 p-4 rounded-lg border-l-4 border-secondary"
            >
              <span className="block text-sm md:text-lg font-secondary text-secondary">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <GoogleRatingPage />

      {/* CTA SECUNDÁRIO */}
      <section
        id="secondary-cta-section" // ANIMAÇÃO CTA SECUNDÁRIO
        className="py-16 bg-gradient-to-b from-secondary via-gray-800 to-secondary text-textPrimary text-center px-4"
      >
        <h2 className="font-primary text-3xl md:text-4xl uppercase mb-4">
          Agende sua consulta agora mesmo
        </h2>
        <p className=" text-sm md:text-lg max-w-2xl mx-auto font-secondary">
          Atendimento humanizado, rápido, online ou presencial. <br />
          Tire suas dúvidas com quem entende do assunto.
        </p>
        <div className="flex justify-center">
          <ContactButton label="Falar no WhatsApp" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-12 bg-muted text-textSecondary">
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


