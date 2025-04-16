"use client";
import "./navbar.styles.css";
import Image from "next/image";
import { useState } from "react";

const menuItems = [
  { href: "#", label: "Início" },
  { href: "#services", label: "Serviços" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#about", label: "Sobre" },
  // { href: "#numeros", label: "Mídia" },
  // { href: "#mais", label: "Mais" },
];
const menuText = ["Italo Moreira", "Advocacia"];
const menuLogo = "./logo/logo-white.png";
const openIcon = "./icons/openIcon.svg";
const closeIcon = "./icons/closeIcon.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburguerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.getElementById("mobile-menu")?.classList.remove("menu-slide-out");
      document.getElementById("mobile-menu")?.classList.add("menu-slide-in");
    } else {
      document.getElementById("mobile-menu")?.classList.remove("menu-slide-in");
      document.getElementById("mobile-menu")?.classList.add("menu-slide-out");
    }
  };

  return (
    <nav className="navbar bg-primary w-full h-[10vh] flex items-center justify-between px-[10%] shadow-xl z-50 fixed top-0 ">
      {/* Logo e Nome */}
      <div className="h-full flex items-center gap-4">
        <Image
          width={50}
          height={50}
          src={menuLogo}
          alt="Italo Moreira Advocacia"
        />
        <a href="#">
          <div className="flex  gap-4 items-center text-2xl ">
            {menuText.map((text, index) => (
              <p
                key={index}
                className="text-textPrimary last:border-l-2 border-gray-300 last:pl-4 last:text-lg last:hidden sm:last:block uppercase font-primary"
              >
                {text}
              </p>
            ))}
          </div>
        </a>
      </div>

      {/* Ícone do Menu Mobile */}
      <span
        className="xl:hidden cursor-pointer "
        aria-label="Menu"
        onClick={handleHamburguerMenu}
      >
        <Image
          width={25}
          height={25}
          src={isMenuOpen ? closeIcon : openIcon}
          alt="Menu"
        />
      </span>

      {/* Menu Desktop */}
      <div className={`hidden xl:block items-center uppercase navbar-links `}>
        <ul className="flex">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-textPrimary font-secondary">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu Mobile */}
      <div
        id="mobile-menu"
        className={`mobile-menu xl:hidden navbar-links h-[90vh] w-full bg-secondary fixed right-0 top-[10vh] uppercase  z-10 mobile-menu `}
        onClick={handleHamburguerMenu}
      >
        <ul className="flex flex-col justify-evenly items-center h-full">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-gray-600 transition text-highlight w-full text-center tracking-widest font-secondary "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
