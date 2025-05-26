"use client";
import React from "react";
import Image from "next/image";
import ContactButton from "@/components/btn-Contact/btn-contact";

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
            Quem vai te ajudar?
          </h3>
          <p className="text-sm md:text-lg text-textPrimary leading-relaxed font-secondary mb-4 text-justify">
            Sou um advogado com sólida formação e ampla experiência nas áreas
            cível, criminal e na resolução de conflitos extrajudiciais. Com um
            compromisso inabalável com a ética, ofereço soluções jurídicas de
            alta qualidade, sempre buscando resultados que atendam com precisão
            às necessidades dos meus clientes. <br />
            <br />
            Através de uma abordagem moderna e estratégica, me mantenho
            atualizado diante das constantes mudanças legislativas e tendências
            do mercado jurídico, garantindo que minha atuação seja sempre
            pautada nas melhores práticas e soluções eficazes para a resolução
            dos conflitos.
            <br />
            <br />
            Meu foco é claro: entender profundamente o seu caso e garantir uma
            resolução ágil e eficaz, com estratégias personalizadas para
            proteger seus direitos. Estou comprometido em proporcionar um
            atendimento humanizado e transparente, dando-lhe a confiança
            necessária para que se sinta seguro durante todo o processo. Meu
            objetivo não é apenas resolver o seu conflito, mas garantir que você
            tenha o suporte jurídico necessário para caminhar com tranquilidade.
          </p>

          <div>
            <ContactButton label="Fale comigo agora!" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
