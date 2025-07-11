// animations.js

function animateOnScroll() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  // IDs que queremos observar
  const idsToAnimate = [
    "hero-service-section",
    "hero-service-subtitle",
    "hero-cta-button",
    "tagline-text",
    "secondary-cta-section",
    "faq-section",
    "footer-section",
  ];

  // Para os itens da lista benefits
  const benefitsItems = document.querySelectorAll("#benefits-list li");

  // Callback para Intersection Observer
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // desativa observação após animar
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  // Observar os IDs principais
  idsToAnimate.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      observer.observe(el);
    }
  });

  // Observar cada benefício individualmente
  benefitsItems.forEach((item) => observer.observe(item));
}

// Esperar carregar o DOM antes de ativar
document.addEventListener("DOMContentLoaded", animateOnScroll);
