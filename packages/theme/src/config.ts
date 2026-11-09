// Centralized theme configuration
// Replaces apps/web/src/configs/themeConfig.ts

import { getBrand } from '@repo/brand';
 
 export type Mode = 'system' | 'light' | 'dark';
 export type Skin = 'default' | 'bordered';
 export type Layout = 'vertical' | 'collapsed' | 'horizontal';
 export type LayoutComponentPosition = 'fixed' | 'static';
 export type LayoutComponentWidth = 'compact' | 'wide';
 
 export interface NavbarConfig {
   type: LayoutComponentPosition;
   contentWidth: LayoutComponentWidth;
   floating: boolean;
   detached: boolean;
   blur: boolean;
 }
 
 export interface FooterConfig {
   type: LayoutComponentPosition;
   contentWidth: LayoutComponentWidth;
   detached: boolean;
 }
 
 export interface ThemeConfig {
   templateName: string;
   homePageUrl: string;
   settingsCookieName: string;
   mode: Mode;
   skin: Skin;
   semiDark: boolean;
   layout: Layout;
   layoutPadding: number;
   navbar: NavbarConfig;
   contentWidth: LayoutComponentWidth;
   compactContentWidth: number;
   footer: FooterConfig;
   disableRipple: boolean;
   toastPosition: ToastPosition;
 }
 
 import type { ToastPosition } from 'react-toastify';
 
const branding = getBrand();
const settingsCookieName = `${branding.appName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-theme`;

// Default theme configuration derived from the active brand
 export const defaultThemeConfig: ThemeConfig = {
  templateName: branding.appName,
  homePageUrl: branding.urls.homepage,
  settingsCookieName,
   mode: 'system',
   skin: 'default',
   semiDark: false,
   layout: 'vertical',
   layoutPadding: 24,
   compactContentWidth: 1440,
   navbar: {
     type: 'fixed',
     contentWidth: 'compact',
     floating: true,
     detached: true,
     blur: true,
   },
   contentWidth: 'compact',
   footer: {
     type: 'static',
     contentWidth: 'compact',
     detached: true,
   },
   disableRipple: false,
   toastPosition: 'top-right',
 };
 
 // Get config from cookie or default
 export const getThemeConfig = (): ThemeConfig => {
   if (typeof window === 'undefined') {
     return defaultThemeConfig;
   }
   
   try {
     const stored = localStorage.getItem(defaultThemeConfig.settingsCookieName);
     if (stored) {
       return { ...defaultThemeConfig, ...JSON.parse(stored) };
     }
   } catch (error) {
     console.warn('Failed to parse theme config:', error);
   }
   
   return defaultThemeConfig;
 };
 
 // Save config to cookie
 export const saveThemeConfig = (config: Partial<ThemeConfig>): void => {
   if (typeof window === 'undefined') return;
   
   const current = getThemeConfig();
   const updated = { ...current, ...config };
   
   try {
     localStorage.setItem(
       defaultThemeConfig.settingsCookieName,
       JSON.stringify(updated)
     );
   } catch (error) {
     console.warn('Failed to save theme config:', error);
   }
 };
