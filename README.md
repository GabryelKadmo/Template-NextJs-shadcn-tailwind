# Next.js + shadcn/ui + Tailwind CSS Template

Template minimalista para iniciar projetos com Next.js 16 (App Router), TypeScript, Tailwind CSS 4 e shadcn/ui.

## Stack

- [Next.js 16](https://nextjs.org/) — App Router, Server Components, Turbopack no dev
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) + [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css)
- [shadcn/ui](https://ui.shadcn.com/) (estilo `new-york`, Radix UI) + [lucide-react](https://lucide.dev/)
- ESLint 9 (flat config com `eslint-config-next`)

## Começando

Pré-requisitos: Node.js 20.9+ e npm.

```bash
git clone https://github.com/GabryelKadmo/Template-NextJs-shadcn-tailwind.git meu-projeto
cd meu-projeto
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando         | Descrição                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento (Turbopack) |
| `npm run build` | Build de produção                  |
| `npm run start` | Serve o build de produção          |
| `npm run lint`  | Roda o ESLint                      |

## Estrutura

```
app/             Rotas, layout e estilos globais (App Router)
components/ui/   Componentes do shadcn/ui
components/custom/ Componentes próprios do projeto
lib/utils.ts     Helper `cn` (clsx + tailwind-merge)
public/          Arquivos estáticos
components.json  Configuração do shadcn/ui
```

## Adicionando componentes

```bash
npx shadcn@latest add dialog
```

Os componentes são gerados em `components/ui` conforme o `components.json`.

## Segurança das dependências

```bash
npm audit      # vulnerabilidades conhecidas
npm outdated   # versões desatualizadas
```

## Licença

[MIT](LICENSE)
