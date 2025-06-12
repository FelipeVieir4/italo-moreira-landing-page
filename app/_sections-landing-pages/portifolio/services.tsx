"use client";
import React from "react";
import Image from "next/image";
import { services } from "./servicesData";

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
        <div className="mx-auto max-w-6xl max-h-fit px-4">
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

          <ul className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3 ">
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
                className="z-10 max-w-72 m-auto md:max-w-full md:h-full h-50 cursor-pointer border-b-2 border-t-2 border-secondary rounded-xl bg-primary px-6 py-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-secondary  flex flex-col justify-between"
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
                <p className="mt-2 text-sm leading-6 text-slate-200 font-secondary font-thin overflow-hidden text-ellipsis">
                  {service.description.length > 50 ? (
                    <>
                      {service.description.slice(0, 50)}...{" "}
                      <i>clique para saber mais</i>
                    </>
                  ) : (
                    service.description
                  )}
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
