"use client";
import React from "react";
import Image from "next/image";
import { services } from "./servicesData";
import { motion } from "motion/react";
import { fadeUp } from "./animation";

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative w-full overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
        <Image
          src="./services/Patterns.svg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-20 py-20 bg-gradient-to-b from-primary via-slate-900 to-primary">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          {/* Eyebrow — padrão consistente com o Hero */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="block w-8 h-px bg-highlight" aria-hidden="true" />
            <span className="text-highlight font-secondary text-xs uppercase tracking-[0.25em]">
              Especialidades Jurídicas
            </span>
            <span className="block w-8 h-px bg-highlight" aria-hidden="true" />
          </motion.div>

          {/* Título da seção */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center font-primary text-white text-3xl md:text-4xl font-bold tracking-wide mb-4"
          >
            Serviços Jurídicos
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center text-white/60 text-sm md:text-base font-secondary tracking-wider mb-2"
          >
            Atendimento especializado para as suas necessidades jurídicas.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center text-white/50 text-sm font-secondary tracking-wider mb-12"
          >
            Selecione uma área abaixo para saber mais.
          </motion.p>

          {/* Grade de serviços */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {services.map((service, index) => (
              <motion.li
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => (window.location.href = service.route)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") window.location.href = service.route;
                }}
                aria-label={`Saiba mais sobre ${service.title}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex items-center gap-4 bg-primary/80 border border-white/5 border-l-4 border-l-highlight px-4 py-4 cursor-pointer transition-colors duration-200 hover:bg-secondary hover:border-white/10 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-primary md:min-h-[80px]"
              >
                <Image
                  width={28}
                  height={28}
                  src={service.image.src}
                  alt=""
                  aria-hidden="true"
                  className="shrink-0 opacity-90"
                />
                <span className="flex-1 text-base md:text-lg text-white font-primary tracking-wide leading-snug">
                  {service.title}
                </span>
                {/* Indicador de navegação */}
                <span className="text-highlight/50 text-xs shrink-0" aria-hidden="true">→</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
