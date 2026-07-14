# Catálogo de Ferramentas

Referência de APIs, CLIs e conectores que podem ser usados dentro de skills do Claude Code.
Consulte este arquivo antes de criar skills novas para saber o que já está disponível.

---

## Criar visuais (HTML para PNG)

### Playwright CLI
**O que faz:** Renderiza qualquer HTML em imagem PNG (carrosséis, slides, propostas, cards)
**Precisa de conta:** Não, roda localmente
**Como instalar:**
```bash
npx playwright install chromium
```
**Como usar em uma skill:**
```bash
npx playwright screenshot --viewport-size=1080,1350 --full-page "file:///caminho/slide.html" "slide.png"
```
**Tamanhos comuns:**
- Instagram feed: 1080x1350
- Instagram/TikTok story: 1080x1920
- Slide 16:9: 1920x1080
- Card quadrado: 1080x1080

---

## Publicar na web

### Cloudflare Pages API
**O que faz:** Publica arquivos HTML com link público (propostas, landing pages, estudos)
**Precisa de conta:** Sim, Cloudflare (gratuito)
**Configurar:** Salvar `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID` no `.env`
**Quando usar:** Sempre que a skill gerar um HTML que precisa ser compartilhado por link

---

## Publicar em redes sociais

### Post for Me API
**O que faz:** Publica posts no Instagram e TikTok diretamente do Claude Code
**Precisa de conta:** Sim, postforme.dev
**Configurar:** Salvar `POSTFORME_API_KEY` no `.env`
**Como usar em uma skill:**
```bash
node --env-file=.env scripts/publish-postforme.js
```
**Quando usar:** Skills de carrossel, conteúdo visual, publicação automática

---

## Buscar conteúdo da web

### WebFetch (nativo)
**O que faz:** Lê o conteúdo de qualquer URL e retorna como texto
**Precisa de conta:** Não, já vem no Claude Code
**Quando usar:** Pesquisa de referências, leitura de artigos, busca de dados em sites

### WebSearch (nativo)
**O que faz:** Pesquisa no Google e retorna resultados
**Precisa de conta:** Não, já vem no Claude Code
**Quando usar:** Quando o usuário precisa pesquisar antes de criar conteúdo

### Jina Reader
**O que faz:** Converte qualquer URL em markdown limpo (melhor que WebFetch para artigos longos)
**Precisa de conta:** Não
**Como usar:** Acessar `https://r.jina.ai/{URL}` via WebFetch
**Quando usar:** Extrair texto de artigos, blog posts, páginas com muito HTML

---

## Extrair conteúdo de vídeo

### yt-dlp (CLI)
**O que faz:** Baixa transcrições/legendas de vídeos do YouTube
**Precisa de conta:** Não, roda localmente
**Como instalar:**
```bash
brew install yt-dlp
```
**Quando usar:** Skills que partem de um vídeo para criar conteúdo (carrossel, newsletter, roteiro)

---

## Gerar imagens com IA

### Gemini (Google AI)
**O que faz:** Gera imagens a partir de texto
**Precisa de conta:** Sim, Google AI Studio (gratuito até certo limite)
**Configurar:** Salvar `GEMINI_API_KEY` no `.env`
**Quando usar:** Capas, ilustrações, imagens para posts

### DALL-E (OpenAI)
**O que faz:** Gera imagens a partir de texto
**Precisa de conta:** Sim, OpenAI (pago)
**Configurar:** Salvar `OPENAI_API_KEY` no `.env`
**Quando usar:** Alternativa ao Gemini para geração de imagens

---

## Conectar com plataformas (MCPs)

MCPs são conectores que dão acesso direto a plataformas dentro do Claude Code.
O Claude passa a utilizar esses conectores automaticamente quando fizer sentido.

Para verificar quais MCPs já estão instalados: `claude mcp list`
Para remover um MCP: `claude mcp remove nome-do-mcp`

### Notion
**O que faz:** Acessa projetos, bases de dados, briefings e tarefas do Notion
**Precisa de conta:** Sim, API key em notion.so/my-integrations
**Como instalar:**
```bash
claude mcp add notion -- npx -y @notionhq/notion-mcp-server
```
**Quando usar:** Skills que precisam ler/escrever tarefas, bases de clientes, documentos

### Gmail
**O que faz:** Lê e compõe emails sem sair do Claude Code
**Precisa de conta:** Sim, OAuth Google
**Como instalar:**
```bash
claude mcp add gmail -- npx -y @gongrzhe/server-gmail-autoauth-mcp
```
**Quando usar:** Skills de email, follow-up, comunicação com clientes

### Google Calendar
**O que faz:** Vê a agenda, cria eventos e encontra horários disponíveis
**Precisa de conta:** Sim, OAuth Google
**Como instalar:**
```bash
claude mcp add google-calendar -- npx -y @gongrzhe/server-google-calendar-autoauth-mcp
```
**Quando usar:** Skills de agendamento, planejamento, organização de reuniões

### Canva
**O que faz:** Acessa designs, cria novos assets visuais diretamente pelo Claude
**Precisa de conta:** Sim, Canva Pro
**Como instalar:**
```bash
claude mcp add canva -- npx -y @canva/canva-mcp-server
```
**Quando usar:** Skills de design, criação visual, materiais de marca

### Facebook Ads (Meta)
**O que faz:** Gerencia campanhas do Meta (Facebook/Instagram Ads)
**Precisa de conta:** Sim, Token Meta Business
**Quando usar:** Skills de gestão de mídia paga, relatórios de performance

### Google Ads
**O que faz:** Acessa e edita campanhas, busca dados de performance
**Precisa de conta:** Sim, credenciais Google Ads
**Quando usar:** Skills de gestão de mídia paga, relatórios de performance

### N8N
**O que faz:** Dispara automações e workflows do N8N
**Precisa de conta:** Sim, instância N8N + API key
**Como instalar:**
```bash
claude mcp add n8n -- npx -y n8n-mcp
```
**Quando usar:** Skills que precisam disparar automações externas

### Supabase
**O que faz:** Banco de dados e backend completo
**Precisa de conta:** Sim, projeto Supabase
**Quando usar:** Skills que precisam guardar dados, autenticação, backend

### Telegram
**O que faz:** Envia e recebe mensagens via bot do Telegram
**Precisa de conta:** Sim, bot token do BotFather
**Quando usar:** Skills de notificação, comunicação automática

---

## Como adicionar ferramentas novas

Se você utiliza uma API ou ferramenta que não está nesta lista, adicione-a aqui seguindo o formato:

```markdown
### Nome da Ferramenta
**O que faz:** [descrição em uma frase]
**Precisa de conta:** [Sim/Não]
**Configurar:** [o que salvar no .env, se aplicável]
**Como usar em uma skill:** [comando ou instrução]
**Quando usar:** [em que tipo de skill faz sentido]
```
