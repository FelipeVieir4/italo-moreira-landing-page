"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { iniciarChatWhatsApp } from "@/utils/waapi/waapi";

const menuItems = [
  { href: "/#", label: "Início" },
  { href: "/#services", label: "Serviços" },
  { href: "/#testimonials", label: "Depoimentos" },
  { href: "/#about", label: "Sobre" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-highlight/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/#" className="flex items-center gap-3 shrink-0">
          <Image
            src="./logo/logo-white.png"
            alt="Italo Moreira Advocacia"
            width={38}
            height={38}
          />
          <div className="flex flex-col leading-none">
            <span className="text-white font-primary text-base md:text-lg font-semibold tracking-wide">
              Italo Moreira
            </span>
            <span className="text-highlight/70 text-[10px] font-secondary tracking-widest uppercase border-b border-highlight/50 pb-0.5 w-full text-center">
              Advocacia
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-1">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative px-4 py-2 text-sm font-secondary text-white/70 hover:text-white transition-colors duration-200 group uppercase tracking-widest"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-highlight scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={iniciarChatWhatsApp}
          className="hidden xl:flex items-center gap-2 border border-highlight/60 text-highlight px-5 py-2.5 text-xs font-secondary uppercase tracking-[0.15em] hover:bg-highlight hover:text-primary transition-all duration-300"
          aria-label="Agendar consulta pelo WhatsApp"
        >
          Falar Agora!
        </button>

        {/* Hamburger */}
        <button
          className="xl:hidden flex flex-col justify-center gap-[6px] w-10 h-10 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block h-px w-6 bg-white origin-center"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-6 bg-white"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block h-px w-6 bg-white origin-center"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="xl:hidden bg-primary/95 backdrop-blur-md border-t border-highlight/15 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-1">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center py-4 font-secondary text-white/70 hover:text-highlight uppercase tracking-[0.2em] text-sm border-b border-white/10 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-5">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    iniciarChatWhatsApp();
                  }}
                  className="w-full border border-highlight/60 text-highlight py-3.5 font-secondary uppercase tracking-[0.15em] text-sm hover:bg-highlight hover:text-primary transition-all duration-300"
                >
                  Consulta Gratuita
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
