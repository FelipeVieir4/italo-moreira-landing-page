"use client";
import React from "react";
import ContactButton from "@/components/btn-Contact/btn-contact";
import Image from "next/image";
import "./hero-section.css";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const HeroSection: React.FC = () => {
  return (
    <section id="home">
      <div className="relative h-[65vh] w-full overflow-hidden">
        {/* Background image com zoom infinito */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
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

        {/* Sombra escura */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-950 opacity-30 z-10"></div>

        {/* Overlay com animações */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 text-center z-20"
        >
          {/* Título */}
          <motion.h1
            variants={fadeUp}
            className="uppercase font-primary text-white text-4xl xl:text-7xl md:text-6xl font-semibold leading-tight tracking-wider"
          >
            advocacia especializada
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={fadeUp}
            className="font-secondary text-textPrimary text-lg md:text-xl md:max-w-2xl lg:max-w-4xl mt-4"
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
    </section>
  );
};

export default HeroSection;
