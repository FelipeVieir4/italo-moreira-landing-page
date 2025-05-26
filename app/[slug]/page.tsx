import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import { servicesData } from "./servicesData";
import ContactButton from "@/components/btn-Contact/btn-contact";
import WhatsAppFloatingButton from "@/components/btn-WhatsAppFloatingButton/WhatsAppFloatingButton";
import Footer from "../_sections-landing-pages/footer/footer";
import FaqComponent from "@/components/faq/faq-component";

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
    <div className="bg-primary text-white min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppFloatingButton />

      {/* HERO */}
      <section className="relative min-h-[50vh] w-full flex items-center justify-center text-center">
        <Image
          src={slugData.heroImage}
          alt={`Imagem de fundo do serviço ${slugData.title}`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.15 }}
        />
        <div className="relative z-10 px-4 mb-4">
          <h1 className="text-4xl md:text-6xl font-primary font-semibold uppercase mt-36 tracking-widest">
            {slugData.title}
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-4xl mx-auto font-secondary tracking-wide">
            {slugData.subTitle}
          </p>
          <div className="flex justify-center   md:hidden">
            <ContactButton label={slugData.ctaPrimary.label} />
          </div>
        </div>
      </section>

      <section className="mt-12 mb-10 px-4 md:px-0  bg-gradient-to-b from-primary via-secondary to-primary max-h-fit">
        <div className="max-w-4xl mx-auto bg-white/10 rounded-xl shadow-lg p-8 border border-white/20 backdrop-blur-md md:-translate-y-28">
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
                  <p className="mb-2 leading-relaxed font-secondary">
                    {desc.p}
                  </p>
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
                    <p className="mt-2 leading-relaxed font-secondary">
                      {desc.p2}
                    </p>
                  )}
                </div>
              ))
            )}
            <div className="justify-center hidden md:flex md:relative">
              <ContactButton label={slugData.ctaPrimary.label} />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 px-6 md:px-12 bg-primary text-textPrimary text-center relative max-h-fit">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <Image
            src="./services/Patterns.svg"
            alt="Imagem de fundo"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="font-primary text-3xl md:text-4xl uppercase mb-8">
          Por que escolher nossos serviços?
        </h2>

        <ul className="max-w-4xl  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {slugData.benefits.map((benefit, i) => (
            <li
              key={i}
              className="bg-white/10 p-4 rounded-lg border-l-4 border-highlight"
            >
              <span className="block text-sm md:text-lg font-secondary">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA SECUNDÁRIO */}
      <section
        id="contato"
        className="py-16 bg-gradient-to-b from-primary via-secondary to-primary text-textPrimary text-center px-4"
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
      {/* <section className="py-16 px-6 md:px-12 bg-muted text-textSecondary">
        <h2 className="text-3xl font-bold text-center mb-8 uppercase">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {slugData.faq.map((faq, i) => (
            <details
              key={i}
              className="bg-secondary text-textPrimary rounded-lg p-4 transition hover:bg-primary"
            >
              <summary className="cursor-pointer text-lg font-medium focus:outline-none focus:ring-2 focus:ring-highlight">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm text-textPrimary font-secondary leading-relaxed">
                {faq.answer}
              </p>

              {"cta" in faq && faq.cta && (
                <p className="mt-2 text-sm text-textPrimary font-secondary leading-relaxed">
                  {faq.cta}
                </p>
              )}
            </details>
          ))}
        </div>
      </section> */}

      <section className="py-16 px-6 md:px-12 bg-muted text-textSecondary">
        <FaqComponent
          faqData={slugData.faq.map((item: any, idx: number) => ({
            id: item.id ?? idx,
            question: item.question,
            answer: item.answer,
            cta: item.cta ? item.cta : ""
          }))}
        />
      </section>
      <Footer />
    </div>
  );
}
