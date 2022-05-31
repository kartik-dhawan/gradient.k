import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardToggle: true,
  browseToggle: false,
};

export const utilitySlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    switchToBrowse: (state) => {
      state.browseToggle = true;
      state.boardToggle = false;
    },
    switchToBoard: (state) => {
      state.browseToggle = false;
      state.boardToggle = true;
    },
  },
});

export const { switchToBrowse, switchToBoard } = utilitySlice.actions;

export default utilitySlice.reducer;
