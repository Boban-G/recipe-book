import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  status: "info",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessage(state, action) {
      state.message = action.payload.message;
      if (action.payload.status) {
        state.status = action.payload.status;
      }
    },
    clearMessage(state) {
      state.message = "";
      state.status = "info";
    },
  },
});

export const { addMessage, clearMessage } = messageSlice.actions;
