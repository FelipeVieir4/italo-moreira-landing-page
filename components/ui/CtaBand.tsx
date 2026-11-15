import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ColumnMark } from "@/components/brand/Logo";

type Props = {
  title?: string;
  text?: string;
  label?: string;
  message?: string;
};

export default function CtaBand({
  title = "Vamos conversar sobre o seu caso?",
  text = "Conte o que aconteceu pelo WhatsApp. Você recebe uma orientação inicial sobre os próximos passos, com clareza e sigilo.",
  label = "Falar com o advogado",
  message,
}: Props) {
  return (
    <section className="bg-paper pb-20 md:pb-28">
      <div className="container-site">
        <div
          data-reveal
          className="grain relative overflow-hidden rounded-[2rem] bg-ink px-7 py-14 text-center sm:px-14 md:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
          />
          <ColumnMark className="relative mx-auto h-10 w-10 text-gold-light" />
          <h2 className="heading-lg relative mx-auto mt-6 max-w-2xl text-paper">{title}</h2>
          <p className="relative mx-auto mt-5 max-w-xl leading-relaxed text-paper/70">{text}</p>
          <div className="relative mt-9 flex justify-center">
            <WhatsAppButton label={label} message={message} trackingId="cta-band" />
          </div>
        </div>
      </div>
    </section>
  );
}
