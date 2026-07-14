---
name: instalar
description: >
  Instala o ÓrbitaOS no negócio do usuário. Entrevista sobre empresa, tom de voz,
  foco atual e identidade visual, e preenche `_memoria/empresa.md`, `_memoria/preferencias.md`,
  `_memoria/estrategia.md`, `identidade/design-guide.md` e adapta o `CLAUDE.md` conforme o perfil.
  Use quando o usuário acabou de clonar o repositório e quer instalar o sistema, ou quando
  pedir explicitamente "rodar /instalar", "instalar o ÓrbitaOS", "primeiro setup".
---

# /instalar — Instalação inicial do ÓrbitaOS

Este é o primeiro comando executado pelo usuário após clonar o repositório. A execução deve ser confiável e conduzida como uma entrevista objetiva — uma pergunta por vez, com atenção genuína às respostas, sem apresentar todas de uma vez. O objetivo é que, ao final, o sistema conheça a empresa, seu tom de comunicação e os principais pontos de atrito operacional do dia a dia.

## Pré-checagem

### 1. Nome da pasta

Conferir o nome da pasta atual (`basename "$(pwd)"`). Se for `orbitaos`, `ÓrbitaOS`, `OrbitaOS-main`, `orbitaos-main` ou variação genérica:

> "A pasta atual ainda está com um nome genérico ('<nome-atual>'). O recomendado é que a pasta tenha o nome do seu negócio, não 'ÓrbitaOS'. Ao final do setup, você será lembrado de renomeá-la (o processo é rápido — fechar o VS Code, renomear a pasta no Finder/Explorer e abri-la novamente). Podemos continuar?"

Registrar o nome atual para uso na Fase 5.

### 2. Arquivos de contexto

Conferir se algum arquivo de memória já está preenchido (não é placeholder):
- `_memoria/empresa.md`
- `_memoria/preferencias.md`
- `_memoria/estrategia.md`
- `identidade/design-guide.md`

Se algum já tiver conteúdo real, perguntar:
> "Já tem algum contexto preenchido aqui. Quer que eu sobrescreva (recomeçar do zero) ou complemente o que falta?"

Se for setup limpo, seguir direto.

---

## Fase 1 — Escolha do perfil

Perguntar qual perfil mais combina com o negócio:

1. **Solopreneur / criador solo** — uma pessoa só, mistura de marca pessoal e negócio
2. **Freelancer** — atende clientes, organiza o trabalho por projeto/cliente
3. **Agência / consultoria** — equipe pequena entregando para múltiplos clientes
4. **Empresa** — empresa estabelecida com setores (marketing, comercial, financeiro, etc.)

A resposta determina qual template de `CLAUDE.md` aplicar (ver `templates/perfis/`).

---

## Fase 2 — Entrevista

Fazer essas perguntas em ordem, esperando a resposta de cada uma antes de seguir. Se vier resposta vaga, repetir uma vez pedindo concretude. Não insistir mais que isso — registrar o que vier.

**Sobre o negócio:**
1. "Qual é o nome do seu negócio? (nome da empresa ou, no caso de marca pessoal, o seu nome — usado para identificar a empresa em todos os materiais gerados)"
2. "Em uma frase, o que a sua empresa entrega? (define o posicionamento que vai orientar toda a comunicação)"
3. "Qual é o perfil do seu cliente? (descreva em uma ou duas frases, com base em clientes reais, não em uma persona genérica — usado para calibrar linguagem e argumentos)"
4. "Você opera sozinho ou com equipe? Se houver equipe, qual o tamanho e as funções de cada um? (define se o sistema deve considerar divisão de tarefas e responsabilidades)"

**Sobre voz:**
5. "Compartilhe um exemplo recente da sua comunicação — uma legenda, um e-mail a um cliente, ou outro material real. (permite calibrar o tom de voz a partir de um caso concreto, sem depender de suposições)"
6. "Que tipo de linguagem você prefere evitar? (ex.: informalidade excessiva, jargão de mercado, expressões como 'alavancar' ou 'sinergia') (define os limites de tom que o sistema deve respeitar na comunicação)"

**Sobre foco:**
7. "Qual é o principal gargalo do seu negócio hoje? (identifica em que ponto a atuação do sistema pode gerar mais impacto)"
8. "Qual tarefa recorrente você mais gostaria de eliminar da sua rotina? (aponta uma candidata a automação, que pode virar skill própria via /mapear-rotinas)"

