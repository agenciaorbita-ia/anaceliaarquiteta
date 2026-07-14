# ÓrbitaOS

> O sistema operacional do seu negócio dentro do Claude Code.

Você acaba de instalar o ÓrbitaOS. Em poucos minutos, sua empresa vai
ter uma memória própria, uma identidade visual aplicada em tudo que
o sistema gerar, e 15 skills prontas para operar marketing, SEO, anúncios
e produção sob sua coordenação.

A seguir, o passo a passo inicial.

---

## Iniciando o sistema

Há dois caminhos possíveis. Escolha o que for mais adequado ao seu fluxo de trabalho.

### Pelo Claude (mais rápido)

Abra o Claude Code em qualquer pasta e cole:

```
Clona o https://github.com/agenciaorbita-ia/OrbitaOS.git na pasta atual,
entra nela e roda o /instalar.
```

O sistema clona o repositório, entra na pasta nova e inicia a entrevista
de setup. Basta responder às perguntas.

### Pelo terminal (mais previsível)

```
git clone https://github.com/agenciaorbita-ia/OrbitaOS.git
cd OrbitaOS
code .
```

Na janela do VS Code: terminal integrado → `claude` → `/instalar`.

---

Quando o `/instalar` terminar, renomeie a pasta `OrbitaOS/` para o nome do
seu negócio (feche o VS Code, renomeie no Explorer/Finder, abra novamente).
A pasta não permanece como "OrbitaOS" — ela passa a representar o seu
negócio.

O `/instalar` é executado uma única vez. Ele entrevista você sobre o negócio,
monta a memória e configura o sistema. A partir daí, o sistema está pronto para uso.

---

## O sistema

**Núcleo** — a operação do dia a dia
`/abrir` carrega o contexto antes de cada sessão de trabalho · `/salvar`
faz commit e push no GitHub · `/atualizar` varre o projeto e atualiza
a memória · `/novo-projeto` cria uma pasta isolada para cada cliente ou
iniciativa · `/mapear-rotinas` identifica tarefas repetidas e as
transforma em skill personalizada.

**Conteúdo e SEO** — a vitrine pública da empresa
`/carrossel` cria carrosséis 1080×1350 com a identidade da marca (com ou
sem foto gerada por IA) · `/publicar-tema` transforma um tema em artigo de
blog, carrossel e três legendas prontas · `/seo` executa o fluxo completo
de 8 etapas (demanda, concorrência, GMB, on-page, conteúdo, ads,
monitoramento, GEO) · `/responder-avaliacoes` escreve respostas para
avaliações do Google · `/aprovar-post` publica blog, Instagram e Facebook
em um único comando.

**Anúncios pagos** — onde o investimento entra
`/anuncio-google` monta a campanha completa em CSV pronto para importar
no Google Ads Editor · `/relatorio-ads` lê os exports de Google e Meta
e devolve um relatório semanal com alertas e recomendações.

**Produção** — ferramentas do dia a dia
`/analisar-dados` lê CSV, XLSX ou PDF e gera um resumo executivo ·
`/email-profissional` redige e-mails a partir de contexto livre.

---

## A tese

IA não é uma ferramenta que sua empresa usa. É o sistema operacional sobre
o qual ela roda.

A diferença não está na velocidade, e sim na capacidade nova — uma pessoa
com IA constrói o que antes exigia um time inteiro. Cada processo crítico
que hoje opera em ciclo aberto (decide → executa → não mede → repete às
cegas) passa a operar em ciclo fechado dentro do ÓrbitaOS (decide →
executa → captura → realimenta → ajusta automaticamente).

O sistema não substitui você. Ele se torna parte da sua empresa.

---

## Como o ÓrbitaOS pensa

`_memoria/` é o núcleo de contexto. Tudo que importa sobre o seu negócio
mora aqui — quem é a empresa, como ela se comunica, o que está em foco
nesta semana. O Claude lê esse conteúdo antes de cada resposta. Quanto
melhor a memória, melhor o sistema.

`identidade/` é a marca. Cores, fontes, logo, padrão visual. Todo
carrossel, slide ou peça que o sistema gera respeita essas diretrizes.

`marketing/`, `saidas/` e `scripts/` concentram os resultados. O sistema
produz, versiona no GitHub, e tudo permanece com você.

---

## Suporte

[agenciaorbita.online](https://agenciaorbita.online)
