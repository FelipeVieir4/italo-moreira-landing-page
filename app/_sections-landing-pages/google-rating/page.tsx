"use client";
import React from "react";
import { motion, type Variants } from "motion/react";
import { Quote } from "lucide-react";
import { testimonials } from "./testimonialsData";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-0.5" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={i < rating ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={i < rating ? "0" : "1.5"}
        className={i < rating ? "text-highlight" : "text-white/20"}
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="w-full bg-gradient-to-b from-slate-900 to-primary py-20 px-6 lg:px-8"
    >
      <div className="max-w-screen-xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="block w-8 h-px bg-highlight" aria-hidden="true" />
          <span className="text-highlight font-secondary text-xs uppercase tracking-[0.25em]">
            Opiniões dos Clientes
          </span>
          <span className="block w-8 h-px bg-highlight" aria-hidden="true" />
        </motion.div>

        {/* Título */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center font-primary text-white text-3xl md:text-4xl font-bold tracking-wide mb-4"
        >
          Depoimentos
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-white/50 font-secondary text-sm mb-12 max-w-lg mx-auto"
        >
          A confiança dos meus clientes é a maior prova do meu compromisso com a excelência jurídica.
        </motion.p>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="relative flex flex-col gap-4 bg-secondary/60 border border-white/8 p-6 hover:border-highlight/30 transition-colors duration-300"
            >
              {/* Ícone de aspas decorativo */}
              <Quote
                className="absolute top-5 right-5 text-highlight/15"
                size={32}
                aria-hidden="true"
              />

              {/* Estrelas */}
              <StarRating rating={item.rating} />

              {/* Texto da avaliação */}
              <p className="font-secondary text-sm text-white/70 leading-relaxed flex-1">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Divisor */}
              <div className="h-px w-full bg-white/8" aria-hidden="true" />

              {/* Footer do card: avatar + nome + data */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full bg-highlight/20 border border-highlight/30 flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-highlight text-xs font-primary font-semibold">
                    {item.initials}
                  </span>
                </div>
                <div className="flex flex-col leading-none gap-1">
                  <span className="text-white text-sm font-secondary font-medium">
                    {item.name}
                  </span>
                  <span className="text-white/35 text-xs font-secondary">
                    {item.date}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Nota de rodapé */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-white/25 font-secondary text-xs mt-10"
        >
          Avaliações de clientes reais atendidos pelo Dr. Italo Moreira.
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
