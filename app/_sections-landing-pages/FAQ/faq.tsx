"use client";
import React, { useState } from "react";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
    category?: string; // Optional field for categorization
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: "Vou me divorciar, preciso de um adivogado?",
        answer:
            "Uma resposta aqui",
    },
    {
        id: 2,
        question: "Eu posso exigir que a loja me atenda.....?",
        answer:
            "Yes, we ship to most countries worldwide. Shipping fees may apply.",
    },
    {
        id: 3,
        question: "How can I track my order?",
        answer:
            "Once your order is shipped, you will receive a tracking number via email.",
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
                            className={`w-full text-left px-4 py-3 font-medium text-lg flex items-center justify-between transition-colors ${
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
                            <div className="px-4 py-3 bg-white text-gray-700 border-t">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
