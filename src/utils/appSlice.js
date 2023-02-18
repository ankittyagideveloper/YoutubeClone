import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    searchQuery: "",
  },

  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    getSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
  },
});

export const { toggleMenu, closeMenu, getSearchQuery } = appSlice.actions;
export default appSlice.reducer;
