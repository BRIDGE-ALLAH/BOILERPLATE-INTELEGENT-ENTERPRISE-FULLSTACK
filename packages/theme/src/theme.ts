 // Main theme configuration combining all design tokens
 
 import { brandColors, cssVariables } from './colors.js';
 import { typography } from './typography.js';
 import { spacing } from './spacing.js';
 import { breakpoints, containerWidths } from './breakpoints.js';
 
 export const theme = {
   colors: brandColors,
   typography,
   spacing,
   breakpoints,
   containerWidths,
   cssVariables,
   
   // Theme variants
   variants: {
     light: {
       background: brandColors.background.light,
       text: brandColors.text.primary,
     },
     dark: {
       background: brandColors.background.dark,
       text: brandColors.text.light,
     },
   },
   
   // Border radius
   borderRadius: {
     none: '0',
     sm: '0.125rem',
     base: '0.25rem',
     md: '0.375rem',
     lg: '0.5rem',
     xl: '0.75rem',
     '2xl': '1rem',
     full: '9999px',
   },
   
   // Shadows
   shadows: {
     sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
     base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
     md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
     lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 8px -4px rgba(0, 0, 0, 0.06)',
     xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.06)',
   },
   
   // Transitions
   transitions: {
     fast: '150ms ease-in-out',
     base: '200ms ease-in-out',
     slow: '300ms ease-in-out',
   },
 };
 
 // Default export for theme
 export default theme;
 
 // Helper to get theme value by path
 export const getThemeValue = (path: string): unknown => {
   return path.split('.').reduce((obj: any, key) => obj?.[key], theme);
 };
 
 // MUI theme configuration
 export const muiTheme = {
   palette: {
     primary: {
       main: brandColors.primary[500],
       dark: brandColors.primary[700],
       light: brandColors.primary[400],
     },
     secondary: {
       main: brandColors.secondary[500],
       dark: brandColors.secondary[700],
       light: brandColors.secondary[400],
     },
     background: {
       default: brandColors.background.muted,
       paper: brandColors.background.light,
     },
     text: {
       primary: brandColors.text.primary,
       secondary: brandColors.text.secondary,
     },
     success: {
       main: brandColors.semantic.success,
     },
     error: {
       main: brandColors.semantic.error,
     },
     warning: {
       main: brandColors.semantic.warning,
     },
   },
   typography: {
     fontFamily: typography.fontFamily.sans.join(', '),
     fontSize: typography.fontSize.base,
   },
   spacing: 8, // MUI uses 8px grid
   shape: {
     borderRadius: 8,
   },
   components: {
    MuiButton: {
       styleOverrides: {
         root: {
           textTransform: 'none',
           fontWeight: typography.fontWeight.medium,
         },
       },
     },
   },
 };
