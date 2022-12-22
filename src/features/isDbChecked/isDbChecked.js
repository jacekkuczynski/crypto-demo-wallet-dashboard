import { createSlice } from '@reduxjs/toolkit';

const isDbCheckedSlice = createSlice({
  name: 'isDbChecked',
  initialState: { value: false },
  reducers: {
    setIsDbChecked: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIsDbChecked } = isDbCheckedSlice.actions;
export default isDbCheckedSlice.reducer;
