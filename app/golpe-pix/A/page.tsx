import Image from "next/image";
import ContactButton from "@/components/btn-Contact/btn-contact";
import WhatsAppFloatingButton from "@/components/btn-WhatsAppFloatingButton/WhatsAppFloatingButton";
import Footer from "../../_sections-landing-pages/footer/footer";
import Link from "next/link";
import FAQComponent from "@/components/faq/faq-component";
import { faqData } from "./faqData";
import "./page.css";
import GoogleRatingPage from "@/app/_sections-landing-pages/google-rating/page";

const menuText = ["Italo Moreira", "Advocacia"];
const menuLogo = "/logo/logo-white.png";
const whatsappLabel = "QUERO RECUPERAR MEU DINHEIRO AGORA";
const whatsappLabel2 = "QUERO FALAR COM O ADVOGADO AGORA!";
const whatsappLabel3 = "AVALIAR MEU CASO AGORA NO WHATSAPP";

export default function GolpePixPage() {
  return (
    <div className="relative bg-primary text-white">
      {/* Menu */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-16 z-50 flex items-center gap-2 sm:gap-4">
        <Image
          width={40}
          height={40}
          src={menuLogo}
          alt="Italo Moreira Advocacia"
          className="w-10 h-10 sm:w-[50px] sm:h-[50px]"
        />
        <Link href="/#">
          <div className="flex gap-2 sm:gap-4 items-center text-lg sm:text-2xl">
            {menuText.map((text, index) => (
              <p
                key={index}
                className="text-muted last:border-l-2 border-gray-300 last:pl-2 sm:last:pl-4 last:text-base sm:last:text-lg last:hidden sm:last:block uppercase font-primary"
              >
                {text}
              </p>
            ))}
          </div>
        </Link>
      </div>

      <WhatsAppFloatingButton />

      {/* HERO */}
      <section className="relative max-h-fit min-h-[60vh] sm:h-[70vh] w-full flex items-center justify-center">
        <Image
          src="/services-pages-img/golpe-pix-hero.jpg"
          alt="Caiu no golpe do PIX?"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="mt-[20%] sm:mt-0 relative z-10 px-2 sm:px-4 w-full h-full p-4 sm:p-8 flex flex-col items-center justify-center text-center">
          <h1
            id="hero-service-section"
            className="text-3xl sm:text-5xl md:text-7xl font-primary font-bold uppercase tracking-wide"
          >
            Caiu no golpe do PIX?
          </h1>
          <h2
            id="hero-service-subtitle"
            className="mt-2 sm:mt-4 text-base sm:text-lg md:text-2xl font-secondary tracking-wide text-textPrimary"
          >
            Existe solução jurídica para você recuperar seu dinheiro
          </h2>
          <div className="flex flex-col gap-2 mt-4 sm:mt-6 max-w-screen-lg bg-primary/85 p-2 rounded-lg">
            <p
              id="hero-service-subtitle"
              className="text-base sm:text-lg md:text-xl font-secondary"
            >
              Se você perdeu mais de{" "}
              <span className="font-bold text-highlight">R$ 2.000,00</span> em
              um golpe bancário, ainda há solução. O tempo tá correndo… quanto
              mais você espera, menores são as chances.
            </p>
          </div>
          <p
            id="hero-service-subtitle"
            className="text-base sm:text-lg md:text-xl font-secondary mt-4 sm:mt-8"
          >
            <span className="uppercase">Fale agora</span> com um advogado e
            comece a buscar seu dinheiro de volta.
          </p>
          <div id="hero-cta-button" className="flex justify-center ">
            <ContactButton label={whatsappLabel} />
          </div>
          <p
            id="hero-cta-button"
            className="mt-2 text-sm sm:text-base font-secondary"
          >
            Atendimento rápido direto via WhatsApp.
          </p>
        </div>
      </section>

      {/* O QUE FAZER AGORA */}
      <section className="mt-8 sm:mt-12 mb-8 sm:mb-10 px-2 sm:px-4 md:px-0 bg-gradient-to-b from-primary via-secondary to-primary max-h-fit flex flex-col items-center justify-center text-left">
        <div className="sticky max-w-3xl sm:max-w-6xl max-h-fit mx-auto bg-primary rounded-xl shadow-lg p-4 sm:p-8 border border-white/20 backdrop-blur-sm">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-primary font-semibold uppercase tracking-wide text-highlight mb-4 sm:mb-6 text-center">
            Passo a passo imediato para recuperar seu dinheiro:
          </h2>
          <ol className="list-decimal list-inside space-y-2 sm:space-y-4 text-base sm:text-lg font-secondary text-textPrimary">
            <li>
              <span className="font-bold">
                Acesse o aplicativo do seu banco imediatamente
              </span>
              <br />
              Solicite{" "}
              <strong>
                o bloqueio e a devolução via Mecanismo Especial de Devolução
                (MED)
              </strong>
              . Anote o protocolo.
            </li>
            <li>
              <span className="font-bold">
                Ligue para o Banco Central (BACEN):
              </span>
              <br />
              Informe os dados do golpe. Tel: <strong>145</strong> — Atendimento
              de segunda a sexta, das 8h às 20h.
            </li>
            <li>
              <span className="font-bold">
                Registre um Boletim de Ocorrência:
              </span>
              <br />
              Compareça à delegacia mais próxima ou faça online no site da
              polícia do seu estado. Guarde o número da ocorrência.
            </li>
            <li>
              <span className="font-bold">
                Converse comigo - advogado especialista em golpes bancários
              </span>
              <br />O atendimento é{" "}
              <span className="font-bold text-highlight">
                rápido, online e gratuito
              </span>{" "}
              via whatsApp.
            </li>
          </ol>
          <div className="flex justify-center mt-6 sm:mt-8">
            <ContactButton label={whatsappLabel2} />
          </div>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg font-secondary text-center text-red-500">
            Não perca mais tempo!
          </p>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg font-secondary text-center text-highlight">
            Quanto mais rápido você agir, maiores são as chances de recuperar!
          </p>
        </div>
      </section>

      <section className="relative  bg-secondary text-white text-start flex flex-col items-start justify-center h-fit">
        <div className="z-10 py-10 sm:py-16 px-2 sm:px-6 md:px-12">
          <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl uppercase mb-2 sm:mb-4 bg-secondary max-w-fit">
            Fale agora com um advogado especialista em golpes bancários
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-secondary mb-1 sm:mb-2 bg-secondary max-w-fit">
            Atendimento rápido, com respeito e segurança ao falar com um
            advogado que resolve!
          </p>
          <p className="text-base sm:text-lg font-secondary bg-secondary max-w-fit">
            Atendimento 100% online, em todo o Brasil.
          </p>
          <div className="flex justify-start mt-2">
            <ContactButton label={whatsappLabel2} />
          </div>
        </div>

        <div className="absolute right-0 bottom-0 colapse-0 hidden sm:block">
          <Image
            src="/services-pages-img/cell-pix.png"
            alt="Advogado especialista em golpes bancários"
            width={400}
            height={400}
          />
        </div>
      </section>

      <section className="py-10 sm:py-16 px-2 sm:px-6 md:px-12 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 text-textSecondary text-center relative max-h-fit">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
          <Image
            src="/services/Patterns.svg"
            alt="Imagem de fundo"
            fill
            className="object-cover"
            style={{
              filter: "invert(80%) sepia(1) saturate(5) hue-rotate(180deg)",
            }}
          />
        </div>
        <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl uppercase mb-1 sm:mb-2 text-secondary">
          Perdeu mais de R${" "}
          <span className="font-secondary text-highlight">2.000,00?</span>
        </h2>
        <p className="text-base sm:text-lg font-secondary mb-4 sm:mb-8 text-secondary">
          Veja o que eu posso fazer por você:
        </p>
        <ul className="max-w-2xl sm:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
          <li className="bg-slate-200 p-3 sm:p-4 rounded-lg border-l-4 border-secondary">
            Acionar judicialmente o banco por falha na segurança
          </li>
          <li className="bg-slate-200 p-3 sm:p-4 rounded-lg border-l-4 border-secondary">
            Solicitar bloqueio de valores na conta do golpista
          </li>
          <li className="bg-slate-200 p-3 sm:p-4 rounded-lg border-l-4 border-secondary">
            Ativar mecanismos legais de devolução via BacenJud
          </li>
          <li className="bg-slate-200 p-3 sm:p-4 rounded-lg border-l-4 border-secondary">
            Atuar para obtenção de indenização por danos morais e materiais
          </li>
          <li className="bg-slate-200 p-3 sm:p-4 rounded-lg border-l-4 border-secondary">
            Acompanhar todo o processo com transparência
          </li>
        </ul>
        <p className="mt-4 sm:mt-8 text-base sm:text-lg font-secondary text-center">
          Já ajudei diversos clientes a reverter perdas.{" "}
          <span className="text-highlight rounded ">Agora é a sua vez.</span>
        </p>
        <div className="flex justify-center mt-4 sm:mt-8">
          <ContactButton label={whatsappLabel3} />
        </div>
      </section>

      {/* ALERTA */}
      <section className="relative py-10 sm:py-16 bg-secondary text-textPrimary text-center">
        <div className="absolute w-full h-full top-0 bg-slate-200 opacity-5 pointer-events-none">
          <Image
            src="/services-pages-img/clocks-bg.png"
            alt="Alerta de golpe PIX"
            fill
            className="object-cover"
            style={{ filter: "blur(2px)" }}
          />
        </div>
        <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl uppercase mb-2 sm:mb-4">
          Não cometa o erro de
          <span className="text-red-500"> esperar demais</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-lg max-w-2xl sm:max-w-4xl mx-auto font-secondary">
          Quanto mais você espera, mais difícil fica rastrear o seu dinheiro e
          recuperá-lo. Os bancos agem com rapidez, mas depende de você dar o
          primeiro passo — e sem orientação jurídica, você perderá a chance de
          recuperar o que é seu
        </p>
        <div className="flex justify-center mt-4 sm:mt-8">
          <ContactButton label={whatsappLabel2} />
        </div>
      </section>

      <section className="py-10 sm:py-16 px-2 sm:px-6 md:px-12 bg-gradient-to-b from-gray-100 to-gray-200 text-textSecondary text-center">
        <h2 className="uppercase font-primary text-xl sm:text-2xl">
          Ainda tem dúvidas?
        </h2>
        <FAQComponent faqData={faqData} />
      </section>

      {/* SOBRE */}
      <section className="py-10 sm:py-16 px-2 sm:px-6 md:px-12 bg-primary text-white text-center">
        <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4 first-letter:uppercase">
          Segurança. Rapidez. Experiência jurídica comprovada.
        </h2>
        <p className="text-thin text-base sm:text-xl max-w-2xl sm:max-w-6xl mx-auto font-secondary mb-2 sm:mb-4">
         Sou <span className="text-highlight text-bold ">Ítalo Moreira</span>, advogado especialista em Direito Bancário e Golpes Financeiros.
 Atuo com ética, responsabilidade e dedicação total a cada caso.
        </p>
        <p className="text-thin font-secondary mb-2">
          Clique abaixo e fale diretamente comigo no WhatsApp.
        </p>
        <div className="flex justify-center mt-2 sm:mt-4">
          <ContactButton label="FALAR COM O ADVOGADO AGORA" />
        </div>
        <p className="mt-4 sm:mt-8 text-xs sm:text-base font-secondary">
          Ítalo Moreira – OAB 235.948
          <br />
          Atendimento online | Avaliação gratuita | Atuação com ética e
          resultados reais
        </p>
      </section>

      <GoogleRatingPage />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
