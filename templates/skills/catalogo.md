# Catálogo de Skills

Skills externas prontas para instalar. Use como referência ao criar skills novas com `/mapear-rotinas` ou instale diretamente as que fizerem sentido para o seu negócio.

> Skills globais ficam em `~/.claude/skills/` e funcionam em qualquer projeto.
> Skills locais ficam em `.claude/commands/` e funcionam apenas neste projeto.

---

## Escrever copy e textos de venda

### Schwartz Copy (resposta direta)
**O que faz:** Escreve copy de vendas usando a metodologia de Eugene Schwartz (Breakthrough Advertising). Diagnostica o nível de consciência e sofisticação do mercado antes de gerar qualquer texto.
**Bom para:** Landing pages, emails de venda, VSLs, cartas de venda, páginas de captura
**Como instalar:** Já vem como skill global. Chamar com `/schwartz-copy`
**Fonte:** Skill validada pelo ÓrbitaOS

### Ogilvy Copy (marca e posicionamento)
**O que faz:** Gera copy institucional usando a metodologia de David Ogilvy. Pesquisa profunda, big idea, headlines informativas.
**Bom para:** Manifestos de marca, campanhas institucionais, taglines, brand voice, posicionamento
**Como instalar:** Já vem como skill global. Chamar com `/ogilvy-copy`
**Fonte:** Skill validada pelo ÓrbitaOS

---

## Criar interfaces e páginas web

### Frontend Design
**O que faz:** Cria interfaces web completas com design de alta qualidade. Gera código HTML/CSS/React pronto para usar, com visual profissional que foge da estética genérica de IA.
**Bom para:** Landing pages, dashboards, componentes web, páginas de produto
**Como instalar:** Já vem nativo no Claude Code. Chamar com `/frontend-design`
**Fonte:** Skill nativa do Claude Code

---

## Criar visuais e arte

### Canvas Design
**O que faz:** Cria arte visual em PNG e PDF usando princípios de design. Pôsteres, capas, peças gráficas.
**Bom para:** Capas de e-book, banners, peças visuais, thumbnails
**Como instalar:** Já vem nativo no Claude Code. Chamar com `/canvas-design`
**Fonte:** Skill nativa do Claude Code

---

## Trabalhar com documentos

### PDF
**O que faz:** Manipula PDFs: extrai texto e tabelas, cria novos, junta/separa documentos, preenche formulários.
**Bom para:** Extrair dados de contratos, criar relatórios em PDF, preencher formulários
**Como instalar:** Já vem nativo no Claude Code. Chamar com `/pdf`
**Fonte:** Skill nativa do Claude Code

### DOCX
**O que faz:** Cria e edita documentos Word com formatação, tracked changes e comentários.
**Bom para:** Propostas formais, contratos, documentos para clientes que pedem Word
**Como instalar:** Já vem nativo no Claude Code. Chamar com `/docx`
**Fonte:** Skill nativa do Claude Code

### PPTX
**O que faz:** Cria e edita apresentações PowerPoint com layouts, speaker notes e formatação.
**Bom para:** Apresentações para clientes, decks de vendas, materiais de treinamento
**Como instalar:** Já vem nativo no Claude Code. Chamar com `/pptx`
**Fonte:** Skill nativa do Claude Code

### XLSX
**O que faz:** Cria e edita planilhas com fórmulas, formatação e gráficos.
**Bom para:** Relatórios financeiros, dashboards em planilha, análise de dados
**Como instalar:** Já vem nativo no Claude Code. Chamar com `/xlsx`
**Fonte:** Skill nativa do Claude Code

---

## Escrever documentos e specs

### Doc Co-Authoring
**O que faz:** Fluxo guiado para coescrever documentos. Realiza uma entrevista, itera rascunhos e valida se o documento funciona para o leitor.
**Bom para:** Propostas técnicas, specs, documentos de decisão, SOPs
**Como instalar:** Já vem nativo no Claude Code. Chamar com `/doc-coauthoring`
**Fonte:** Skill nativa do Claude Code

---

## Extrair transcrição de vídeo

### YT Transcript
**O que faz:** Extrai transcrições de vídeos do YouTube usando yt-dlp. Compatível com múltiplos idiomas.
**Bom para:** Criar conteúdo a partir de vídeos (carrosséis, newsletters, posts)
**Precisa de:** yt-dlp instalado (`brew install yt-dlp`)
**Como instalar:** Já vem como skill global. Chamar com `/yt-transcript`
**Fonte:** Skill validada pelo ÓrbitaOS

---

## Testar sites e apps

### Webapp Testing
**O que faz:** Testa aplicações web locais usando Playwright. Captura screenshots, verifica funcionalidade e lê logs do navegador.
**Bom para:** Testar landing pages antes de publicar, verificar se tudo funciona em diferentes tamanhos
**Como instalar:** Já vem nativo no Claude Code. Chamar com `/webapp-testing`
**Fonte:** Skill nativa do Claude Code

---

## Criar skills novas

### Skill Creator
**O que faz:** Guia para criar skills novas do zero. Ajuda a estruturar, definir triggers e testar.
**Bom para:** Quando o `/mapear-rotinas` não cobre o que você precisa e deseja criar algo mais complexo
**Como instalar:** Já vem nativo no Claude Code. Chamar com `/skill-creator`
**Fonte:** Skill nativa do Claude Code

---

## Como adicionar skills novas a este catálogo

Se você testou uma skill e deseja adicioná-la aqui para referência futura:

```markdown
### Nome da Skill
**O que faz:** [descrição em uma frase]
**Bom para:** [casos de uso práticos]
**Como instalar:** [comando ou instrução]
**Fonte:** [de onde veio — skill nativa, criada por você, ou de terceiros]
```
