import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import { servicesData } from "./servicesData";
import ContactButton from "@/components/btn-Contact/btn-contact";

const validSlugs = Object.keys(servicesData);

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

interface ServicePageProps {
  params: { slug: string };
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;

  if (!(slug in servicesData)) {
    return notFound();
  }

  const slugData = servicesData[slug as keyof typeof servicesData];

  return (
    <div className="bg-primary text-white min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[80vh] w-full flex items-center justify-center text-center py-8 md:py-0">
        <Image
          src={slugData.heroImage}
          alt={`Imagem de fundo do serviço ${slugData.title}`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.15 }}
        />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-primary font-semibold uppercase">
            {slugData.title}
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-4xl mx-auto font-secondary">
            {slugData.subTitle}
          </p>
          <p className="mt-2 text-sm md:text-lg max-w-3xl mx-auto font-secondary">
            {slugData.description}
          </p>
          <div className="flex justify-center">
            <ContactButton
              label={slugData.ctaPrimary.label}
            />
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 px-6 md:px-12 bg-primary text-textPrimary text-center">
        <h2 className="font-primary text-3xl md:text-4xl uppercase mb-8">
          Por que escolher nossos serviços?
        </h2>

        <ul className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {slugData.benefits.map((benefit, i) => (
            <li
              key={i}
              className="bg-white/10 p-4 rounded-lg border-l-4 border-highlight"
            >
              <span className="block text-lg font-secondary">{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA SECUNDÁRIO */}
      <section
        id="contato"
        className="py-16 bg-secondary text-textPrimary text-center px-4"
      >
        <h2 className="font-primary text-3xl md:text-4xl uppercase mb-4">
          Agende sua consulta agora mesmo
        </h2>
        <p className="text-lg max-w-2xl mx-auto font-secondary">
          Atendimento humanizado, rápido, online ou presencial. <br />
          Tire suas dúvidas com quem entende do assunto.
        </p>
        <div className="flex justify-center">
          <ContactButton
            label="Falar no WhatsApp"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-12 bg-primary text-textPrimary">
        <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {slugData.faq.map((faq, i) => (
            <details
              key={i}
              className="bg-white/5 rounded-lg p-4 transition hover:bg-white/10"
            >
              <summary className="cursor-pointer text-lg font-medium focus:outline-none focus:ring-2 focus:ring-highlight">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
