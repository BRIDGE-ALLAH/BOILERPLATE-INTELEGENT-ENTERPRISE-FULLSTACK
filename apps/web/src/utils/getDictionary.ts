// getDictionary - Server-side dictionary loader
import "server-only";

import type { Locale } from "@repo/theme";

const dictionaries = {
  en: () => import("@/data/dictionaries/en.json").then((module) => module.default),
  fr: () => import("@/data/dictionaries/fr.json").then((module) => module.default),
  ar: () => import("@/data/dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
