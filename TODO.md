# 🚀 MOONWITNESS — Enterprise-Intelligent-Fullstack Boilerplate

**Strategic Goal:** Transform MoonWitness from a mid-tier monorepo into a **boilerplate-ready, AI-driven, enterprise-grade fullstack platform** with production-grade security, intelligent automation, cross-stack type safety, and developer-first DX.

---

## 📊 Ultra Audit Summary

| Dimension | Current State | Gap | Priority |
|-----------|--------------|-----|----------|
| `boilerplate` | Has monorepo + auth + UBME engine | Missing CLI, scaffolding, quick-start templates, CI/CD, test coverage | 🔴 |
| `intelligent` | Has @repo/utils & basic validation | No AI/LLM SDK, no vector search, no automation engine, no smart validation | 🔴 |
| `enterprise` | Has RBAC + logging & error handling | No audit trail, multi-tenancy, data governance, compliance, rate limiting, observability stack | 🔴 |
| `fullstack` | Fastify + Next.js + React | No cross-stack types, no real-time, no unified state, no GraphQL/OData, no i18n | 🟡 |
| `scalability` | In-memory Map + basic logging | No DB indexing, caching, workers, backup, DR, cost metering, performance monitoring | 🟡 |

---

## 📋 6-Phase, 48-Task Action List

*Setiap task mencakup: ID, Judul, Prioritas, Ruang Lingkup, Ringkasan, Sub-task dengan ceklis, Deliverables, Definition of Done, Dependensi, dan Estimasi Usaha.*

---

## 🏗️ PHASE 0: INFRASTRUCTURE & BOILERPLATE FOUNDATION

### 0.1 Monorepo Workspace Optimization

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `turbo.json`, `pnpm-workspace.yaml`, `package.json` (root), `apps/*`, `packages/*`  
**Ringkasan:** Audit dan bersihkan konfigurasi workspace monorepo, tambahkan script spesifik per workspace, konfigurasikan Turborepo caching, dan pastikan konsistensi `bun install` di seluruh workspace.

**Sub-task:**
- [ ] Audit `turbo.json` saat ini — identifikasi pipeline yang kurang optimal atau hilang
- [ ] Tambahkan pipeline `build`, `test`, `lint`, `dev` dengan `dependsOn` yang benar di `turbo.json`
- [ ] Konfigurasikan `outputs` dan `cache` untuk setiap task di `turbo.json`
- [ ] Periksa `pnpm-workspace.yaml` — pastikan semua `apps/*` dan `packages/*` terdaftar sebagai workspace
- [ ] Tambahkan script root di `package.json`: `dev:all`, `build:all`, `test:all`, `lint:all`
- [ ] Tambahkan script workspace-specifik di setiap `package.json` (apps dan packages)
- [ ] Buat `.npmrc` dengan konfigurasi `bun`/`pnpm` yang konsisten (registry, strict-peer-dependencies, dll)
- [ ] Verifikasi `bun install` berhasil tanpa error di semua workspace
- [ ] Verifikasi `bun run build` berhasil di semua workspace dengan Turborepo caching

**Deliverables:**
- `turbo.json` yang bersih dan teroptimasi
- `.npmrc` dengan konfigurasi konsisten
- Peta script workspace yang terdokumentasi

**Definition of Done:**
- [ ] `bun install` berhasil tanpa error
- [ ] `bun run build` berhasil di semua workspace
- [ ] Build waktu minimal 2× lebih cepat dengan caching Turborepo
- [ ] Instalasi deterministik (hasil yang sama di setiap mesin)

**Dependensi:** Tidak ada (task awal)  
**Estimasi Usaha:** 1-2 hari

---

### 0.2 Quick-Start / Devbox Template

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `README.md`, `docs/`, `.env.example`, `docker-compose.yml`, `scripts/`  
**Ringkasan:** Buat panduan setup 5 menit, template env, Docker compose, perintah seeding, dan health checks agar developer baru dapat bootstrap lokal dengan cepat.

**Sub-task:**
- [ ] Buat `.env.example` di root dengan semua variabel environment yang diperlukan
- [ ] Buat `docker-compose.yml` untuk database, Redis, dan layanan pendukung
- [ ] Tambahkan panduan setup 5 menit di `README.md` (prasyarat, install, run, verify)
- [ ] Buat folder `docs/` dengan panduan pengembangan (dev guide, contributing, architecture overview)
- [ ] Tambahkan script `bun run dev:all` untuk menjalankan semua layanan secara bersamaan
- [ ] Tambahkan script `bun run seed` untuk seeding data awal
- [ ] Tambahkan health check endpoint di API (`/health`) dan web (`/api/health`)
- [ ] Verifikasi setup end-to-end dari clone hingga aplikasi berjalan

**Deliverables:**
- `README.md` yang diperbarui dengan panduan setup
- `.env.example`
- `docker-compose.yml`
- Perintah `bun run dev:all` yang berfungsi

**Definition of Done:**
- [ ] Developer baru dapat bootstrap lokal dalam <5 menit
- [ ] Semua layanan (API, Web, DB, Redis) berjalan setelah `docker-compose up`
- [ ] Health check mengembalikan status 200 OK

**Dependensi:** 0.1  
**Estimasi Usaha:** 1-2 hari

---

### 0.3 CI/CD Pipeline

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `.github/workflows/`, `turbo.json`  
**Ringkasan:** Tambahkan pipeline lint/test/build/deploy, promosi env, branch protection, dan GitHub Actions cache untuk quality gate otomatis.

**Sub-task:**
- [ ] Buat `.github/workflows/ci.yml` dengan trigger pada push dan PR ke `main`
- [ ] Tambahkan job `lint` yang menjalankan `bun run lint:all`
- [ ] Tambahkan job `test` yang menjalankan `bun run test:all` dengan coverage
- [ ] Tambahkan job `build` yang menjalankan `bun run build:all`
- [ ] Konfigurasikan GitHub Actions cache untuk `node_modules` dan Turborepo cache
- [ ] Buat `.github/workflows/deploy.yml` untuk deploy ke staging/produksi
- [ ] Tambahkan env promotion (staging → production) dengan approval manual
- [ ] Konfigurasikan branch protection rules di GitHub (wajib CI pass sebelum merge)
- [ ] Tambahkan `pre-commit` hooks untuk lint dan test sebelum commit

**Deliverables:**
- `ci.yml` — pipeline CI
- `deploy.yml` — pipeline deploy
- `pre-commit` hooks

**Definition of Done:**
- [ ] CI berjalan otomatis pada setiap PR dan push ke `main`
- [ ] Build gagal jika lint atau test tidak lolos
- [ ] Deploy hanya terjadi setelah approval manual dan CI lolos

**Dependensi:** 0.1, 0.2  
**Estimasi Usaha:** 2-3 hari

---

