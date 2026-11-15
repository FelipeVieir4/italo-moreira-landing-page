import Link from "next/link";
import Logo, { ColumnMark } from "@/components/brand/Logo";

export const metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="grain relative flex min-h-screen flex-col bg-ink text-paper">
      <div className="container-site flex h-[var(--header-h)] items-center">
        <Logo />
      </div>
      <div className="container-site flex flex-1 flex-col items-center justify-center py-20 text-center">
        <ColumnMark className="h-12 w-12 text-gold-light" />
        <p className="eyebrow eyebrow-light mt-8">Erro 404</p>
        <h1 className="heading-lg mt-5 max-w-xl">Esta página não foi encontrada</h1>
        <p className="mt-5 max-w-md leading-relaxed text-paper/65">
          O endereço pode ter mudado ou o conteúdo foi removido. Que tal voltar ao início ou ler os artigos do blog?
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-gold">
            Voltar ao início
          </Link>
          <Link href="/blog" className="btn-ghost-light">
            Ir para o blog
          </Link>
        </div>
      </div>
    </main>
  );
}
