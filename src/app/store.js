import { configureStore } from "@reduxjs/toolkit";
import selectedCoinsReducer from "../features/selectedCoins/selectedCoinsSlice";
import userReducer from "../features/user/userSlice";
import cashReducer from "../features/cash/cashSlice";
import lastTransactionReducer from "../features/lastTransaction/lastTransactionSlice";
import positionsReducer from "../features/positions/positionsSlice.js";

export default configureStore({
  reducer: {
    selectedCoins: selectedCoinsReducer,
    user: userReducer,
    cash: cashReducer,
    positions: positionsReducer,
    lastTransaction: lastTransactionReducer,
  },
});
