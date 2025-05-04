import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import authenticationService from '../../features/authentication/authenticationService';

export enum TagType {
  DEMO = 'DEMO'
}

export const emptyApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_ADDRESS as string,
    prepareHeaders: async (headers) => {
      const token = await authenticationService.acquireTokenSilent();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    TagType.DEMO
  ],
});
