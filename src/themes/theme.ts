import { extendTheme } from "@mui/joy/styles";

export const baseTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
  },
  fontFamily: {
    display: "'Public Sans', var(--joy-fontFamily-fallback)",
    body: "'Public Sans', var(--joy-fontFamily-fallback)",
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 600,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    JoyCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          '--Card-padding': '1.5rem',
        },
      },
    },
    JoyInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    JoySelect: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    JoyChip: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          fontWeight: 500,
        },
      },
    },
    JoyTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.level === 'h1' && {
            fontWeight: 800,
            letterSpacing: '-0.025em',
          }),
          ...(ownerState.level === 'h2' && {
            fontWeight: 700,
            letterSpacing: '-0.025em',
          }),
          ...(ownerState.level === 'h3' && {
            fontWeight: 700,
          }),
          ...(ownerState.level === 'title-lg' && {
            fontWeight: 600,
          }),
        }),
      },
    },
  },
  radius: {
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  shadow: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
});