"use client";
import React from "react";
import ContactButton from "@/components/btn-Contact/btn-contact";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section id="home">
      <div className="relative h-[65vh] w-full">
        {/* Background image */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/hero/hero-bg-img5-min.jpg"
            alt="Imagem de fundo"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full  bg-slate-950 opacity-85"></div>

        {/* Overlay com transparência e texto */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          {/* Título */}
          <h1 className=" uppercase fade-in font-primary text-white text-4xl xl:text-6xl md:text-5xl font-semibold text-center leading-tight px-4 tracking-wider">
            advocacia especializada
          </h1>
          {/* Subtítulo */}
          <p className="fade-in delay-0s5 font-secondary font-thin text-white text-sm md:text-xl  mt-4 text-center px-6 max-w-4xl">
            Compromisso em oferecer tranquilidade e segurança jurídica, com
            soluções eficientes e alinhadas aos seus direitos
          </p>

          <div className="fade-in delay-1s flex flex-col items-center mt-6">
            <ContactButton label="Agende uma Consulta" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
