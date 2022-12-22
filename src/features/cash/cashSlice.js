import { createSlice } from '@reduxjs/toolkit';

const cashSlice = createSlice({
  name: 'cash',
  initialState: { value: 10000 },
  reducers: {
    setCash: (state, action) => {
      state.value = action.payload;
    },
    resetCash: (state) => {
      state.value = 10000;
    },
  },
});

export const { resetCash, setCash } = cashSlice.actions;

export default cashSlice.reducer;
