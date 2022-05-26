import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "../reducers/popupSlice";
import copyReducer from "../reducers/copySlice";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    copy: copyReducer,
  },
});

export default store;
