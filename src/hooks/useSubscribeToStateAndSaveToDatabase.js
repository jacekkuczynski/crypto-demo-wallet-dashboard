import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ref, set } from "firebase/database";
import { db } from "../firebase/initialize";

export const useSubscribeToStateAndSaveToDatabase = (userID) => {
  const isDbChecked = useSelector((state) => state.isDbChecked.value);
  const cashStore = useSelector((state) => state.cash.value);
  const selectedCoinsStore = useSelector((state) => state.selectedCoins.value);
  const positionsStore = useSelector((state) => state.positions.value);
  const historyStore = useSelector((state) => state.history.value);

  const cashInitialValue = 10000;
  const selectedCoinsInitialValue = [];
  const positionsInitialValue = [];
  const historyInitialValue = [];

  const saveCashToDatabase = (cash) => {
    set(ref(db, "users/" + userID + "/cash/"), {
      value: cash,
    });
  };
  const saveSelectedCoinsToDatabase = (selectedCoins) => {
    set(ref(db, "users/" + userID + "/selectedCoins/"), {
      value: selectedCoins,
    });
  };
  const savePositionsToDatabase = (positions) => {
    set(ref(db, "users/" + userID + "/positions/"), {
      value: positions,
    });
  };
  const saveHistoryToDatabase = (history) => {
    set(ref(db, "users/" + userID + "/history/"), {
      value: history,
    });
  };

  useEffect(() => {
    if (isDbChecked === true && userID) {
      if (cashStore !== cashInitialValue) saveCashToDatabase(cashStore);
      if (selectedCoinsStore !== selectedCoinsInitialValue)
        saveSelectedCoinsToDatabase(selectedCoinsStore);
      if (positionsStore !== positionsInitialValue)
        savePositionsToDatabase(positionsStore);
      if (historyStore !== historyInitialValue)
        saveHistoryToDatabase(historyStore);
    }
  }, [
    userID,
    isDbChecked,
    cashStore,
    selectedCoinsStore,
    positionsStore,
    historyStore,
  ]);
};
