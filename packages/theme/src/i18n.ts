 // Centralized i18n configuration
 // Replaces apps/web/src/configs/i18n.ts
 
 export const i18n = {
  defaultLocale: 'en' as const,
   locales: ['en', 'fr', 'ar'] as const,
   langDirection: {
     en: 'ltr',
     fr: 'ltr',
     ar: 'rtl',
   } as const,
   
   // Language metadata
   languageNames: {
     en: 'English',
     fr: 'Français',
     ar: 'العربية',
   } as const,
   
   // Date formatting
   dateFormats: {
     en: { day: 'numeric', month: 'short', year: 'numeric' },
     fr: { day: 'numeric', month: 'short', year: 'numeric' },
     ar: { day: 'numeric', month: 'short', year: 'numeric' },
   },
   
   // Number formatting
   numberFormats: {
     en: { currency: 'USD' },
     fr: { currency: 'EUR' },
     ar: { currency: 'SAR' },
   },
 };
 
 export type Locale = (typeof i18n)['locales'][number];
 
// Resolve an arbitrary route segment to a supported locale
export const resolveLocale = (value: string | undefined): Locale => {
  return i18n.locales.includes(value as Locale) ? (value as Locale) : i18n.defaultLocale;
};

export const isLocale = (value: string | undefined): value is Locale => {
  return i18n.locales.includes(value as Locale);
};

 // Helper to check if locale is RTL
 export const isRtl = (locale: Locale): boolean => {
   return i18n.langDirection[locale] === 'rtl';
 };
 
 // Get direction for locale
 export const getDirection = (locale: Locale): 'ltr' | 'rtl' => {
   return i18n.langDirection[locale];
 };
