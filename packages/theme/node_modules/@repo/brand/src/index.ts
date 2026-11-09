// @repo/brand — Single source of truth untuk brand/white-label.
//
// Import patterns:
//   import { getBrand, defaultBrand, BRAND_KEYS, loadBrandFromEnv } from '@repo/brand'
//   import BrandMark from '@repo/brand/mark'
//   import { brandProduct, productPageUrl } from '@repo/brand'
//   import { brandVendor } from '@repo/brand'
//
// Back-compat (deprecation): @repo/constants masih re-export getBranding/defaultBranding
// dari sini; gunakan getBrand() untuk kode baru.

export * from './config.js';
export * from './product.js';
export * from './vendor.js';
