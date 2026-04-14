# Cinema com o Rafa (Next.js)

Migração do site estático para **Next.js 14+ (App Router)** com arquitetura orientada a dados.

## Rodando localmente

```bash
npm install
npm run dev
```

## Formulário de contato (Formspree)

Defina no `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/SEU_FORM_ID
```

Sem essa variável, o projeto usa o placeholder `https://formspree.io/f/your-form-id`.

## Estrutura principal

- `app/`: rotas e páginas App Router
- `components/`: `Navbar`, `Footer`, `ReviewCard`, `MovieTable`
- `data/reviews.json`: críticas e textos bilíngues
- `data/lists.json`: listas e itens da tabela
- `public/images`: posters locais da home

## Como adicionar conteúdo

- Nova crítica: adicionar objeto em `data/reviews.json` com `slug`, `title`, `year`, `director`, `rating`, `posterImage`, `summary`, `textPT`, `textEN` (e `heroImage`).
- Nova lista: adicionar objeto em `data/lists.json` com `slug`, `title`, `cardTitle`, `category`, `heroImage` e `items`.
