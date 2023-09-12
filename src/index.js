import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyles';
import { App } from 'components/App';
import { Logo } from 'components/Logo/Logo';
import { Theme } from 'styles/Theme';
import { Scroll } from 'components/Scroll/Scroll';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Logo />
      <App />
      <Scroll />
      <Toaster />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
