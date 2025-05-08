import { createContext, useContext, useCallback, useMemo } from 'react';
import authenticationService from './authenticationService';
import type { UserInfo } from './authenticationService';

interface AuthContextType {
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  userInfo: UserInfo | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const signIn = useCallback(async () => {
    await authenticationService.signIn();
  }, []);

  const signOut = useCallback(async () => {
    await authenticationService.signOut();
  }, []);

  const userInfo = authenticationService.getUserInfo();

  const value = useMemo(() => ({
    signIn,
    signOut,
    userInfo
  }), [signIn, signOut, userInfo]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};