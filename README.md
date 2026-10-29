# Rede ServPro — Site Institucional

Site institucional da **Rede ServPro**, desenvolvido com Next.js. Apresenta a marca, catálogo de produtos, novidades, vagas de emprego e integrações com ferramentas de marketing e atendimento.

## Sumário

- [Visão geral](#visão-geral)
- [Stack tecnológica](#stack-tecnológica)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e execução](#instalação-e-execução)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Rotas e funcionalidades](#rotas-e-funcionalidades)
- [Integrações externas](#integrações-externas)
- [API interna](#api-interna)
- [Convenções de código](#convenções-de-código)
- [Deploy](#deploy)
- [Módulos em desenvolvimento](#módulos-em-desenvolvimento)
- [Solução de problemas](#solução-de-problemas)

## Visão geral

O projeto consome uma **API externa de produtos** para montar o catálogo e a navegação do site. Conteúdos como novidades e vagas utilizam **dados mock locais** (`src/data/`), preparados para futura integração com CMS ou API.

Principais áreas do site:

- **Home** — hero, ambientes, produtos em destaque, depoimentos
- **Produtos** — categorias, subcategorias e páginas de detalhe
- **Novidades (Mídia)** — listagem e posts individuais
- **Trabalhe Conosco** — vagas com envio de currículo por e-mail
- **Sobre Nós** — timeline institucional
- **Área do Cliente** — protótipo com dados mock

Soluções comerciais como **Planos** e **Esquadrias** redirecionam para subdomínios externos.

## Stack tecnológica

| Camada | Tecnologia |
|--------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Linguagem | TypeScript |
| UI | React 19, Tailwind CSS 4, [Radix UI](https://www.radix-ui.com/) |
| Componentes | [shadcn/ui](https://ui.shadcn.com/) (estilo *new-york*) |
| Formulários | React Hook Form + Zod |
| HTTP | Axios |
| Animações | [Motion](https://motion.dev/) |
| E-mail | Nodemailer (SMTP) |
| Ícones | Lucide React, Tabler Icons, React Icons |

Dependências adicionais presentes no código, mas ainda não integradas ao layout principal: Redux Toolkit, TanStack React Query, `@react-pdf/renderer`.

## Pré-requisitos

- **Node.js** 20 ou superior
- **npm**, **yarn**, **pnpm** ou **bun**

## Instalação e execução

```bash
# 1. Clonar o repositório
git clone <url-do-repositorio>
cd site-institucional

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com os valores corretos

# 4. Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Para build de produção:

```bash
npm run build
npm run start
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha os valores. **Nunca commite o arquivo `.env`** — ele já está listado no `.gitignore`.

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `NEXT_PUBLIC_BASE_URL` | Sim | URL base da API de produtos |
| `NEXT_PUBLIC_API_AUTH` | Sim | Token enviado no header `authorization` |
| `SMTP_HOST` | Sim* | Host SMTP (padrão: `smtp.titan.email`) |
| `SMTP_USER` | Sim* | Usuário SMTP |
| `SMTP_PASS` | Sim* | Senha SMTP |
| `EMAIL_FROM` | Sim* | Remetente dos e-mails de currículo |
| `EMAIL_TO` | Sim* | Destinatário (ex.: RH) |
| `EMAIL_REPLY_TO` | Não | Endereço de resposta |
| `EMAIL_SUBJECT_VagaVendedorExterno` | Não | Assunto do e-mail de candidatura |

\* Obrigatórias apenas para o fluxo **Trabalhe Conosco** (`/api/send-curriculo`).

## Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento com Turbopack |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção (após o build) |
| `npm run lint` | ESLint (Next.js + TypeScript) |

## Estrutura do projeto

```
site-institucional/
├── public/                     # Assets estáticos (imagens, logo, SVGs)
├── src/
│   ├── app/                    # App Router (páginas, layout, API routes)
│   │   ├── api/                # Route Handlers (ex.: send-curriculo)
│   │   ├── components/         # Componentes compartilhados e UI (shadcn)
│   │   ├── screens/            # Seções de tela (home, planos, produtos)
│   │   ├── produtos/           # Rotas do catálogo
│   │   ├── novidades/          # Rotas de mídia/blog
│   │   ├── trabalhe-conosco/   # Rotas de vagas
│   │   ├── cliente/            # Área do cliente (mock)
│   │   ├── contrato/           # Templates PDF (sem rota pública)
│   │   ├── layout.tsx          # Layout raiz (header, footer, scripts)
│   │   └── page.tsx            # Home
│   ├── data/                   # Dados mock (vagas, novidades, FAQ)
│   ├── hooks/                  # Hooks customizados
│   ├── lib/                    # Utilitários, Axios, Redux, máscaras
│   ├── schemas/                # Schemas Zod (checkout/contrato)
│   └── utils/                  # Helpers diversos
├── components.json             # Configuração shadcn/ui
├── next.config.ts              # Configuração Next.js (domínios de imagem)
├── postcss.config.mjs
├── eslint.config.mjs
└── tsconfig.json
```

### Alias de importação

O projeto usa o alias `@/*` apontando para `src/*`:

```typescript
import { cn } from "@/lib/utils";
import { api } from "@/lib/axios";
```

## Rotas e funcionalidades

| Rota | Tipo | Descrição |
|------|------|-----------|
| `/` | Estática/SSR | Página inicial |
| `/produtos` | Dinâmica | Listagem de categorias (API) |
| `/produtos/[category]` | Dinâmica | Produtos por categoria |
| `/produtos/[category]/[produto]` | Dinâmica | Detalhe do produto |
| `/novidades` | Dinâmica | Listagem de posts (mock) |
| `/novidades/[slug]` | SSG | Post individual |
| `/trabalhe-conosco` | Dinâmica | Listagem de vagas (mock) |
| `/trabalhe-conosco/[slug]` | SSG | Detalhe da vaga + candidatura |
| `/sobre-nos` | Estática | Timeline institucional |
| `/cliente` | Client | Área do cliente (dados fake) |

Páginas com `export const dynamic = 'force-dynamic'` buscam dados da API a cada requisição. Rotas de vagas e novidades usam `generateStaticParams` com dados mock.

### Catálogo de produtos

A API é consumida via `src/lib/axios.ts`:

- `GET /categories`
- `GET /subcategories`
- `GET /products/filter?is_visivel=1`

O header (`HeaderWrapper`) e as páginas de produtos compartilham a mesma lógica de filtragem: apenas categorias com produtos visíveis são exibidas, excluindo IDs fixos definidos no código.

Se a API estiver indisponível, o site **não quebra** — retorna listas vazias como fallback.

### Trabalhe Conosco

1. Vagas definidas em `src/data/vagas-mock.ts`
2. Candidato envia currículo (PDF, máx. 10 MB)
3. A rota `POST /api/send-curriculo` envia o arquivo por SMTP

### Novidades (Mídia)

Posts simulam estrutura WordPress em `src/data/novidades-mock.ts`. Para integrar com CMS real, substitua as funções `getPostsMock`, `getPostBySlugMock` e `getStaticParamsFromMock`.

## Integrações externas

Configuradas em `src/app/layout.tsx`:

| Serviço | Finalidade |
|---------|------------|
| Google Tag Manager | Analytics e tags de marketing |
| Microsoft Clarity | Mapas de calor e gravação de sessão |
| Smartzapp Chat | Chat ao vivo no site |
| WhatsApp | Botão flutuante "Fale conosco" |

Domínios de imagem permitidos em `next.config.ts`:

- `vendas.redeservpro.com.br`
- `redeservpro.com.br`
- `www.ppa.com.br`
- `assets.aceternity.com`

Links externos no menu/footer:

- [Planos](https://planos.redeservpro.com.br/)
- [Esquadrias](https://lpesquadrias.redeservpro.com.br/)
- [Intermaxx](https://intermaxx.com.br/)
- [Fonemaxx](https://fonemaxx.com.br/)

## API interna

### `POST /api/send-curriculo`

Envia currículo anexado por e-mail.

**Request:** `multipart/form-data` com campo `curriculo` (arquivo)

**Respostas:**

| Status | Descrição |
|--------|-----------|
| `200` | Currículo enviado com sucesso |
| `400` | Nenhum arquivo recebido |
| `413` | Arquivo maior que 10 MB |
| `500` | Erro de SMTP ou configuração |

Implementação: `src/app/api/send-curriculo/route.ts`

## Convenções de código

- **Componentes de UI** — `src/app/components/ui/` (padrão shadcn)
- **Telas/seções** — `src/app/screens/<area>/`
- **Páginas** — `src/app/<rota>/page.tsx`
- **Estilos globais** — `src/app/globals.css` (Tailwind CSS 4)
- **Validação** — schemas Zod em `src/schemas/`
- **Lint** — ESLint com `next/core-web-vitals` e `next/typescript`

### Adicionar componentes shadcn/ui

Com a CLI do shadcn configurada (`components.json`):

```bash
npx shadcn@latest add <componente>
```

## Deploy

O projeto é compatível com [Vercel](https://vercel.com/) e outros hosts que suportem Next.js 15.

Checklist antes do deploy:

1. Configurar todas as variáveis de ambiente no painel do host
2. Garantir que a API de produtos esteja acessível a partir do servidor
3. Validar credenciais SMTP para o fluxo de currículos
4. Executar `npm run build` localmente para verificar erros

```bash
npm run build
```

## Módulos em desenvolvimento

Partes do código existem mas **não estão expostas em rotas públicas** ou **não estão conectadas ao layout**:

| Módulo | Localização | Status |
|--------|-------------|--------|
| Landing de planos | `src/app/screens/planos/` | Sem rota `/planos` (link externo no footer) |
| Orçamento / checkout | `src/app/components/orcamento/` | Sem rota `/orcamento` |
| Contratos PDF | `src/app/contrato/` | Templates sem página consumidora |
| Redux store | `src/lib/redux/` | `StoreProvider` não montado no layout |
| React Query | `src/app/components/providers/` | Provider não montado no layout |
| FAQ de planos | `src/data/faq.ts` | Entradas vazias |
| Área do cliente | `src/app/cliente/` | Dados mock (`pedidosFake.tsx`) |

Antes de ativar esses módulos, será necessário criar rotas, conectar providers no `layout.tsx` e revisar dependências de animação (`motion` vs `framer-motion`).

## Solução de problemas

### Catálogo ou menu de produtos vazio

- Verifique `NEXT_PUBLIC_BASE_URL` e `NEXT_PUBLIC_API_AUTH` no `.env`
- Confirme se a API responde nos endpoints `/categories`, `/subcategories` e `/products/filter`
- Teste conectividade e timeout (limite atual: 8 segundos por requisição)

### Erro ao enviar currículo

- Confirme `SMTP_USER`, `SMTP_PASS` e `SMTP_HOST`
- Verifique se a porta 587 está liberada no ambiente de deploy
- Consulte os logs do servidor para códigos `EAUTH`, `ECONNECTION` ou `ETIMEDOUT`

### Imagens externas não carregam

- Adicione o domínio em `remotePatterns` em `next.config.ts`
- Reinicie o servidor após alterar a configuração

### Build falha por import de `framer-motion`

Alguns arquivos importam `framer-motion`, mas a dependência declarada é `motion`. Padronize os imports para `motion/react-client` ou adicione `framer-motion` ao `package.json`.

---

**Rede ServPro** — Automação, segurança e soluções para arquitetura.