### 0.4 Secret & Config Management

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/config/src/env.ts`, `.env.example`  
**Ringkasan:** Tambahkan validasi berbasis `zod`, integrasi vault rahasia (`dotenvx`/secret), dan pembuatan tipe environment agar konfigurasi type-safe dan tidak terjadi drift.

**Sub-task:**
- [ ] Buat skema `zod` untuk validasi semua variabel environment di `packages/config/src/env.ts`
- [ ] Definisikan tipe TypeScript dari skema `zod` (inferensi otomatis)
- [ ] Integrasi `dotenvx` atau secret vault untuk enkripsi variabel sensitif
- [ ] Buat skrip `env.gen.ts` untuk menghasilkan tipe environment dari `.env.example`
- [ ] Perbarui `.env.example` dengan semua variabel yang diperlukan dan komentar penjelasan
- [ ] Buat middleware untuk memvalidasi env saat aplikasi startup (gagal cepat jika variabel hilang atau tidak valid)
- [ ] Ekspor tipe env ke seluruh aplikasi (`apps/api`, `apps/web`, packages)
- [ ] Verifikasi tidak ada env hardcode di source code

**Deliverables:**
- Skema `zod` env di `packages/config/src/env.ts`
- `env.gen.ts` untuk generate tipe
- `.env.example` yang diperbarui

**Definition of Done:**
- [ ] Semua variabel env divalidasi dengan `zod` saat startup
- [ ] Tipe env tersedia secara type-safe di seluruh codebase
- [ ] Tidak ada variabel sensitif yang hardcode di source code

**Dependensi:** 0.1  
**Estimasi Usaha:** 1-2 hari

---

### 0.5 Observability Baseline

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `apps/api/src/core/logging.ts`, `packages/config/`  
**Ringkasan:** Tambahkan OpenTelemetry, structured JSON logs, SLO/SLI tracking, dan distributed tracing dengan trace ID di log.

**Sub-task:**
- [ ] Konfigurasikan OpenTelemetry SDK di `packages/config/`
- [ ] Implementasikan structured JSON logging di `apps/api/src/core/logging.ts`
- [ ] Tambahkan trace ID ke setiap log entry untuk distributed tracing
- [ ] Buat konfigurasi SLO/SLI (service level objective/indicator) dasar
- [ ] Buat dashboard Grafana dasar untuk metrik observability
- [ ] Integrasi trace ID ke middleware request/response di API
- [ ] Verifikasi log terstruktur dapat di-parse dan ditrace

**Deliverables:**
- Konfigurasi OpenTelemetry
- Structured JSON logger
- Dashboard Grafana dasar

**Definition of Done:**
- [ ] Setiap request memiliki trace ID yang dapat ditrace
- [ ] Log dalam format JSON terstruktur
- [ ] Metrik SLO/SLI terpantau di dashboard

**Dependensi:** 0.1, 0.4  
**Estimasi Usaha:** 2-3 hari

---

### 0.6 Containerization & Cloud Base

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `Dockerfile`, `docker-compose.yml`, `apps/api/`  
**Ringkasan:** Tambahkan multi-stage Dockerfile, non-root user, healthchecks, konfigurasi env, dan resource limits agar siap untuk cloud dan reproducible.

**Sub-task:**
- [ ] Buat multi-stage `Dockerfile` untuk API (build stage + runtime stage)
- [ ] Konfigurasikan non-root user di container
- [ ] Tambahkan healthcheck di `Dockerfile` dan `docker-compose.yml`
- [ ] Tambahkan konfigurasi env untuk container
- [ ] Set resource limits (CPU, memory) di `docker-compose.yml`
- [ ] Buat skrip deploy untuk lokal dan remote
- [ ] Verifikasi container dapat build dan run tanpa error
- [ ] Verifikasi healthcheck mengembalikan status sehat

**Deliverables:**
- Production-ready `Dockerfile`
- `docker-compose.yml` dengan healthcheck dan resource limits
- Skrip deploy lokal/remote

**Definition of Done:**
- [ ] Container build berhasil tanpa error
- [ ] Container run sebagai non-root user
- [ ] Healthcheck mengembalikan status sehat
- [ ] Cloud-ready dan reproducible

**Dependensi:** 0.2, 0.4  
**Estimasi Usaha:** 2-3 hari

---

## 🔒 PHASE 1: ENTERPRISE SECURITY & COMPLIANCE

### 1.1 RBAC/ABAC Extension

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/auth/src/guards.ts`, `apps/api/src/modules/**`  
**Ringkasan:** Tambahkan attribute-based access control (ABAC), permission matrix, role hierarchy, dan policy engine untuk akses yang fine-grained dan dapat diaudit.

**Sub-task:**
- [ ] Buat permission matrix yang mendefinisikan izin per role
- [ ] Implementasikan role hierarchy (role dapat mewarisi izin dari role lain)
- [ ] Buat `abac.middleware.ts` untuk evaluasi atribut-based access control
- [ ] Buat permission registry untuk menyimpan dan mengelola izin
- [ ] Implementasikan `requirePolicy()` decorator/guard untuk endpoint
- [ ] Wire middleware ke semua route non-publik di `apps/api/src/modules/**`
- [ ] Buat unit test untuk RBAC/ABAC rules
- [ ] Verifikasi akses ditolak untuk role yang tidak memiliki izin

**Deliverables:**
- `abac.middleware.ts`
- Permission registry
- `requirePolicy()` guard

**Definition of Done:**
- [ ] Akses fine-grained berdasarkan atribut dan role
- [ ] Semua route non-publik dilindungi oleh middleware
- [ ] Unit test RBAC/ABAC lolos dengan coverage ≥80%

**Dependensi:** 0.1, packages/auth  
**Estimasi Usaha:** 3-4 hari

---

### 1.2 Audit Trail System

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/ubme-core/`, `apps/api/src/core/`  
**Ringkasan:** Implementasikan immutable audit log, activity history, `createdBy/updatedBy`, dan retention policies untuk tracking yang siap compliance.

**Sub-task:**
- [ ] Buat model `AuditLog` dengan field: actor, action, entity, entityId, oldValues, newValues, timestamp, IP address
- [ ] Implementasikan immutable audit log (tidak dapat diubah atau dihapus setelah dibuat)
- [ ] Tambahkan middleware untuk menangkap activity secara otomatis pada create/update/delete
- [ ] Tambahkan field `createdBy` dan `updatedBy` ke semua entity relevan
- [ ] Implementasikan retention policy (archivasi/hapus log lama berdasarkan kebijakan)
- [ ] Buat endpoint `app/audit.ts` untuk melihat audit log
- [ ] Buat query/filter untuk audit log berdasarkan actor, action, entity, tanggal
- [ ] Verifikasi audit log tidak dapat dimodifikasi setelah dibuat

**Deliverables:**
- Model `AuditLog`
- Audit middleware
- Endpoint `app/audit.ts`

**Definition of Done:**
- [ ] Setiap perubahan data tercatat di audit log
- [ ] Audit log immutable dan tidak dapat diubah
- [ ] Endpoint audit log berfungsi dengan filter yang tepat

**Dependensi:** 0.1, 1.1  
**Estimasi Usaha:** 3-4 hari

---

### 1.3 Multi-Tenancy Engine

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/ubme-core/src/`, `apps/api/src/index.ts`  
**Ringkasan:** Tambahkan tenant context, row-level isolation, tenant routing, dan tenant-aware registries untuk isolasi tenant yang terukur.

**Sub-task:**
- [ ] Buat `TenantContext` untuk menyimpan informasi tenant saat ini
- [ ] Implementasikan tenant routing (identifikasi tenant dari subdomain/header/token)
- [ ] Tambahkan row-level isolation di query layer (setiap query otomatis difilter oleh tenantId)
- [ ] Buat tenant-aware `ExecutionContext`
- [ ] Implementasikan tenant filter di MikroORM/Query Engine
- [ ] Wire tenant context ke middleware API di `apps/api/src/index.ts`
- [ ] Buat unit test untuk isolasi tenant (tenant A tidak dapat melihat data tenant B)
- [ ] Verifikasi tidak ada data bocor antar tenant

**Deliverables:**
- `TenantContext`
- Tenant-aware `ExecutionContext`
- Tenant filters

**Definition of Done:**
- [ ] Setiap request dikaitkan dengan tenant yang benar
- [ ] Query otomatis difilter oleh tenantId
- [ ] Tidak ada data bocor antar tenant (terverifikasi dengan test)

**Dependensi:** 0.1, 1.1  
**Estimasi Usaha:** 3-4 hari

---

