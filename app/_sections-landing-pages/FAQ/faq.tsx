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
        "Situações de calúnia, difamação ou injúria devem ser registradas em boletim de ocorrência, com coleta de provas como mensagens, áudios ou postagens. O Dr. Italo Moreira, como seu advogado, pode conduzir a representação criminal e, se for o caso, ingressar com ação indenizatória para reparar os danos sofridos.",
    },
    {
      id: 2,
      question: "A empresa se recusa a resolver um problema com um produto ou serviço. Como devo agir?",
      answer:
        "Em casos de omissão por parte de fornecedores ou prestadores de serviço, é possível recorrer ao Código de Defesa do Consumidor. O Dr. Italo pode orientar sobre notificações extrajudiciais, ações de indenização e medidas urgentes para resguardar seus direitos e cessar abusos.",
    },
    {
      id: 3,
      question: "Estou sendo acusado injustamente. Como me proteger legalmente?",
      answer:
        "A melhor forma de se proteger é agir com orientação jurídica desde o início. O Dr. Italo Moreira pode atuar na sua defesa, acompanhar investigações, analisar provas e garantir que seus direitos sejam respeitados, evitando condenações injustas ou excessos no processo.",
    },
    {
      id: 4,
      question: "Me envolvi em uma discussão e fui agredido verbalmente. Isso configura crime?",
      answer:
        "A agressão verbal pode ser enquadrada como injúria, prevista no Código Penal. Nesses casos, o Dr. Italo pode auxiliá-lo na formalização da denúncia, solicitar medidas protetivas se necessário, e representá-lo em ações penais e cíveis para buscar reparação pelos danos morais.",
    },
    {
      id: 5,
      question: "A escola do meu filho está sendo negligente com a segurança. Posso responsabilizá-la?",
      answer:
        "Instituições de ensino têm responsabilidade objetiva sobre os alunos. Se houver falha que comprometa a segurança, o Dr. Italo pode conduzir o processo de responsabilização, tanto por via extrajudicial quanto judicial, buscando a correção da conduta e eventual reparação por danos.",
    },
    {
      id: 6,
      question: "Descobri que meu nome foi negativado indevidamente. Como resolver?",
      answer:
        "A negativação indevida pode gerar sérios prejuízos. O Dr. Italo pode entrar com pedido de urgência para retirada do nome dos cadastros, além de ajuizar ação para compensação por danos morais, responsabilizando a empresa pelos efeitos causados.",
    },
    {
      id: 7,
      question: "Sou vítima de ameaças constantes. Só a denúncia é suficiente?",
      answer:
        "A denúncia é importante, mas pode ser insuficiente diante de riscos contínuos. O Dr. Italo poderá solicitar medidas protetivas, como afastamento do agressor, bloqueio de contato e acompanhamento do caso junto às autoridades para garantir sua segurança de forma eficaz.",
    },
    {
      id: 8,
      question: "O que posso fazer se um familiar desapareceu e a polícia não está dando retorno?",
      answer:
        "É possível buscar apoio jurídico para acelerar medidas, como requerer habeas corpus de busca, acionar o Ministério Público e cobrar providências das autoridades. O Dr. Italo pode atuar diretamente na exigência de respostas e no suporte às famílias nesse momento delicado.",
    },
    {
      id: 9,
      question: "Estou enfrentando perseguição digital. Existe proteção legal contra isso?",
      answer:
        "Sim. A perseguição sistemática, inclusive online, pode ser considerada crime de ‘stalking’. O Dr. Italo pode agir para formalizar a denúncia, solicitar medidas protetivas e representar judicialmente seus interesses, buscando a responsabilização do agressor e o fim do assédio.",
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

