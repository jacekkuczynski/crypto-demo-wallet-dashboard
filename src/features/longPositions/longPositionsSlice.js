import { createSlice } from "@reduxjs/toolkit";

export const longPositionsSlice = createSlice({
  name: "longPositions",
  initialState: { value: null },
  reducers: {
    addLongPosition: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
  removeLongPosition: (state, action) => {
    state.value = state.value.filter((el) => {
      return el !== action.payload;
    });
  },
});

export const { addLongPosition, removeLongPosition } =
  longPositionsSlice.actions;
export default longPositionsSlice.reducer;
