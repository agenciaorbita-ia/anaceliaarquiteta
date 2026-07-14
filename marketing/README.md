# marketing/ — saídas do ÓrbitaOS

Tudo o que as skills de marketing produzem é armazenado aqui. As skills do ÓrbitaOS já sabem onde salvar os arquivos — raramente será necessário criar uma pasta manualmente.

## Estrutura padrão

```
marketing/
├── conteudo/                    saídas do /carrossel e /publicar-tema
│   └── <tipo>-<tema>-<YYYY-MM-DD>/
│       ├── carrossel.html
│       ├── render.js
│       ├── instagram/slide-XX.png
│       ├── legenda.md
│       └── legenda-linkedin.md
│
├── seo/                         saídas do /seo (8 passos)
│   ├── 01-pesquisa-demanda.md
│   ├── 02-analise-concorrencia.md
│   ├── 03-google-meu-negocio.md
│   ├── 04-otimizacao-on-page.md
│   ├── 05-estrategia-conteudo.md
│   ├── 06-google-ads.md
│   ├── 07-checklist-monitoramento.md
│   └── 08-geo-otimizacao-ia.md
│
├── campanhas/                   saídas do /anuncio-google e /relatorio-ads
│   ├── google-ads-<YYYY-MM-DD>/  CSVs prontos pra importar
│   └── relatorios/               relatórios semanais
│
└── avaliacoes-google/           histórico do /responder-avaliacoes (opcional)
```

## Como funciona

- **`/carrossel` ou `/publicar-tema`** → cria pasta em `conteudo/<tipo>-<tema>-<data>/`
- **`/seo`** → preenche os 8 arquivos numerados em `seo/`
- **`/anuncio-google`** → cria pasta em `campanhas/google-ads-<data>/` com CSVs
- **`/relatorio-ads`** → cria arquivo em `campanhas/relatorios/<data>-relatorio.md`
- **`/responder-avaliacoes`** → opcionalmente salva histórico em `avaliacoes-google/`

## Versionamento

Todo o conteúdo desta pasta é versionado no Git por meio do `/salvar`. Isso é útil para comparar a evolução do SEO entre meses, revisar textos anteriores ou recuperar uma peça após alterações no Instagram.
