import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { msalInstance } from '../../main';
import { protectedResources } from '../../features/authentication/configuration';

export const emptyApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_ADDRESS as string,
    prepareHeaders: async (headers) => {
      try {
        const account = msalInstance.getActiveAccount();
        if (account) {
          const response = await msalInstance.acquireTokenSilent({
            scopes: protectedResources.api.scopes.full,
            account: account,
          });
          headers.set('Authorization', `Bearer ${response.accessToken}`);
        }
      } catch (error) {
        console.error('Failed to acquire token:', error);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
