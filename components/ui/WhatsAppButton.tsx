import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

type Props = {
  label?: string;
  message?: string;
  variant?: "gold" | "ink" | "ghost-light" | "ghost-dark";
  className?: string;
  /** Identificador para rastreamento no GTM (atributo data-cta). */
  trackingId?: string;
};

/**
 * Botão de contato via WhatsApp. É um link real (<a>), então funciona sem
 * JavaScript, pode ser rastreado pelo GTM (clique em link) e é acessível.
 */
export default function WhatsAppButton({
  label = "Falar no WhatsApp",
  message,
  variant = "gold",
  className = "",
  trackingId = "whatsapp",
}: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={trackingId}
      className={`btn-${variant} ${className}`}
    >
      <WhatsAppIcon />
      <span>{label}</span>
    </a>
  );
}
