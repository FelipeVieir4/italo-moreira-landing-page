"use client";
import React from "react";
import ContactButton from "@/components/btn-Contact/btn-contact";
import Image from "next/image";
import "./hero-section.css"; // Import your CSS file for custom styles

const HeroSection: React.FC = () => {
  return (
    <section id="home">
      <div className="relative h-[65vh] w-full">
        {/* Background image */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="./hero/hero-bg-img5_resized.jpg"
            alt="Imagem de fundo"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full  bg-slate-950 opacity-30"></div>

        {/* Overlay com transparência e texto */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          {/* Título */}
          <h1
            id="hero-text"
            className=" uppercase font-primary text-white text-4xl xl:text-7xl md:text-6xl font-semibold text-center leading-tight px-4 tracking-wider"
          >
            advocacia especializada
          </h1>
          {/* Subtítulo */}
          <p  id="hero-text" className="font-secondary text-textPrimary text-lg md:text-xl md:max-w-2xl lg:max-w-4xl mt-4 text-center px-6  ">
            Compromisso em oferecer tranquilidade e segurança jurídica, com
            soluções eficientes e alinhadas aos seus direitos
          </p>

          <div className="flex flex-col items-center ">
            <ContactButton label="Agende uma Consulta" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
