// @repo/brand/vendor — Identitas vendor template (credit, demo credentials, marketplace).
// Terpusah di sini agar sisa string "Pixinvent/Vuexy" di UI bisa dihapus dari komponen.

export const brandVendor = {
  // Credit di front-pages footer: "Made with ❤️ by {name}"
  madeBy: {
    name: 'MoonWitness',
    url: 'https://pixinvent.com/',
  },
  social: {
    github: 'https://github.com/pixinvent',
    facebook: 'https://www.facebook.com/pixinvents/',
    twitter: 'https://x.com/pixinvents',
    youtube: 'https://www.youtube.com/channel/UClOcB3o1goJ293ri_Hxpklg',
  },
  // Marketplace / template links (front-pages header CTA, docs links)
  marketplace: {
    product: 'https://1.envato.market/vuexy_admin',
    support: 'https://pixinvent.ticksy.com',
    docs: 'https://demos.pixinvent.com/vuexy-nextjs-admin-template/documentation',
  },
  // Demo credentials untuk halaman login (idealnya nonaktif di production)
  demoCredentials: {
    email: 'admin@vuexy.com',
    password: 'admin',
  },
} as const;
