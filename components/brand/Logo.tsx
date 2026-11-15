import Link from "next/link";

export function ColumnMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M11 6.5h18" />
      <path d="M8.2 13.2a2.6 2.6 0 1 1 2.6-2.6h18.4a2.6 2.6 0 1 1 2.6 2.6" />
      <path d="M14 11v17.5M20 11v19.5M26 11v17.5" />
      <path d="M11.5 32.5h17M8.5 35.5h23" />
    </svg>
  );
}

type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

export default function Logo({ tone = "light", className = "" }: LogoProps) {
  const name = tone === "light" ? "text-paper" : "text-ink";
  const sub = tone === "light" ? "text-gold-light" : "text-gold-dark";
  return (
    <Link href="/" aria-label="Italo Moreira Advocacia — página inicial" className={`group flex items-center gap-3 ${className}`}>
      <ColumnMark className={`h-9 w-9 ${sub} transition-transform duration-500 group-hover:-translate-y-0.5`} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.4rem] font-semibold tracking-wide ${name}`}>Italo Moreira</span>
        <span className={`mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.34em] ${sub}`}>Advocacia</span>
      </span>
    </Link>
  );
}
