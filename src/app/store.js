import { configureStore } from "@reduxjs/toolkit";
import selectedCoinsReducer from "../features/selectedCoins/selectedCoinsSlice";
import userReducer from "../features/user/userSlice";
import cashReducer from "../features/cash/cashSlice";
import lastTransactionReducer from "../features/lastTransaction/lastTransactionSlice";

export default configureStore({
  reducer: {
    selectedCoins: selectedCoinsReducer,
    user: userReducer,
    cash: cashReducer,
    lastTransaction: lastTransactionReducer,
  },
});
