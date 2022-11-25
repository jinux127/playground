import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </>
);
