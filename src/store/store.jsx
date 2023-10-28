import { configureStore } from "@reduxjs/toolkit";
import warehouseReducer from "./slices/warehouseSlice";

const store = configureStore({
  reducer: {
    warehouse: warehouseReducer,
  },
});

export default store;
