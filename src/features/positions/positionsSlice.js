import { createSlice } from "@reduxjs/toolkit";

const positionsSlice = createSlice({
  name: "positions",
  initialState: { value: [] },
  reducers: {
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
  },
});

export const { addPosition, removePosition } = positionsSlice.actions;
export default positionsSlice.reducer;
