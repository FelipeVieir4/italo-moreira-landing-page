"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Script from "next/script";
import { iniciarChatWhatsApp } from "../../../utils/waapi/waapi";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Fui vítima de calúnia ou difamação. O que devo fazer imediatamente?",
    answer:
      "Se você foi vítima de calúnia, difamação ou injúria, o primeiro passo é registrar um boletim de ocorrência e reunir provas, como mensagens, áudios ou postagens. Como seu advogado, posso conduzir a representação criminal e, se necessário, entrar com ação indenizatória para reparar os danos sofridos.",
  },
  {
    id: 2,
    question: "A empresa se recusa a resolver um problema com um produto ou serviço. Como devo agir?",
    answer:
      "Se uma empresa está se omitindo diante de um problema, é possível recorrer ao Código de Defesa do Consumidor. Posso orientar você sobre notificações extrajudiciais, ações de indenização e medidas urgentes para resguardar seus direitos e impedir abusos.",
  },
  {
    id: 3,
    question: "Estou sendo acusado injustamente. Como me proteger legalmente?",
    answer:
      "A melhor forma de se proteger é com orientação jurídica desde o início. Posso atuar na sua defesa, acompanhar investigações, analisar provas e garantir que seus direitos sejam respeitados, evitando condenações injustas ou excessos no processo.",
  },
  {
    id: 4,
    question: "Me envolvi em uma discussão e fui agredido verbalmente. Isso configura crime?",
    answer:
      "Sim, agressões verbais podem configurar o crime de injúria, previsto no Código Penal. Posso ajudá-lo a formalizar a denúncia, solicitar medidas protetivas se necessário e representá-lo em ações penais e cíveis para buscar a reparação pelos danos morais.",
  },
  {
    id: 5,
    question: "A escola do meu filho está sendo negligente com a segurança. Posso responsabilizá-la?",
    answer:
      "Sim, instituições de ensino têm responsabilidade objetiva sobre os alunos. Caso haja falhas que coloquem a segurança em risco, posso conduzir o processo de responsabilização, tanto por via extrajudicial quanto judicial, buscando a correção da conduta e a devida reparação.",
  },
  {
    id: 6,
    question: "Descobri que meu nome foi negativado indevidamente. Como resolver?",
    answer:
      "A negativação indevida pode trazer grandes prejuízos. Posso entrar com pedido de urgência para retirar seu nome dos cadastros restritivos e também ajuizar ação de indenização por danos morais contra a empresa responsável.",
  },
  {
    id: 7,
    question: "Sou vítima de ameaças constantes. Só a denúncia é suficiente?",
    answer:
      "A denúncia é essencial, mas em muitos casos, pode não ser suficiente. Posso solicitar medidas protetivas como afastamento do agressor, bloqueio de contato e acompanhar o caso junto às autoridades para garantir sua segurança de maneira eficaz.",
  },
  {
    id: 8,
    question: "O que posso fazer se um familiar desapareceu e a polícia não está dando retorno?",
    answer:
      "É possível acionar medidas jurídicas para cobrar respostas. Posso requerer habeas corpus de busca, acionar o Ministério Público e exigir providências das autoridades, dando suporte jurídico e emocional à família nesse momento tão delicado.",
  },
  {
    id: 9,
    question: "Estou enfrentando perseguição digital. Existe proteção legal contra isso?",
    answer:
      "Sim. A perseguição, inclusive em ambiente digital, pode configurar o crime de 'stalking'. Posso formalizar a denúncia, solicitar medidas protetivas e representá-lo judicialmente para responsabilizar o agressor e garantir sua proteção.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section className="w-full bg-primary py-20 px-6 lg:px-8">
      <Script
        id="jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="block w-8 h-px bg-highlight" aria-hidden="true" />
          <span className="text-highlight font-secondary text-xs uppercase tracking-[0.25em]">
            Tire suas Dúvidas
          </span>
          <span className="block w-8 h-px bg-highlight" aria-hidden="true" />
        </div>

        <h2 className="text-center font-primary text-white text-3xl md:text-4xl font-bold tracking-wide mb-12">
          Perguntas Frequentes
        </h2>

        <div className="space-y-2">
          {faqData.map((item) => {
            const isOpen = activeIndex === item.id;
            return (
              <div
                key={item.id}
                className="border border-white/10 overflow-hidden transition-colors duration-200 hover:border-highlight/30"
              >
                <button
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 py-4 font-secondary text-sm flex items-center justify-between gap-4 transition-colors duration-200 bg-secondary/60 hover:bg-secondary text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-inset"
                >
                  <span className="leading-snug">{item.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-highlight shrink-0 text-xs"
                    aria-hidden="true"
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-4 border-t border-white/10 bg-primary/60 font-secondary text-sm text-white/65 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA de rodapé do FAQ */}
        <div className="mt-10 text-center">
          <p className="font-secondary text-white/50 text-sm">
            Não encontrou o que procurava?{" "}
            <button
              onClick={iniciarChatWhatsApp}
              className="text-highlight hover:text-white underline transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-highlight"
            >
              Fale conosco pelo WhatsApp
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
