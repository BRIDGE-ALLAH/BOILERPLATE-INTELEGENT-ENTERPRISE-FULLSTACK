// @repo/theme - Centralized design tokens and MUI theme configuration
export * from './colors';
export * from './typography';
export * from './spacing';
export * from './breakpoints';
export * from './theme';
export * from './config';
export * from './i18n';
export * from './primaryColor';

// Export design token categories (types derived from value exports)
export type BrandColors = typeof import('./colors').brandColors;
export type FontFamily = typeof import('./typography').fontFamily;
export type FontSize = typeof import('./typography').fontSize;
export type FontWeight = typeof import('./typography').fontWeight;
export type Typography = typeof import('./typography').typography;
export type Spacing = typeof import('./spacing').spacing;
export type ComponentSpacing = typeof import('./spacing').componentSpacing;
export type Breakpoints = typeof import('./breakpoints').breakpoints;
export type ContainerWidths = typeof import('./breakpoints').containerWidths;
export type MediaQueries = typeof import('./breakpoints').mediaQueries;
export type { ThemeConfig, Mode, Skin, Layout, LayoutComponentPosition, LayoutComponentWidth, NavbarConfig, FooterConfig } from './config';
export type { PrimaryColorConfig, LegacyPrimaryColorConfig } from './primaryColor';

// Export design token objects (for direct use)
export const brandColors = (await import('./colors')).brandColors;
export const typography = (await import('./typography')).typography;
export const spacing = (await import('./spacing')).spacing;
export const breakpoints = (await import('./breakpoints')).breakpoints;
export const containerWidths = (await import('./breakpoints')).containerWidths;
export const cssVariables = (await import('./colors')).cssVariables;

// Export MUI theme configuration
export { muiTheme, getThemeValue } from './theme';
export { theme } from './theme';