"use client";
import React, { useState } from "react";
import "./navbar.styles.css";
import { handleHamburguerMenu } from "./navbar.script.js";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { href: "#home", label: "Início" },
        { href: "#servicos", label: "Serviços" },
        { href: "#contato", label: "Contato" },
        { href: "#numeros", label: "Números" },
        { href: "#mais", label: "Mais" },
    ];

    return (
        <nav className="navbar-container ">
            <div className="navbar-logo">
                <img src="./logo/logo.svg" alt="Italo Moreira Advocacia" />
                <a href="#home">
                    <div className="logo-text">
                        <p>Italo Moreira</p>
                        <p>Advocacia</p>
                    </div>
                </a>
            </div>



            <span className="navbar-toggle-icon" aria-label="Menu" onClick={handleHamburguerMenu}>&#9776;</span>


            <div className="navbar-menu" onClick={handleHamburguerMenu}>
                <ul className="navbar-links">
                    {menuItems.map((item, index) => (
                        <li key={index}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
