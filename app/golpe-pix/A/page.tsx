import type { Metadata } from "next";
import GolpePixLanding from "../_components/GolpePixLanding";
import { site } from "@/lib/site";

const title = "Caiu no golpe do PIX? Fale com um advogado agora";
const description =
  "Perdeu dinheiro em um golpe do PIX ou fraude bancária? Saiba o que fazer agora e fale com um advogado pelo WhatsApp. Atendimento online em todo o Brasil.";

export const metadata: Metadata = {
  title: { absolute: `${title} | ${site.name}` },
  description,
  alternates: { canonical: "/golpe-pix/A" },
  openGraph: { type: "website", url: "/golpe-pix/A", title, description, images: ["/services-pages-img/golpe-pix-hero.webp"] },
};

export default function GolpePixA() {
  return <GolpePixLanding variant="A" />;
}
