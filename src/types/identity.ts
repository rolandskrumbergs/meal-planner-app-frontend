export type UserIdentity = {
    isAuthenticated: boolean;
    id?: string;
    givenName?: string;
    familyName?: string;
    fullName?: string;
    authenticationProvider?: string;
    groups: string[];
    role?: string;
    accessToken?: string;
  }