"use client";
import React from "react";
import Image from "next/image";

const services = [
  {
    image: {
      width: 50,
      height: 50,
      src: "./services/law-building.svg",
      alt: "Balança da Justiça",
    },
    title: "Direito Criminal",
    description:
      "Atuação na defesa de clientes em processos criminais, incluindo crimes contra a pessoa, patrimônio, administração pública e crimes digitais.",
  },
  {
    image: {
      width: 50,
      height: 50,
      src: "./services/person.svg",
      alt: "Contrato jurídico",
    },
    title: "Direito Cível",
    description:
      "Atuação em ações indenizatórias, direito do consumidor, disputas contratuais, responsabilidade civil e conflitos familiares.",
  },
  {
    image: {
      width: 50,
      height: 50,
      src: "./services/contract.svg",
      alt: "Algemas",
    },
    title: "Atuação Judicial",
    description:
      "Representação de clientes em processos judiciais, incluindo defesa criminal, ações cíveis, pedidos de habeas corpus e recursos.",
  },
  {
    image: {
      width: 50,
      height: 50,
      src: "./services/message-bubble.svg",
      alt: "Pasta de documentos",
    },
    title: "Atuação Extrajudicial",
    description:
      "Soluções jurídicas sem necessidade de ação judicial, como acordos, conciliações, mediações e consultorias preventivas.",
  },
  {
    image: {
      width: 50,
      height: 50,
      src: "./services/company.svg",
      alt: "Câmera de segurança",
    },
    title: "Direito Empresarial e Compliance",
    description:
      "Consultoria para empresas em conformidade legal, mitigação de riscos e defesa em processos administrativos e criminais.",
  },
  {
    image: {
      width: 50,
      height: 50,
      src: "./services/money.svg",
      alt: "Símbolo de substância química",
    },
    title: "Direito Penal Econômico",
    description:
      "Defesa em crimes financeiros, tributários, lavagem de dinheiro e infrações penais empresariais.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <img
          src="./services/Patterns.svg"
          alt="Imagem de fundo"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="py-16 bg-gradient-to-b from-primary to-primary  ">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-primary uppercase text-3xl font-bold tracking-wide text-muted md:text-4xl border-b-2 border-highlight pb-4 w-fit mx-auto">
            Serviços Jurídicos
          </h2>
          <p className="mt-4 text-center text-muted text-sm md:text-base font-thin font-secondary tracking-widest">
            Conheça nossos serviços especializados para atender às suas
            necessidades jurídicas.
          </p>
          <ul className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {services.map((service, index) => (
              <li
                key={index}
                className=" z-10 max-w-full cursor-pointer border-b-2 border-t-2 border-secondary rounded-xl bg-primary px-6 py-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-secondary"
              >
                <Image
                  width={service.image.width}
                  height={service.image.height}
                  src={service.image.src}
                  alt={service.image.alt}
                  className="mx-auto h-12 w-12"
                />
                <h3 className="mt-4 font-primary uppercase text-lg font-semibold text-muted tracking-widest">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-200 font-secondary font-thin">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
