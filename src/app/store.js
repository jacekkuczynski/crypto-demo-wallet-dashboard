import { configureStore } from "@reduxjs/toolkit";
import selectedCoinsReducer from "../features/selectedCoins/selectedCoinsSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    selectedCoins: selectedCoinsReducer,
    user: userReducer,
  },
});
