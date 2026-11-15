import Link from "next/link";
import Logo from "@/components/brand/Logo";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { mainNav, site, whatsappLink } from "@/lib/site";
import { services, serviceHref } from "@/content/services/catalog";

export default function Footer() {
  const year = new Date().getFullYear();
  const featured = services.filter((s) => s.area !== "criminal");

  return (
    <footer className="grain bg-ink-950 text-paper/70">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr_1.1fr] lg:gap-10">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-6 text-[0.95rem] leading-relaxed">
            Advocacia cível, do consumidor e bancária, com atendimento presencial em {site.city} e online para todo o
            Brasil.
          </p>
          <p className="mt-4 text-sm text-paper/45">{site.oab}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-gold-light/60 hover:text-gold-light"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-gold-light/60 hover:text-gold-light"
            >
              <LinkedInIcon className="h-[17px] w-[17px]" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              data-cta="footer-whatsapp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-gold-light/60 hover:text-gold-light"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <FooterCol title="Navegação">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-gold-light">
                {item.label}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Áreas de atuação">
          {featured.map((s) => (
            <li key={s.slug}>
              <Link href={serviceHref(s)} className="transition-colors hover:text-gold-light">
                {s.name}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Contato">
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-cta="footer-phone" className="transition-colors hover:text-gold-light">
              WhatsApp {site.phoneDisplay}
            </a>
          </li>
          <li>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-light">
              {site.social.instagramHandle}
            </a>
          </li>
          <li>
            {site.city} — {site.region}
          </li>
          <li>Atendimento presencial e online</li>
        </FooterCol>
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="container-site flex flex-col gap-3 py-6 text-[0.8rem] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · {site.oab}
          </p>
          <p>As informações deste site têm caráter informativo e não substituem a consulta a um advogado.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-paper">{title}</h2>
      <ul className="mt-5 space-y-3 text-[0.95rem]">{children}</ul>
    </div>
  );
}
