import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NavigationState {
  isMobileMenuOpen: boolean;
  activeSubmenu: string | null;
  currentPage: string;
}

const initialState: NavigationState = {
  isMobileMenuOpen: false,
  activeSubmenu: null,
  currentPage: 'home',
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
      if (!state.isMobileMenuOpen) {
        state.activeSubmenu = null;
      }
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
      state.activeSubmenu = null;
    },
    openSubmenu: (state, action: PayloadAction<string>) => {
      state.activeSubmenu = action.payload;
    },
    closeSubmenu: (state) => {
      state.activeSubmenu = null;
    },
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  closeMobileMenu,
  openSubmenu,
  closeSubmenu,
  setCurrentPage,
} = navigationSlice.actions;

export default navigationSlice.reducer;

