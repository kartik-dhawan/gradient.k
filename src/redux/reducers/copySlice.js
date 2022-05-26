import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  copyData: "",
  status: false,
};

const copySlice = createSlice({
  name: "copy to clipboard",
  initialState,
  reducers: {
    copyToClipboard: (state, action) => {
      const codes = action.payload
        .map((color) => {
          return `#${color}`;
        })
        .toString();

      state.copyData = `background: #000000; /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, ${codes}); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, ${codes}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`;
    },
  },
});

export const { copyToClipboard } = copySlice.actions;

export default copySlice.reducer;
