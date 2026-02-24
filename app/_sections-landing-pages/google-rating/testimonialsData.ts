export interface Testimonial {
  id: number;
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marcos Oliveira",
    initials: "MO",
    rating: 5,
    date: "Janeiro de 2025",
    text: "O Dr. Italo foi fundamental na resolução do meu caso de divórcio. Ele conduziu tudo com muita competência, clareza e empatia. Senti segurança do início ao fim do processo. Recomendo sem hesitar.",
  },
  {
    id: 2,
    name: "Fernanda Costa",
    initials: "FC",
    rating: 5,
    date: "Novembro de 2024",
    text: "Contratei o Dr. Italo para tratar de um caso de danos morais contra uma empresa que negativou meu nome indevidamente. O resultado foi melhor do que esperava. Atendimento humano e muito profissional.",
  },
  {
    id: 3,
    name: "Ricardo Souza",
    initials: "RS",
    rating: 5,
    date: "Outubro de 2024",
    text: "Estava passando por uma situação muito delicada envolvendo violência doméstica e o Dr. Italo me deu todo o suporte jurídico necessário. Conseguimos as medidas protetivas rapidamente. Gratidão enorme.",
  },
  {
    id: 4,
    name: "Ana Beatriz Lima",
    initials: "AL",
    rating: 5,
    date: "Agosto de 2024",
    text: "Precisei de orientação jurídica em relação à guarda compartilhada dos meus filhos. O Dr. Italo foi extremamente atencioso, explicou cada etapa do processo e defendeu os interesses dos meus filhos com dedicação.",
  },
  {
    id: 5,
    name: "Gustavo Mendes",
    initials: "GM",
    rating: 5,
    date: "Junho de 2024",
    text: "Fui vítima de um golpe do PIX e achei que tinha perdido o dinheiro para sempre. O Dr. Italo me orientou e conseguimos iniciar as medidas legais cabíveis. Ótimo profissional, comunicativo e dedicado.",
  },
  {
    id: 6,
    name: "Juliana Ferreira",
    initials: "JF",
    rating: 5,
    date: "Abril de 2024",
    text: "Precisei de assistência jurídica em uma questão contratual complexa. O Dr. Italo analisou o caso com muita precisão e resolveu tudo extrajudicialmente, poupando tempo e recursos. Atendimento excelente!",
  },
];
