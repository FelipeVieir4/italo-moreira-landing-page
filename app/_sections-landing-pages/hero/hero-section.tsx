"use client";
import React from "react";
import { iniciarChatWhatsApp } from "../../../utils/waapi/waapi";

const HeroSection: React.FC = () => {
  return (
    <section id="home">
      <div className="relative h-[65vh] w-full">
        {/* Background image */}
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="./hero/hero-bg-img3.jpg"
            alt="Imagem de fundo"
            className="object-cover w-full h-full "
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full  bg-slate-950 opacity-75"></div>

        {/* Overlay com transparência e texto */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          {/* Título */}
          <h1 className=" uppercase fade-in font-primary text-white text-4xl xl:text-6xl md:text-5xl font-semibold text-center leading-tight px-4 tracking-wider">
            advocacia especializada
          </h1>
          {/* Subtítulo */}
          <p className="fade-in delay-0s5 font-secondary font-thin text-white text-sm md:text-xl  mt-4 text-center px-6 max-w-4xl">
            Nosso compromisso é oferecer tranquilidade e segurança jurídica, com
            soluções eficientes e alinhadas aos seus direitos
          </p>
          {/* Botão de ação */}
          <a
            onClick={iniciarChatWhatsApp}
            className=" fade-in delay-1s mt-6 bg-highlight text-white py-3 px-6 rounded-lg text-lg font-secondary hover:bg-highlightDark transition-colors cursor-pointer"
          >
            Agende uma Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
