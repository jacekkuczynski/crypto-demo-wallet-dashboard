import { createSlice } from "@reduxjs/toolkit";

export const lastTransactionSlice = createSlice({
  name: "lastTransaction",
  initialState: { value: null },
  reducers: {
    setLastTransaction: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLastTransaction } = lastTransactionSlice.actions;
export default lastTransactionSlice.reducer;
