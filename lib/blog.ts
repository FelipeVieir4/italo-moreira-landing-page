import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";
import { site } from "@/lib/site";

/**
 * Blog baseado em arquivos Markdown.
 * Cada post é um arquivo em content/blog/<slug>.md com um cabeçalho (frontmatter).
 * Arquivos que começam com "_" (ex.: _modelo.md) são ignorados.
 */

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  updated?: string;
  category: string;
  categorySlug: string;
  tags: string[];
  cover?: string;
  coverAlt?: string;
  featured: boolean;
  draft: boolean;
  author: string;
  readingMinutes: number;
}

export interface TocItem {
  id: string;
  text: string;
  depth: number;
}

export interface Post extends PostMeta {
  html: string;
  toc: TocItem[];
}

export const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const decodeEntities = (s: string) =>
  s
    .replace(/<[^>]+>/g, "")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const toIsoDate = (value: unknown): string | undefined => {
  if (!value) return undefined;
  const d = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString().slice(0, 10);
};

const readingMinutes = (text: string) => Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / 200));

export function renderMarkdown(markdown: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const used = new Map<string, number>();
  const md = new Marked({ gfm: true });

  md.use({
    renderer: {
      heading({ tokens, depth }) {
        const inner = this.parser.parseInline(tokens);
        const text = decodeEntities(inner);
        const base = slugify(text) || "secao";
        const count = used.get(base) ?? 0;
        used.set(base, count + 1);
        const id = count ? `${base}-${count}` : base;
        if (depth === 2 || depth === 3) toc.push({ id, text, depth });
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const inner = this.parser.parseInline(tokens);
        const external = /^https?:\/\//.test(href) && !href.startsWith(site.url);
        const t = title ? ` title="${title}"` : "";
        const ext = external ? ' target="_blank" rel="noopener noreferrer"' : "";
        return `<a href="${href}"${t}${ext}>${inner}</a>`;
      },
      table(token) {
        // Envolve tabelas para permitir rolagem horizontal no celular
        const header = token.header.map((c) => `<th>${this.parser.parseInline(c.tokens)}</th>`).join("");
        const rows = token.rows
          .map((r) => `<tr>${r.map((c) => `<td>${this.parser.parseInline(c.tokens)}</td>`).join("")}</tr>`)
          .join("");
        return `<div class="overflow-x-auto"><table><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table></div>\n`;
      },
    },
  });

  const html = md.parse(markdown, { async: false }) as string;
  return { html, toc };
}

let cache: Post[] | null = null;

function loadPosts(): Post[] {
  if (cache && process.env.NODE_ENV === "production") return cache;
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md") && !f.startsWith("_"));

  const posts = files.map((file): Post => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data, content } = matter(raw);

    const required = ["title", "description", "date", "category"] as const;
    for (const key of required) {
      if (!data[key]) throw new Error(`[blog] O post "${file}" está sem o campo obrigatório "${key}".`);
    }

    const { html, toc } = renderMarkdown(content);
    const category = String(data.category);

    return {
      slug,
      title: String(data.title),
      description: String(data.description),
      date: toIsoDate(data.date)!,
      updated: toIsoDate(data.updated),
      category,
      categorySlug: slugify(category),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      cover: data.cover ? String(data.cover) : undefined,
      coverAlt: data.coverAlt ? String(data.coverAlt) : undefined,
      featured: Boolean(data.featured),
      draft: Boolean(data.draft),
      author: data.author ? String(data.author) : site.lawyer,
      readingMinutes: readingMinutes(content),
      html,
      toc,
    };
  });

  const visible = posts
    .filter((p) => !(p.draft && process.env.NODE_ENV === "production"))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  cache = visible;
  return visible;
}

const toMeta = (p: Post): PostMeta => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { html, toc, ...meta } = p;
  return meta;
};

export const getAllPosts = (): PostMeta[] => loadPosts().map(toMeta);

export const getPost = (slug: string): Post | undefined => loadPosts().find((p) => p.slug === slug);

export function getCategories(): { name: string; slug: string; count: number }[] {
  const map = new Map<string, { name: string; slug: string; count: number }>();
  for (const p of loadPosts()) {
    const entry = map.get(p.categorySlug) ?? { name: p.category, slug: p.categorySlug, count: 0 };
    entry.count += 1;
    map.set(p.categorySlug, entry);
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export const getPostsByCategory = (categorySlug: string) =>
  getAllPosts().filter((p) => p.categorySlug === categorySlug);

export function getRelatedPosts(post: PostMeta, limit = 3): PostMeta[] {
  const others = getAllPosts().filter((p) => p.slug !== post.slug);
  const score = (p: PostMeta) =>
    (p.categorySlug === post.categorySlug ? 3 : 0) + p.tags.filter((t) => post.tags.includes(t)).length;
  return others.sort((a, b) => score(b) - score(a) || (a.date < b.date ? 1 : -1)).slice(0, limit);
}

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T12:00:00Z`),
  );
