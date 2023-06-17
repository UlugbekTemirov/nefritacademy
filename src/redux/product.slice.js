import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab: "params",
  modal: false,
  productUrl: "",
};

export const ProductSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setTab: (state, { payload }) => {
      state.tab = payload;
    },
    setModal: (state, { payload }) => {
      state.modal = payload;
    },
    setProductUrl: (state, { payload }) => {
      state.productUrl = payload;
    },
  },
});

export const { setTab, setModal, setProductUrl } = ProductSlice.actions;

export default ProductSlice.reducer;
