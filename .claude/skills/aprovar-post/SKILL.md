---
name: aprovar-post
description: >
  Aprova e publica um post da fila — altera o status do blog de rascunho (draft) para publicado,
  copia os PNGs do carrossel para a pasta pública do site, realiza commit e push (Netlify/Vercel
  executa o deploy automaticamente), aguarda a conclusão do deploy, e publica o carrossel no
  Instagram + Facebook via Meta Graph API. Use quando o
  usuário disser "aprovar post X", "publicar o post do tema Y", "/aprovar-post X", ou quando
  quiser disparar a publicação automática de um conteúdo já criado pela skill /publicar-tema.
---

# /aprovar-post — Pipeline de aprovação e publicação automática

Estabelece a ponte entre o conteúdo aprovado (blog + carrossel + legendas, criado por `/publicar-tema`)
e a publicação efetiva no feed (site + Instagram + Facebook).

## Quando NÃO usar

- Conteúdo ainda não foi criado → usar `/publicar-tema` primeiro
- Usuário ainda está revisando → não executar até a confirmação explícita ("aprovado" / "pode postar")
- Site não está publicado (deploy) / Meta API não configurada → seguir setup abaixo

## Pré-requisitos (uma vez só)

- `.env` na raiz com:
  - `META_PAGE_ACCESS_TOKEN` — token de longa duração da Página FB
  - `META_PAGE_ID` — ID da Página FB
  - `META_IG_USER_ID` — ID da conta Insta Business
  - `SITE_URL` — ex: `https://exemplo.com.br`
- Site com deploy automático a partir do `main` do GitHub (Netlify, Vercel, etc.)
- Conta Insta Business conectada à Página FB
- Página FB com permissões corretas no Meta App
- Scripts `scripts/postar-instagram.js` e `scripts/postar-facebook.js` configurados

Se algum desses itens estiver ausente: interromper a execução e indicar o guia de setup (criar `marketing/automacao-meta-setup.md`, caso ainda não exista).

## Argumento

`/aprovar-post <slug>` — onde `<slug>` é o nome do arquivo do blog **sem `.md`**.

Exemplo: `/aprovar-post como-conservar-produto`

Se o usuário não informou o slug, listar os blogs em rascunho (arquivos com `draft: true`) e perguntar qual deles.

## Workflow

### Passo 1 — Localizar arquivos

- Blog: `site/.../blog/<slug>.md` (caminho depende do stack — Astro, Hugo, etc.)
- Carrossel: procurar `marketing/conteudo/<slug>-*` (a pasta tem sufixo de data)
- Validar que existem PNGs em `<pasta-carrossel>/instagram/slide-XX.png` (2 a 10)
- Validar que existem `legenda.md` e `legenda-linkedin.md`

Se algum desses itens estiver ausente, interromper a execução e relatar.

### Passo 2 — Apresentar resumo e solicitar confirmação final

Apresentar ao usuário:
- Título do blog
- Quantidade de slides do carrossel
- Primeiros 200 caracteres da legenda
- URL final que será publicada

Perguntar: **"Confirma publicação? (sim/não)"**. Prosseguir somente mediante confirmação afirmativa.

### Passo 3 — Alterar draft para false

Editar o frontmatter do blog: `draft: true` → `draft: false`.

### Passo 4 — Copiar PNGs para a pasta pública do site

- Origem: `marketing/conteudo/<slug>-<data>/instagram/slide-*.png`
- Destino: `site/.../public/img/posts/<slug>/slide-*.png`
- Criar pasta de destino se não existir
- Sobrescrever se já existir (caso seja re-publicação)

### Passo 5 — Commit + push

```bash
git add site/<caminho>/blog/<slug>.md site/<caminho>/public/img/posts/<slug>/
git commit -m "publicar: <título do blog>"
git push origin main
```

Aguardar a conclusão do push com sucesso.

### Passo 6 — Aguardar deploy

Deploy automático (Netlify/Vercel) leva ~1-2 min. Validar que o post está no ar:

```bash
curl -sf -o /dev/null -w "%{http_code}" "$SITE_URL/blog/$slug/"
```

Aguardar HTTP 200 (com timeout de 5 min). Também verificar que pelo menos `slide-01.png` está acessível:

```bash
curl -sf -o /dev/null -w "%{http_code}" "$SITE_URL/img/posts/$slug/slide-01.png"
```

Caso contrário, a Meta API falhará, pois a busca da imagem ocorre por URL pública.

### Passo 7 — Postar no Instagram

```bash
node --env-file=.env scripts/postar-instagram.js marketing/conteudo/<slug>-<data>
```

Capturar o post id retornado. Se falhar, **não prosseguir para o Facebook** — relatar e interromper a execução.

### Passo 8 — Postar no Facebook

```bash
node --env-file=.env scripts/postar-facebook.js marketing/conteudo/<slug>-<data>
```

Capturar o post id retornado.

### Passo 9 — LinkedIn

A publicação no LinkedIn ainda é manual (a API para empresas requer um processo de aprovação demorado). Apresentar ao usuário:

```
LinkedIn: copie e cole este texto manualmente em https://linkedin.com/in/<seu-perfil>:
<conteúdo de legenda-linkedin.md>
```

### Passo 10 — Resumo

Apresentar:
```
✓ Post publicado: <título>

Site:        <SITE_URL>/blog/<slug>/
Instagram:   <link do post>
Facebook:    <link do post>
LinkedIn:    pendente — texto pronto em legenda-linkedin.md (publicação manual)
```

## Tratamento de erro

- Push falhou: reverter `draft: false` para `draft: true`, relatar e interromper a execução
- Deploy não concluído em 5 min: relatar e perguntar se deve continuar mesmo assim ou abortar
- Instagram API falhou: interromper e relatar. O site já está no ar e o blog publicado — apenas a publicação no feed não foi concluída
- Facebook falhou mas Instagram OK: relatar e sugerir nova tentativa apenas para o Facebook posteriormente

## Princípios

1. **Confirmação humana antes de qualquer coisa irreversível.** Nunca pular o passo 2.
2. **Idempotente onde possível.** Reexecutar com o mesmo slug deve detectar publicação prévia (blog não-draft, PNGs já em public/) e perguntar se deve republicar ou apenas atualizar.
3. **Falha cedo, falha alto.** Qualquer pré-requisito ausente implica abortar e explicar o que falta.
4. **Registrar tudo.** Cada passo informa o que está sendo executado e o respectivo resultado.
