# ÓrbitaOS — Sistema operacional do negócio

Sua empresa opera com base neste arquivo. Aqui ficam as regras de operação
do ÓrbitaOS — como o Claude lê o contexto, aprende com correções, mantém
tudo atualizado e cria novas skills conforme a operação evolui.

Este arquivo é editável. Quando o `/instalar` for executado, ele complementa o
final desta página com as regras específicas do seu negócio.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base para qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Para qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o
usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode se tornar uma skill para a próxima vez. Deseja que eu a crie?"

Não perguntar para tarefas pontuais ou perguntas simples. Apenas quando o
padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Deseja que eu registre isso para que não seja necessário repetir a instrução no futuro?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nesta pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na
verdade o arquivo se chama X"). Só perguntar quando a informação tiver
valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill
nova, mudança de foco, processo novo, ferramenta instalada, estrutura
alterada), perguntar:

> "Isso alterou algo no seu contexto. Deseja que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** execute `/atualizar` para uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar ao contexto
2. Perguntar se é específica deste projeto ou útil em qualquer contexto:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` para calibrar
   o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos),
   criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code

---

# Ana Célia Andrade — Arquitetura · Detalhamento (perfil: marca pessoal)

## O que é este workspace

Operação da marca pessoal da Ana Célia Andrade, arquiteta que oferece
**terceirização de detalhamento de projetos para arquitetos e escritórios**,
com projetos religiosos como nicho de paixão. Aqui se produz a comunicação,
se organizam os projetos e se conduz a captação de clientes.

> **Reposicionado em 18/07/2026** a partir do feedback direto da Ana. O
> posicionamento antigo ("especialista em arquitetura sacra") foi vetado por
> ela — ver `_memoria/empresa.md`, seção "O que NÃO afirmar".

**Estrutura de pastas:**
- `_memoria/` — quem é a Ana Célia, como ela se comunica, o que está em foco
- `identidade/` — cores, fontes, logo e padrão visual da marca
- `dados/` — arquivos a analisar / ler uma vez (inclui o design system e a copy da landing)
- `marketing/` — conteúdo, SEO, campanhas (saída das skills)
- `saidas/` — propostas, e-mails e documentos pontuais
- `scripts/` — utilitários
- `templates/` — modelos base do ÓrbitaOS

## Quem é

Ana Célia Andrade, arquiteta. Trabalha no escritório da Thaynara (chefe); a
marca/site é a frente pessoal dela (não mencionar o vínculo no site). Pessoa
leve e descontraída, católica, apaixonada por história — e muito boa no que
faz. Modelo de trabalho que admira: @blessadetalha (também @ingriddetalha e
@kah.detalharq).

## O que entrega

- **Principal:** detalhamento executivo terceirizado (plantas, cortes, elevações),
  marcenaria e mobiliário sob medida, marmoraria, caderno de detalhes,
  compatibilização — remoto, no padrão gráfico do escritório contratante
- **Nicho de paixão:** capelas, mobiliário litúrgico (altar, ambão, sacrário) e
  adequação litúrgica de ambientes já construídos

## Público

Primário: arquitetos e escritórios que precisam terceirizar o executivo.
Secundário: comunidades e paróquias com projetos religiosos de menor porte.

## Tom de voz

Leve, caloroso e profissional — 1ª pessoa do singular, sem pose corporativa.
Ver `_memoria/preferencias.md`. **Nunca:** "especialista em arquitetura sacra",
números de prova social inventados, voz no plural ("projetamos"), imagem de
"arquiteta glamurosa/empresária".

## Posicionamento

O detalhe como forma de cuidado: projetos que ganham vida no desenho bem
resolvido. Arquitetura sacra plena é sonho de longo prazo — cultivada via
blog/conteúdo, nunca vendida como especialidade.

## Regras do sistema

- Qualquer material visual consulta `identidade/design-guide.md` antes de ser criado.
- Elemento de assinatura visual: o **arco** (topo de imagens de projeto).
- Conteúdo novo em `marketing/conteudo/<tipo>-<tema>-<data>/`.
- Cada proposta/projeto de cliente pode virar pasta própria em `saidas/`.
- **Site multi-página** em `site/` (estático, sem libs), marca "Ana Célia Andrade — Arquitetura · Detalhamento". CSS/JS compartilhados: `site/assets/styles.css` e `site/assets/main.js`. Páginas: `index.html` (Home), `servicos.html`, `projetos.html` (filtro: Detalhamento · Capelas · Mobiliário litúrgico · Adequação litúrgica), `blog.html` + posts `blog-*.html` (3 exemplos), `faq.html`, `contato.html` (form com chips de assunto → WhatsApp). Header/rodapé duplicados em cada página (nav com `aria-current`); CTA padrão: "Solicitar orçamento".
- **Site redesenhado (v2, mescla claro/escuro + acento dourado `#D9A868` — ref. `dados/x.png`).** Tokens: `--expresso-deep`, `--dourado`, `--dourado-soft`.
  - **Home:** hero full-bleed → `.dark-block` unindo Apresentação (`.intro-*` com photo-swap + `.intro-stats`) e "Por que" (`.why-*` colunas numeradas douradas) → `.bento` (grid assimétrico com fotos/blocos de cor + spotlight) → `.approach` (citação + 3 cards com imagem sacra) → `.gallery-sec` (marquee arrastável) → `.cta-card` (card escuro com foto).
  - **Páginas internas (também v2):** `.page-hero` com eyebrow/glow dourado; `.cta-band` agora escuro profundo com glow + strip dourada no topo; `.reason`/`.step`/`.faq`/`.project-card`/`.post-meta`/artigo com acentos dourados. **servicos**: "Por que" em `.dark-block`+`.why-grid`, "Entregas" em `.bento`. **contato**: coluna de info em `.contact-panel` (escuro) ao lado do form claro. Refinamentos no fim do `styles.css` (bloco "REDESIGN v2 — refinamentos das páginas internas").
  - **Fotos reais da Ana** aplicadas: home (apresentação/CTA), servicos (método), contato (bio).
