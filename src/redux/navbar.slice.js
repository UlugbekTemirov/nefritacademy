import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: true,
  language: "uz",
  mobileSidebar: false,
};

export const NavbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setIsDarkMode: (state, { payload }) => {
      state.isDarkMode = payload;
    },
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
    setMobileSidebar: (state, { payload }) => {
      state.mobileSidebar = payload;
    },
  },
});

export const { setIsDarkMode, setLanguage, setMobileSidebar } =
  NavbarSlice.actions;

export default NavbarSlice.reducer;
