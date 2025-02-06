"use client";
import React, { useState } from "react";
import "./navbar.styles.css";

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
        <nav className="bg-muted min-h-20 flex justify-center items-center shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div>
                    <a href="#home">
                        <div className="uppercase flex items-center gap-4">
                            <h1 className="text-2xl font-primary font-bold">Italo Moreira</h1>
                            <p className="border-l border-primary pl-3">Advocacia</p>
                        </div>
                    </a>
                </div>

                <span className="block md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
                    &#9776;
                </span>

                <div className={`md:flex ${isOpen ? "block" : "hidden"} flex-col md:flex-row md:items-center`}>
                    <ul className="flex flex-col md:flex-row gap-4 uppercase">
                        {menuItems.map((item) => (
                            <li key={item.label} className="font-secondary hover:bg-primary hover:text-muted hover:cursor-pointer p-2 rounded-md transition duration-300">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
