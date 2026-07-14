---
name: atualizar
description: >
  Varre o projeto e atualiza os arquivos de contexto (`_memoria/empresa.md`, `preferencias.md`,
  `estrategia.md`, `CLAUDE.md`, `identidade/design-guide.md`) que ficaram desatualizados em relação
  ao estado real do workspace. Use quando o usuário disser "atualiza", "/atualizar", "varre o
  projeto", ou pedir uma reconciliação geral.
---

# /atualizar — Varredura e atualização de contexto

Compara o que está nos arquivos de contexto com o estado real do workspace e propõe atualizações.

## Workflow

### Passo 1 — Levantamento

Listar:
- Pastas na raiz (cada uma representa uma área de trabalho)
- Subpastas em `clientes/` (se existir) — cada uma é um cliente
- Skills em `.claude/skills/` — quais existem hoje
- Arquivos recentes (últimos 30 dias) em pastas como `propostas/`, `conteudo/`, `clientes/<x>/`

### Passo 2 — Comparação

Ler os arquivos de contexto e identificar:

- **Em `_memoria/empresa.md`:** a lista de clientes / serviços / ferramentas está alinhada com a realidade do workspace?
- **Em `_memoria/estrategia.md`:** o foco atual ainda faz sentido (datas, prioridades)?
- **Em `CLAUDE.md`:** as regras de organização e a estrutura de pastas listada estão alinhadas com o que existe?
- **Em `identidade/design-guide.md`:** continua coerente com o que foi gerado nas últimas peças (carrosséis, slides)?

### Passo 3 — Proposta de mudanças

Apresentar ao usuário uma lista curta no formato:

```
Foram identificados [N] pontos para atualização:

1. _memoria/empresa.md — falta o cliente "Acme" (pasta clientes/Acme/ criada em [data])
2. CLAUDE.md — consta a regra "propostas vão em propostas/", mas as propostas estão em clientes/<x>/propostas/
3. _memoria/estrategia.md — menciona "fechar 1º cliente em fevereiro"; já é abril e há 3 clientes ativos

Deseja que essas mudanças sejam aplicadas? É possível aplicar todas, selecionar algumas ou nenhuma.
```

### Passo 4 — Aplicação

Se o usuário aprovar, editar os arquivos com precisão cirúrgica — apenas a linha relevante, sem reformatar o documento inteiro. Apresentar o diff de cada mudança aplicada.

## Regras

- Não inventar fatos — apenas registrar o que possui evidência no workspace
- Se a evidência for ambígua (ex: pasta vazia chamada "Cliente Novo"), perguntar antes de adicionar
- Não apagar conteúdo dos arquivos de contexto — apenas atualizar e adicionar
- Se nenhuma mudança for necessária, responder "Está tudo coerente, nada a atualizar"
