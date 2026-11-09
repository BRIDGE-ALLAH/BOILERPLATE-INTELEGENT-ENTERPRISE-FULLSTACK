// Back-compat re-export — branding dipindah ke @repo/brand (single source of truth).
// Ganti brand di packages/brand/src/config.ts atau via NEXT_PUBLIC_* env vars.
// Deprecation: import baru gunakan `@repo/brand` — getBrand(), defaultBrand, BRAND_KEYS.
// Alias lama (getBranding, defaultBranding, BrandingConfig, loadBrandingFromEnv)
// dipertahankan agar consumer lama tetap jalan.

export {
  defaultBrand as defaultBranding,
  getBrand as getBranding,
  loadBrandFromEnv,
  BRAND_KEYS,
} from '@repo/brand';

export type { BrandConfig as BrandingConfig } from '@repo/brand';
