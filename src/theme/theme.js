//theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#2196f3' },
    secondary: { main: '#4caf50' },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff'
    }
  },
  shape: {
    borderRadius: 12
  },
  shadows: [
    'none',
    '0 2px 8px rgba(0,0,0,0.1)',
    '0 4px 16px rgba(0,0,0,0.15)',
    // Continue the array up to index 24
    ...Array(22).fill('none') // Placeholder for remaining shadows
  ]
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#ce93d8',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    ...lightTheme.typography,
  },
});

export { theme,darkTheme,lightTheme};