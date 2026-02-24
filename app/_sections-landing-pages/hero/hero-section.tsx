"use client";
import React from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import ContactButton from "@/components/btn-Contact/btn-contact";

const credentials = [
  "Direito Civil",
  "Direito do Consumidor",
  "Golpe do PIX",
];

const socialProof = ["OAB/MG", "Atendimento Online", "Primeira Consulta Gratuita"];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const HeroSection: React.FC = () => {
  return (
    <section
      id="HeroSection"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 -z-20"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image
          src="./hero/hero-bg-img5_resized.jpg"
          alt="Italo Moreira Advocacia"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/98 via-primary/80 to-primary/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative w-full max-w-screen-xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl xl:max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <span className="block w-10 h-px bg-highlight" aria-hidden="true" />
            <span className="text-white/60 font-secondary text-xs uppercase tracking-[0.25em]">
              Advocacia Especializada
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            variants={fadeUp}
            className="font-primary text-white text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] mb-6"
          >
            Defendendo
            <br />
            <span
              className="italic font-bold text-highlight"
              style={{ textShadow: "0 2px 12px rgba(2, 6, 23, 0.5), 0 0 40px rgba(2, 6, 23, 0.7)" }}
            >
              seus direitos
            </span>
            <br />
            com excelência.
          </motion.h1>

          {/* Divider dourado */}
          <motion.div
            variants={fadeUp}
            className="w-16 h-px bg-highlight/50 mb-6"
            aria-hidden="true"
          />

          {/* Subtitle — sem caixa de fundo, texto shadow para legibilidade */}
          <motion.p
            variants={fadeUp}
            className="font-secondary text-white text-base md:text-lg max-w-lg leading-relaxed mb-8"
            style={{ textShadow: "0 1px 8px rgba(2, 6, 23, 0.8), 0 2px 20px rgba(2, 6, 23, 0.6)" }}
          >
            Compromisso em oferecer tranquilidade e segurança jurídica, com
            soluções eficientes e alinhadas aos seus direitos.
          </motion.p>

          {/* Credential Pills */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-2 mb-10"
            role="list"
            aria-label="Áreas de atuação"
          >
            {credentials.map((c) => (
              <span
                key={c}
                role="listitem"
                className="border border-highlight/40 text-highlight/90 text-[11px] font-secondary uppercase tracking-wider px-3 py-1.5 bg-primary/60 backdrop-blur-sm"
              >
                {c}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp}>
            <ContactButton label="Agende uma Consulta" />
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6"
            aria-label="Diferenciais"
          >
            {socialProof.map((item, i) => (
              <React.Fragment key={item}>
                <span className="text-primary/40 font-secondary text-xs tracking-wide">
                  {item}
                </span>
                {i < socialProof.length - 1 && (
                  <span className="text-primary/30 text-xs" aria-hidden="true">●</span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/30 text-[10px] font-secondary uppercase tracking-[0.3em]">
          mais
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
