"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/brand/Logo";
import { WhatsAppIcon } from "@/components/icons";
import { mainNav, site, whatsappLink } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : href.startsWith("/blog") ? pathname.startsWith("/blog") : false;

  const solid = scrolled || open;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-ink/85 shadow-[0_1px_0_rgba(255,255,255,.06)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <div className="container-site flex h-[var(--header-h)] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-[0.9rem] font-medium transition-colors ${
                    isActive(item.href) ? "text-gold-light" : "text-paper/75 hover:text-paper"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="header-whatsapp"
            className="hidden items-center gap-2 rounded-full border border-gold-light/50 px-5 py-2.5 text-[0.85rem] font-semibold text-gold-light transition-all hover:bg-gold-light hover:text-ink sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Fale comigo
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="relative -mr-2 flex h-11 w-11 items-center justify-center rounded-full text-paper lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute h-px w-6 bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[5px]"}`}
            />
            <span
              className={`absolute h-px w-6 bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[5px]"}`}
            />
          </button>
        </div>
      </div>
    </header>

      {/* Menu mobile — fica fora do <header> porque o backdrop-filter dele
          criaria um novo contexto para elementos "fixed". */}
      <div
        id="menu-mobile"
        className={`fixed inset-x-0 bottom-0 top-[var(--header-h)] z-[45] bg-ink transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Menu mobile" className="container-site flex h-full flex-col justify-between pb-10 pt-6">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {mainNav.map((item, i) => (
              <li
                key={item.href}
                className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              >
                <Link href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-5 font-display text-3xl text-paper">
                  {item.label}
                  <span aria-hidden="true" className="text-base text-gold-light">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="menu-whatsapp"
              className="btn-gold w-full"
            >
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
            <p className="text-center text-sm text-paper/50">
              {site.oab} · {site.city}/{site.region}
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
