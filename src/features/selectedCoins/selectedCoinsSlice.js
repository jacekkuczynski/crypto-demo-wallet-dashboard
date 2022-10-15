import { createSlice } from "@reduxjs/toolkit";

export const selectedCoinsSlice = createSlice({
  name: "selectedCoins",
  initialState: { value: [] },
  reducers: {
    loadSelectedCoins: (state, action) => {
      state.value = action.payload;
    },
    addSelectedCoins: (state, action) => {
      state.value = [...state.value, action.payload].flat();
    },
    removeSelectedCoins: (state, action) => {
      state.value = state.value.filter((el) => {
        return el !== action.payload;
      });
    },
    resetSelectedCoins: (state) => {
      state.value = null;
    },
  },
});

export const {
  resetSelectedCoins,
  loadSelectedCoins,
  addSelectedCoins,
  removeSelectedCoins,
} = selectedCoinsSlice.actions;
export default selectedCoinsSlice.reducer;
