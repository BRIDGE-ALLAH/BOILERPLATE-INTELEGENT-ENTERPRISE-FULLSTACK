 // MOONWITNESS Brand Colors - Centralized theme colors
 
 export const brandColors = {
   // Primary Brand Colors
   primary: {
     50: '#f0f9ff',
     100: '#e0f2fe',
     200: '#bae6fd',
     300: '#7dd3fc',
     400: '#38bdf8',
     500: '#0ea5e9', // Main brand color
     600: '#0284c7',
     700: '#0369a1',
     800: '#075985',
     900: '#0c4a6e',
   },
   
   // Secondary Colors
   secondary: {
     50: '#faf5ff',
     100: '#f3e8ff',
     200: '#e9d5ff',
     300: '#d8b4fe',
     400: '#c084fc',
     500: '#a855f7',
     600: '#9333ea',
     700: '#7c3aed',
     800: '#6d28d9',
     900: '#5b21b6',
   },
   
   // Accent Colors
   accent: {
     cyan: '#06b6d4',
     emerald: '#10b981',
     amber: '#f59e0b',
     rose: '#f43f5e',
     violet: '#8b5cf6',
   },
   
   // Neutral Colors
   neutral: {
     50: '#fafafa',
     100: '#f5f5f5',
     200: '#e5e5e5',
     300: '#d4d4d4',
     400: '#a3a3a3',
     500: '#737373',
     600: '#525252',
     700: '#404040',
     800: '#262626',
     900: '#171717',
   },
   
   // Semantic Colors
   semantic: {
     success: '#10b981',
     warning: '#f59e0b',
     error: '#ef4444',
     info: '#3b82f6',
   },
   
   // Background Colors
   background: {
     light: '#ffffff',
     dark: '#0f172a',
     muted: '#f8fafc',
   },
   
   // Text Colors
   text: {
     primary: '#1e293b',
     secondary: '#64748b',
     muted: '#94a3b8',
     light: '#cbd5e1',
   },
 };
 
 // Export individual color groups for easy access
 export const primary = brandColors.primary;
 export const secondary = brandColors.secondary;
 export const accent = brandColors.accent;
 export const neutral = brandColors.neutral;
 export const semantic = brandColors.semantic;
 export const background = brandColors.background;
 export const text = brandColors.text;
 
 // CSS Custom Properties
 export const cssVariables = {
   '--color-primary-500': brandColors.primary[500],
   '--color-primary-600': brandColors.primary[600],
   '--color-secondary-500': brandColors.secondary[500],
   '--color-success': brandColors.semantic.success,
   '--color-warning': brandColors.semantic.warning,
   '--color-error': brandColors.semantic.error,
   '--color-info': brandColors.semantic.info,
   '--color-bg-light': brandColors.background.light,
   '--color-bg-dark': brandColors.background.dark,
   '--color-text-primary': brandColors.text.primary,
   '--color-text-secondary': brandColors.text.secondary,
 };
