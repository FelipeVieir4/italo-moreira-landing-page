"use client";
import React, { useEffect } from "react";

const testimonialsData = [
  {
    id: 1,
    text: `Gostaria de compartilhar minha experiência como sua cliente.
    Desde o primeiro atendimento, fui tratado com muita atenção, profissionalismo e dedicação. 
    Sempre esteve disponível para esclarecer minhas dúvidas e me orientou com muita paciência e clareza em cada etapa do processo.
    Fiquei impressionado com sua eficiência e conhecimento jurídico, que fizeram toda a diferença para a resolução do meu caso. 
    Além disso, sua estratégia bem estruturada e abordagem resolutiva me deram segurança e tranquilidade ao longo de todo o processo. 
    Sou muito grata pelo excelente trabalho. 
    
    Obrigado Dr Italo!`,
    name: "Cliente 1",
    data: "20 de março de 2025",
  },
  {
    id: 2,
    text: `Um profissional dedicado e muito atencioso. Me deixou a par de todas as etapas e evoluções do processo de maneira clara e objetiva. Recomendo!`,
    name: "Cliente 2",
    data: "18 de março de 2025",
  },

  {
    id: 3,
    text: `Poder contar com o Dr. Italo durante o meu processo foi a melhor escolha que fiz. Ótima assessoria, se prontificou a tirar dúvidas, se apresenta disponível para somar com seus clientes, atencioso e demonstra claramente seu comprometimento profissional. Hoje sei com quem posso contar se precisar. Somente agradecer e lhe indicar para aqueles que precisam do seu trabalho. Muito obrigada por tudo.`,
    name: "Cliente 3",
    data: "01 de fevereiro de 2025",
  },
  {
    id: 4,
    text: `O dr Italo foi o advogado que acompanhou meu processo que durante todo o acordo foi dado a mim toda a assistência em tempo integral me mantendo informanda de todas as decisões e não ficando nenhuma dúvida sobre a decisão Muito obrigada por todo serviço prestado com excelência`,
    name: "Cliente 4",
    data: "17 de fevereiro de 2025",
  },
  {
    id: 5,
    text: `Eu estava precisando de um advogado e não encontrava, até que encontrei o Dr. Ítalo que prontamente me atendeu, com muita atenção e humanidade. Agora tenho um advogado que me orienta e resolve minhas demandas na justiça. Estou feliz e satisfeito com o seu profissionalismo.`,
    name: "Cliente 4",
    data: "05 de janeiro de 2025",
  },
];

interface Testimonial {
  id: number;
  text: string;
  name: string;
  data: string;
}

const getRandomTestimonials = (
  data: Testimonial[],
  count: number
): Testimonial[] => {
  const uniqueData = Array.from(new Set(data.map((item) => item.id))).map(
    (id) => data.find((item) => item.id === id)!
  );
  const shuffled = uniqueData.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Testimonials: React.FC = () => {
  const [testimonialDisplay, setTestimonialDisplay] = React.useState<
    Testimonial[]
  >([]);

  useEffect(() => {
    const randomTestimonials = getRandomTestimonials(testimonialsData, 2);
    setTestimonialDisplay(randomTestimonials);
  }, []);

  return (
    <section id="testimonials">
      <div className="text-primary py-10 px-2 bg-primary">
        <div className="container mx-auto">
          {/* <h2 className=" text-center font-primary uppercase text-3xl font-bold tracking-wide text-primary md:text-4xl mb-10">
            Depoimentos
          </h2> */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-2  ">
            {testimonialDisplay.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl p-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-secondary mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6 text-primary font-secondary text-sm">
                  {testimonial.text}
                </p>
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-medium text-sm font-secondary text-secondary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-secondary font-secondary">
                      {testimonial.data}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
