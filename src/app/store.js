import { configureStore } from "@reduxjs/toolkit";
import selectedCoinsReducer from "../features/selectedCoins/selectedCoinsSlice";

export default configureStore({
  reducer: {
    selectedCoins: selectedCoinsReducer,
  },
});
