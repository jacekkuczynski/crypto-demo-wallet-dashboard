import { configureStore } from "@reduxjs/toolkit";
import selectedCoinsReducer from "../features/selectedCoins/selectedCoinsSlice";
import userReducer from "../features/user/userSlice";
import cashReducer from "../features/cash/cashSlice";
import lastTransactionReducer from "../features/lastTransaction/lastTransactionSlice";
import positionsReducer from "../features/positions/positionsSlice";
import isDbCheckedReducer from "../features/isDbChecked/isDbChecked";
import historyReducer from "../features/history/historySlice";

export default configureStore({
  reducer: {
    user: userReducer,
    selectedCoins: selectedCoinsReducer,
    cash: cashReducer,
    positions: positionsReducer,
    lastTransaction: lastTransactionReducer,
    isDbChecked: isDbCheckedReducer,
    history: historyReducer,
  },
});
