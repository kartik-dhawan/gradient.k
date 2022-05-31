import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "../reducers/popupSlice";
import copyReducer from "../reducers/copySlice";
import utilityReducer from "../reducers/utilitySlice";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    copy: copyReducer,
    utility: utilityReducer,
  },
});

export default store;
