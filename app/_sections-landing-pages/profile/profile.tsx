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
      <div className="bg-primary bg-opacity-75 flex justify-center items-center max-w-screen-xl w-full p-8 rounded-lg shadow-lg">
        <div className="text-white w-full flex flex-col gap-6">
          <div className="flex-1 text-clip">
            <h3 className="text-xl md:text-2xl font-primary font-bold text-highlight mb-4">
              Quem vai te atender?
            </h3>
            <div className="border-4 border-secondary rounded-lg overflow-hidden bg-slate-300 shadow-lg w-fit h-fit text-[8px] md:text-sm float-left mr-2">
              <Image
                src="./profile/hero-avatar2.png"
                alt="Foto do Dr. Italo Moreira"
                height={150}
                width={150}
                className="object-cover"
              />
            </div>
            <p className="text-thin text-textPrimary leading-relaxed font-secondary mb-4">
              Sou um advogado com sólida formação e ampla experiência nas áreas
              cível, criminal e na resolução de conflitos extrajudiciais. Com um
              compromisso inabalável com a ética, ofereço soluções jurídicas de
              alta qualidade, sempre buscando resultados que atendam com
              precisão às necessidades dos meus clientes.
              <br />
              <br />
              Através de uma abordagem moderna e estratégica, me mantenho
              atualizado diante das constantes mudanças legislativas e
              tendências do mercado jurídico, garantindo que minha atuação seja
              sempre pautada nas melhores práticas e soluções eficazes para a
              resolução dos conflitos.
              <br />
              <br />
              Meu foco é claro: entender profundamente o seu caso e garantir uma
              resolução ágil e eficaz, com estratégias personalizadas para
              proteger seus direitos. Estou comprometido em proporcionar um
              atendimento humanizado e transparente, dando-lhe a confiança
              necessária para que se sinta seguro durante todo o processo. Meu
              objetivo não é apenas resolver o seu conflito, mas garantir que
              você tenha o suporte jurídico necessário para caminhar com
              tranquilidade.
            </p>

            <div className="mt-4 flex justify-center">
              <ContactButton label="Fale comigo agora!" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
