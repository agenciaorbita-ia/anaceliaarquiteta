# saidas/ — outputs gerais do ÓrbitaOS

Pasta para qualquer output que não seja marketing puro (não cabe em `marketing/`).

## O que vai aqui

- **Análises** de `/analisar-dados` — resumos executivos de CSV/XLSX/PDF
- **Emails** rascunhados por `/email-profissional`
- **Relatórios diversos** que não são de ads
- **Documentos** que as skills geram e que precisam ser enviados, impressos ou anexados

## Estrutura sugerida

```
saidas/
├── analises/        relatórios de /analisar-dados
├── emails/          rascunhos de /email-profissional
└── outros/          qualquer coisa solta
```

As skills já sabem onde salvar — raramente será necessário criar uma subpasta manualmente. Se uma skill perguntar onde salvar, ela sugerirá esta pasta.

## Por que separar de `marketing/`?

`marketing/` é o histórico vivo do trabalho de marketing — peças, campanhas, SEO acumulado.

`saidas/` reúne entregas pontuais geradas no dia a dia — o relatório enviado ao cliente e não mais consultado, o rascunho de email copiado diretamente para o Gmail.

Essa divisão é relevante para o `/salvar` (commit) e para a clareza ao navegar pela pasta.
