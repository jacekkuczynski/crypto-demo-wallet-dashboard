import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: { value: [] },
  reducers: {
    addToHistory: (state, action) => {
      if (state.value.length < 1) {
        state.value = [action.payload];
      } else {
        state.value = [...state.value, action.payload];
      }
    },
  },
});

export const { addToHistory } = historySlice.actions;
export default historySlice.reducer;
