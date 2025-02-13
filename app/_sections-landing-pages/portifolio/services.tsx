'use client'
import React from 'react';
import Image from 'next/image';

const services = [
    {
      "image": {
        "width": 50,
        "height": 50,
        "src": "./services/law-building.svg",
        "alt": "Balança da Justiça"
      },
      "title": "Direito Criminal",
      "description": "Atuação na defesa de clientes em processos criminais, incluindo crimes contra a pessoa, patrimônio, administração pública e crimes digitais."
    },
    {
      "image": {
        "width": 50,
        "height": 50,
        "src": "./services/person.svg",
        "alt": "Contrato jurídico"
      },
      "title": "Direito Cível",
      "description": "Atuação em ações indenizatórias, direito do consumidor, disputas contratuais, responsabilidade civil e conflitos familiares."
    },
    {
      "image": {
        "width": 50,
        "height": 50,
        "src": "./services/contract.svg",
        "alt": "Algemas"
      },
      "title": "Atuação Judicial",
      "description": "Representação de clientes em processos judiciais, incluindo defesa criminal, ações cíveis, pedidos de habeas corpus e recursos."
    },
    {
      "image": {
        "width": 50,
        "height": 50,
        "src": "./services/message-bubble.svg",
        "alt": "Pasta de documentos"
      },
      "title": "Atuação Extrajudicial",
      "description": "Soluções jurídicas sem necessidade de ação judicial, como acordos, conciliações, mediações e consultorias preventivas."
    },
    {
      "image": {
        "width": 50,
        "height": 50,
        "src": "./services/company.svg",
        "alt": "Câmera de segurança"
      },
      "title": "Direito Empresarial e Compliance",
      "description": "Consultoria para empresas em conformidade legal, mitigação de riscos e defesa em processos administrativos e criminais."
    },
    {
      "image": {
        "width": 50,
        "height": 50,
        "src": "./services/money.svg",
        "alt": "Símbolo de substância química"
      },
      "title": "Direito Penal Econômico",
      "description": "Defesa em crimes financeiros, tributários, lavagem de dinheiro e infrações penais empresariais."
    }
  ]
  

const ServicesSection: React.FC = () => {
    return (
        <section id="services">
            <div className="bg-muted px-2 py-10">
                <div id="features" className="mx-auto max-w-6xl">
                    <h2 className=" mt-[5vh] text-center font-primary uppercase text-3xl font-bold tracking-wide text-textSecondary md:text-4xl">
                        Serviços Juridicos
                    </h2>
                    <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-secondary md:grid-cols-3 justify-items-center">
                      {services.map((service, index) => (
                        <li key={index} className="max-w-60 md:max-w-full cursor-pointer rounded-xl bg-muted px-6 py-8 hover:bg-primary hover:text-muted shadow-lg transition-colors duration-300">
                          <Image width={service.image.width} height={service.image.height} src={service.image.src} alt={service.image.alt} className="mx-auto h-10 w-10" />
                          <h3 className="my-3 font-display font-medium">{service.title}</h3>
                          <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                            {service.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
