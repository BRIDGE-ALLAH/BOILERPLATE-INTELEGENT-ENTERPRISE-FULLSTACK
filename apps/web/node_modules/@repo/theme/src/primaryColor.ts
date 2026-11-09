 // Centralized primary color configuration
 // Replaces apps/web/src/configs/primaryColorConfig.ts
 
 import { brandColors } from './colors.js';
 
 export interface PrimaryColorConfig {
   primary: string;
   secondary: string;
   light: string;
   dark: string;
 }
 
 // Default MOONWITNESS primary colors
 export const defaultPrimaryColors: PrimaryColorConfig = {
   primary: brandColors.primary[500],
   secondary: brandColors.secondary[500],
   light: brandColors.primary[400],
   dark: brandColors.primary[700],
 };
 
 // Preset color themes
 export const colorThemes: Record<string, PrimaryColorConfig> = {
   default: defaultPrimaryColors,
   blue: {
     primary: '#3b82f6',
     secondary: '#8b5cf6',
     light: '#60a5fa',
     dark: '#2563eb',
   },
   green: {
     primary: '#10b981',
     secondary: '#06b6d4',
     light: '#34d399',
     dark: '#059669',
   },
   purple: {
     primary: '#8b5cf6',
     secondary: '#ec4899',
     light: '#a78bfa',
     dark: '#7c3aed',
   },
   orange: {
     primary: '#f59e0b',
     secondary: '#ef4444',
     light: '#fbbf24',
     dark: '#d97706',
   },
 };
 
 // Get primary color by name
 export const getPrimaryColor = (name: string = 'default'): PrimaryColorConfig => {
   return colorThemes[name] || defaultPrimaryColors;
 };
 
 // Generate CSS variables from color config
 export const generateColorCSS = (config: PrimaryColorConfig): string => {
   return `
     --color-primary: ${config.primary};
     --color-secondary: ${config.secondary};
     --color-primary-light: ${config.light};
     --color-primary-dark: ${config.dark};
   `;
 };
 
 // Apply color theme to document
 export const applyColorTheme = (themeName: string = 'default'): void => {
   if (typeof window === 'undefined') return;
   
   const config = getPrimaryColor(themeName);
   const root = document.documentElement;
   
   Object.entries(config).forEach(([key, value]) => {
     root.style.setProperty(`--color-primary-${key}`, value);
   });
 };
 
 // Legacy compatibility - old primaryColorConfig format
 export interface LegacyPrimaryColorConfig {
   name?: string;
   light?: string;
   main: string;
   dark?: string;
 }
 
 // Legacy color palette (from old primaryColorConfig.ts)
 export const legacyPrimaryColors: LegacyPrimaryColorConfig[] = [
   { name: 'primary-1', light: '#8F85F3', main: '#7367F0', dark: '#675DD8' },
   { name: 'primary-2', light: '#4EB0B1', main: '#0D9394', dark: '#096B6C' },
   { name: 'primary-3', light: '#FFC25A', main: '#FFAB1D', dark: '#BA7D15' },
   { name: 'primary-4', light: '#F0718D', main: '#EB3D63', dark: '#AC2D48' },
   { name: 'primary-5', light: '#5CAFF1', main: '#2092EC', dark: '#176BAC' },
 ];
