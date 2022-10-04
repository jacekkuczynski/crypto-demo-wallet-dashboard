import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: { value: { email: null, id: null } },
  reducers: {
    setUserEmail: (state, action) => {
      state.value.email = action.payload;
    },
    setUserID: (state, action) => {
      state.value.id = action.payload;
    },
  },
});

export const { setUserEmail } = userSlice.actions;
export const { setUserID } = userSlice.actions;

export default userSlice.reducer;
