"use client";
import React from "react";
import Image from "next/image";
import { services } from "./servicesData";

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative w-screen">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-20">
        <Image
          src="./services/Patterns.svg"
          alt="Imagem de fundo"
          fill
          className="object-cover"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="py-16 bg-gradient-to-b from-primary   via-slate-900 to-primary relative ">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-primary uppercase text-3xl font-bold tracking-wide text-muted md:text-4xl border-b-2 border-highlight pb-4 w-fit mx-auto">
            Serviços Jurídicos
          </h2>
          <p className="mt-4 text-center text-muted text-sm md:text-base font-thin font-secondary tracking-widest">
            Conheça nossos serviços especializados para atender às suas
            necessidades jurídicas.
          </p>
          <p className="mt-2 text-center text-muted text-sm md:text-base font-thin font-secondary tracking-widest">
            <strong>Clique</strong> em um item abaixo para saber mais.
          </p>

          {/* Lista compacta */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 mt-8">
            {services.map((service, index) => (
              <li
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => (window.location.href = service.route)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") window.location.href = service.route;
                }}
                aria-label={`Clique para saber mais sobre ${service.title}`}
                className="z-30 flex w-full h-full items-center gap-4 bg-primary border-l-4 border-highlight px-4 py-3 rounded-md shadow-sm hover:bg-secondary hover:scale-110 transition-all cursor-pointer  md:min-h-[80px]  xl:min-h-[100px]  focus:outline-none focus:ring-2 focus:ring-highlightDark focus:ring-offset-2"
              >
                <Image
                  width={32}
                  height={32}
                  src={service.image.src}
                  alt={service.image.alt}
                  className="min-w-[32px] min-h-[32px]"
                />
                <span className="flex-1 text-muted font-primary tracking-wide">
                  {service.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
