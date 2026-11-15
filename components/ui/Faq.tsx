import { Plus } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import type { FaqEntry } from "@/content/services/types";

type Props = {
  items: FaqEntry[];
  tone?: "light" | "dark";
};

/**
 * Acordeão de perguntas frequentes com <details>/<summary>: funciona sem JS,
 * é acessível por teclado e o conteúdo fica visível para o Google.
 */
export default function Faq({ items, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={`divide-y border-y ${dark ? "divide-white/10 border-white/10" : "divide-line border-line"}`}>
      {items.map((item, i) => (
        <details key={item.id ?? i} className="faq-item group" {...(i === 0 ? { open: true } : {})}>
          <summary
            className={`flex items-start justify-between gap-6 py-6 text-left text-[1.05rem] font-semibold leading-snug transition-colors sm:text-lg ${
              dark ? "text-paper hover:text-gold-light" : "text-ink hover:text-gold-dark"
            }`}
          >
            <span>{item.question}</span>
            <span
              className={`faq-icon mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                dark ? "border-white/15 text-gold-light" : "border-line text-gold-dark"
              }`}
              aria-hidden="true"
            >
              <Plus className="h-4 w-4" />
            </span>
          </summary>
          <div className={`faq-answer -mt-1 pb-7 pr-12 leading-relaxed ${dark ? "text-paper/70" : "text-muted"}`}>
            <p className="whitespace-pre-line">{item.answer.replace(/\s*\n\s*/g, " ")}</p>
            {item.cta && (
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="faq-whatsapp"
                className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 ${
                  dark ? "text-gold-light decoration-gold-light/40" : "text-ink decoration-gold/50"
                }`}
              >
                {item.cta.replace(/^➡\s*/, "")}
              </a>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(items: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer.replace(/\s*\n\s*/g, " ") },
    })),
  };
}
