"use client";
import React, { useState } from "react";
import { iniciarChatWhatsApp } from "../../../utils/waapi/waapi";


interface FAQItem {
    id: number;
    question: string;
    answer: string;
    category?: string; // Optional field for categorization
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
        "Sim. A perseguição, inclusive em ambiente digital, pode configurar o crime de ‘stalking’. Posso formalizar a denúncia, solicitar medidas protetivas e representá-lo judicialmente para responsabilizar o agressor e garantir sua proteção.",
    },
  ];
  
  

const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="max-w-4xl mx-auto p-6">
          <h2 className="text-center font-primary uppercase text-3xl font-bold tracking-wide text-primary md:text-4xl mb-4">
            perguntas frequentes
          </h2>
            <div className="space-y-4">
                {faqData.map((item) => (
                    <div key={item.id} className="border rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleFAQ(item.id)}
                            className={`w-full text-left px-4 py-3 font-secondary  text-sm flex items-center justify-between transition-colors ${
                                activeIndex === item.id
                                    ? "bg-secondary text-white"
                                    : "bg-gray-100 text-secondary"
                            }`}
                        >
                            <span>{item.question}</span>
                            <span
                                className={`transform transition-transform ${
                                    activeIndex === item.id ? "rotate-180" : "rotate-0"
                                }`}
                            >
                                ▼
                            </span>
                        </button>
                        {activeIndex === item.id && (
                            <div className="px-4 py-3 bg-white font-secondary text-sm text-gray-700 border-t">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-6 text-center">
                <p className="text-lg font-secondary text-textSecondary">
                    Não encontrou o que procurava?{" "}
                    <span
                        onClick={iniciarChatWhatsApp}
                        className="text-highlight cursor-pointer hover:underline"
                    >
                        Fale conosco!
                    </span>
                </p>
            </div>
        </section>
    );
};

export default FAQSection;

