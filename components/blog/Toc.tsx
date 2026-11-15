"use client";
import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/blog";

/** Sumário do artigo com destaque da seção visível. */
export default function Toc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    const headings = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    if (!headings.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [items]);

  return (
    <ol className="space-y-1 border-l border-line">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            aria-current={active === item.id ? "location" : undefined}
            className={`-ml-px block border-l py-1.5 text-[0.88rem] leading-snug transition-colors ${
              item.depth === 3 ? "pl-7" : "pl-4"
            } ${active === item.id ? "border-gold font-semibold text-ink" : "border-transparent text-muted hover:text-ink"}`}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  );
}
