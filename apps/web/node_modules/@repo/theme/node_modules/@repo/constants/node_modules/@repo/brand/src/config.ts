// @repo/brand — Brand configuration (single source of truth for white-label)
// Moved from packages/constants/src/branding.ts. All brand identity lives here.
// Ganti brand: set NEXT_PUBLIC_* env vars, atau edit defaultBrand di bawah.

import { env } from '@repo/config';

export interface BrandConfig {
  // App identity
  appName: string;
  appShortName: string;
  appDescription: string;

  // Visual identity
  logo: {
    light: string;      // Logo for light mode
    dark: string;       // Logo for dark mode
    favicon: string;    // Favicon path
    appleTouchIcon: string;
  };

  // Colors (override theme colors)
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };

  // URLs
  urls: {
    homepage: string;
    docs: string;
    support: string;
    privacy: string;
    terms: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
  };

  // Contact
  contact: {
    email: string;
    company: string;
    address?: string;
  };

  // Legal
  legal: {
    copyright: string;
    licenseUrl?: string;
  };

  // Feature flags
  features: {
    enableAnalytics: boolean;
    enableErrorReporting: boolean;
    enableFeedback: boolean;
    maintenanceMode: boolean;
  };

  // SEO
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
    twitterHandle?: string;
  };
}

// Default MOONWITNESS branding — edit file ini (atau override via env) untuk rebrand
export const defaultBrand: BrandConfig = {
  appName: 'MOONWITNESS',
  appShortName: 'MW',
  appDescription: 'Enterprise-grade admin dashboard and application platform',

  logo: {
    light: '',
    dark: '',
    favicon: '/favicon.ico',
    appleTouchIcon: '/images/apple-touch-icon.png',
  },

  colors: {
    primary: '#0ea5e9',    // sky-500
    secondary: '#a855f7',  // purple-500
    accent: '#06b6d4',     // cyan-500
  },

  urls: {
    homepage: '/dashboards/crm',
    docs: 'https://docs.moonwitness.com',
    support: 'https://support.moonwitness.com',
    privacy: '/privacy',
    terms: '/terms',
  },

  contact: {
    email: 'support@moonwitness.com',
    company: 'MOONWITNESS Inc.',
  },

  legal: {
    copyright: '© 2024 MOONWITNESS Inc. All rights reserved.',
  },

  features: {
    enableAnalytics: true,
    enableErrorReporting: true,
    enableFeedback: true,
    maintenanceMode: false,
  },

  seo: {
    defaultTitle: 'MOONWITNESS - Enterprise Admin Dashboard',
    defaultDescription:
      'Enterprise-grade admin dashboard and application platform built with Next.js, React, and MUI',
    ogImage: '/images/og-image.png',
  },
};

// Load brand from environment (for white-label deployments)
export function loadBrandFromEnv(): Partial<BrandConfig> {
  const e = env;
  const branding: Partial<BrandConfig> = {};

  if (e.NEXT_PUBLIC_APP_NAME) branding.appName = e.NEXT_PUBLIC_APP_NAME;
  if (e.NEXT_PUBLIC_APP_SHORT_NAME) branding.appShortName = e.NEXT_PUBLIC_APP_SHORT_NAME;
  if (e.NEXT_PUBLIC_APP_DESCRIPTION) branding.appDescription = e.NEXT_PUBLIC_APP_DESCRIPTION;
  if (e.NEXT_PUBLIC_LOGO_LIGHT) branding.logo = { ...defaultBrand.logo, light: e.NEXT_PUBLIC_LOGO_LIGHT };
  if (e.NEXT_PUBLIC_LOGO_DARK) branding.logo = { ...defaultBrand.logo, dark: e.NEXT_PUBLIC_LOGO_DARK };
  if (e.NEXT_PUBLIC_FAVICON) branding.logo = { ...defaultBrand.logo, favicon: e.NEXT_PUBLIC_FAVICON };
  if (e.NEXT_PUBLIC_PRIMARY_COLOR) branding.colors = { ...defaultBrand.colors, primary: e.NEXT_PUBLIC_PRIMARY_COLOR };
  if (e.NEXT_PUBLIC_SECONDARY_COLOR) branding.colors = { ...defaultBrand.colors, secondary: e.NEXT_PUBLIC_SECONDARY_COLOR };
  if (e.NEXT_PUBLIC_DOCS_URL) branding.urls = { ...defaultBrand.urls, docs: e.NEXT_PUBLIC_DOCS_URL };
  if (e.NEXT_PUBLIC_SUPPORT_URL) branding.urls = { ...defaultBrand.urls, support: e.NEXT_PUBLIC_SUPPORT_URL };
  if (e.NEXT_PUBLIC_CONTACT_EMAIL) branding.contact = { ...defaultBrand.contact, email: e.NEXT_PUBLIC_CONTACT_EMAIL };
  if (e.NEXT_PUBLIC_COMPANY_NAME) branding.contact = { ...defaultBrand.contact, company: e.NEXT_PUBLIC_COMPANY_NAME };
  if (e.NEXT_PUBLIC_COPYRIGHT) branding.legal = { ...defaultBrand.legal, copyright: e.NEXT_PUBLIC_COPYRIGHT };

  return branding;
}

// Merge default with env overrides
export function getBrand(): BrandConfig {
  const envBrand = loadBrandFromEnv();
  return deepMerge(defaultBrand, envBrand);
}

// Deep merge utility
function deepMerge<T extends Record<string, any>>(target: T, source: Partial<T>): T {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    const sourceValue = source[key];
    if (sourceValue === undefined) continue;
    if (typeof sourceValue === 'object' && sourceValue !== null && !Array.isArray(sourceValue)) {
      result[key] = deepMerge(target[key] as any, sourceValue as any);
    } else {
      result[key] = sourceValue;
    }
  }
  return result;
}

export const BRAND_KEYS = {
  APP_NAME: 'NEXT_PUBLIC_APP_NAME',
  APP_SHORT_NAME: 'NEXT_PUBLIC_APP_SHORT_NAME',
  APP_DESCRIPTION: 'NEXT_PUBLIC_APP_DESCRIPTION',
  LOGO_LIGHT: 'NEXT_PUBLIC_LOGO_LIGHT',
  LOGO_DARK: 'NEXT_PUBLIC_LOGO_DARK',
  FAVICON: 'NEXT_PUBLIC_FAVICON',
  PRIMARY_COLOR: 'NEXT_PUBLIC_PRIMARY_COLOR',
  SECONDARY_COLOR: 'NEXT_PUBLIC_SECONDARY_COLOR',
  DOCS_URL: 'NEXT_PUBLIC_DOCS_URL',
  SUPPORT_URL: 'NEXT_PUBLIC_SUPPORT_URL',
  CONTACT_EMAIL: 'NEXT_PUBLIC_CONTACT_EMAIL',
  COMPANY_NAME: 'NEXT_PUBLIC_COMPANY_NAME',
  COPYRIGHT: 'NEXT_PUBLIC_COPYRIGHT',
} as const;
