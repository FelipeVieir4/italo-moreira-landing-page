"use client";
import React from "react";
import Image from "next/image";
import { iniciarChatWhatsApp } from "@/utils/waapi/waapi";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/italomoreira9211/",
    icon: "/footer/linkedin-icon.svg",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/advitalomoreira",
    icon: "/footer/instagram-icon.svg",
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/",
    icon: "/footer/facebook-icon.svg",
    label: "Facebook",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary border-t border-highlight/20">
      {/* Divisor dourado */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-highlight/60 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Coluna 1 — Marca */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="./logo/logo-white.png"
                alt="Italo Moreira Advocacia"
                width={36}
                height={36}
              />
              <div className="flex flex-col leading-none">
                <span className="text-white font-primary text-base font-semibold tracking-wide">
                  Italo Moreira
                </span>
                <span className="text-highlight text-[10px] font-secondary tracking-[0.2em] uppercase">
                  Advocacia
                </span>
              </div>
            </div>
            <p className="text-white/50 font-secondary text-sm leading-relaxed max-w-xs">
              Advocacia especializada em direito civil e criminal. Compromisso
              com ética, excelência e resultados para você.
            </p>
          </div>

          {/* Coluna 2 — Contato */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-primary text-sm uppercase tracking-widest border-b border-highlight/30 pb-2">
              Contato
            </h3>
            <ul className="space-y-3 font-secondary text-sm text-white/60">
              <li>
                <button
                  onClick={iniciarChatWhatsApp}
                  className="flex items-center gap-2 hover:text-highlight transition-colors duration-200 focus:outline-none focus:underline"
                  aria-label="Falar pelo WhatsApp"
                >
                  <span className="text-whatsAppColor text-base">●</span>
                  WhatsApp: (31) 9 9936-9653
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-highlight/60 text-base">●</span>
                OAB/MG — Advogado Inscrito
              </li>
              <li className="flex items-center gap-2">
                <span className="text-highlight/60 text-base">●</span>
                Belo Horizonte — MG
              </li>
              <li className="flex items-center gap-2">
                <span className="text-highlight/60 text-base">●</span>
                Atendimento presencial e online
              </li>
            </ul>
          </div>

          {/* Coluna 3 — Redes Sociais */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-primary text-sm uppercase tracking-widest border-b border-highlight/30 pb-2">
              Redes Sociais
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 hover:text-white font-secondary text-sm transition-colors duration-200 focus:outline-none focus:underline group"
                    aria-label={`Visitar ${social.label}`}
                  >
                    <Image
                      src={social.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                      aria-hidden="true"
                    />
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 font-secondary text-xs tracking-widest text-center sm:text-left">
            &copy; {new Date().getFullYear()} Dr. Italo Moreira. Todos os
            direitos reservados.
          </p>
          <p className="text-white/20 font-secondary text-xs">
            OAB/MG — Advocacia Cível e Criminal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
