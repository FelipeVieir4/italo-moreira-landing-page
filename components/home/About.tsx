import Image from "next/image";
import { Compass, HeartHandshake, Scale } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { site } from "@/lib/site";

const pillars = [
  {
    icon: Scale,
    title: "Ética e transparência",
    text: "Orientação honesta sobre riscos, caminhos e custos desde o primeiro contato.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento próximo",
    text: "Contato direto com o advogado responsável pelo seu caso, sem intermediários.",
  },
  {
    icon: Compass,
    title: "Estratégia sob medida",
    text: "Cada caso é analisado individualmente, a partir dos seus documentos e objetivos.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="section bg-paper-2/70">
      <div className="container-site grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div data-reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden="true" className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-gold/40 sm:-left-6 sm:-top-6" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#9a928b] shadow-lift">
            <Image
              src={site.images.seated}
              alt="Advogado Italo Moreira sentado em poltrona, em retrato profissional"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-2xl bg-ink px-6 py-5 text-paper shadow-lift sm:right-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-light">Atuação</p>
            <p className="mt-1.5 font-display text-xl">Cível · Consumidor · Bancário</p>
          </div>
        </div>

        <div>
          <div data-reveal>
            <p className="eyebrow">Sobre o advogado</p>
            <h2 className="heading-lg mt-5 text-ink">Quem vai cuidar do seu caso</h2>
          </div>
          <div data-reveal className="mt-7 space-y-5 text-[1.05rem] leading-relaxed text-muted">
            <p>
              Sou <strong className="font-semibold text-ink">Italo Moreira</strong>, advogado inscrito na{" "}
              {site.oab.replace(" ", " nº ")}. Atuo principalmente em Direito do Consumidor e Bancário — ao lado de
              pessoas que foram vítimas de golpes, fraudes e cobranças abusivas — e também em questões cíveis e de
              família.
            </p>
            <p>
              Acredito que um bom trabalho jurídico começa por ouvir com atenção. Por isso explico cada etapa em
              linguagem clara, mantenho você informado sobre o andamento do caso e construo estratégias personalizadas,
              sempre pautadas pela ética e pela atualização constante.
            </p>
          </div>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <li key={p.title} data-reveal style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
                  <Icon className="h-6 w-6 text-gold-dark" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-4 font-sans text-[0.98rem] font-bold tracking-normal text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </li>
              );
            })}
          </ul>

          <div data-reveal className="mt-12 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-3xl italic text-ink">Italo Moreira</p>
              <p className="mt-1 text-sm text-muted">Advogado · {site.oab}</p>
            </div>
            <WhatsAppButton label="Fale comigo" variant="ink" trackingId="about-whatsapp" />
          </div>
        </div>
      </div>
    </section>
  );
}
