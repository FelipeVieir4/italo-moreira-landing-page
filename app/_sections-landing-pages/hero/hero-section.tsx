import React from 'react';
import './hero-section.styles.css';

const HeroSection: React.FC = () => {
    return (
        <div className="relative h-[70vh] w-full">
            {/* Background image */}
            <div className="absolute top-0 left-0 w-full h-full">
                <img src="./hero/hero-bg-img3.jpg" alt="Imagem de fundo" className="object-cover w-full h-full" />
            </div>

            {/* Overlay com transparência e texto */}
            <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-70 flex flex-col justify-center items-center">
                {/* Título */}
                <h1 className=" fade-in text-white text-4xl md:text-5xl font-semibold text-center leading-tight px-4">
                    Advocacia de Excelência para Suas Necessidades Jurídicas
                </h1>
                {/* Subtítulo */}
                <p className="fade-in delay-0s5 text-white text-xl md:text-2xl mt-4 text-center px-6 max-w-2xl">
                    Nossa equipe especializada está pronta para defender seus direitos com compromisso e integridade.
                </p>
                {/* Botão de ação */}
                <a href="#contact" className=" fade-in delay-1s mt-6 bg-highlight text-white py-2 px-6 rounded-lg text-lg font-medium hover:bg-highlightDark transition-colors">
                    Agende uma Consulta
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
