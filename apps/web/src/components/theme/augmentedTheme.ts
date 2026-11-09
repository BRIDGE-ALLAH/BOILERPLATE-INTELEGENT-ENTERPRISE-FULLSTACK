// @app - Theme augmentation with component overrides

// Component-specific style overrides
export const componentOverrides = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        fontWeight: 500,
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
      containedPrimary: {
        boxShadow: '0 2px 4px rgba(0, 165, 233, 0.4)',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0, 165, 233, 0.5)',
        },
      },
      outlined: {
        borderColor: 'var(--color-primary-500)',
        '&:hover': {
          borderColor: 'var(--color-primary-400)',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        padding: '8px 16px',
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 12,
      },
    },
  },
};

export const augmentMuiTheme = (base: any) => ({
  ...base,
  components: {
    ...base.components,
    ...componentOverrides,
  },
});