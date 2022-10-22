import { createSlice } from "@reduxjs/toolkit";

const errorModalSlice = createSlice({
  name: "errorModal",
  initialState: { value: false },
  reducers: {
    setModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setModal } = errorModalSlice.actions;
export default errorModalSlice.reducer;
