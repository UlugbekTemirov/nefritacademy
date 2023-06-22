import { configureStore } from "@reduxjs/toolkit";

// slices
import navbar from "./navbar.slice";
import contact from "./contact.slice";

export const store = configureStore({
  reducer: {
    navbar,
    contact,
  },
  devTools: process.env.NODE_ENV !== "production",
});