- **Animações** (só transform/opacity, respeitam `prefers-reduced-motion`): reveal on scroll com stagger (`data-animate`/`data-stagger`), text reveal palavra a palavra (`.rv-split`), rotator de palavras na hero (`data-rotator`), pílula deslizante na nav (`.nav-pill`), photo-swap (`data-photo-main`), marquee arrastável (`data-marquee`), spotlight no bento (`data-spotlight`), cortina em arco nas imagens, parallax (`data-parallax`), header reativo.
- **Imagens:** fotos reais da Ana em `site/assets/ana-escritorio-1..3.jpg` e `ana-pedra-1..2.jpg` (originais em `dados/foto-anacelia (1..5).jpeg`; as antigas `ana-1..5.jpg` seguem no repo, sem uso na home). Imagens de projeto/detalhamento são placeholders temáticos (`marcenaria.jpg`, `prancheta.jpg`, `interior-capela-2.jpg`, `detalhe-arco.jpg`, `hero-nave.jpg`, `vitral-interior.jpg`, `ambao-biblia.jpg`, `plantas.jpg`) — trocar pelas reais mantendo os nomes. Deploy via `netlify.toml` / `vercel.json` (publish = `site/`); ver `site/DEPLOY.md`.
- **Logo "Portal"** (aprovada 18/07/2026): três arcos concêntricos + wordmark caixa alta. No site: lockup em HTML/CSS+SVG inline (`.brand-mark`, variantes `.vertical`/`.on-dark`); favicon em `site/assets/favicon.svg`. Arquivos oficiais com fontes embutidas: `identidade/logo-portal.svg` (claro) e `logo-portal-dark.svg` (escuro). Regras completas no `design-guide.md`. PNGs antigos do monograma aposentados (permanecem em `site/assets/`).
- **Números da home são placeholder** (comentário `NÚMEROS PLACEHOLDER` em `site/index.html`) — substituir pelos reais quando a Ana informar; não citar como fato em outros materiais.

## Ferramentas conectadas

- [ ] Notion
- [ ] Canva
- [ ] Google Calendar
- [ ] Meta Ads
- [ ] Google Ads

*(Marcar conforme os MCPs forem instalados.)*
