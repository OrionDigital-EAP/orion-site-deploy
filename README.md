# Site da Orion Digital

Site institucional da Orion Digital: marketing industrial e B2B.
Publicado automaticamente na Vercel a cada commit em `main`.

## Estrutura

- 49 páginas HTML estáticas, sem framework
- `assets/orion.v97.css` — folha de estilo principal
- `assets/site.v93.js`, `hero.v3.js`, `track.v1.js` — comportamento
- `assets/img/` — imagens em WebP, com variantes responsivas
- `assets/fonts/` — fontes WOFF2 reduzidas aos caracteres usados
- `sitemap.xml` e filhos — 46 páginas indexáveis

## Desempenho

Lighthouse em celular (4G lento, CPU 4×): 97 a 99 em desempenho,
100 em acessibilidade e em SEO.

Navegação entre páginas é instantânea: o navegador pré-carrega a
próxima página ao passar o mouse sobre o link (speculation rules,
com prefetch em JavaScript para navegadores sem suporte).
