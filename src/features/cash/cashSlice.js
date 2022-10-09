import { createSlice } from "@reduxjs/toolkit";

export const cashSlice = createSlice({
  name: "cash",
  initialState: {
    value: 10000,
  },
  reducers: {
    setCash: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCash } = cashSlice.actions;

export default cashSlice.reducer;
