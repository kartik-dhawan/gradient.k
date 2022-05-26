import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activity: false,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showPopup: (state) => {
      state.activity = true;
      console.log(state.activity);
    },
    removePopup: (state) => {
      state.activity = false;
      console.log(state.activity);
    },
  },
});

export const { showPopup, removePopup } = popupSlice.actions;

export default popupSlice.reducer;
