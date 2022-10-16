import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setCash } from "../features/cash/cashSlice";
import {
  saveCashToDatabase,
  saveSelectedCoinsToDatabase,
  savePositionsToDatabase,
  saveHistoryToDatabase,
} from "../firebase/saveToDatabase";
import { setIsDbChecked } from "../features/isDbChecked/isDbChecked";
import { useReadFromDatabase } from "./useReadFromDatabase";
import { loadPositions } from "../features/positions/positionsSlice";
import { loadSelectedCoins } from "../features/selectedCoins/selectedCoinsSlice";
import { loadHistory } from "../features/history/historySlice";

//  This hook checks if it's any data assigned to the user
//  in the firebase database, when it's true it sets
//  it to the current app state.
//  Also, hook subscribes to any crucial state changes and saves
//  them to the firebase database.

export const useFirebase = () => {
  const [userSnapshot, setUserSnapshot] = useState(null);
  const [user, setUser] = useState(null);
  const userID = useSelector((state) => state.user.value);
  const selectedCoinsStore = useSelector((state) => state.selectedCoins.value);
  const cashStore = useSelector((state) => state.cash.value);
  const isDatabaseCheckedStore = useSelector(
    (state) => state.isDbChecked.value
  );
  const positionsStore = useSelector((state) => state.positions.value);
  const historyStore = useSelector((state) => state.positions.value);
  let { data: databaseUserSnapshot } = useReadFromDatabase();
  const dispatch = useDispatch();

  const cashInitialValue = 10000;
  const positionsInitialValue = [];
  const selectedCoinsInitialValue = [];
  const historyInitialValue = [];

  useEffect(() => {
    setUser(userID);
  }, [userID]);
  //check if userSnapshot
  useEffect(() => {
    if (user) {
      setUserSnapshot(databaseUserSnapshot);
    } else {
      setUserSnapshot(null);
    }
  }, [user]);

  useEffect(() => {
    console.log(userSnapshot);
  }, [userSnapshot, user, databaseUserSnapshot]);
  //set data from database to app store

  //if not user database snapshot set db checked to true
  useEffect(() => {
    if (!userSnapshot && user) {
      dispatch(setIsDbChecked(true));
    }
  }, [user]);
  useEffect(() => {
    if (user && userSnapshot && isDatabaseCheckedStore === false) {
      if (
        userSnapshot.cash?.value &&
        userSnapshot.cash?.value !== cashInitialValue
      ) {
        dispatch(setCash(userSnapshot.cash.value));
      }
      if (
        userSnapshot.positions?.value &&
        userSnapshot.positions?.value !== positionsInitialValue
      ) {
        dispatch(loadPositions(userSnapshot.positions.value));
      }
      if (
        userSnapshot.selectedCoins?.value &&
        userSnapshot.selectedCoins?.value !== selectedCoinsInitialValue
      ) {
        dispatch(loadSelectedCoins(userSnapshot.selectedCoins.value));
      }
      if (
        userSnapshot.history?.value &&
        userSnapshot.history?.value !== historyInitialValue
      ) {
        dispatch(loadHistory(userSnapshot.history.value));
      }
    }
  }, [user, userSnapshot, isDatabaseCheckedStore, dispatch]);
  //subscribe to state change and save to database

  useEffect(() => {
    if (user && isDatabaseCheckedStore === true) {
      if (cashStore !== cashInitialValue) {
        saveCashToDatabase(user, cashStore);
      }
      if (selectedCoinsStore !== selectedCoinsInitialValue) {
        saveSelectedCoinsToDatabase(user, selectedCoinsStore);
      }
      if (positionsStore !== positionsInitialValue) {
        savePositionsToDatabase(user, positionsStore);
      }
      if (historyStore !== historyInitialValue) {
        saveHistoryToDatabase(user, historyStore);
      }
    }
  }, [
    user,
    isDatabaseCheckedStore,
    cashStore,
    selectedCoinsStore,
    positionsStore,
    historyStore,
  ]);
};
