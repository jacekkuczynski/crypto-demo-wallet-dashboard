/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/initialize";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import isDbChecked from "../features/isDbChecked/isDbChecked";
import { resetCash } from "../features/cash/cashSlice";
import { resetHistory } from "../features/history/historySlice";
import { resetLastTransaction } from "../features/lastTransaction/lastTransactionSlice";
import { resetSelectedCoins } from "../features/selectedCoins/selectedCoinsSlice";
import { resetPositions } from "../features/positions/positionsSlice";

export const useSetUserState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.isAnonymous === false) {
        dispatch(setUser(user.uid));
      } else if (user?.isAnonymous === true) {
        dispatch(setUser("anonymous"));
      } else {
        dispatch(setUser(null));
        dispatch(isDbChecked(false));

        dispatch(resetCash());
        dispatch(resetHistory());
        dispatch(resetLastTransaction());
        dispatch(resetSelectedCoins());
        dispatch(resetPositions());
      }
    });
  }, []);
};
