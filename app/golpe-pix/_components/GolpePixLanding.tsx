import Image from "next/image";
import { AlarmClock, Check, ShieldAlert } from "lucide-react";
import Logo from "@/components/brand/Logo";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Faq, { faqJsonLd } from "@/components/ui/Faq";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import JsonLd from "@/components/seo/JsonLd";
import { WhatsAppIcon } from "@/components/icons";
import { site, whatsappLink } from "@/lib/site";
import { faqData } from "../faqData";

const MESSAGE = "Olá, Dr. Italo! Caí em um golpe do PIX e preciso de ajuda.";

const steps = [
  {
    title: "Converse com um advogado especialista em golpes bancários",
    text: "O atendimento é rápido, online e feito diretamente pelo WhatsApp.",
  },
  {
    title: "Acesse o aplicativo do seu banco imediatamente",
    text: "Solicite o bloqueio e a devolução pelo Mecanismo Especial de Devolução (MED). Anote o número do protocolo.",
  },
  {
    title: "Ligue para o Banco Central (BACEN) — telefone 145",
    text: "Informe os dados da transação e do golpe. Atendimento de segunda a sexta, das 8h às 20h.",
  },
  {
    title: "Registre um boletim de ocorrência",
    text: "Na delegacia mais próxima ou online, no site da polícia do seu estado. Guarde o número da ocorrência.",
  },
];

const actions = [
  "Acionar judicialmente o banco por falha na segurança",
  "Solicitar o bloqueio de valores na conta do golpista",
  "Pedir o bloqueio judicial de valores via SisbaJud",
  "Buscar indenização por danos morais e materiais",
  "Acompanhar todo o processo com transparência",
];

