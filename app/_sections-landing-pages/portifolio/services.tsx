"use client";
import React from "react";
import Image from "next/image";

const services = [
  {
    image: {
      width: 50,
      height: 50,
      src: "./services/divorce.svg",
      alt: "Divórcio",
    },
    title: "Divórcio",
    description:
      "Condução de processos de divórcio e separação, judiciais ou extrajudiciais. Soluções ágeis e seguras para partilha de bens, guarda de filhos e definição de pensão.",
    route: "/divorcio",
  },
  {
    image: {
      width: 50,
      height: 50,
      src: "./services/pensao.svg",
      alt: "Pensão e guarda",
    },
    title: "Pensão e guarda",
    description:
      "Ações para fixação, revisão ou cobrança de pensão alimentícia, definição de guarda (compartilhada ou unilateral) e regulamentação de visitas. Foco na proteção dos direitos dos menores.",
    route: "/pensao-e-guarda",
  },
  {
    image: {
      width: 50,
      height: 50,
      src: "./services/contrato.svg",
      alt: "Contrato jurídico",
    },
    title: "Contratos",
    description:
      "Elaboração, revisão e rescisão de contratos civis. Atuação em disputas contratuais e cobrança judicial ou extrajudicial de obrigações não cumpridas.",
    route: "/contratos",
  },
  {
    image: {
      width: 50,
      height: 50,
      src: "./services/danos.svg",
      alt: "Danos Morais, Materiais e Estéticos",
    },
    title: "Danos Morais, Materiais e Estéticos",
    description:
      "Ações de reparação por prejuízos causados por terceiros, incluindo acidentes, falhas de serviço, ofensas e exposições indevidas. Indenização por dano moral, material ou estético.",
    route: "/danos-morais",
  },
  {
    image: {
      width: 50,
      height: 50,
      src: "./services/violencia.svg",
      alt: "Violência Doméstica",
    },
    title: "Violência Doméstica",
    description:
      "Atuação em defesa de vítimas e acusados em casos de violência doméstica. Medidas protetivas, acompanhamento de inquérito e ações judiciais com enfoque na Lei Maria da Penha.",
    route: "/violencia-domestica",
  },
  {
    image: {
      width: 50,
      height: 50,
      src: "./services/sexual.svg",
      alt: "Crime sexual",
    },
    title: "Crimes Sexuais",
    description:
      "Atuação sensível e estratégica em acusações ou defesas envolvendo crimes sexuais. Preservação da dignidade das partes, rigor técnico e acompanhamento integral do processo.",
    route: "/crimes-sexuais",
  },
  {
    image: {
      width: 50,
      height: 50,
      src: "./services/patrimonio.svg",
      alt: "Crime patrimonial",
    },
    title: "Crimes Patrimoniais",
    description:
      "Defesa técnica em casos de crimes contra o patrimônio, como furto, roubo, estelionato e receptação. Avaliação da legalidade da ação policial, provas e procedimentos penais.",
    route: "/crimes-patrimoniais",
  },
  {
    image: {
      width: 50,
      height: 50,
      src: "./services/drug.svg",
      alt: "Balança da Justiça",
    },
    title: "Tráfico de Drogas",
    description:
      "Defesa em processos relacionados ao tráfico de entorpecentes, com atuação desde a fase de inquérito até recursos. Estratégia voltada à análise das provas, legalidade da prisão e garantias constitucionais.",
    route: "/trafico-drogas",
  },
];


const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <Image
          src="./services/Patterns.svg"
          alt="Imagem de fundo"
          fill
          className="object-cover"
        />
      </div>

      <div className="py-16 bg-gradient-to-b from-primary via-secondary to-primary">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-primary uppercase text-3xl font-bold tracking-wide text-muted md:text-4xl border-b-2 border-highlight pb-4 w-fit mx-auto">
            Serviços Jurídicos
          </h2>
          <p className="mt-4 text-center text-muted text-sm md:text-base font-thin font-secondary tracking-widest">
            Conheça nossos serviços especializados para atender às suas
            necessidades jurídicas.
          </p>
          <p className="mt-4 text-center text-muted text-sm md:text-base font-thin font-secondary tracking-widest">
            <strong> Clique </strong> em um tema abaixo para saber mais 
          </p>
    
          <ul className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-4">
            {services.map((service, index) => (
              <li
              onClick={() => {
                window.location.href = service.route;
              }}
                role="button"
                aria-label={`Clique para saber mais sobre ${service.title}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    window.location.href = service.route;
                  }
                }}
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
                  {service.description.length > 50
                  ? (
                    <>
                      {service.description.slice(0, 50)}... <i>clique para saber mais</i>
                    </>
                  )
                  : service.description}
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
