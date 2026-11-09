# 🚀 MOONWITNESS — Enterprise-Intelligent-Fullstack Boilerplate

**Modern, production-ready monorepo** for enterprise-grade fullstack applications. Built with Bun, Turborepo, Fastify, Next.js, and a modular `@repo/*` package ecosystem.

> **Status:** 🔴 Phase 0 (Infrastructure & Boilerplate) — Active development

---

## 📖 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/BRIDGE-ALLAH/BOILERPLATE-INTELEGENT-ENTERPRISE-FULLSTACK.git
cd BOILERPLATE-INTELEGENT-ENTERPRISE-FULLSTACK

# 2. Install dependencies
bun install

# 3. Configure environment
cp .env.example .env
# Edit .env with your values

# 4. Start the full stack
bun run dev:all
```

Open your browser to:
- **API:** `http://localhost:3000/api/v1/health` ✅
- **Web App:** `http://localhost:3000` ✅
- **API Docs:** `http://localhost:3000/docs` ✅

---

## 📁 Repository Structure

```
├── apps/
│   ├── api/          # Fastify REST API (TypeScript)
│   ├── web/          # Next.js 14+ web application
│   └── server/       # Rust/Loco server (optional)
│
├── packages/
│   ├── auth/         # JWT, RBAC, Fastify auth plugin
│   ├── config/       # Environment configuration (Zod-validated)
│   ├── constants/    # API endpoints, HTTP status codes, error codes
│   ├── types/        # Shared TypeScript types & interfaces
│   ├── utils/        # Utility functions (responses, pagination)
│   ├── validation/   # Zod validation schemas & form utilities
│   ├── theme/        # MUI theme & design tokens
│   ├── ui-system/    # Reusable UI components
│   ├── ubme-core/    # UBME model engine (contracts, registry, fields)
│   ├── ubme-mikroorm/# MikroORM integration layer
│   └── ubme-cli/     # CLI for schema & migration management
│
├── docs/
│   └── TODO.md       # Roadmap & action plan
│
├── turbo.json        # Turborepo pipeline configuration
├── package.json      # Monorepo root scripts & settings
└── bun.lock          # Bun lockfile
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev:all` | Start API + Web + DB together |
| `bun run dev:api` | Start API only |
| `bun run dev:web` | Start Web only |
| `bun run build` | Build all packages & apps |
| `bun run start` | Start all built apps |
| `bun run test` | Run all tests |
| `bun run test:coverage` | Run tests with coverage |
| `bun run lint` | Lint all packages & apps |
| `bun run format` | Format all code |
| `bun run verify` | Full verification (type-check, lint, test, build) |
| `bun run db:up` | Start database container |
| `bun run db:down` | Stop database container |
| `bun run db:reset` | Reset database container |
| `bun run clean` | Remove all node_modules & build artifacts |
| `bun run doctor` | Run health check and diagnostics |

---

## 📦 Package Ecosystem

| Package | Purpose |
|---------|---------|
| `@repo/auth` | JWT, RBAC/ABAC middleware, Fastify plugin |
| `@repo/config` | Zod-validated environment configuration |
| `@repo/constants` | HTTP status codes, error codes, API endpoints |
| `@repo/types` | Shared TypeScript types & interfaces |
| `@repo/utils` | Response formatting, pagination, helpers |
| `@repo/validation` | Zod validation schemas, form utilities |
| `@repo/theme` | MUI theme, design tokens, dark mode |
| `@repo/ui-system` | 30+ MUI/radix components |
| `@repo/ubme-core` | Model engine contracts (UBME framework) |
| `@repo/ubme-mikroorm` | MikroORM integration layer |

---

## 🏗️ Architecture Overview

```
┌─────────────────┐
│  Web (Next.js)  │
│  React + MUI    │
│  TanStack Query │
└────────┬────────┘
         │ HTTPS
         ▼
┌─────────────────┐
│  API (Fastify)  │
│  Auth + RBAC    │
│  Validation     │
│  Error Handling │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Packages       │
│  @repo/* (shared)│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  DB (PostgreSQL) │
│  MikroORM + Prisma│
└─────────────────┘
```

---

## 🔒 Security

- **Auth:** JWT-based authentication with `Authorization: Bearer <token>`
- **RBAC:** Role-based access control (`user`, `admin`, `super_admin`)
- **Validation:** Zod schemas on all API inputs
- **Headers:** Helmet + CSP + CORS
- **Rate Limiting:** Per-IP and per-user limits

---

## 🚀 Deployment

```bash
# Production build
bun run build:all

# Start production
bun run start:api
bun run start:web
```

---

## 📝 License

MIT © 2026 MoonWitness Dev

---

## 📊 Status

| Metric | Value |
|--------|-------|
| Branches | `master` |
| Packages | 14 |
| Apps | 2 |
| Tests | 56 passing |
| Status | 🔴 Phase 0 active |
