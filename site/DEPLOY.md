# Publicar a landing page

A landing é um site estático — não há build. Basta servir a pasta `site/`.

## Opção 1 — Netlify (arrastar e soltar, mais rápido)

1. Acesse https://app.netlify.com/drop
2. Arraste a pasta **`site/`** inteira para a área indicada.
3. Pronto — o site fica no ar em segundos com uma URL provisória (`*.netlify.app`).
4. Depois, em *Site settings → Domain*, é possível ligar um domínio próprio (ex.: `anaceliaarquitetura.com.br`).

## Opção 2 — Netlify ou Vercel via GitHub (deploy automático)

1. Suba o repositório para o GitHub (skill `/salvar`).
2. **Netlify:** *Add new site → Import from Git* → o `netlify.toml` na raiz já define `publish = "site"`.
3. **Vercel:** *Add New → Project* → framework "Other"; o `vercel.json` já aponta `outputDirectory: "site"`.
4. A cada `git push`, o site republica sozinho.

## Teste local

Abrir `site/index.html` direto no navegador funciona.
Para simular o servidor: `npx serve site` (ou qualquer servidor estático).

## Observações

- Todas as imagens são locais (`site/assets/`), sem dependências externas além das fontes do Google.
- O formulário de contato abre o **WhatsApp** (+55 33 98808-6468) com a mensagem preenchida — não precisa de backend.
- Imagens de projeto são **placeholders temáticos**; substituir pelos arquivos reais mantendo os mesmos nomes em `site/assets/`.
