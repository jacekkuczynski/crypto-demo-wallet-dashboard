import { configureStore } from "@reduxjs/toolkit";
import selectedCoinsReducer from "../features/selectedCoins/selectedCoinsSlice";
import userReducer from "../features/user/userSlice";
import cashReducer from "../features/cash/cashSlice";

export default configureStore({
  reducer: {
    selectedCoins: selectedCoinsReducer,
    user: userReducer,
    cash: cashReducer,
  },
});
