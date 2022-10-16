import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsDbChecked } from "../features/isDbChecked/isDbChecked";
import { resetCash } from "../features/cash/cashSlice";
import { resetHistory } from "../features/history/historySlice";
import { resetLastTransaction } from "../features/lastTransaction/lastTransactionSlice";
import { resetSelectedCoins } from "../features/selectedCoins/selectedCoinsSlice";
import { resetPositions } from "../features/positions/positionsSlice";

export const useOnLogout = (userID) => {
  // const userID = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userID) {
      dispatch(setIsDbChecked(false));
      dispatch(resetCash());
      dispatch(resetHistory());
      dispatch(resetPositions());
      dispatch(resetSelectedCoins());
      dispatch(resetLastTransaction());
    }
  }, [userID]);
};
