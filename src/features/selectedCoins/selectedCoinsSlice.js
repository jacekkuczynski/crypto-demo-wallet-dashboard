import { createSlice } from "@reduxjs/toolkit";

export const selectedCoinsSlice = createSlice({
  name: "selectedCoins",
  initialState: { value: [] },
  reducers: {
    addSelectedCoins: (state, action) => {
      state.value = [...state.value, action.payload].flat();
    },
    removeSelectedCoins: (state, action) => {
      state.value = state.value.filter((el) => {
        return el !== action.payload;
      });
    },
  },
});

export const { addSelectedCoins, removeSelectedCoins } =
  selectedCoinsSlice.actions;
export default selectedCoinsSlice.reducer;
