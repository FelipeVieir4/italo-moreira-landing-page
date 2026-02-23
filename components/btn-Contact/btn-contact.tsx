"use client";
import React from "react";
import { iniciarChatWhatsApp } from "@/utils/waapi/waapi";

interface ContactButtonProps {
  label: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ label }) => {
  return (
    <button
      onClick={iniciarChatWhatsApp}
      className="inline-flex items-center gap-3 border border-highlight/70 text-white bg-transparent px-6 py-3 text-sm font-secondary uppercase tracking-wider transition-all duration-300 hover:bg-highlight hover:text-primary hover:border-highlight focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2 focus:ring-offset-primary"
      aria-label="Agendar consulta pelo WhatsApp"
    >
      {/* WhatsApp icon */}
      <span className="flex items-center justify-center bg-whatsAppColor rounded-full w-8 h-8 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="white"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.38 0 0 5.38 0 12c0 2.09.57 4.09 1.66 5.85L0 24l6.25-1.64a11.98 11.98 0 005.75 1.46c6.62 0 12-5.38 12-12 0-3.19-1.25-6.19-3.48-8.52zM12 21.5a9.47 9.47 0 01-4.91-1.35l-.35-.2-3.7.98.99-3.6-.23-.36A9.48 9.48 0 1121.5 12c0 5.24-4.26 9.5-9.5 9.5zm5.04-7.36l-1.9-.57a1.15 1.15 0 00-1.11.3l-.42.44a8.69 8.69 0 01-4.02-4.02l.44-.42a1.15 1.15 0 00.3-1.11l-.57-1.9A1.13 1.13 0 008.66 6h-.89a1.79 1.79 0 00-1.79 1.96c.38 4.84 4.23 8.69 9.07 9.07a1.79 1.79 0 001.96-1.79v-.89c0-.53-.22-1.03-.61-1.4z" />
        </svg>
      </span>
      <span>{label}</span>
    </button>
  );
};

export default ContactButton;
