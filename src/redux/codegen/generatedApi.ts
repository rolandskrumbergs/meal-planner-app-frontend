import { emptyApi as api } from './emptyApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: () => ({}),
  overrideExisting: false,
});
export { injectedRtkApi as generatedApi };
export const {} = injectedRtkApi;
