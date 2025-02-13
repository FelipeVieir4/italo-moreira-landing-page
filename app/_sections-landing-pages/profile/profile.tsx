"use client";
import React from "react";
import Image from "next/image";
import { iniciarChatWhatsApp } from "../../../utils/waapi/waapi";

const ProfileSection: React.FC = () => {
  return (
    <section id="profile" className="relative max-h-fit overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 h-full w-full ">
        <Image
          src="./profile/law-office-bg.jpg"
          alt="Escritório de advocacia"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="bg-secondary bg-opacity-80 px-4  flex flex-col justify-center items-center">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 justfy-center items-center gap-10">
            <div className=" w-full flex justify-center lg:justify-end">
              <Image
                src="./profile/model-bg.png"
                alt="Foto do Dr. Italo Moreira"
                layout="responsive"
                width={500}
                height={500}
                priority
         
              />
            </div>

            {/* Texto + Botão */}
            <div className="text-center lg:text-left space-y-6 pb-10">
              <p className="text-lg text-textPrimary leading-relaxed font-secondary">
                O Dr. Italo Moreira é um profissional altamente qualificado, com
                anos de experiência no setor. Seu compromisso é fornecer
                serviços de excelência, garantindo a satisfação total de seus
                pacientes. Com uma abordagem personalizada, ele compreende as
                necessidades individuais e oferece soluções sob medida.
              </p>
              <p className="text-lg text-textPrimary leading-relaxed font-secondary">
                Sempre atualizado com as últimas tendências e tecnologias do
                mercado, ele garante que seus serviços sejam modernos e
                eficientes. Seu compromisso com a ética profissional e a
                excelência o torna a escolha ideal para o seu cuidado.
              </p>

              {/* Botão Responsivo */}
              <div className="flex justify-center lg:justify-start mt-6">
                <button
                  onClick={iniciarChatWhatsApp}
                  className="flex items-center gap-2 bg-highlight text-white py-3 px-6 rounded-lg text-lg font-secondary hover:bg-highlightDark transition-all cursor-pointer shadow-md hover:shadow-lg"
                  aria-label="Agendar uma consulta pelo WhatsApp"
                >
                  Agende uma Consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
