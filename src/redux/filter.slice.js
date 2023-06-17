import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  range: [0, 10000000],
};

export const FilterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setRange: (state, { payload }) => {
      state.range = payload;
    },
  },
});

export const { setRange } = FilterSlice.actions;

export default FilterSlice.reducer;
