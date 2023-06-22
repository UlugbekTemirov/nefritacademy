import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import database from "../firebase";

const initialState = {
  contact: {},
  loading: false,
  status: null,
};

export const saveDocument = createAsyncThunk(
  "contact/saveDocument",
  async (data) => {
    try {
      const collectionRef = collection(database, "users");
      await addDoc(collectionRef, data);
    } catch (error) {
      throw error;
    }
  }
);

export const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveDocument.pending, (state) => {
        state.status = "sending";
        state.loading = true;
      })
      .addCase(saveDocument.fulfilled, (state) => {
        state.status = "success";
        state.loading = false;
      });
  },
});

export const { resetStatus } = ContactSlice.actions;

export default ContactSlice.reducer;
