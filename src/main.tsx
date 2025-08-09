import './i18n';
import '@fontsource/public-sans';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { MsalProvider } from '@azure/msal-react';
import { store } from './redux/store';
import { baseTheme } from './themes/theme.ts';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import App from './App.tsx';
import {
  AuthenticationResult,
  EventMessage,
  EventType,
  PromptValue,
  PublicClientApplication,
} from '@azure/msal-browser';
import {
  b2cPolicies,
  loginRequest,
  msalConfig,
} from './features/authentication/configuration.ts';
import { IdentityTokenClaims } from './hooks/useAuth.ts';

//https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/samples/msal-react-samples/typescript-sample/src/index.tsx
//https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/samples/msal-react-samples/b2c-sample/src/App.js

export const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(() => {
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }

  msalInstance.enableAccountStorageEvents();

  msalInstance.addEventCallback((event: EventMessage) => {
    if (
      event.eventType === EventType.LOGIN_SUCCESS ||
      event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
      event.eventType === EventType.SSO_SILENT_SUCCESS
    ) {
      const payload = event.payload as AuthenticationResult;
      const account = payload.account;

      console.log('MSAL event', event);

      const payloadIdTokenClaims =
        payload.idTokenClaims as unknown as IdentityTokenClaims;

      if (
        payloadIdTokenClaims.tfp &&
        payloadIdTokenClaims.tfp === b2cPolicies.names.editProfile
      ) {
        // retrieve the account from initial sign-in to the app
        const originalSignInAccount = msalInstance
          .getAllAccounts()
          .find(
            (account) =>
              (account.idTokenClaims as unknown as IdentityTokenClaims).oid ===
                payloadIdTokenClaims.oid &&
              (account.idTokenClaims as unknown as IdentityTokenClaims).sub ===
                payloadIdTokenClaims.sub &&
              (account.idTokenClaims as unknown as IdentityTokenClaims).tfp ===
                b2cPolicies.names.signUpSignIn,
          );

        let signUpSignInFlowRequest = {
          scopes: [...loginRequest.scopes],
          authority: b2cPolicies.authorities.signUpSignIn.authority,
          account: originalSignInAccount,
          prompt: PromptValue.NONE,
        };

        // To get the updated account information
        msalInstance.acquireTokenPopup(signUpSignInFlowRequest).then(() => {
          console.log('Account updated successfully');
        });
      }

      msalInstance.setActiveAccount(account);
    }

    if (event.eventType === EventType.LOGIN_FAILURE) {
      // Check for forgot password error
      // Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
      if (event.error?.message.includes('AADB2C90118')) {
        const resetPasswordRequest = {
          authority: b2cPolicies.authorities.passwordReset.authority,
          scopes: [],
        };
        msalInstance.loginRedirect(resetPasswordRequest).then(() => {
          console.log('Redirected to password reset');
        });
      }
    }
  });

  const root = ReactDOM.createRoot(document.getElementById('root')!);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <MsalProvider instance={msalInstance}>
          <JoyCssVarsProvider theme={baseTheme}>
            <App pca={msalInstance} />
            <Toaster />
          </JoyCssVarsProvider>
        </MsalProvider>
      </Provider>
    </React.StrictMode>,
  );
});
