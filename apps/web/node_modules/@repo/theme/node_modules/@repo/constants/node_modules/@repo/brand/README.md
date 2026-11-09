# @repo/brand

Single source of truth untuk semua yang terkait brand/white-label. Ganti brand dengan set `NEXT_PUBLIC_*` env atau edit satu file saja.

## Struktur

| File | Isi | Cara ganti brand |
|---|---|---|
| `config.ts` | Identitas: nama, deskripsi, logo paths, warna, URLs, contact, legal, SEO. `getBrand()` + env override | Set `NEXT_PUBLIC_*` env, atau edit `defaultBrand` |
| `mark.tsx` | `BrandMark` — komponen SVG logo default (path SVG di sini, bukan di app) | Edit SVG / override via `NEXT_PUBLIC_LOGO_*` |
| `product.ts` | Nama-nama fitur produk: slug, menu label, prefix file download | Edit `product` di satu file |
| `vendor.ts` | Identitas vendor template (credit, demo credentials, marketplace links) | Edit `vendor` |

## Import patterns

```ts
// Identitas brand
import { getBrand } from '@repo/brand'

// Logo SVG component
import BrandMark from '@repo/brand/mark'

// Nama fitur & slug
import { brandProduct } from '@repo/brand'

// Credit vendor / demo
import { brandVendor } from '@repo/brand'
```

## Env overrides (NEXT_PUBLIC_*)

`APP_NAME`, `APP_SHORT_NAME`, `APP_DESCRIPTION`, `LOGO_LIGHT`, `LOGO_DARK`, `FAVICON`, `PRIMARY_COLOR`, `SECONDARY_COLOR`, `DOCS_URL`, `SUPPORT_URL`, `CONTACT_EMAIL`, `COMPANY_NAME`, `COPYRIGHT` — lebih lengkap lihat `BRAND_KEYS` di `config.ts`.

## Ke dependent

- `@repo/constants` re-exports `getBranding`/`defaultBranding` dari sini (back-compat; import lama tetap jalan).
- `@repo/theme` derive `templateName` dari `getBrand().appName`.
