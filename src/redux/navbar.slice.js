import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  is_navbar_hidden: false,
  lang: "en",
};

export const NavbarSlice = createSlice({
  name: "navbarSlice",
  initialState,
  reducers: {
    setNavbarHidden: (state, { payload }) => {
      state.is_navbar_hidden = payload;
    },
    setLang: (state, { payload }) => {
      state.lang = payload;
    },
  },
});

export const { setNavbarHidden, setLang } = NavbarSlice.actions;

export default NavbarSlice.reducer;
