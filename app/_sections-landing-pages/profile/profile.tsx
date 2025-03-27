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
          <p className="text-sm md:text-lg text-textPrimary leading-relaxed font-secondary mb-4">
            O Dr. Italo Moreira é um profissional altamente qualificado, com
            anos de experiência no setor. Seu compromisso é fornecer serviços de
            excelência, garantindo a satisfação total de seus pacientes.
          </p>
          <p className="text-sm md:text-lg text-textPrimary leading-relaxed font-secondary mb-6">
            Sempre atualizado com as últimas tendências e tecnologias do
            mercado, ele garante que seus serviços sejam modernos e eficientes.
            Seu compromisso com a ética profissional e a excelência o torna a
            escolha ideal para o seu cuidado.
          </p>
          <button
            onClick={iniciarChatWhatsApp}
            className="flex items-center gap-2 bg-highlight text-white py-3 px-6 rounded-lg text-lg font-secondary hover:bg-highlightDark transition-all cursor-pointer shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-highlightDark"
            aria-label="Agendar uma consulta pelo WhatsApp"
          >
            Agende uma Consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