### 1.4 Data Governance & Compliance

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `apps/api/src/modules/**`, `packages/constants/`  
**Ringkasan:** Tambahkan PII detection, encryption at rest, data retention policies, GDPR/CCPA fields, dan right-to-be-forgotten untuk siap SOC2/GDPR.

**Sub-task:**
- [ ] Tandai field PII dengan `PiiField` marker di schema
- [ ] Implementasikan encryption at rest untuk field sensitif
- [ ] Buat konfigurasi `DataRetention` (berapa lama data disimpan sebelum dihapus/arsip)
- [ ] Tambahkan field GDPR/CCPA (consent, data processing basis, right-to-be-forgotten flag)
- [ ] Implementasikan `softDelete` dan `purge` untuk penghapusan data permanen
- [ ] Buat endpoint untuk right-to-be-forgotten (hapus semua data pengguna)
- [ ] Buat laporan data governance untuk audit compliance
- [ ] Verifikasi enkripsi dan dekripsi berfungsi dengan benar

**Deliverables:**
- `PiiField` markers
- `DataRetention` config
- `softDelete` + `purge` implementasi

**Definition of Done:**
- [ ] Field PII teridentifikasi dan dienkripsi
- [ ] Kebijakan retensi data diterapkan
- [ ] Right-to-be-forgotten berfungsi dengan benar

**Dependensi:** 0.1, 1.2  
**Estimasi Usaha:** 3-4 hari

---

### 1.5 Rate Limiting & Throttling

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `apps/api/src/core/middleware.ts`  
**Ringkasan:** Tambahkan `@fastify/rate-limit`, batasan per-IP/user, dan global + endpoint overrides untuk perlindungan dari penyalahgunaan.

**Sub-task:**
- [ ] Install dan konfigurasikan `@fastify/rate-limit`
- [ ] Tambahkan rate limiting global untuk semua endpoint
- [ ] Tambahkan rate limiting per-IP dan per-user
- [ ] Buat konfigurasi `RATE_LIMITS` untuk override per-endpoint
- [ ] Implementasikan middleware `rateLimit.middleware.ts`
- [ ] Tambahkan response header untuk rate limit info (X-RateLimit-Limit, Remaining, Reset)
- [ ] Buat uji coba rate limiting (terlampaui batas → 429 Too Many Requests)
- [ ] Verifikasi rate limiting tidak mengganggu pengguna normal

**Deliverables:**
- `rateLimit.middleware.ts`
- `RATE_LIMITS` config

**Definition of Done:**
- [ ] Rate limiting aktif di semua endpoint
- [ ] Batas per-IP dan per-user diterapkan
- [ ] Endpoint yang terlampaui batas mengembalikan 429

**Dependensi:** 0.1  
**Estimasi Usaha:** 2-3 hari

---

### 1.6 Security Headers & Hardening

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `apps/api/src/index.ts`  
**Ringkasan:** Tambahkan `fastify-helmet`, CSP, CORS tightening, `X-Powered-By` removal, dan CSRF protection untuk mengurangi permukaan serangan.

**Sub-task:**
- [ ] Install dan konfigurasikan `fastify-helmet` dengan pengaturan aman
- [ ] Konfigurasikan Content Security Policy (CSP)
- [ ] Ketatkan konfigurasi CORS (hanya origin yang diizinkan)
- [ ] Hapus header `X-Powered-By`
- [ ] Implementasikan CSRF protection untuk state-changing requests
- [ ] Buat `security.middleware.ts` yang menggabungkan semua pengaturan keamanan
- [ ] Uji coba header keamanan dengan browser dev tools atau security scanner
- [ ] Verifikasi tidak ada header sensitif yang bocor

**Deliverables:**
- `security.middleware.ts`
- Konfigurasi helmet, CSP, CORS, CSRF

**Definition of Done:**
- [ ] Semua header keamanan terpasang
- [ ] CORS hanya mengizinkan origin terpercaya
- [ ] CSRF protection aktif untuk request yang mengubah state

**Dependensi:** 0.1  
**Estimasi Usaha:** 2-3 hari

---

## 🗄️ PHASE 2: DATA & BUSINESS LAYER

### 2.1 Unified Data Modeling (UBME Expansion)

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/ubme-core/`, `packages/ubme-mikroorm/`  
**Ringkasan:** Perluas `FieldCatalog`, `ConstraintEngine`, `RelationEngine`, `ValidationEngine`; wire ke MikroORM schema untuk unified model layer.

**Sub-task:**
- [ ] Perluas `FieldCatalog` untuk mendukung lebih banyak tipe data dan constraint
- [ ] Implementasikan `ConstraintEngine` untuk validasi constraint di level model
- [ ] Implementasikan `RelationEngine` untuk mengelola relasi antar entity (1:1, 1:N, M:N)
- [ ] Implementasikan `ValidationEngine` untuk validasi data sebelum disimpan
- [ ] Wire semua engine ke MikroORM schema generation
- [ ] Buat integrasi test antara UBME core dan MikroORM adapter
- [ ] Verifikasi schema dihasilkan dengan benar dari definisi UBME model
- [ ] Dokumentasikan cara menambahkan model baru melalui UBME

**Deliverables:**
- `FieldCatalog`, `ConstraintEngine`, `RelationEngine`, `ValidationEngine`
- MikroORM schema wiring

**Definition of Done:**
- [ ] Semua engine UBME berfungsi dan terintegrasi dengan MikroORM
- [ ] Schema dihasilkan otomatis dari definisi model UBME
- [ ] Integrasi test lolos

**Dependensi:** 0.1, packages/ubme-core, packages/ubme-mikroorm  
**Estimasi Usaha:** 4-5 hari

---

### 2.2 Transaction & Saga Engine

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/ubme-core/`, `apps/api/src/core/`  
**Ringkasan:** Tambahkan `TransactionManager`, `SagaOrchestrator`, outbox → worker → compensation untuk transaksi bisnis yang durabel dan konsisten.

**Sub-task:**
- [ ] Implementasikan `TransactionManager` untuk manajemen transaksi database
- [ ] Buat `SagaOrchestrator` untuk mengelola saga transaksi multi-langkah
- [ ] Implementasikan outbox pattern (simpan pesan ke outbox tabel sebelum commit)
- [ ] Buat `OutboxConsumer` untuk memproses pesan dari outbox
- [ ] Implementasikan mekanisme kompensasi (compensating transaction) untuk rollback saga
- [ ] Tambahkan retry logic untuk pesan yang gagal diproses
- [ ] Buat uji coba saga dengan skenario sukses dan gagal
- [ ] Verifikasi konsistensi data setelah saga selesai atau gagal

**Deliverables:**
- `TransactionManager`
- `SagaOrchestrator`
- `OutboxConsumer`

**Definition of Done:**
- [ ] Transaksi bisnis dapat dijalankan dengan durabel
- [ ] Saga dapat di-kompensasi jika gagal di tengah jalan
- [ ] Outbox pattern memastikan tidak ada pesan hilang

**Dependensi:** 0.1, 2.1  
**Estimasi Usaha:** 4-5 hari

---

