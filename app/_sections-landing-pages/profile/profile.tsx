"use client";
import React from "react";
import Image from "next/image";
import { iniciarChatWhatsApp } from "../../../utils/waapi/waapi";

const ProfileSection: React.FC = () => {
  return (
    <section id="profile">
      <div className="bg-muted px-2 py-10 ">
        <div className=" mx-auto max-w-6xl">
          <div className="text-center font-primary text-3xl sm:text-4xl font-bold uppercase tracking-wide mb-10">
            <h2 className="inline-block text-primary">Sobre o</h2>{" "}
            <h2 className="text-highlight inline-block">Dr. Italo Moreira</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            <div className="flex justify-center">
              <Image
                src="./model-bg.png"
                alt="Foto de perfil do Dr. Italo Moreira"
                width={500}
                height={500}
                className="rounded-xl shadow-lg object-cover w-full max-w-xs sm:max-w-sm md:max-w-md"
                priority
              />
            </div>

            {/* Texto + Botão */}
            <div className="text-center lg:text-left space-y-6">
              <p className="text-lg text-secondary leading-relaxed font-secondary">
                O Dr. Italo Moreira é um profissional altamente qualificado, com
                anos de experiência no setor. Seu compromisso é fornecer
                serviços de excelência, garantindo a satisfação total dos seus
                pacientes. Com uma abordagem personalizada, ele compreende as
                necessidades individuais e oferece soluções sob medida.
              </p>
              <p className="text-lg text-secondary leading-relaxed font-secondary">
                Sempre atualizado com as últimas tendências e tecnologias do
                mercado, ele garante que seus serviços sejam modernos e
                eficientes. Seu compromisso com a ética profissional e a
                excelência o torna a escolha ideal para o seu cuidado.
              </p>

              {/* Botão Responsivo */}
              <div className="flex justify-center lg:justify-start mt-6">
                <a
                  onClick={iniciarChatWhatsApp}
                  className="flex items-center gap-2 bg-highlight text-white py-3 px-6 rounded-lg text-lg font-secondary hover:bg-highlightDark transition-all cursor-pointer shadow-md hover:shadow-lg w-fit sm:w-fit"
                >
                  Agende uma Consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
