import { configureStore } from "@reduxjs/toolkit";

// slices
import navbar from "./navbar.slice";

export const store = configureStore({
  reducer: {
    navbar,
  },
});