export default function GolpePixLanding({ variant }: { variant: "A" | "B" }) {
  return (
    <>
      <JsonLd data={faqJsonLd(faqData)} />

      <header className="absolute inset-x-0 top-0 z-30">
        <div className="container-site flex h-[var(--header-h)] items-center justify-between">
          <Logo />
          <a
            href={whatsappLink(MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="pix-header"
            className="hidden items-center gap-2 rounded-full border border-gold-light/50 px-5 py-2.5 text-[0.85rem] font-semibold text-gold-light transition-all hover:bg-gold-light hover:text-ink sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar com o advogado
          </a>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section className="grain relative overflow-hidden bg-ink pt-[var(--header-h)] text-paper">
          {variant === "A" && (
            <>
              <Image
                src="/services-pages-img/golpe-pix-hero.webp"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-30"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />
            </>
          )}
          {variant === "B" && (
            <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-gold/[0.14] blur-[120px]" />
          )}
          <div className="container-site relative flex flex-col items-center pb-20 pt-14 text-center md:pb-28 md:pt-20">
            <p className="eyebrow eyebrow-light">Golpes e fraudes bancárias</p>
            <h1 className="heading-xl mt-6 max-w-4xl">
              Caiu no golpe do PIX? <em className="font-medium text-gold-light">Você pode recuperar o seu dinheiro.</em>
            </h1>
            <p className="mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 text-lg leading-relaxed text-paper/85 backdrop-blur">
              Se você perdeu mais de <strong className="font-semibold text-gold-light">R$ 2.000,00</strong> em um golpe
              bancário, ainda há solução. O tempo está correndo… quanto mais você espera, menores são as chances.
            </p>
            <p className="mt-8 text-paper/75">
              <strong className="font-semibold uppercase tracking-wide text-paper">Fale agora</strong> com um advogado e
              comece a buscar seu dinheiro de volta.
            </p>
            <WhatsAppButton label="Quero recuperar meu dinheiro agora" message={MESSAGE} className="mt-6" trackingId={`pix-${variant}-hero`} />
            <p className="mt-3 text-sm text-paper/50">Clique para falar direto com o advogado no WhatsApp</p>
          </div>
        </section>

        {/* O QUE FAZER AGORA */}
        <section className="bg-paper py-20 md:py-24">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">Passo a passo</p>
              <h2 className="heading-lg mt-5 text-ink">
                O que você deve fazer <span className="italic text-gold-dark">agora</span> para tentar recuperar seu
                dinheiro
              </h2>
            </div>
            <ol className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
              {steps.map((s, i) => (
                <li key={s.title} data-reveal className="flex gap-5 rounded-2xl border border-line bg-white p-7 shadow-card">
                  <span className="font-display text-4xl leading-none text-gold">{i + 1}</span>
                  <div>
                    <h3 className="font-sans text-[1.05rem] font-bold leading-snug tracking-normal text-ink">{s.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-12 flex flex-col items-center text-center">
              <WhatsAppButton label="Quero falar com o advogado agora" message={MESSAGE} variant="ink" trackingId={`pix-${variant}-steps`} />
              <p className="mt-5 font-semibold text-[#b42318]">Não perca mais tempo!</p>
              <p className="mt-1 text-muted">Quanto mais rápido você agir, maiores são as chances de recuperar.</p>
            </div>
          </div>
        </section>

        {/* ESPECIALISTA */}
        <section className="grain relative overflow-hidden bg-ink-800 text-paper">
          <div className="container-site grid items-center gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="heading-lg max-w-2xl">Fale agora com um advogado especialista em golpes bancários</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
                Atendimento <span className="text-gold-light">rápido</span>, com <span className="text-gold-light">respeito</span> e{" "}
                <span className="text-gold-light">segurança</span>. Atendimento 100% online, em todo o Brasil.
              </p>
              <WhatsAppButton label="Quero falar com o advogado agora" message={MESSAGE} className="mt-9" trackingId={`pix-${variant}-band`} />
            </div>
            <div className="relative mx-auto hidden h-[22rem] w-full max-w-sm lg:block">
              <Image src="/services-pages-img/cell-pix.webp" alt="Celular com o aplicativo do PIX aberto" fill sizes="384px" className="object-contain" />
            </div>
          </div>
        </section>

        {/* AÇÕES */}
        <section className="bg-paper py-20 md:py-24">
          <div className="container-site">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="heading-lg text-ink">
                Perdeu mais de <span className="text-gold-dark">R$ 2.000,00?</span>
              </h2>
              <p className="mt-4 text-lg text-muted">Veja o que eu posso fazer por você:</p>
            </div>
            <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
              {actions.map((a) => (
                <li key={a} data-reveal className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 text-[1.02rem] text-body">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-gold-light">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-center text-lg text-ink">
              Já ajudei diversas pessoas a buscarem os valores perdidos. O próximo pode ser{" "}
              <strong className="uppercase text-gold-dark">você!</strong>
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton label="Avaliar meu caso agora no WhatsApp" message={MESSAGE} variant="ink" trackingId={`pix-${variant}-actions`} />
            </div>
          </div>
        </section>

        {/* ALERTA */}
        <section className="relative overflow-hidden bg-ink text-paper">
          <Image src="/services-pages-img/clocks-bg.webp" alt="" fill sizes="100vw" className="object-cover opacity-[0.12] blur-[2px]" />
          <div className="container-site relative py-20 text-center md:py-24">
            <AlarmClock className="mx-auto h-10 w-10 text-gold-light" strokeWidth={1.5} aria-hidden="true" />
            <h2 className="heading-lg mx-auto mt-6 max-w-3xl">
              Não cometa o erro de <span className="italic text-[#f97066]">esperar demais</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-paper/75">
              Quanto mais você espera, mais difícil fica rastrear o seu dinheiro e recuperá-lo. Os bancos agem com
              rapidez, mas depende de você dar o primeiro passo — e, sem orientação jurídica, você pode perder a chance de
              recuperar o que é seu.
            </p>
            <WhatsAppButton label="Quero falar com o advogado agora" message={MESSAGE} className="mt-10" trackingId={`pix-${variant}-alert`} />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-paper py-20 md:py-24">
          <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Ainda tem dúvidas?</p>
              <h2 className="heading-lg mt-5 text-ink">Perguntas frequentes</h2>
              <ShieldAlert className="mt-8 h-8 w-8 text-gold-dark" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <Faq items={faqData} />
          </div>
        </section>

        {/* SOBRE */}
        <section className="grain relative overflow-hidden bg-ink py-20 text-paper md:py-24">
          <div className="container-site grid items-center gap-12 lg:grid-cols-[auto_1fr]">
            <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full ring-1 ring-gold/40 ring-offset-8 ring-offset-ink">
              <Image src={site.images.portrait} alt="Advogado Italo Moreira" fill sizes="224px" className="object-cover object-[50%_15%]" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="heading-lg">Segurança. Rapidez. Experiência jurídica.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">
                Sou <span className="font-semibold text-gold-light">Italo Moreira</span>, advogado com atuação em Direito
                Bancário e golpes financeiros. Atuo com ética, responsabilidade e dedicação total a cada caso.
              </p>
              <p className="mt-3 text-paper/60">Clique abaixo e fale diretamente comigo no WhatsApp.</p>
              <WhatsAppButton label="Falar com o advogado agora" message={MESSAGE} className="mt-8" trackingId={`pix-${variant}-about`} />
              <p className="mt-8 text-sm text-paper/50">
                Italo Moreira — {site.oab} · Atendimento online em todo o Brasil
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat message={MESSAGE} />
    </>
  );
}
