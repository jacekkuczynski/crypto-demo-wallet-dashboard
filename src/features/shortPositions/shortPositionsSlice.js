import { createSlice } from "@reduxjs/toolkit";

export const shortPositionsSlice = createSlice({
  name: "shortPositions",
  initialState: { value: null },
  reducers: {
    addShortPosition: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
  removeShortPosition: (state, action) => {
    state.value = state.value.filter((el) => {
      return el !== action.payload;
    });
  },
});

export const { addShortPosition, removeShortPosition } =
  shortPositionsSlice.actions;
export default shortPositionsSlice.reducer;