**Sobre identidade visual:**
9. "A identidade visual já está definida? Em caso afirmativo, quais são as cores principais e a fonte? (garante consistência visual nos materiais gerados)"
10. "Existe um logo? Em caso afirmativo, adicione o arquivo em `identidade/logo.png` (ou `.svg`) e confirme. (permite o uso automático do logo nos templates visuais)"

---

## Fase 3 — Preenchimento dos arquivos

### `_memoria/empresa.md`
Preencher com base nas perguntas 1-4. Manter formato simples — nome, o que faz, perfil de cliente, equipe.

### `_memoria/preferencias.md`
Preencher com base nas perguntas 5-6. Estrutura:
- **Tom de voz:** derivar do exemplo de escrita real da pergunta 5 (descrever em 2-3 frases o jeito de escrever, com referência ao exemplo)
- **O que evitar:** lista direta da resposta 6
- **Estilo geral:** síntese do que combina e o que destoa

### `_memoria/estrategia.md`
Preencher com base nas perguntas 7-8. Estrutura:
- **Gargalo atual:** [resposta da 7]
- **Tarefa a eliminar:** [resposta da 8] — registrar como candidata a virar skill via `/mapear-rotinas`
- **Próximas prioridades:** derivar do gargalo (ações que atacam o gargalo diretamente)

### `identidade/design-guide.md`
Se o usuário forneceu cores/fontes/logo (perguntas 9-10), preencher os campos correspondentes. Caso contrário, manter como está e informar:
> "O arquivo `identidade/design-guide.md` foi mantido em branco. Assim que a identidade visual for definida, edite esse arquivo — as skills de carrossel, proposta e slide consultam esse arquivo antes de criar qualquer material visual."

### `CLAUDE.md`
Pegar o template correspondente ao perfil escolhido na Fase 1 (`templates/perfis/claude-md-<perfil>.md`), adaptar com o nome do negócio e estrutura de pastas mencionada nas respostas, e sobrescrever o `CLAUDE.md` da raiz.

---

## Fase 4 — Resumo

Apresentar ao usuário o que foi configurado:

```
✓ Perfil aplicado: [perfil]
✓ Contexto do negócio: _memoria/empresa.md
✓ Tom de voz: _memoria/preferencias.md
✓ Foco atual: _memoria/estrategia.md
✓ Marca: identidade/design-guide.md  [preenchida | em branco — preencher posteriormente]
✓ CLAUDE.md adaptado ao perfil [perfil]
```

---

## Fase 5 — Renomear pasta (se necessário)

Se a pasta atual ainda tem nome genérico (detectado na Pré-checagem), gerar slug do nome da empresa (resposta da pergunta 1):
- minúsculas
- sem acentos
- espaços viram hífen
- caracteres especiais removidos

Ex: "Acme Empresa Ltda" → `acme-empresa-ltda`

Apresentar:

> "Um último ponto: a pasta ainda está com nome genérico ('<nome-atual>').
> Para refletir o seu negócio, recomendo renomeá-la para '<slug>'.
>
> Como proceder:
> 1. Feche o VS Code
> 2. Renomeie a pasta no Finder (Mac) ou Explorer (Windows) — ou pelo
>    terminal, fora dela: `mv <nome-atual> <slug>`
> 3. Abra o VS Code novamente na pasta renomeada
>
> Se preferir outro nome, informe que a sugestão será ajustada."

Se a pasta já tem nome próprio (não genérico), pular essa fase.

---

## Fase 6 — Próximos passos

> "Setup concluído. O ÓrbitaOS já conhece seu negócio.
>
> No início de cada sessão de trabalho, execute `/abrir` — todo o
> contexto definido aqui será carregado antes da primeira interação.
> Para criar um carrossel, um plano de SEO, uma campanha ou qualquer
> outra entrega, basta acionar a skill correspondente.
>
> Você mencionou que repete '<resposta da pergunta 8>' toda semana.
> Quando quiser eliminar essa tarefa da rotina, execute `/mapear-rotinas`
> para transformá-la em uma skill própria."

Se o usuário quiser publicar o trabalho no GitHub, mencionar `/salvar`.

---

## Regras

- Não inventar dados — se a resposta for vaga, registrar exatamente como foi dada (ou deixar um placeholder claro)
- Não manter o texto "este arquivo será preenchido pelo /instalar" nos arquivos finais — esse aviso existe apenas nos placeholders e deve ser removido após o /instalar
- O setup deve durar no máximo 5-7 minutos. Se o usuário demorar em alguma resposta, registrar o que houver e prosseguir
- Não fazer perguntas adicionais além das listadas acima sem motivo claro
