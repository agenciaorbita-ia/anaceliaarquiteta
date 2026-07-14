---
name: mapear-rotinas
description: >
  Mapeia tarefas repetitivas que o usuário faz no dia a dia e gera skills personalizadas para
  automatizá-las. Faz uma entrevista curta sobre o que o usuário repete toda semana, propõe
  skills concretas e cria as aprovadas em `.claude/skills/`. Use quando o usuário pedir
  "/mapear-rotinas", "criar skills personalizadas", "automatizar minhas tarefas" ou "o que dá pra automatizar".
---

# /mapear-rotinas — Mapeamento de tarefas repetitivas em skills

Skill de descoberta + criação. O objetivo é transformar o que o usuário repete em automações ativas.

## Workflow

### Passo 1 — Entrevista de descoberta

Fazer 3 perguntas, uma por vez:

1. "Quais 3 tarefas você repete toda semana e gostaria de não ter que pensar mais? (ex: 'criar carrossel', 'enviar relatório para o cliente', 'fazer briefing')"
2. "Para cada uma delas, qual é o input típico? (ex: 'um link de notícia', 'um arquivo de planilha', 'um nome de cliente')"
3. "E o que você espera de output? (ex: '5 slides em PNG', 'um email pronto para envio', 'um PDF resumindo')"

### Passo 2 — Conferir catálogo

Ler `templates/skills/catalogo.md` para verificar se alguma das tarefas mencionadas já é coberta por uma skill nativa do Claude Code ou validada pelo ÓrbitaOS. Em caso afirmativo, sugerir a skill existente em vez de criar uma nova:

> "A tarefa X já é resolvida pela skill `/<nome>`, que é nativa do sistema. Deseja ativá-la em vez de criar uma nova?"

### Passo 3 — Proposta de skills

Para cada tarefa que NÃO tem cobertura existente, propor uma skill no formato:

```
### /<nome-da-skill>
**O que faz:** [uma frase]
**Input:** [o que recebe]
**Output:** [o que entrega]
**Dependências:** [arquivos do _memoria/, identidade/, ou ferramentas externas]
```

Mostrar todas as propostas juntas e perguntar:
> "Quais skills desta lista devem ser criadas agora? (é possível selecionar todas, algumas ou nenhuma — também é possível solicitar ajustes)"

### Passo 4 — Criação das skills aprovadas

Para cada skill aprovada:

1. Criar pasta `.claude/skills/<nome>/`
2. Criar `SKILL.md` com:
   - Frontmatter: `name`, `description` (descreve quando deve ser invocada)
   - Workflow estruturado em fases ou passos
   - Lista de dependências (arquivos de contexto, ferramentas externas)
   - Regras claras (o que sempre fazer, o que nunca fazer)
3. Se a skill precisar de templates ou exemplos, criar dentro da pasta da skill
4. Calibrar o tom e regras conforme `_memoria/preferencias.md` e `_memoria/empresa.md`

### Passo 5 — Resumo

```
Foram criadas [N] skills:
✓ /<nome1> — em .claude/skills/<nome1>/SKILL.md
✓ /<nome2> — em .claude/skills/<nome2>/SKILL.md
...

Para utilizar: digite / seguido do nome da skill em qualquer sessão.
Para ajustar uma skill posteriormente: edite o SKILL.md correspondente.
```

## Regras

- Não criar skill para tarefa que ocorreu apenas uma vez — é necessário que seja repetível
- Não criar mais de 5 skills por sessão de mapeamento (se o usuário pedir mais, dividir em rodadas)
- Cada skill criada precisa ter um trigger claro (`description` precisa indicar quando invocar) — sem isso a skill nunca é encontrada
- Se a skill depender de uma ferramenta que o usuário não tem (ex: API do Notion sem MCP configurado), avisar antes de criar e oferecer a versão simplificada
