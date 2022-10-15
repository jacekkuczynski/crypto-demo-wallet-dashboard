import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: { value: [] },
  reducers: {
    loadHistory: (state, action) => {
      state.value = action.payload;
    },
    addToHistory: (state, action) => {
      if (state.value.length < 1) {
        state.value = [action.payload];
      } else {
        state.value = [...state.value, action.payload];
      }
    },
  },
});

export const { loadHistory, addToHistory } = historySlice.actions;
export default historySlice.reducer;
