import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeBackground {
    header: string;
  }
  interface TypeText {
    header: string;
  }
  interface Components {
    MuiBox: {
      variants: {
        props: { component: string };
        style: {
          backgroundColor: string;
          color: string;
          [key: string]: string | number | { [key: string]: string | number };
        };
      }[];
    };
    MuiTimelineDot: {
      styleOverrides?: {
        root?: React.CSSProperties & Record<string, unknown>;
      };
    };
    MuiTimelineConnector: {
      styleOverrides?: {
        root?: React.CSSProperties & Record<string, unknown>;
      };
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#00d1b2',
      contrastText: '#ffffff',
      dark: '#00a890',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
      header: '#112233',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666666',
      header: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightBold: 700,
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#333',
      '@media (max-width: 768px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '2rem',
    },
    body1: {
      lineHeight: 1.7,
      fontSize: '1rem',
      '@media (max-width: 768px)': {
        fontSize: '0.9rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 800,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100vw',
          height: '72px', // Increased height to accommodate buttons
          zIndex: 1100,
          backgroundColor: '#112233',
          color: '#ffffff',
          borderRadius: 0, // Remove any border radius
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional: adds subtle shadow
          overflow: 'hidden', // Contain the selection line
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (max-width: 768px)': {
            padding: '1rem',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '8px 4px',
          '&:hover': {
            cursor: 'pointer',
          },
        },
        sizeSmall: {
          height: 24,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            backgroundColor: 'currentColor',
            transform: 'scaleX(0)',
            transition: 'transform 0.2s ease-in-out',
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
          },
        },
      },
    },
    MuiBox: {
      variants: [
        {
          props: { component: 'footer' },
          style: {
            backgroundColor: '#112233',
            color: '#ffffff',
            marginTop: 'auto', // This pushes the footer to the bottom
            width: '100%',
            '& .MuiTypography-root': {
              color: '#ffffff',
            },
            '& .MuiIconButton-root': {
              color: '#ffffff',
            },
            '& .MuiBox-root': {
              color: '#ffffff',
            },
            '& a': {
              color: '#ffffff',
              textDecoration: 'none',
            },
          },
        },
      ],
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: '#00d1b2',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          backgroundColor: '#ffffff', // Match your background color
        },
        'body > div:first-of-type': { // This targets the Next.js root div
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
        main: {
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '72px', // Match header height
          background: `linear-gradient(135deg, 
            rgba(255,255,255,1) 0%,
            rgba(240,248,255,1) 50%,
            rgba(230,245,255,1) 100%)`,
          '& > div': { // Target immediate children of main
            marginTop: '24px', // Add spacing for content
          },
        },
        footer: {
          flexShrink: 0,
          backgroundColor: '#112233',
          color: '#ffffff',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: '72px', // Match AppBar height
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'center', // Center the content horizontally
          alignItems: 'center', // Center the content vertically
          '& .MuiButton-root': {
            height: '70px', // Slightly shorter than toolbar to contain the line
            padding: '0 16px',
            position: 'relative',
            overflow: 'visible', // Allow the selection line to be visible
            '&::after': {
              bottom: '2px', // Move the line up slightly
            },
          },
        },
      },
    },
  },
});

export default theme;