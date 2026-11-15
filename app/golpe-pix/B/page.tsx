import type { Metadata } from "next";
import GolpePixLanding from "../_components/GolpePixLanding";
import { site } from "@/lib/site";

const title = "Caiu no golpe do PIX? Fale com um advogado agora";
const description =
  "Perdeu dinheiro em um golpe do PIX ou fraude bancária? Saiba o que fazer agora e fale com um advogado pelo WhatsApp. Atendimento online em todo o Brasil.";

/**
 * Variante B (teste A/B de campanhas): mesmo conteúdo da A, sem imagem no topo.
 * Fica fora do índice do Google e aponta a A como versão canônica, para não
 * haver conteúdo duplicado.
 */
export const metadata: Metadata = {
  title: { absolute: `${title} | ${site.name}` },
  description,
  alternates: { canonical: "/golpe-pix/A" },
  robots: { index: false, follow: true },
};

export default function GolpePixB() {
  return <GolpePixLanding variant="B" />;
}
