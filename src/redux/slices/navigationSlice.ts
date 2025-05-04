import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface NavigationState {
  pageTitle: string;
}

const initialState: NavigationState = {
  pageTitle: '',
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setPageTitle: (state, action: PayloadAction<string>) => {
      state.pageTitle = action.payload;
    },
  },
});

export const { setPageTitle } =
  navigationSlice.actions;

export const selectPageTitle = (state: RootState) => state.navigation.pageTitle;

export default navigationSlice.reducer;
