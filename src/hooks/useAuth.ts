import { useAccount, useMsal } from '@azure/msal-react';
import { useEffect } from 'react';
import {
  b2cPolicies,
  protectedResources,
} from '../features/authentication/configuration';

export interface IdentityTokenClaims {
  family_name: string;
  given_name: string;
  name: string;
  idp: string;
  groups: string[];
  sub: string;
  oid?: string;
  tfp?: string;
}

export interface UserInfo {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
}

export function useAuth() {
  const { instance, accounts, inProgress } = useMsal();
  const activeAccount = useAccount(accounts[0] ?? {});

  // Set the active account automatically after a redirect
  useEffect(() => {
    if (!activeAccount && accounts.length > 0) {
      instance.setActiveAccount(accounts[0]);
    }
  }, [instance, accounts, activeAccount]);

  const login = async () => {
    await instance.loginRedirect({
      authority: b2cPolicies.authorities.signUpSignIn.authority,
      scopes: [...protectedResources.api.scopes.full],
    });
  };

  const logout = async () => {
    await instance.logoutRedirect();
  };

  const acquireTokenSilent = async () => {
    const accessTokenRequest = {
      account: activeAccount ?? undefined,
      authority: b2cPolicies.authorities.signUpSignIn.authority,
      scopes: [...protectedResources.api.scopes.full],
    };

    const result = await instance.acquireTokenSilent(accessTokenRequest);

    return result.accessToken;
  };

  const getUserRole = () => {
    if (activeAccount) {
      const identityTokenClaims =
        activeAccount?.idTokenClaims as unknown as IdentityTokenClaims;
      return identityTokenClaims.groups;
    }
  };

  const getUserId = () => {
    if (activeAccount) {
      const identityTokenClaims =
        activeAccount?.idTokenClaims as unknown as IdentityTokenClaims;
      return identityTokenClaims.sub;
    }
  };

  const getUserInfo = () => {
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
  };

  return {
    activeAccount,
    login,
    logout,
    inProgress,
    acquireTokenSilent,
    getUserRole,
    getUserId,
    getUserInfo,
  };
}
