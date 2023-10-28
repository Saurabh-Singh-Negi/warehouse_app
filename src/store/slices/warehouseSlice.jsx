import { createSlice } from "@reduxjs/toolkit";

const warehouseSlice = createSlice({
  name: "warehouse",
  initialState: [],
  reducers: {
    setWarehouseData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setWarehouseData } = warehouseSlice.actions;
export default warehouseSlice.reducer;
