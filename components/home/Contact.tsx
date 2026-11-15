import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { site, whatsappLink } from "@/lib/site";

export default function Contact() {
  const items = [
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: site.phoneDisplay,
      href: whatsappLink(),
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: site.social.instagramHandle,
      href: site.social.instagram,
    },
    {
      icon: MapPin,
      label: "Escritório",
      value: `${site.city} — ${site.region}`,
      href: site.mapsLink,
    },
    {
      icon: Clock,
      label: "Atendimento",
      value: "Presencial com agendamento e online",
    },
  ];

  return (
    <section id="contato" className="grain relative overflow-hidden bg-ink py-20 text-paper md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="container-site relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <div data-reveal>
            <p className="eyebrow eyebrow-light">Contato</p>
            <h2 className="heading-lg mt-5">Fale diretamente com o advogado</h2>
            <p className="mt-6 max-w-md leading-relaxed text-paper/70">
              Atendimento presencial em Belo Horizonte, com agendamento, e online para qualquer lugar do Brasil.
            </p>
          </div>

          <ul data-reveal className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {items.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-gold-light">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-paper/45">{item.label}</span>
                    <span className="mt-0.5 block text-[1.02rem] text-paper">{item.value}</span>
                  </span>
                  {item.href && <ArrowUpRight className="h-4 w-4 text-paper/40 transition-colors group-hover:text-gold-light" aria-hidden="true" />}
                </>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-4">
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <WhatsAppButton label="Iniciar conversa" className="mt-10" trackingId="contact-whatsapp" />
        </div>

        <div data-reveal className="overflow-hidden rounded-3xl bg-ink-800 ring-1 ring-white/10">
          <iframe
            src={site.mapsEmbed}
            title="Localização do escritório Italo Moreira Advocacia no Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block aspect-[4/3] w-full border-0 lg:aspect-[5/6]"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
