import { configureStore } from '@reduxjs/toolkit';
import navigationSlice from './slices/navigationSlice';
import { api } from './codegen/api';
import notificationMiddleware from './middleware/notificationMiddleware.ts';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    navigation: navigationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, notificationMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
