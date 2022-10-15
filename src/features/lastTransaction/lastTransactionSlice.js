import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: null };

export const lastTransactionSlice = createSlice({
  name: "lastTransaction",
  initialState: initialState,
  reducers: {
    setLastTransaction: (state, action) => {
      state.value = action.payload;
    },
  },
  resetLastTransaction: (state) => (state.value = initialState),
});

export const { setLastTransaction, resetLastTransaction } =
  lastTransactionSlice.actions;
export default lastTransactionSlice.reducer;
