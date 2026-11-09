// @repo/theme - Centralized design tokens and MUI theme configuration
export * from './colors.js';
export * from './typography.js';
export * from './spacing.js';
export * from './breakpoints.js';
export * from './theme.js';
export * from './config.ts';

// Export design token categories
export type { BrandColors, BrandColorGroups, SemanticColors, BackgroundColors, TextColors } from './colors.js';
export type { FontFamily, FontSize, FontWeight, LineHeight, Typography } from './typography.js';
export type { Spacing, ComponentSpacing } from './spacing.js';
export type { Breakpoints, ContainerWidths, MediaQueries } from './breakpoints.js';
export type { ThemeConfig, Mode, Skin, Layout, LayoutComponentPosition, LayoutComponentWidth, NavbarConfig, FooterConfig } from './config.ts';

// Export design token objects (for direct use)
export const brandColors = (await import('./colors.js')).brandColors;
export const typography = (await import('./typography.js')).typography;
export const spacing = (await import('./spacing.js')).spacing;
export const breakpoints = (await import('./breakpoints.js')).breakpoints;
export const containerWidths = (await import('./breakpoints.js')).containerWidths;
export const cssVariables = (await import('./colors.js')).cssVariables;

// Export MUI theme configuration
export { theme, muiTheme, getThemeValue } from './theme.js';