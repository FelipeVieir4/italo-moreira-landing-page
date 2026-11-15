import Faq from "@/components/ui/Faq";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { homeFaq } from "@/content/home-faq";

export default function HomeFaq() {
  return (
    <section id="duvidas" className="section bg-paper">
      <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start" data-reveal>
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2 className="heading-lg mt-5 text-ink">Perguntas que recebo todos os dias</h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted">
            Não encontrou a sua dúvida? Mande uma mensagem — cada caso tem particularidades que merecem uma análise
            individual.
          </p>
          <WhatsAppButton label="Enviar minha dúvida" variant="ink" className="mt-8" trackingId="faq-whatsapp" />
        </div>
        <div data-reveal>
          <Faq items={homeFaq} />
        </div>
      </div>
    </section>
  );
}
