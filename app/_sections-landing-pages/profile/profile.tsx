"use client";
import React from "react";
import Image from "next/image";
import ContactButton from "@/components/btn-Contact/btn-contact";
import { motion, type Variants } from "motion/react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stats = [
  { value: "5+", label: "Anos de experiência" },
  { value: "OAB/MG", label: "Regularmente inscrito" },
  { value: "Cível & Criminal", label: "Áreas de atuação" },
];

const ProfileSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-20 px-6 lg:px-8 flex items-center"
    >
      {/* Background Image com overlay */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="./profile/law-office-bg.jpg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-primary/50" />

      <div className="relative max-w-screen-xl mx-auto w-full bg-primary/50 backdrop-blur rounded-lg shadow-2xl p-8 lg:p-16">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="block w-10 h-px bg-highlight" aria-hidden="true" />
          <span className="text-highlight font-secondary text-xs uppercase tracking-[0.25em]">
            Sobre o Advogado
          </span>
        </motion.div>

        {/* Conteúdo em 2 colunas no desktop */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Coluna esquerda — Foto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="shrink-0 mx-auto lg:mx-0"
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96 border-2 border-highlight/40 overflow-hidden shadow-2xl">
              <Image
                src="./profile/_55A2773.jpg"
                alt="Dr. Italo Moreira — Advogado"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                sizes="(max-width: 768px) 256px, 288px"
              />
            </div>
            {/* Badge abaixo da foto */}
            <div className="mt-3 border border-highlight/30 px-3 py-2 text-center">
              <p className="text-highlight text-xs font-secondary uppercase tracking-widest">
                OAB/MG
              </p>
              <p className="text-white/60 text-xs font-secondary mt-0.5">
                Advogado Especialista
              </p>
            </div>
          </motion.div>

          {/* Coluna direita — Texto */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex flex-col gap-6"
          >
            <h2 className="font-primary text-white text-3xl md:text-4xl font-bold leading-tight">
              Quem vai te atender?
            </h2>

            <div className="space-y-4 text-white/85 font-secondary text-base leading-relaxed">
              <p>
                Sou um advogado com sólida formação e ampla experiência nas
                áreas cível, criminal e na resolução de conflitos
                extrajudiciais. Com um compromisso inabalável com a ética,
                ofereço soluções jurídicas de alta qualidade, sempre buscando
                resultados que atendam com precisão às necessidades dos meus
                clientes.
              </p>
              <p>
                Através de uma abordagem moderna e estratégica, me mantenho
                atualizado diante das constantes mudanças legislativas e
                tendências do mercado jurídico, garantindo que minha atuação
                seja sempre pautada nas melhores práticas e soluções eficazes
                para a resolução dos conflitos.
              </p>
              <p>
                Meu foco é claro: entender profundamente o seu caso e
                garantir uma resolução ágil e eficaz, com estratégias
                personalizadas para proteger seus direitos. Estou comprometido
                em proporcionar um atendimento humanizado e transparente,
                dando-lhe a confiança necessária para que se sinta seguro
                durante todo o processo.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-highlight font-primary font-bold text-lg md:text-xl leading-none">
                    {stat.value}
                  </span>
                  <span className="text-white/40 font-secondary text-xs leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <ContactButton label="Fale comigo agora!" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
