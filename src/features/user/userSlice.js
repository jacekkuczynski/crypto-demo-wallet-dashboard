import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { email: null, id: null } },
  reducers: {
    setUser: (state, action) => {
      state.value.id = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
