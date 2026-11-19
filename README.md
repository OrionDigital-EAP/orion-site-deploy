# Site da Orion Digital

Site institucional da Orion Digital: marketing industrial e B2B.
Publicado na VPS, no container `orion-web`, atrás do nginx e da
Cloudflare Tunnel. Não é mais publicado pela Vercel.

## Estrutura

- 49 páginas HTML estáticas, sem framework
- `assets/orion.v97.css` — folha de estilo principal
- `assets/site.v93.js`, `hero.v3.js`, `track.v1.js` — comportamento
- `assets/img/` — imagens em WebP, com variantes responsivas
- `assets/fonts/` — fontes WOFF2 reduzidas aos caracteres usados
- `sitemap.xml` e filhos — páginas indexáveis

## Publicação

Os arquivos do site ficam em `/app/public` no container `orion-web`
(node:22-alpine). Um servidor Node simples (`/app/app-server/server.js`,
iniciado por `/app/start.sh`) escuta em `0.0.0.0:3000` e aplica os
mesmos cabeçalhos que a Vercel aplicava:

- `/assets/*`: `Cache-Control: public, max-age=31536000, immutable`
- `*.html`: `Cache-Control: public, max-age=0, must-revalidate`
- URL inexistente: responde 404 com `404.html`

Para atualizar o site, envie as páginas ao container com o acesso
SSH restrito fornecido pelo responsável da VPS (usuário próprio, porta
de administração fora da 22, chave com senha):

    tar --exclude=.git --exclude=.gitattributes -cf - . | ssh orion "put public"

O servidor limita conexões por IP; em scripts, espere pelo menos
10 segundos entre conexões e pare no primeiro erro.

Nunca coloque chaves, senhas ou variáveis de ambiente neste
repositório.

## Desempenho

Lighthouse em celular (4G lento, CPU 4×): 97 a 99 em desempenho,
100 em acessibilidade e em SEO.

Navegação entre páginas é instantânea: o navegador pré-carrega a
próxima página ao passar o mouse sobre o link (speculation rules,
com prefetch em JavaScript para navegadores sem suporte).
