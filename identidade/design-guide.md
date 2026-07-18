# Identidade visual

> Como a marca aparece em tudo que o ÓrbitaOS gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.
> Base derivada de `dados/design-system-ana-celia.html` (Design System · Base v1).

---

## Cores

Paleta quente, do bege ao marrom.

- **Fundo principal:** Linho `#F3EDE4`
- **Cor de destaque / CTA:** Cacau `#5E4432` (botão primário) · accent Café Claro `#A9876A`
- **Texto principal:** Expresso `#2E2118` · secundário Texto Suave `#6F5942`
- **Fundo alternativo / cards:** Areia `#E6DBCD` (seções) · Marfim `#FBF8F2` (superfície de card)
- **Cor de marca:** Café `#8B6B4E` · **Bordas:** Argila `#D4C2AE` / Latte `#BFA38A`
- **Cor proibida:** Qualquer cor fria ou saturada fora da paleta terrosa (azuis, verdes vivos, neons).

### Redesign v2 — bloco escuro + dourado (mescla claro/escuro, ref. `dados/x.png`)

- **Fundo escuro:** Expresso Profundo `#211609` (bloco Apresentação + "Por que"), variação `#2C1E12`.
- **Acento dourado:** Dourado `#D9A868` (números, filetes, bordas sobre escuro) · Dourado Suave `#E7C79A`.
- **Faixa translúcida:** `rgba(29,19,10,.72)` com `backdrop-filter: blur` (strip de stats sobre o hero).
- **Uso:** o dourado é acento de destaque sobre fundos escuros — nunca sobre Linho como texto corrido. Alternar claro→escuro→claro dá profundidade sem abandonar a identidade terrosa. Tokens em `site/assets/styles.css` (`--expresso-deep`, `--dourado`, `--strip`).

---

## Tipografia

- **Títulos e destaques:** Cormorant Garamond (serifada). Alternativas: EB Garamond, Playfair Display.
- **Corpo, subtítulos e botões:** Mulish (sans humanista). Alternativas: Inter, Manrope.
- **Peso do título:** 500 para H1 (display), 600 para H2/H3.

---

## Estilo geral

Elegância leve e acolhedora — **não** "corporativo de luxo" nem solenidade pesada. Serifada elegante nos títulos, muito respiro (base de espaçamento 8px), paleta sóbria e terrosa, mas com calor humano (a Ana fala em 1ª pessoa, tom leve e profissional). Um único estilo de botão primário marca o caminho de conversão em toda a página ("Solicitar orçamento").

---

## Elementos-chave

- Bordas: 1px em Argila `#D4C2AE`.
- Border-radius dos cards: 16px (`--r-lg`); painéis 12px; botões/inputs 8px.
- **Assinatura visual:** o **arco** — imagens de projeto em `border-radius: 160px 160px 0 0` (topo em arco de igreja).
- Botões: primário Cacau (texto Linho), secundário contorno Café, fantasma/link com sublinhado animado.
- Sombras: quentes e sutis, com tint do Expresso — sm `0 1px 2px`, md `0 6px 20px`, lg `0 16px 40px`.

---

## O que NUNCA fazer

- Não usar cores frias/saturadas fora da paleta terrosa.
- Não misturar outras fontes display além da serifada definida.
- Não sobrecarregar o layout — o respiro é parte da identidade.
- Não abrir mão do botão primário único e de alto contraste nas chamadas de conversão.

---

## Logo — "Portal" (aprovada em 18/07/2026, opção 3 da rodada 1)

- **Símbolo:** três arcos concêntricos (arquivoltas de portal românico) em traço fino — referência à história da arquitetura e ao nicho religioso; também lê como camadas de desenho (esboço → executivo → detalhe).
- **Wordmark:** "ANA CÉLIA ANDRADE" em Cormorant Garamond 600, caixa alta, tracking largo (~.15em) + linha "ARQUITETURA · DETALHAMENTO" em Mulish 600, tracking ~.32em.
- **Arquivos oficiais:** `identidade/logo-portal.svg` (fundos claros: arcos Cacau, nome Expresso) e `identidade/logo-portal-dark.svg` (fundos escuros: arcos/sub Café-Claro claro `#C9A87F`, nome Linho). Fontes embutidas em base64 — abrem corretos em qualquer lugar.
- **No site:** lockup horizontal em HTML/CSS+SVG inline (classes `.brand-mark`, `.vertical`, `.on-dark` em `site/assets/styles.css`); vertical no rodapé.
- **Favicon:** `site/assets/favicon.svg` — dois arcos concêntricos Cacau sobre Linho.
- **Cores do símbolo:** Cacau `#5E4432` no claro; `#C9A87F` no escuro. Nunca preencher os arcos — sempre traço.
- **Aposentado:** monograma "AC" (`site/assets/logo-dark.png` / `logo-light.png`, fonte em `dados/logo.png`) — a Ana o considerou "bem pobrinho". Não usar em material novo.
- **Pendência:** exportar PNGs (avatar Instagram, favicons raster) a partir dos SVGs.
- **Onde usar:** header/rodapé do site, avatar e destaque do Instagram, carimbo/marca d'água de pranchas, slide final do carrossel, header de propostas.

---

## Observações adicionais

- Design system de referência completo em `dados/design-system-ana-celia.html`.
