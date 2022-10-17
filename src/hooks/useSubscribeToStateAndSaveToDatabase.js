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

  const historyInitialValue = [];

  useEffect(() => {
    const cashInitialValue = 10000;
    const saveCashToDatabase = (cash) => {
      console.log("cash saved");
      set(ref(db, "users/" + userID + "/cash/"), {
        value: cash,
      });
    };
    if (isDbChecked === true && userID) {
      if (cashStore !== cashInitialValue) saveCashToDatabase(cashStore);
    }
  }, [userID, isDbChecked, cashStore]);

  useEffect(() => {
    const saveSelectedCoinsToDatabase = (selectedCoins) => {
      console.log("selectedCoins saved");
      set(ref(db, "users/" + userID + "/selectedCoins/"), {
        value: selectedCoins,
      });
    };
    if (isDbChecked === true && userID) {
      if (selectedCoinsStore.length > 0)
        saveSelectedCoinsToDatabase(selectedCoinsStore);
    }
  }, [userID, isDbChecked, selectedCoinsStore]);

  useEffect(() => {
    const savePositionsToDatabase = (positions) => {
      console.log("positions saved");
      set(ref(db, "users/" + userID + "/positions/"), {
        value: positions,
      });
    };
    if (isDbChecked === true && userID) {
      if (positionsStore.length > 0) savePositionsToDatabase(positionsStore);
    }
  }, [userID, isDbChecked, positionsStore]);

  useEffect(() => {
    const saveHistoryToDatabase = (history) => {
      console.log("history saved");
      set(ref(db, "users/" + userID + "/history/"), {
        value: history,
      });
    };

    if (isDbChecked === true && userID) {
      if (historyStore.length > 0) saveHistoryToDatabase(historyStore);
    }
  }, [userID, historyStore, isDbChecked]);
};
