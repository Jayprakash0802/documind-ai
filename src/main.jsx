// main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@mui/material';
import { ThemeProvider as CustomThemeProvider } from './context/ThemeContext.jsx';
import { theme } from './theme/theme.js';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomThemeProvider>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <BrowserRouter>
            <AuthProvider>
              <App />
            </AuthProvider>
          </BrowserRouter>
        </RecoilRoot>
      </ThemeProvider>
    </CustomThemeProvider>
  </StrictMode>,
);
