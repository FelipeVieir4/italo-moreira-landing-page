"use client";
import "./hero-section.css";
import React from "react";
import Image from "next/image";
import ContactButton from "@/components/btn-Contact/btn-contact";
import { motion } from "motion/react";
import { container, fadeUp } from "./animations";

const HeroSection: React.FC = () => {
  return (
    <section id="HeroSection" className="relative h-[65vh] w-full overflow-hidden">
      {/* ---------- init Background Animation ---------- */}
      <motion.div
        id="HeroBackground"
        className="absolute top-0 left-0 w-full h-full -z-20"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image
          src="./hero/hero-bg-img5_resized.jpg"
          alt="Imagem de fundo"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      {/* img filter */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950 opacity-30 -z-10"></div>

      {/* ---------- end Background Animation ---------- */}

      <div className="relative h-full lg:max-w-screen-xl mx-auto overflow-hidden">
        <div id="HeroContent">
          {/* Overlay com animações */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center"
          >
            {/* Título */}
            <motion.h1
              id="HeroTitle"
              variants={fadeUp}
              className="uppercase font-primary text-textPrimary text-4xl md:text-6xl xl:text-7xl font-semibold tracking-wide leading-tight mb-3"
            >
              advocacia especializada
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-secondary text-thin text-textPrimary text-sm md:text-xl md:max-w-2xl lg:max-w-4xl"
            >
              Compromisso em oferecer tranquilidade e segurança jurídica, com
              soluções eficientes e alinhadas aos seus direitos
            </motion.p>

            {/* Botão */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-6"
            >
              <ContactButton label="Agende uma Consulta" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