### 2.3 Query Engine & Optimization

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/ubme-core/src/`, `apps/api/src/modules/**`  
**Ringkasan:** Tambahkan `DataLoader`, pencegahan N+1, aggregation, query kompatibel GraphQL, dan `getPaginationParams` untuk query yang cepat dan efisien.

**Sub-task:**
- [ ] Implementasikan `DataLoader` untuk batching dan caching query
- [ ] Tambahkan deteksi dan pencegahan masalah N+1 query
- [ ] Implementasikan query aggregation untuk ringkasan data
- [ ] Buat query kompatibel GraphQL (filter, sort, select fields)
- [ ] Implementasikan `getPaginationParams` untuk pagination standar
- [ ] Buat `QueryEngine` dan `batchLoader.ts`
- [ ] Buat query optimizer untuk menganalisis dan menyarankan indeks
- [ ] Uji coba performa query sebelum dan setelah optimasi

**Deliverables:**
- `QueryEngine`
- `batchLoader.ts`
- Query optimizer

**Definition of Done:**
- [ ] Masalah N+1 tereliminasi
- [ ] Pagination standar melalui `getPaginationParams`
- [ ] Performa query meningkat minimal 2×

**Dependensi:** 0.1, 2.1  
**Estimasi Usaha:** 3-4 hari

---

### 2.4 Data Migration & Versioning

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/ubme-cli/`, `apps/api/src/core/`  
**Ringkasan:** Tambahkan `migrate:up`, `migrate:down`, `migrate:status`, rollback, expand → backfill → contract untuk evolusi skema yang aman produksi.

**Sub-task:**
- [ ] Implementasikan `MigrationManager` untuk mengelola migrasi skema
- [ ] Tambahkan perintah `migrate:up` untuk menerapkan migrasi
- [ ] Tambahkan perintah `migrate:down` untuk rollback migrasi
- [ ] Tambahkan perintah `migrate:status` untuk melihat status migrasi
- [ ] Implementasikan pola expand → backfill → contract untuk migrasi tanpa downtime
- [ ] Integrasi dengan flyway/prisma migrate atau solusi internal
- [ ] Buat uji coba migrasi (up dan down) pada database test
- [ ] Verifikasi rollback berhasil mengembalikan skema ke versi sebelumnya

**Deliverables:**
- `MigrationManager`
- flyway/prisma migrate integrasi

**Definition of Done:**
- [ ] Migrasi dapat diterapkan dan di-rollback dengan aman
- [ ] Status migrasi dapat dilihat kapan saja
- [ ] Migrasi tanpa downtime melalui pola expand → backfill → contract

**Dependensi:** 0.1, 2.1  
**Estimasi Usaha:** 3-4 hari

---

### 2.5 Background Jobs & Workers

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `apps/api/src/core/`, `packages/ubme-mikroorm/`  
**Ringkasan:** Tambahkan BullMQ/Redis job queue, scheduling, retry, dead-letter queue, dan job monitoring untuk offload async dan retry semantics.

**Sub-task:**
- [ ] Install dan konfigurasikan BullMQ dengan Redis
- [ ] Implementasikan `JobQueue` untuk menambahkan pekerjaan ke antrian
- [ ] Buat `WorkerManager` untuk memproses pekerjaan dari antrian
- [ ] Tambahkan scheduling untuk pekerjaan berkala (cron-like)
- [ ] Implementasikan retry logic dengan backoff strategi
- [ ] Buat dead-letter queue untuk pekerjaan yang gagal berulang kali
- [ ] Tambahkan job monitoring (status, durasi, error rate)
- [ ] Uji coba pekerjaan async dengan skenario sukses dan gagal

**Deliverables:**
- `JobQueue`
- `WorkerManager`
- `scheduler.ts`

**Definition of Done:**
- [ ] Pekerjaan dapat di-offload ke antrian background
- [ ] Retry dan dead-letter queue berfungsi
- [ ] Job monitoring tersedia

**Dependensi:** 0.1, 2.1  
**Estimasi Usaha:** 3-4 hari

---

## 🤖 PHASE 3: INTELLIGENT & AI-READY ARCHITECTURE

### 3.1 AI/LLM SDK Integration

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/ubme-core/`, `apps/api/src/modules/**`  
**Ringkasan:** Integrasi LangChain/Node SDK, embedding model, LLM calls, guardrails, dan prompt management untuk fitur AI siap pakai.

**Sub-task:**
- [ ] Install dan konfigurasikan LangChain/Node SDK atau alternatif
- [ ] Buat `AiSdk` wrapper untuk panggilan LLM terpusat
- [ ] Integrasi embedding model untuk representasi vektor teks
- [ ] Buat `PromptRegistry` untuk manajemen prompt template
- [ ] Implementasikan `GuardrailMiddleware` untuk filter input/output AI
- [ ] Buat `EmbeddingService` untuk generate embedding
- [ ] Wire AI modules ke `apps/api/src/modules/**`
- [ ] Uji coba panggilan LLM dengan respons yang aman dan terbatas

**Deliverables:**
- `AiSdk`
- `EmbeddingService`
- `PromptRegistry`
- `GuardrailMiddleware`

**Definition of Done:**
- [ ] Panggilan LLM dapat dilakukan melalui `AiSdk`
- [ ] Embedding dapat dihasilkan untuk teks
- [ ] Guardrail mencegah respons AI yang tidak aman

**Dependensi:** 0.1, 2.1  
**Estimasi Usaha:** 4-5 hari

---

### 3.2 Vector Storage & Hybrid Search

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/ubme-core/`, `apps/api/src/modules/search/`  
**Ringkasan:** Tambahkan Qdrant/PGVector/Milvus, embedding pipeline, hybrid keyword+vector search, dan ranking untuk semantic search dan RAG-ready.

**Sub-task:**
- [ ] Pilih dan konfigurasikan vector store (Qdrant/PGVector/Milvus)
- [ ] Implementasikan `VectorStore` untuk menyimpan dan query vektor
- [ ] Buat embedding pipeline (teks → vektor → simpan ke vector store)
- [ ] Implementasikan hybrid search (keyword + vector search)
- [ ] Buat `SearchEngine` dengan ranking hasil
- [ ] Integrasi search ke modul pencarian di API
- [ ] Uji coba semantic search dengan query bahasa alami
- [ ] Verifikasi relevansi hasil pencarian

**Deliverables:**
- `VectorStore`
- `SearchEngine`
- `hybrid.search.ts`

**Definition of Done:**
- [ ] Semantic search berfungsi dengan query bahasa alami
- [ ] Hybrid search menggabungkan keyword dan vektor
- [ ] Hasil pencarian di-rank berdasarkan relevansi

**Dependensi:** 0.1, 3.1  
**Estimasi Usaha:** 4-5 hari

---

### 3.3 Intelligent Automation Engine

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/ubme-core/`, `apps/api/src/modules/pipeline/`  
**Ringkasan:** Tambahkan rule engine, workflow orchestrator, AI-triggered actions, human-in-the-loop, dan state machine untuk smart routing dan automasi.

**Sub-task:**
- [ ] Implementasikan `RuleEngine` untuk evaluasi aturan bisnis
- [ ] Buat `WorkflowOrchestrator` untuk mengatur alur kerja multi-langkah
- [ ] Tambahkan AI-triggered actions (tindakan yang dipicu oleh hasil AI)
- [ ] Implementasikan human-in-the-loop untuk persetujuan manual
- [ ] Buat `StateMachine` untuk manajemen status workflow
- [ ] Buat `AutomationActor` untuk eksekusi otomatis
- [ ] Uji coba workflow dengan skenario otomatis dan manual approval
- [ ] Verifikasi state machine transisi dengan benar

**Deliverables:**
- `RuleEngine`
- `WorkflowOrchestrator`
- `AutomationActor`
- `StateMachine`

**Definition of Done:**
- [ ] Aturan bisnis dapat dievaluasi secara otomatis
- [ ] Workflow dapat dijalankan dengan human-in-the-loop
- [ ] State machine mengelola transisi status dengan benar

**Dependensi:** 0.1, 2.2, 3.1  
**Estimasi Usaha:** 4-5 hari

---

### 3.4 Smart Validation & Predictive Form

**Prioritas:** 🟡 Sedang  
**Ruang Lingkup:** `packages/validation/`, `apps/web/src/hooks/useFormWithSchema.ts`  
**Ringkasan:** Tambahkan ML-based validation, anomaly detection, predictive field filling, dan confidence scoring untuk mengurangi error dan meningkatkan UX.

**Sub-task:**
- [ ] Implementasikan `SmartValidator` dengan validasi berbasis ML
- [ ] Tambahkan anomaly detection untuk input yang tidak biasa
- [ ] Buat `Predictor` untuk predictive field filling
- [ ] Implementasikan confidence scoring untuk prediksi
- [ ] Integrasi dengan `useFormWithSchema.ts` di frontend
- [ ] Buat form suggestions berdasarkan prediksi
- [ ] Uji coba validasi cerdas dengan data uji
- [ ] Verifikasi akurasi prediksi dan deteksi anomali

**Deliverables:**
- `SmartValidator`
- `Predictor`
- `form.suggestions.ts`

**Definition of Done:**
- [ ] Validasi cerdas mengurangi error input pengguna
- [ ] Predictive field filling berfungsi dengan confidence scoring
- [ ] Anomaly detection mendeteksi input yang tidak biasa

**Dependensi:** 0.1, packages/validation  
**Estimasi Usaha:** 3-4 hari

---

### 3.5 AI-Assisted Coding & Docs

**Prioritas:** 🟡 Sedang  
**Ruang Lingkup:** `packages/ubme-cli/`, `docs/`  
**Ringkasan:** Tambahkan agent integration, auto-doc generation, code suggestions, error diagnostics, dan prompt templates untuk pengembangan lebih cepat dan kurang docs drift.

**Sub-task:**
- [ ] Buat `AIAgent` untuk integrasi dengan coding assistant
- [ ] Implementasikan `CodeAssistant` untuk saran kode otomatis
- [ ] Buat `AutoDocGenerator` untuk generate dokumentasi dari kode
- [ ] Implementasikan error diagnostics dengan saran perbaikan
- [ ] Buat prompt templates untuk tugas AI umum
- [ ] Integrasi AI assistant ke CLI (`packages/ubme-cli/`)
- [ ] Uji coba generate dokumentasi dari kode nyata
- [ ] Verifikasi saran kode relevan dan aman

**Deliverables:**
- `AIAgent`
- `CodeAssistant`
- `AutoDocGenerator`
- `docs/assistant.md`

**Definition of Done:**
- [ ] AI assistant dapat memberikan saran kode
- [ ] Dokumentasi dapat di-generate otomatis dari kode
- [ ] Error diagnostics memberikan saran perbaikan

**Dependensi:** 0.1, 3.1  
**Estimasi Usaha:** 3-4 hari

---

### 3.6 Intelligent Caching & Performance

**Prioritas:** 🟡 Sedang  
**Ruang Lingkup:** `apps/api/src/core/`, `apps/web/src/`  
**Ringkasan:** Tambahkan AI cache eviction, predictive prefetch, edge caching, dan cache-aside + write-through untuk pengurangan latensi 40%+.

**Sub-task:**
- [ ] Implementasikan `CacheManager` untuk manajemen cache terpusat
- [ ] Tambahkan AI cache eviction (keputusan cerdas untuk evict cache)
- [ ] Implementasikan predictive prefetch (pre-load data yang mungkin dibutuhkan)
- [ ] Tambahkan edge caching untuk konten statis
- [ ] Implementasikan cache-aside dan write-through strategi
- [ ] Buat `edgeHandler.ts` untuk menangani request di edge
- [ ] Uji coba performa cache dengan dan tanpa optimasi
- [ ] Verifikasi pengurangan latensi minimal 40%

**Deliverables:**
- `CacheManager`
- `SmartCacheEviction`
- `edgeHandler.ts`

**Definition of Done:**
- [ ] Cache-aside dan write-through diterapkan
- [ ] Predictive prefetch mengurangi latensi
- [ ] Performa meningkat minimal 40%

**Dependensi:** 0.1, 5.2  
**Estimasi Usaha:** 3-4 hari

---

## 🌐 PHASE 4: FULLSTACK UX & INTEGRATION

### 4.1 Cross-Stack Type Safety

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/types/`, `apps/api/src/`, `apps/web/src/`  
**Ringkasan:** Generate shared TS types dari schema, runtime `zod` sync, `@repo/types` diekspor ke mana saja, tRPC optional untuk zero type mismatch bugs.

**Sub-task:**
- [ ] Buat `packages/types/` dengan shared DTOs dan `ApiResponse`
- [ ] Implementasikan generate shared TS types dari schema (zod → TS)
- [ ] Buat skrip `zod→TS` sync untuk menjaga tipe tetap sinkron
- [ ] Ekspor `@repo/types` ke semua aplikasi dan paket
- [ ] Opsional: integrasi tRPC untuk type-safe API calls
- [ ] Wire shared types ke `apps/api/src/` dan `apps/web/src/`
- [ ] Uji coba type safety antara API dan frontend
- [ ] Verifikasi tidak ada type mismatch antara backend dan frontend

**Deliverables:**
- `SharedTypes`
- `TypeGen`
- `zod→TS` sync script

**Definition of Done:**
- [ ] Tipe shared tersedia di seluruh stack
- [ ] Zod schema dan TypeScript type selalu sinkron
- [ ] Tidak ada type mismatch antara API dan frontend

**Dependensi:** 0.1, packages/types  
**Estimasi Usaha:** 3-4 hari

---

### 4.2 Real-Time Communication

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `apps/api/src/core/`, `apps/web/src/services/`  
**Ringkasan:** Tambahkan WebSocket/SSE, presence, live updates, socket auth, dan reconnection untuk real-time UX.

**Sub-task:**
- [ ] Implementasikan `WebSocketServer` di API
- [ ] Tambahkan Server-Sent Events (SSE) sebagai alternatif WebSocket
- [ ] Implementasikan presence (siapa yang online)
- [ ] Buat `live.update.ts` untuk pembaruan real-time
- [ ] Implementasikan socket auth untuk koneksi WebSocket yang aman
- [ ] Tambahkan reconnection logic untuk koneksi yang terputus
- [ ] Uji coba real-time komunikasi antara klien dan server
- [ ] Verifikasi reconnection bekerja setelah koneksi terputus

**Deliverables:**
- `WebSocketServer`
- `SocketAuth`
- `live.update.ts`

**Definition of Done:**
- [ ] WebSocket/SSE terhubung antara klien dan server
- [ ] Presence menampilkan status online pengguna
- [ ] Live update diterima oleh klien secara real-time

**Dependensi:** 0.1, 1.1  
**Estimasi Usaha:** 3-4 hari

---

### 4.3 Advanced Form Management

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `apps/web/src/hooks/useFormWithSchema.ts`, `packages/validation/`  
**Ringkasan:** Standardisasi pada `react-hook-form` + `zod`, file upload, dynamic forms, AI suggestions, dan error mapping untuk production forms.

**Sub-task:**
- [ ] Standardisasi form pada `react-hook-form` + `zod`
- [ ] Implementasikan `useFormAdvanced` dengan fitur lanjutan
- [ ] Tambahkan `upload.hook` untuk file upload
- [ ] Implementasikan dynamic forms (field yang dapat ditambah/dihapus)
- [ ] Integrasi AI suggestions ke form
- [ ] Buat `form.validator.ts` untuk validasi form terpusat
- [ ] Implementasikan error mapping dari backend ke frontend
- [ ] Uji coba form dengan skenario kompleks (upload, dynamic, validasi)

**Deliverables:**
- `useFormAdvanced`
- `upload.hook`
- `form.validator.ts`

**Definition of Done:**
- [ ] Form standar menggunakan react-hook-form + zod
- [ ] File upload berfungsi dengan validasi
- [ ] Error dari backend ditampilkan dengan benar di frontend

**Dependensi:** 0.1, 3.4, packages/validation  
**Estimasi Usaha:** 3-4 hari

---

### 4.4 Multi-Language & i18n

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `apps/web/src/app/[lang]/`, `packages/config/`  
**Ringkasan:** Tambahkan `next-intl` atau `i18next`, locale detection, translation pipeline, RTL, dan fallback locales untuk siap global.

**Sub-task:**
- [ ] Pilih dan konfigurasikan `next-intl` atau `i18next`
- [ ] Implementasikan locale detection dari browser/URL
- [ ] Buat translation pipeline untuk menambahkan bahasa baru
- [ ] Tambahkan dukungan RTL (right-to-left) untuk bahasa seperti Arab
- [ ] Implementasikan fallback locales jika terjemahan tidak tersedia
- [ ] Buat `i18n.config.ts` dan `locale.middleware.ts`
- [ ] Buat file terjemahan untuk setidaknya 2 bahasa
- [ ] Uji coba perpindahan bahasa dan RTL layout

**Deliverables:**
- `i18n.config.ts`
- `locale.middleware.ts`
- File terjemahan

**Definition of Done:**
- [ ] Aplikasi mendukung minimal 2 bahasa
- [ ] Locale terdeteksi otomatis dari browser
- [ ] RTL layout berfungsi untuk bahasa yang mendukungnya

**Dependensi:** 0.1  
**Estimasi Usaha:** 3-4 hari

---

### 4.5 Accessibility & Compliance

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `apps/web/src/`, `packages/ui-system/`  
**Ringkasan:** Tambahkan WCAG 2.1 AA, a11y testing, screen reader, keyboard nav, contrast, dan focus management untuk inklusif dan compliant.

**Sub-task:**
- [ ] Implementasikan WCAG 2.1 AA standar di seluruh komponen UI
- [ ] Tambahkan a11y testing dengan `axe-core`
- [ ] Optimalkan untuk screen reader (ARIA labels, roles)
- [ ] Implementasikan keyboard navigation yang lengkap
- [ ] Pastikan contrast ratio memenuhi standar WCAG AA
- [ ] Implementasikan focus management yang benar
- [ ] Buat `a11y.test.ts` untuk uji aksesibilitas
- [ ] Buat `a11y.theme.ts` untuk tema yang accessible
- [ ] Uji coba dengan screen reader dan keyboard only

**Deliverables:**
- `a11y.test.ts`
- `axe-core` integrasi
- `a11y.theme.ts`

**Definition of Done:**
- [ ] Semua komponen memenuhi WCAG 2.1 AA
- [ ] A11y testing terintegrasi di CI
- [ ] Navigasi keyboard dan screen reader berfungsi

**Dependensi:** 0.1, packages/ui-system  
**Estimasi Usaha:** 3-4 hari

---

### 4.6 UI/UX System & Component Library

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/ui-system/`, `apps/web/src/components/ui/`  
**Ringkasan:** Tambahkan Storybook, design tokens, MUI/radix theming, component catalog, dan `data-testid` untuk UI yang konsisten dan dapat diuji.

**Sub-task:**
- [ ] Setup Storybook di `packages/ui-system/`
- [ ] Buat design tokens (warna, tipografi, spacing, dll)
- [ ] Implementasikan MUI/radix theming
- [ ] Buat component catalog/atlas
- [ ] Tambahkan `data-testid` ke semua komponen untuk testing
- [ ] Buat `storybook.config.ts`
- [ ] Buat `design-tokens.css`
- [ ] Uji coba komponen di Storybook dan verifikasi tampilan

**Deliverables:**
- `storybook.config.ts`
- `design-tokens.css`
- Component atlas

**Definition of Done:**
- [ ] Storybook berjalan dengan semua komponen
- [ ] Design tokens diterapkan konsisten
- [ ] Semua komponen memiliki `data-testid` untuk testing

**Dependensi:** 0.1, packages/ui-system  
**Estimasi Usaha:** 4-5 hari

---

### 4.7 State & Data Fetching Standardization

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `apps/web/src/services/api/`, `hooks/`  
**Ringkasan:** Standardisasi TanStack Query, cache normalization, optimistic updates, `queryKeys` pattern, dan invalidation untuk state yang dapat diprediksi.

**Sub-task:**
- [ ] Standardisasi pada TanStack Query untuk data fetching
- [ ] Implementasikan cache normalization untuk data yang konsisten
- [ ] Tambahkan optimistic updates untuk UX yang lebih responsif
- [ ] Buat `queryKeys` pattern untuk manajemen cache key
- [ ] Implementasikan invalidation trigger untuk cache yang segar
- [ ] Buat `query.client.ts` untuk konfigurasi klien query
- [ ] Buat `useQueryFactory` untuk hook query yang dapat digunakan kembali
- [ ] Uji coba data fetching dengan skenario online/offline

**Deliverables:**
- `query.client.ts`
- `useQueryFactory`
- `invalidation.trigger`

**Definition of Done:**
- [ ] Data fetching standar menggunakan TanStack Query
- [ ] Optimistic updates berfungsi untuk mutasi
- [ ] Cache invalidation terpicu dengan benar setelah mutasi

**Dependensi:** 0.1, 4.1  
**Estimasi Usaha:** 3-4 hari

---

## ⚙️ PHASE 5: OPERATIONS, SCALE & RESILIENCE

### 5.1 Database Optimization

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `apps/api/src/core/`, `packages/ubme-mikroorm/`  
**Ringkasan:** Tambahkan indexing strategy, query planner, connection pooling, read replicas, dan slow-query alerts untuk query 2-3× lebih cepat.

**Sub-task:**
- [ ] Buat `db.indexes.ts` dengan strategi indeks untuk tabel yang sering diakses
- [ ] Implementasikan query planner untuk menganalisis performa query
- [ ] Konfigurasikan connection pooling untuk database
- [ ] Setup read replicas untuk membagi beban baca
- [ ] Implementasikan slow-query alerts untuk query yang lambat
- [ ] Buat `query.optimizer.ts` untuk saran optimasi query
- [ ] Uji coba performa query sebelum dan setelah optimasi
- [ ] Verifikasi pengurangan waktu query minimal 2-3×

**Deliverables:**
- `db.indexes.ts`
- `pool.config.ts`
- `query.optimizer.ts`

**Definition of Done:**
- [ ] Indeks diterapkan untuk tabel yang sering diakses
- [ ] Connection pooling dikonfigurasi
- [ ] Slow-query alerts aktif

**Dependensi:** 0.1, 2.1  
**Estimasi Usaha:** 3-4 hari

---

### 5.2 Caching Strategy

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `apps/api/src/core/`, `apps/web/src/`  
**Ringkasan:** Redis caching, HTTP cache, CDN, cache invalidation, `CacheManager`, dan `cache.middleware` untuk 50% lebih sedikit panggilan backend.

**Sub-task:**
- [ ] Install dan konfigurasikan Redis untuk caching
- [ ] Implementasikan `RedisCache` untuk penyimpanan cache
- [ ] Tambahkan HTTP cache headers untuk respons API
- [ ] Setup CDN untuk konten statis
- [ ] Implementasikan cache invalidation strategi
- [ ] Buat `cache.middleware` untuk middleware caching
- [ ] Buat `cache.svc.ts` untuk layanan cache
- [ ] Uji coba hit ratio cache dan verifikasi pengurangan panggilan backend

**Deliverables:**
- `RedisCache`
- `cache.svc.ts`
- `cache.middleware`

**Definition of Done:**
- [ ] Redis caching aktif untuk data yang sering diakses
- [ ] HTTP cache headers diatur dengan benar
- [ ] Panggilan backend berkurang minimal 50%

**Dependensi:** 0.1, 5.1  
**Estimasi Usaha:** 3-4 hari

---

### 5.3 Observability & Monitoring

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/config/`, `apps/api/src/core/logging.ts`  
**Ringkasan:** Tambahkan Prometheus metrics, Grafana dashboards, SLO alerting, APM tracing, dan error budgets untuk production-grade ops.

**Sub-task:**
- [ ] Implementasikan Prometheus metrics untuk aplikasi
- [ ] Buat Grafana dashboards untuk monitoring
- [ ] Tambahkan SLO alerting untuk batas layanan
- [ ] Implementasikan APM tracing untuk distributed tracing
- [ ] Buat error budgets untuk manajemen risiko
- [ ] Integrasi Sentry SDK untuk error tracking
- [ ] Buat `metrics.ts` dan `sentry.sdk.ts`
- [ ] Uji coba monitoring dan alerting dengan skenario gangguan

**Deliverables:**
- `metrics.ts`
- `sentry.sdk.ts`
- `grafana.dashboard.json`

**Definition of Done:**
- [ ] Prometheus metrics diekspos dan dapat di-scrape
- [ ] Grafana dashboard menampilkan metrik kunci
- [ ] SLO alerting aktif untuk batas layanan

**Dependensi:** 0.1, 0.5  
**Estimasi Usaha:** 3-4 hari

---

### 5.4 Backup & Disaster Recovery

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `apps/api/src/core/`, `packages/config/`  
**Ringkasan:** Automated backups, point-in-time recovery, DR runbook, restore scripts, dan backup encryption untuk RPO < 15menit, RTO < 1jam.

**Sub-task:**
- [ ] Implementasikan automated backups untuk database
- [ ] Tambahkan point-in-time recovery kemampuan
- [ ] Buat DR runbook (`dr.runbook.md`) untuk prosedur pemulihan
- [ ] Buat restore scripts untuk pemulihan cepat
- [ ] Implementasikan backup encryption untuk keamanan
- [ ] Buat `backup.worker.ts` untuk menjalankan backup terjadwal
- [ ] Uji coba backup dan restore dengan skenario bencana
- [ ] Verifikasi RPO < 15menit dan RTO < 1jam

**Deliverables:**
- `backup.worker.ts`
- `dr.runbook.md`
- `restore.script`

**Definition of Done:**
- [ ] Backup terjadwal berjalan otomatis
- [ ] Restore dapat dilakukan dalam < 1jam
- [ ] Backup terenkripsi dan aman

**Dependensi:** 0.1, 5.1  
**Estimasi Usaha:** 3-4 hari

---

### 5.5 Cost Optimization & Resource Management

**Prioritas:** 🟡 Sedang  
**Ruang Lingkup:** `apps/api/src/core/`, `packages/config/`  
**Ringkasan:** Auto-scaling, usage metering, budget alerts, resource limits, dan idle detection untuk pengurangan biaya 20-30%.

**Sub-task:**
- [ ] Implementasikan auto-scaling berdasarkan beban
- [ ] Buat `cost.meter.ts` untuk pemantauan penggunaan biaya
- [ ] Tambahkan budget alerts untuk pemberitahuan melebihi anggaran
- [ ] Set resource limits (CPU, memory) untuk container
- [ ] Implementasikan idle detection untuk sumber daya yang tidak digunakan
- [ ] Buat `autoscaler.config` untuk konfigurasi auto-scaling
- [ ] Buat `budget.alert` untuk pemberitahuan biaya
- [ ] Uji coba auto-scaling dan verifikasi pengurangan biaya

**Deliverables:**
- `cost.meter.ts`
- `autoscaler.config`
- `budget.alert`

**Definition of Done:**
- [ ] Auto-scaling aktif berdasarkan beban
- [ ] Budget alerts memberitahukan ketika melebihi batas
- [ ] Biaya berkurang minimal 20-30%

**Dependensi:** 0.1, 5.3  
**Estimasi Usaha:** 3-4 hari

---

### 5.6 Security Hardening & Compliance

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `apps/api/src/index.ts`, `packages/constants/`  
**Ringkasan:** Vulnerability scanning, secrets rotation, audit logs, pen test checklist, 2FA/MFA, dan SSO untuk enterprise security.

**Sub-task:**
- [ ] Implementasikan vulnerability scanning untuk dependensi
- [ ] Tambahkan secrets rotation untuk kredensial
- [ ] Integrasi audit logs dengan sistem audit (task 1.2)
- [ ] Buat `security.checklist.md` untuk pen test
- [ ] Implementasikan 2FA/MFA untuk autentikasi
- [ ] Buat `sso.config.ts` untuk Single Sign-On
- [ ] Buat `mfa.middleware` untuk middleware MFA
- [ ] Uji coba 2FA/MFA dan SSO dengan skenario nyata

**Deliverables:**
- `security.checklist.md`
- `sso.config.ts`
- `mfa.middleware`

**Definition of Done:**
- [ ] Vulnerability scanning berjalan secara teratur
- [ ] 2FA/MFA aktif untuk autentikasi
- [ ] SSO terintegrasi dengan penyedia identitas

**Dependensi:** 0.1, 1.1, 1.2  
**Estimasi Usaha:** 3-4 hari

---

## 🛠️ PHASE 6: DEVELOPER EXPERIENCE & AI WORKFLOW

### 6.1 CLI & Scaffolding Engine

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/ubme-cli/`, `packages/ubme-core/`  
**Ringkasan:** Tambahkan `ubme create`, `ubme add`, `ubme generate`, module scaffolder, template engine, dan recipe system untuk onboarding 10× lebih cepat.

**Sub-task:**
- [ ] Buat `cli.ts` sebagai entry point CLI UBME
- [ ] Implementasikan perintah `ubme create` untuk membuat proyek baru
- [ ] Implementasikan perintah `ubme add` untuk menambahkan modul/fitur
- [ ] Implementasikan perintah `ubme generate` untuk generate kode
- [ ] Buat module scaffolder untuk pembuatan modul cepat
- [ ] Implementasikan template engine untuk template yang dapat disesuaikan
- [ ] Buat recipe system untuk kombinasi fitur yang telah ditentukan
- [ ] Implementasikan `ubme init` untuk inisialisasi proyek
- [ ] Uji coba CLI dengan membuat proyek contoh

**Deliverables:**
- `cli.ts`
- `scaffolder.ts`
- `templates/`
- `recipes/`

**Definition of Done:**
- [ ] CLI dapat membuat proyek baru dengan satu perintah
- [ ] Modul dapat ditambahkan dengan `ubme add`
- [ ] Kode dapat di-generate dengan `ubme generate`

**Dependensi:** 0.1, 2.1  
**Estimasi Usaha:** 4-5 hari

---

### 6.2 Code Generation & Scaffolding

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/ubme-cli/`, `packages/types/`  
**Ringkasan:** Generate API clients, types, migrations, controllers dari UBME models, config, dan hooks untuk zero boilerplate.

**Sub-task:**
- [ ] Buat `generator.ts` untuk generate kode dari model UBME
- [ ] Implementasikan `schema.generator.ts` untuk generate schema
- [ ] Buat `codegen.ts` untuk orchestrasi code generation
- [ ] Generate API clients dari UBME models
- [ ] Generate types dari schema UBME
- [ ] Generate migrations dari perubahan schema
- [ ] Generate controllers dari definisi model
- [ ] Uji coba code generation dengan model contoh

**Deliverables:**
- `generator.ts`
- `schema.generator.ts`
- `codegen.ts`

**Definition of Done:**
- [ ] API client dapat di-generate dari model UBME
- [ ] Type dapat di-generate dari schema
- [ ] Migration dapat di-generate dari perubahan schema

**Dependensi:** 0.1, 2.1, 4.1  
**Estimasi Usaha:** 4-5 hari

---

### 6.3 Documentation as Code

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `docs/`, `packages/ubme-core/README.md`  
**Ringkasan:** Auto-generated API docs, architecture diagrams, runbooks, changelog, and contribution guide untuk dokumentasi yang selalu sinkron.

**Sub-task:**
- [ ] Setup auto-generated API docs dari kode dan komentar
- [ ] Buat architecture diagrams yang dapat di-generate dari kode
- [ ] Buat runbooks untuk operasi umum
- [ ] Implementasikan changelog otomatis dari commit
- [ ] Buat contribution guide untuk kontributor
- [ ] Buat `api-reference.md` untuk referensi API
- [ ] Buat `architecture.md` untuk dokumentasi arsitektur
- [ ] Buat `runbooks/` untuk prosedur operasi
- [ ] Verifikasi dokumentasi selalu sinkron dengan kode

**Deliverables:**
- `docs/`
- `api-reference.md`
- `architecture.md`
- `runbooks/`

**Definition of Done:**
- [ ] API docs di-generate otomatis dari kode
- [ ] Architecture diagrams tersedia dan terkini
- [ ] Runbooks dan contribution guide tersedia

**Dependensi:** 0.1, 4.1  
**Estimasi Usaha:** 3-4 hari

---

### 6.4 Test Automation & Quality Gates

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/tests/`, `turbo.json`, `package.json`  
**Ringkasan:** Tambahkan E2E, visual regression, mutation testing, coverage gates, snapshot testing, and CI watchers untuk 90%+ quality assurance.

**Sub-task:**
- [ ] Buat `packages/tests/` dengan test utilities
- [ ] Implementasikan E2E testing dengan skenario kritis
- [ ] Tambahkan visual regression testing untuk UI
- [ ] Implementasikan mutation testing untuk kualitas test
- [ ] Set coverage gates (minimal 80% untuk core packages)
- [ ] Tambahkan snapshot testing untuk UI dan API response
- [ ] Buat `vitest.e2e.ts` untuk E2E test
- [ ] Buat `coverage.config.ts` untuk konfigurasi coverage
- [ ] Buat `test.utils.ts` untuk utilitas test
- [ ] Integrasi test ke CI watchers

**Deliverables:**
- `vitest.e2e.ts`
- `coverage.config.ts`
- `test.utils.ts`

**Definition of Done:**
- [ ] E2E test mencakup skenario kritis
- [ ] Coverage gates diterapkan (≥80% core packages)
- [ ] Test berjalan otomatis di CI

**Dependensi:** 0.1, 0.3  
**Estimasi Usaha:** 4-5 hari

---

### 6.5 AI-Powered Development Assistant

**Prioritas:** 🔴 Tinggi  
**Ruang Lingkup:** `packages/ubme-cli`, `packages/config/`  
**Ringkasan:** Agent integration, context-aware suggestions, error diagnostics, code review, dan docs generation untuk 30% lebih cepat delivery.

**Sub-task:**
- [ ] Buat `ai-assistant.plugin.ts` untuk integrasi agent
- [ ] Implementasikan `agent.config.ts` untuk konfigurasi agent
- [ ] Buat context-aware suggestions untuk pengembang
- [ ] Implementasikan error diagnostics dengan saran perbaikan
- [ ] Buat code review otomatis dengan AI
- [ ] Implementasikan docs generation dengan AI
- [ ] Buat `prompts/` untuk template prompt AI
- [ ] Buat `docs/assistant.md` untuk dokumentasi assistant
- [ ] Uji coba AI assistant dengan tugas pengembangan nyata

**Deliverables:**
- `ai-assistant.plugin.ts`
- `agent.config.ts`
- `prompts/`
- `docs/assistant.md`

**Definition of Done:**
- [ ] AI assistant memberikan saran yang relevan dengan konteks
- [ ] Error diagnostics memberikan saran perbaikan
- [ ] Code review otomatis berfungsi

**Dependensi:** 0.1, 3.1, 3.5  
**Estimasi Usaha:** 4-5 hari

---

### 6.6 Community & Ecosystem

**Prioritas:** 🟡 Sedang  
**Ruang Lingkup:** `packages/ubme-core/`, `packages/ubme-cli/`  
**Ringkasan:** Public registry, plugin system, contribution guide, template gallery, and versioned releases untuk eco-sistem yang mandiri.

**Sub-task:**
- [ ] Buat public registry untuk template dan plugin
- [ ] Implementasikan plugin system untuk ekstensi fitur
- [ ] Buat contribution guide untuk kontributor komunitas
- [ ] Buat template gallery untuk template yang dapat digunakan
- [ ] Implementasikan versioned releases untuk rilis terstruktur
- [ ] Buat `registry/` untuk menyimpan template dan plugin
- [ ] Buat `plugin.sdk.ts` untuk SDK pengembang plugin
- [ ] Buat `CONTRIBUTING.md` dan `RELEASE.md`
- [ ] Uji coba plugin system dengan plugin contoh

**Deliverables:**
- `registry/`
- `plugin.sdk.ts`
- `CONTRIBUTING.md`
- `RELEASE.md`

**Definition of Done:**
- [ ] Public registry tersedia untuk template dan plugin
- [ ] Plugin system memungkinkan ekstensi fitur
- [ ] Versioned releases diterapkan

**Dependensi:** 0.1, 6.1  
**Estimasi Usaha:** 3-4 hari

---

## ✅ VERIFICATION CHECKLIST

- [ ] `bun test` → **0 failures**, ≥80% coverage in core packages
- [ ] `bun run build` → TypeScript strict mode passes
- [ ] CI/CD pipeline runs on PR + main, gates merged
- [ ] Auth middleware protects all non-public routes
- [ ] UBME registry compiles & queries correctly with MikroORM
- [ ] Web app builds, all routes render, a11y passes
- [ ] Sentry/Datadog monitoring captures errors & traces
- [ ] Backup + DR runbook tested
- [ ] Docs auto-generated & published
- [ ] AI/LLM agent integrates & returns safe, bounded responses

---

## 🎯 RECOMMENDED EXECUTION ORDER

```
Phase 0 → 1 → 2 → 3 → 4 → 5 → 6
(Infrastructure → Security → Data → AI → UX → Ops → DX)
```

*Each phase is independently deployable. Focus on **P0** tasks first, then **P1**, then **P2**.*

---

## 📁 QUICK FILE MAP

```
apps/api/
├── src/index.ts (auth plugin wiring)
├── src/modules/ (auth, users, health)
└── src/core/middleware.ts (error handling)
apps/web/
├── src/hooks/useAuth.ts (auth hook)
├── src/hooks/useFormWithSchema.ts (form validation)
└── src/services/api/ (TODO: create client.ts)
packages/auth/ (JWT, guards, Fastify plugin)
packages/validation/ (schemas, validators)
packages/ubme-core/ (model engine contracts)
packages/ubme-mikroorm/ (MikroORM adapter)
packages/constants/ (HTTP, errors, API endpoints, pagination)
packages/types/ (shared DTOs, ApiResponse)
packages/config/ (env, cors, swagger)
packages/tests/ (TODO: create test utilities)
```

---

**Next Action:** Pick a Phase to start.  
- If you want **boilerplate-first**: start with `0.1` → `0.2` → `0.3` → `0.4` → `0.5`  
- If you want **intelligence-first**: start with `3.1` → `3.2` → `3.3` → `3.4`  
- If you want **enterprise-first**: start with `1.1` → `1.2` → `1.3` → `1.4` → `1.5`

I can:
1. Write this full list directly to `TODO.md`
2. Expand any single task into a step-by-step implementation brief
3. Generate a concrete `branch/PR` plan for the next 2 weeks
4. Start executing a specific task immediately

Which do you want?
