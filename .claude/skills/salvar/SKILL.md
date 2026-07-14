---
name: salvar
description: >
  Salva o trabalho do ÓrbitaOS no GitHub (commit + push). Na primeira vez configura o repositório
  remoto. Use quando o usuário disser "salvar", "salva no github", "commit", "push", "/salvar"
  ou pedir backup do trabalho.
---

# /salvar — Salvar no GitHub

Skill com uma única função: garantir que o trabalho do usuário esteja salvo no GitHub. Acessível mesmo para quem nunca utilizou git.

## Workflow

### Primeira vez (repositório não inicializado)

Detectar com `git rev-parse --is-inside-work-tree`. Se falhar:

1. Perguntar:
   > "Esta é a primeira sincronização. Já existe um repositório criado no GitHub para este workspace?
   > 1. Sim — informe a URL (ex: https://github.com/usuario/nome.git)
   > 2. Não — será criado agora. Informe um nome para o repositório (ex: minha-orbitaos)"

2. **Se opção 1:** rodar `git init`, `git add .`, `git commit -m "Setup inicial do ÓrbitaOS"`, `git branch -M main`, `git remote add origin <URL>`, `git push -u origin main`.

3. **Se opção 2:** verificar se o `gh` CLI está instalado (`gh --version`). 
   - Se sim: rodar `git init`, criar commit inicial, e `gh repo create <nome> --private --source=. --push`.
   - Se não: instruir o usuário a instalar `gh` (https://cli.github.com/) ou criar o repo manualmente em github.com/new e voltar com a URL.

### Commits seguintes (já configurado)

1. Rodar `git status`. Se não houver mudanças, responder "Tudo sincronizado, não há mudanças novas" e parar.

2. Mostrar o `git status` resumido ao usuário e perguntar:
   > "As alterações serão registradas em um commit. Deseja descrever a mudança em uma frase, ou prefere utilizar o resumo automático?"

3. Se o usuário fornecer mensagem, usar. Se não, gerar uma mensagem baseada nos arquivos alterados (1 linha, formato: "Atualiza X" ou "Adiciona Y" ou "Cria proposta para cliente Z").

4. `git add .` → `git commit -m "<mensagem>"` → `git push`.

5. Confirmar com link do repositório (extrair de `git remote get-url origin`):
   > "Sincronizado. Repositório disponível em: <URL>"

## Regras

- Nunca usar `--force` sem o usuário pedir explicitamente
- Nunca rodar `git reset --hard` ou outros comandos destrutivos sem confirmação clara
- Se o push falhar por divergência (outra pessoa tiver feito um commit no repositório remoto), avisar o usuário e oferecer `git pull --rebase` antes de tentar novamente
- Se o usuário ainda não tiver `git` configurado (`user.name` / `user.email`), perguntar e configurar com `git config --global` na primeira vez
