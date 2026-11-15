# Italo Moreira Advocacia — site

Site institucional + blog do advogado Italo Moreira (OAB/MG 235.948).
Next.js 15 (App Router) com **exportação estática**, publicado na **Vercel** em
[www.italomoreira.adv.br](https://www.italomoreira.adv.br).

- **Produção:** branch `main` → www.italomoreira.adv.br (deploy automático da Vercel a cada push).
- **Demos:** qualquer outra branch enviada ao GitHub gera um *Preview Deployment* com URL própria
  (`<projeto>-git-<branch>-<time>.vercel.app`), sem afetar o site no ar.
- O workflow `.github/workflows/nextjs.yml` (GitHub Pages) é legado e publica uma cópia em github.io.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera a pasta out/ (site estático)
npm start        # serve a pasta out/ localmente
```

## Estrutura

| Pasta | O que tem |
| --- | --- |
| `app/(site)/` | Páginas com cabeçalho e rodapé: início, áreas (`[slug]`), blog |
| `app/golpe-pix/` | Landing pages de campanha (variantes A e B) |
| `components/` | Componentes (home, blog, ui, site) |
| `content/blog/` | **Posts do blog em Markdown** |
| `content/services/` | Catálogo e textos das áreas de atuação |
| `content/home-faq.ts` | Perguntas frequentes da página inicial |
| `lib/site.ts` | **Dados de contato, redes sociais, OAB, WhatsApp** |
| `data/google-reviews.json` | Avaliações do Google (gerado automaticamente) |
| `scripts/` | Busca de avaliações e otimização de imagens |
| `assets/` | Fotos originais em alta resolução (não são publicadas) |

## Como publicar um post no blog

1. Copie `content/blog/_modelo.md` e renomeie, por exemplo `content/blog/revisao-de-juros.md`.
   O nome do arquivo vira o endereço: `/blog/revisao-de-juros`.
2. Preencha o cabeçalho (`title`, `description`, `date`, `category`, `tags`, `cover`…) e escreva o texto em Markdown.
3. Coloque a imagem de capa em `public/images/blog/` (formato 16:9, idealmente `.webp` com ~1600 px de largura).
4. Use `draft: true` enquanto o texto estiver em revisão — rascunhos aparecem só no `npm run dev`.
5. Faça commit na branch `main`. A Vercel gera e publica o site em poucos minutos.

O site gera automaticamente: página do post com sumário, tempo de leitura, botões de compartilhamento,
artigos relacionados, páginas por categoria, `sitemap.xml`, feed RSS (`/blog/rss.xml`) e dados
estruturados (schema.org `BlogPosting`) para o Google.

## Avaliações do Google (automático)

A seção "O que dizem os clientes" e a nota no topo do site vêm da **Google Places API (New)**.
O script `scripts/fetch-google-reviews.mjs` roda antes de cada build (`prebuild`) e salva os dados em
`data/google-reviews.json`. O workflow `.github/workflows/refresh-reviews.yml` dispara um rebuild na
Vercel **todo dia às 06:00 (Brasília)**, então novas avaliações entram no site sozinhas. Sem a chave
configurada, a seção simplesmente não aparece.

Configuração (uma vez):

1. No [Google Cloud Console](https://console.cloud.google.com/), crie um projeto, ative a
   **Places API (New)** e gere uma **API key** (restrinja a chave a essa API).
2. Na **Vercel → Settings → Environment Variables** (marque *Production* e *Preview*):
   - `GOOGLE_PLACES_API_KEY` = a chave
   - `GOOGLE_PLACE_ID` = ID do perfil (`ChIJ...`). Se não souber, rode o script uma vez localmente
     sem ele: o ID encontrado é exibido no log.
3. Na **Vercel → Settings → Git → Deploy Hooks**, crie um hook para a branch `main` e salve a URL no
   **GitHub → Settings → Secrets and variables → Actions** como o secret `VERCEL_DEPLOY_HOOK_URL`.
4. Para testar localmente, crie `.env.local` com `GOOGLE_PLACES_API_KEY=...` e rode `npm run reviews`.

> A API retorna a nota média, o total de avaliações e até 5 avaliações selecionadas pelo próprio Google.
> O Google Cloud exige uma conta de faturamento ativa, mas o volume aqui (uma consulta por dia) é muito
> baixo e tende a ficar dentro da franquia gratuita mensal — confira os valores atuais no console e
> configure um alerta de orçamento.

## Imagens

As fotos originais ficam em `assets/originals/`. Para regenerar as versões otimizadas
(WebP + imagem de compartilhamento `public/og/og-default.jpg`), rode `npm run images`.
