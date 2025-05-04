import './i18n';
import '@fontsource/public-sans';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from './features/authentication/msalInstanceFactory';
import { store } from './redux/store';
import { baseTheme } from './themes/theme.ts';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MsalProvider instance={msalInstance}>
          <JoyCssVarsProvider theme={baseTheme}>
            <App />
            <Toaster />
          </JoyCssVarsProvider>
      </MsalProvider>
    </Provider>
  </React.StrictMode>,
);
