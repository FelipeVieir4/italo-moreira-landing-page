/**
 * Busca a nota e as avaliações do Google (Places API — New) e salva em
 * data/google-reviews.json, que é lido pelo site no momento do build.
 *
 * Variáveis de ambiente:
 *   GOOGLE_PLACES_API_KEY  (obrigatória) chave da Places API (New)
 *   GOOGLE_PLACE_ID        (recomendada) ID do perfil no Google (ChIJ...)
 *   GOOGLE_PLACE_QUERY     (opcional) texto de busca usado se não houver PLACE_ID
 *
 * Localmente, coloque as variáveis em .env.local. No GitHub, configure-as em
 * Settings → Secrets and variables → Actions.
 *
 * Se algo falhar (sem chave, sem internet, cota excedida), o script NÃO quebra
 * o build: ele mantém o último arquivo salvo e apenas avisa no log.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

try {
  process.loadEnvFile?.(".env.local");
} catch {
  /* sem .env.local — tudo bem */
}

const OUT = path.join("data", "google-reviews.json");
const KEY = process.env.GOOGLE_PLACES_API_KEY;
const QUERY = process.env.GOOGLE_PLACE_QUERY || "Italo Moreira Advocacia Belo Horizonte";
let placeId = process.env.GOOGLE_PLACE_ID;

const EMPTY = {
  source: "google",
  placeId: null,
  name: null,
  rating: null,
  userRatingCount: null,
  mapsUrl: null,
  reviewsUrl: null,
  writeReviewUrl: null,
  fetchedAt: null,
  reviews: [],
};

const log = (msg) => console.log(`[google-reviews] ${msg}`);

async function ensureFile() {
  try {
    await readFile(OUT, "utf8");
  } catch {
    await mkdir(path.dirname(OUT), { recursive: true });
    await writeFile(OUT, JSON.stringify(EMPTY, null, 2) + "\n");
  }
}

async function api(url, { fieldMask, method = "GET", body } = {}) {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": KEY,
      "X-Goog-FieldMask": fieldMask,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text.slice(0, 400)}`);
  }
  return res.json();
}

async function findPlaceId() {
  const data = await api("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    fieldMask: "places.id,places.displayName,places.formattedAddress",
    body: { textQuery: QUERY, languageCode: "pt-BR", regionCode: "BR" },
  });
  const first = data.places?.[0];
  if (!first) throw new Error(`Nenhum resultado para "${QUERY}".`);
  log(`Perfil encontrado: ${first.displayName?.text} — ${first.formattedAddress}`);
  log(`Defina GOOGLE_PLACE_ID=${first.id} para fixar este perfil.`);
  return first.id;
}

async function fetchDetails(id) {
  const base = "id,displayName,rating,userRatingCount,reviews,googleMapsUri";
  const url = `https://places.googleapis.com/v1/places/${id}?languageCode=pt-BR&regionCode=BR`;
  try {
    return await api(url, { fieldMask: `${base},googleMapsLinks` });
  } catch (err) {
    // Algumas contas/versões não expõem googleMapsLinks — tenta sem ele.
    if (String(err.message).includes("400")) return api(url, { fieldMask: base });
    throw err;
  }
}

async function main() {
  await ensureFile();

  if (!KEY) {
    log("GOOGLE_PLACES_API_KEY não definida — mantendo os dados atuais de data/google-reviews.json.");
    return;
  }

  try {
    if (!placeId) placeId = await findPlaceId();
    const p = await fetchDetails(placeId);

    const reviews = (p.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "Cliente Google",
        authorUrl: r.authorAttribution?.uri ?? null,
        authorPhoto: r.authorAttribution?.photoUri ?? null,
        rating: r.rating ?? null,
        text: (r.text?.text ?? r.originalText?.text ?? "").trim(),
        relativeTime: r.relativePublishTimeDescription ?? null,
        publishTime: r.publishTime ?? null,
        reviewUrl: r.googleMapsUri ?? null,
      }))
      .filter((r) => r.text.length > 0);

    const data = {
      source: "google",
      placeId: p.id,
      name: p.displayName?.text ?? null,
      rating: p.rating ?? null,
      userRatingCount: p.userRatingCount ?? null,
      mapsUrl: p.googleMapsUri ?? null,
      reviewsUrl: p.googleMapsLinks?.reviewsUri ?? p.googleMapsUri ?? null,
      writeReviewUrl:
        p.googleMapsLinks?.writeAReviewUri ?? `https://search.google.com/local/writereview?placeid=${p.id}`,
      fetchedAt: new Date().toISOString(),
      reviews,
    };

    await writeFile(OUT, JSON.stringify(data, null, 2) + "\n");
    log(`OK — nota ${data.rating} (${data.userRatingCount} avaliações), ${reviews.length} comentários salvos.`);
  } catch (err) {
    console.warn(`[google-reviews] Falha ao atualizar (${err.message}). Mantendo os dados anteriores.`);
  }
}

await main();
