import { PublicClientApplication } from '@azure/msal-browser';
import { b2cPolicies, protectedResources } from './configuration';
import { msalInstance } from './msalInstanceFactory';

export interface IdentityTokenClaims {
  family_name: string;
  given_name: string;
  name: string;
  idp: string;
  groups: string[];
  sub: string;
}

export interface UserInfo {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
}

class AuthenticationService {
  msalInstance: PublicClientApplication;

  constructor(instance: PublicClientApplication) {
    this.msalInstance = instance;
    void this.msalInstance.initialize();
  }

  async signIn(): Promise<void> {
    return await this.msalInstance.loginRedirect({
      authority: b2cPolicies.authorities.signIn.authority,
      scopes: [...protectedResources.api.scopes.full],
    });
  }

  async signOut(): Promise<void> {
    return await this.msalInstance.logoutRedirect();
  }

  async acquireTokenSilent(): Promise<string> {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
      msalInstance.setActiveAccount(accounts[0]);
    }

    const accessTokenRequest = {
      account: this.msalInstance.getActiveAccount() ?? undefined,
      authority: b2cPolicies.authorities.signIn.authority,
      scopes: [...protectedResources.api.scopes.full],
    };

    const result = await this.msalInstance.acquireTokenSilent(accessTokenRequest);

    return result.accessToken;
  }

  getUserRole(): string[] | undefined {
    const activeAccount = msalInstance.getActiveAccount();

    if (activeAccount) {
      const identityTokenClaims =
        activeAccount?.idTokenClaims as unknown as IdentityTokenClaims;
      return identityTokenClaims.groups;
    }
  }

  getUserId(): string | undefined {
    const activeAccount = msalInstance.getActiveAccount();

    if (activeAccount) {
      const identityTokenClaims =
        activeAccount?.idTokenClaims as unknown as IdentityTokenClaims;
      return identityTokenClaims.sub;
    }
  }

  getUserInfo(): UserInfo | undefined {
    const activeAccount = msalInstance.getActiveAccount();

    if (activeAccount) {
      const identityTokenClaims =
        activeAccount?.idTokenClaims as unknown as IdentityTokenClaims;

      return {
        id: identityTokenClaims.sub,
        firstName: identityTokenClaims.given_name,
        lastName: identityTokenClaims.family_name,
        fullName: identityTokenClaims.name,
      };
    }
  }
}

const authenticationService = new AuthenticationService(msalInstance);

export default authenticationService;
