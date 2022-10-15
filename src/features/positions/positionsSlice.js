import { createSlice } from "@reduxjs/toolkit";

const positionsSlice = createSlice({
  name: "positions",
  initialState: { value: [] },
  reducers: {
    loadPositions: (state, action) => {
      state.value = action.payload;
    },
    addPosition: (state, action) => {
      if (state.value.length < 1) {
        state.value = [action.payload];
      } else {
        state.value = [...state.value, action.payload];
      }
    },
    removePosition: (state, action) => {
      state.value = state.value.filter((el) => {
        return el.transactionID !== action.payload.transactionID;
      });
    },
    resetPositions: (state) => {
      state.value = null;
    },
  },
});

export const { resetPositions, loadPositions, addPosition, removePosition } =
  positionsSlice.actions;
export default positionsSlice.reducer;
