"use client";
import React from "react";
import Image from "next/image";
import { iniciarChatWhatsApp } from "../../../utils/waapi/waapi";

const ProfileSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-[60vh] w-full flex items-center justify-center py-10 px-5"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="./profile/law-office-bg.jpg"
          alt="Fundo do escritório de advocacia"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full bg-primary opacity-70"></div>

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 h-full w-full "></div>

      {/* Container principal */}
      <div className="bg-primary bg-opacity-75 flex flex-wrap justify-center items-center max-w-screen-xl w-full gap-10 p-8 rounded-lg shadow-lg">
        <div className=" flex justify-center w-full sm:w-auto border-4 border-secondary rounded-lg overflow-hidden bg-slate-300 shadow-lg">
          <Image
            src="./profile/hero-avatar2.png"
            alt="Foto do Dr. Italo Moreira"
            height={300}
            width={300}
            className="max-w-full h-auto rounded-lg   "
          />
        </div>
        <div className="text-white w-full sm:w-2/3 flex flex-col justify-center items-center text-center sm:text-left">
          <h3 className="text-xl md:text-2xl self-start font-primary font-bold text-highlight mb-4">
            Dr. Italo Moreira
          </h3>
          <p className="text-sm md:text-lg text-textPrimary leading-relaxed font-secondary mb-4 text-justify">
            O Dr. Italo Moreira é um advogado com sólida formação e ampla
            experiência nas áreas cível, criminal e na resolução de conflitos
            extrajudiciais. Com um compromisso inabalável com a ética, oferece
            soluções jurídicas de alta qualidade, sempre buscando resultados que
            atendam com precisão às necessidades de seus clientes. <br /><br />
            Com uma abordagem moderna e estratégica, o Dr. Italo Moreira se
            mantém à frente das constantes mudanças legislativas e tendências do
            mercado jurídico, garantindo que sua atuação seja sempre embasada
            nas melhores práticas e soluções eficazes para a resolução de seus
            conflitos.
          <br /><br />O foco é claro: entender profundamente o
            seu caso e garantir uma resolução ágil e eficaz, com estratégias
            personalizadas para proteger seus direitos. O Dr. Italo Moreira está
            dedicado a proporcionar um atendimento humanizado e transparente,
            dando-lhe a confiança necessária para que você se sinta seguro
            durante todo o processo. Seu objetivo é não apenas resolver seu
            conflito, mas garantir que você tenha o suporte jurídico necessário
            para caminhar com tranquilidade.
          </p>
          <button
            onClick={iniciarChatWhatsApp}
            className="flex items-center gap-2 bg-highlight text-white py-3 px-6 rounded-lg text-lg font-secondary hover:bg-highlightDark transition-all cursor-pointer shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-highlightDark"
            aria-label="Fale comigo pelo WhatsApp"
          >
            Fale comigo pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
