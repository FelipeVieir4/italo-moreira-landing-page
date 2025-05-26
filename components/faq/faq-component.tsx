"use client";
import React, { useState } from "react";
import { iniciarChatWhatsApp } from "../../utils/waapi/waapi";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  cta?: string;
}

interface FAQComponentProps {
  faqData: FAQItem[];
}

const FAQComponent: React.FC<FAQComponentProps> = ({ faqData }) => {
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
              <>
                <div className="px-4 py-3 bg-white font-secondary text-sm text-gray-700 border-t">
                  {item.answer}
                </div>
                <div  className="px-4 py-3 bg-white font-secondary text-sm text-gray-700 ">
                <span
                    onClick={iniciarChatWhatsApp}
                    className="cursor-pointer underline hover:no-underline hover:text-highlight"
                >
                    {item.cta}
                </span>
                </div>
              </>
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

export default FAQComponent;
