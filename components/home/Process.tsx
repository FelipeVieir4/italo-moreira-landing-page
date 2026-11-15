const steps = [
  {
    title: "Primeiro contato",
    text: "Você conta o que aconteceu pelo WhatsApp, com total sigilo, no seu tempo.",
  },
  {
    title: "Análise do caso",
    text: "Avalio documentos, extratos e conversas e explico quais caminhos são possíveis.",
  },
  {
    title: "Proposta clara",
    text: "Você recebe uma proposta objetiva, sem letras miúdas, antes de tomar qualquer decisão.",
  },
  {
    title: "Acompanhamento",
    text: "Atuação até a conclusão, com atualizações a cada etapa importante do processo.",
  },
];

export default function Process() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-20 text-paper md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-[110px]" />
      <div className="container-site relative">
        <div className="max-w-2xl" data-reveal>
          <p className="eyebrow eyebrow-light">Como funciona</p>
          <h2 className="heading-lg mt-5">Do primeiro contato à solução, com clareza em cada passo.</h2>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              className="group bg-ink p-8 transition-colors duration-500 hover:bg-ink-800 sm:p-9"
            >
              <span className="font-display text-5xl text-gold-light/80 transition-colors group-hover:text-gold-light">
                0{i + 1}
              </span>
              <h3 className="mt-8 font-sans text-lg font-bold tracking-normal">{s.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/60">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
