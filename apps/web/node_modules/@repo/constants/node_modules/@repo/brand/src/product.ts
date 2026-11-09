// @repo/brand/product — Nama & slug fitur produk milik brand ini.
// Dipisah dari identitas brand agar fitur (moonwitness module) bisa dinamai ulang
// tanpa menyentuh white-label config.

// Route segments (lowercase, dipakai di URL & path file app router)
export const brandProduct = {
  slug: 'moonwitness',
  pages: {
    observatory: 'observatory',
    record: 'record',
  },
  // Label tampil di menu & UI
  labels: {
    module: 'MoonWitness',
    observatory: 'Observatory',
    record: 'Record',
    // Tagline muncul di halaman modul
    tagline: "MoonWitness does not guess what broke. It shows what happened.",
  },
  // Prefix file download evidence bundle
  downloadPrefix: 'moonwitness',
} as const;

// Build URL halaman produk dengan locale
export const productPageUrl = (
  locale: string,
  page: keyof typeof brandProduct.pages = 'observatory'
): string => {
  return `/${locale}/${brandProduct.slug}/${brandProduct.pages[page]}`;
};
