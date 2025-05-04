import {
    PublicClientApplication,
    EventType,
    EventMessage,
  } from '@azure/msal-browser';
  import { msalConfig, b2cPolicies } from './configuration';
  
  export const msalInstance = new PublicClientApplication(msalConfig);
  
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }
  
  msalInstance.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      // Compare incoming tokens and check what has happened
      // e.g. has profile been edited, has password been changed, etc.
  
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length > 0) {
        msalInstance.setActiveAccount(accounts[0]);
      }
    }
  
    if (event.eventType === EventType.LOGIN_FAILURE) {
      // Check for forgot password error
      // Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
      if (event.error?.message.includes('AADB2C90118')) {
        const resetPasswordRequest = {
          authority: b2cPolicies.authorities.forgotPassword.authority,
          scopes: [],
        };
        void msalInstance.loginRedirect(resetPasswordRequest);
      }
    }
  });
  