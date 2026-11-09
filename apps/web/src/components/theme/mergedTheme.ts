// @app - Merged theme configuration using centralized @repo/theme tokens
import { muiTheme } from '@repo/theme';

import { augmentMuiTheme } from './augmentedTheme';

// Create the base MUI theme from @repo/theme
const baseMuiTheme = muiTheme as unknown as any;

// Augment with component-specific overrides
export const mergedTheme = augmentMuiTheme(baseMuiTheme);


// Type export
export type { theme as themeTokens } from '@repo/theme';