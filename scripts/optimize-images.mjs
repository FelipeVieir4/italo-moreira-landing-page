/**
 * Gera as versões otimizadas (WebP/JPG) das imagens usadas no site.
 * Rode com: npm run images
 *
 * As fotos originais em alta resolução ficam em assets/originals (fora de
 * public/, então não são publicadas). Os arquivos gerados vão para public/images.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const out = (p) => path.join("public", "images", p);

const jobs = [
  // Retratos
  { src: "assets/originals/italo-retrato.jpg", dest: out("italo-retrato.webp"), width: 1000, quality: 78 },
  { src: "assets/originals/italo-sentado.jpg", dest: out("italo-sentado.webp"), width: 1000, quality: 78 },
  {
    src: "assets/originals/italo-retrato.jpg",
    dest: out("italo-avatar.webp"),
    extract: { left: 1637, top: 900, width: 1600, height: 1600 },
    width: 240,
    quality: 80,
  },
  // Fundos
  { src: "assets/legacy/law-office-bg-hd.jpg", dest: out("bg/escritorio.webp"), width: 1600, quality: 70 },
  { src: "assets/legacy/generic-bg.jpg", dest: out("bg/tribunal.webp"), width: 1280, quality: 70 },
  // Capas do blog
  { src: "assets/legacy/golpe-pix-hero.jpg", dest: out("blog/golpe-do-pix.webp"), width: 1600, quality: 72 },
  { src: "assets/legacy/hero-bg-img5.jpg", dest: out("blog/nome-negativado.webp"), width: 1600, quality: 72 },
  { src: "assets/legacy/law-office-bg-hd.jpg", dest: out("blog/emprestimo-nao-contratado.webp"), width: 1600, quality: 72 },
  { src: "assets/legacy/divorce-img-o.jpg", dest: out("blog/divorcio-em-cartorio.webp"), width: 1600, quality: 72 },
];

for (const job of jobs) {
  await mkdir(path.dirname(job.dest), { recursive: true });
  let img = sharp(job.src).rotate();
  if (job.extract) img = img.extract(job.extract);
  img = img.resize({ width: job.width, withoutEnlargement: true });
  await img.webp({ quality: job.quality }).toFile(job.dest);
  console.log("✓", job.dest);
}

// Imagem padrão de compartilhamento (Open Graph) 1200x630
const W = 1200;
const H = 630;
const photo = await sharp("assets/originals/italo-retrato.jpg")
  .rotate()
  .extract({ left: 600, top: 300, width: 3280, height: 3600 })
  .resize({ width: 520, height: 630, fit: "cover", position: "top" })
  .toBuffer();

const overlay = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#0B1220" stop-opacity="1"/>
      <stop offset="1" stop-color="#0B1220" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="640" y="0" width="160" height="${H}" fill="url(#fade)"/>
  <rect x="72" y="150" width="56" height="2" fill="#C9A35E"/>
  <text x="72" y="128" font-family="Arial, Helvetica, sans-serif" font-size="20" letter-spacing="5" fill="#C9A35E">ADVOCACIA · OAB/MG 235.948</text>
  <text x="72" y="250" font-family="Georgia, 'Times New Roman', serif" font-size="78" fill="#F7F5F0">Italo Moreira</text>
  <text x="72" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="38" font-style="italic" fill="#D4B57A">Cível · Consumidor · Bancário</text>
  <text x="72" y="430" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#B9C0CC">Atendimento em Belo Horizonte e online</text>
  <text x="72" y="466" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#B9C0CC">para todo o Brasil.</text>
  <text x="72" y="560" font-family="Arial, Helvetica, sans-serif" font-size="22" letter-spacing="1" fill="#F7F5F0">italomoreira.adv.br</text>
</svg>`);

await mkdir(path.join("public", "og"), { recursive: true });
await sharp({ create: { width: W, height: H, channels: 3, background: "#0B1220" } })
  .composite([
    { input: photo, left: W - 520, top: 0 },
    { input: overlay, left: 0, top: 0 },
  ])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(path.join("public", "og", "og-default.jpg"));
console.log("✓ public/og/og-default.jpg");
