"use client";
import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { LinkedInIcon, WhatsAppIcon } from "@/components/icons";

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* navegador sem permissão de área de transferência */
    }
  };

  const btn =
    "flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-gold hover:text-gold-dark";

  return (
    <div className="flex items-center gap-2">
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartilhar no WhatsApp"
        className={btn}
      >
        <WhatsAppIcon className="h-[18px] w-[18px]" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartilhar no LinkedIn"
        className={btn}
      >
        <LinkedInIcon className="h-4 w-4" />
      </a>
      <button type="button" onClick={copy} aria-label="Copiar link do artigo" className={btn}>
        {copied ? <Check className="h-4 w-4 text-gold-dark" /> : <Link2 className="h-4 w-4" />}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Link copiado" : ""}
      </span>
    </div>
  );
}
