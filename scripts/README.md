# scripts/ — utilitários do ÓrbitaOS

Scripts em Node.js e Python que as skills acionam quando é necessário executar tarefas fora do alcance da IA pura (gerar imagem, publicar em rede social, renderizar HTML em PNG).

A pasta é criada **vazia** — cada skill que depende de um script traz a instrução de como criá-lo (geralmente é uma configuração única por integração ativada).

## Scripts comuns

Conforme as skills forem sendo ativadas, esta pasta é preenchida progressivamente. A seguir, a lista do que cada skill espera encontrar:

| Skill | Script esperado | O que faz |
|---|---|---|
| `/carrossel` (com foto IA) | `gerar-imagem.js` | Gera foto realista via OpenAI API (DALL-E 3) |
| `/carrossel` (render PNG) | `render.js` (gerado por carrossel, fica na pasta do conteúdo) | Playwright tira screenshot 1080x1350 de cada slide |
| `/aprovar-post` | `postar-instagram.js` | Publica carrossel no Instagram via Meta Graph API |
| `/aprovar-post` | `postar-facebook.js` | Publica carrossel no Facebook via Meta Graph API |
| `/anuncio-google` | (nenhum — gera CSV direto) | — |
| `/relatorio-ads` | (lê CSV exportado das plataformas) | — |

## Pré-requisitos comuns

A maioria dos scripts depende de:

**Node.js 20+** instalado na máquina

**.env** na raiz do projeto com as chaves de API:
```bash
OPENAI_API_KEY=sk-...               # pra gerar-imagem.js
META_PAGE_ACCESS_TOKEN=...          # pra postar-instagram.js + postar-facebook.js
META_PAGE_ID=...
META_IG_USER_ID=...
SITE_URL=https://seudominio.com.br
```

**Playwright** (pra renderizar HTML em PNG):
```bash
npm install playwright
npx playwright install chromium
```

## Como o ÓrbitaOS lida com isso

Ao executar uma skill que depende de um script ainda ausente, o Claude:

1. Identifica que o script está ausente
2. Pergunta se deseja configurá-lo agora
3. Orienta a configuração das chaves de API (Meta, OpenAI, entre outras)
4. Cria o script já configurado
5. Executa a skill

Não é necessário memorizar nenhuma etapa: basta executar a skill e seguir o fluxo indicado.
