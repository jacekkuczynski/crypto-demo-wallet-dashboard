//  This hook checks if it's any data assigned to the user
//  in the firebase database, when it's true it sets
//  it to the current app state.
//  Also, hook subscribes to any crucial state changes and saves
//  them to the firebase database.

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setCash } from "../features/cash/cashSlice";
import {
  saveCashToDatabase,
  saveHistoryToDatabase,
  savePositionsToDatabase,
  saveSelectedCoinsToDatabase,
} from "../firebase/saveToDatabase";
import { setIsDbChecked } from "../features/isDbChecked/isDbChecked";
import { useReadFromDatabase } from "./useReadFromDatabase";
import { loadPositions } from "../features/positions/positionsSlice";
import { loadSelectedCoins } from "../features/selectedCoins/selectedCoinsSlice";
import { loadHistory } from "../features/history/historySlice";

export const useFirebase = () => {
  //state
  const [userSnapshot, setUserSnapshot] = useState(null);
  //store
  const userID = useSelector((state) => state.user.value);
  const selectedCoinsStore = useSelector((state) => state.selectedCoins.value);
  const cashStore = useSelector((state) => state.cash.value);
  const isDatabaseCheckedStore = useSelector(
    (state) => state.isDbChecked.value
  );
  const positionsStore = useSelector((state) => state.positions.value);
  const historyStore = useSelector((state) => state.positions.value);

  //database data
  const { data: databaseUserSnapshot } = useReadFromDatabase("");

  const dispatch = useDispatch();
  const cashInitialValue = 10000;
  const positionsInitialValue = [];
  const selectedCoinsInitialValue = [];
  const historyInitialValue = [];

  //check if userSnapshot
  useEffect(() => {
    if (userID && databaseUserSnapshot && isDatabaseCheckedStore === false) {
      setUserSnapshot(databaseUserSnapshot);
    }
  }, [databaseUserSnapshot, dispatch, userID, isDatabaseCheckedStore]);
  //set data from database to app store
  useEffect(() => {
    if (userSnapshot && isDatabaseCheckedStore === false) {
      if (userSnapshot.cash?.value) {
        dispatch(setCash(userSnapshot.cash.value));
      }
      if (userSnapshot.positions?.value) {
        dispatch(loadPositions(userSnapshot.positions.value));
      }
      if (userSnapshot.selectedCoins?.value) {
        dispatch(loadSelectedCoins(userSnapshot.selectedCoins.value));
      }
      if (userSnapshot.history?.value) {
        dispatch(loadHistory(userSnapshot.history.value));
      }
      if (userID) {
        dispatch(setIsDbChecked(true));
        setUserSnapshot(null);
      }
    }
  }, [userID, userSnapshot, isDatabaseCheckedStore, dispatch]);
  //subscribe to state change and save to database
  useEffect(() => {
    if (userID && isDatabaseCheckedStore === true) {
      saveCashToDatabase(userID, cashStore);
      saveSelectedCoinsToDatabase(userID, selectedCoinsStore);
      savePositionsToDatabase(userID, positionsStore);
      saveHistoryToDatabase(userID, historyStore);
    }
  }, [
    userID,
    isDatabaseCheckedStore,
    cashStore,
    selectedCoinsStore,
    positionsStore,
    historyStore,
  ]);
};
