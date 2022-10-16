//check if is user snapshot
//if yes load and set snapshot to app state
//set is dbchecked to true

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useReadFromDatabase } from "./useReadFromDatabase";
import { setIsDbChecked } from "../features/isDbChecked/isDbChecked";
import { setCash } from "../features/cash/cashSlice";
import { loadSelectedCoins } from "../features/selectedCoins/selectedCoinsSlice";
import { loadPositions } from "../features/positions/positionsSlice";
import { loadHistory } from "../features/history/historySlice";
import {
  saveCashToDatabase,
  saveSelectedCoinsToDatabase,
} from "../firebase/saveToDatabase";

//subscribe to changes and save data to firebase

export const useFirebase = (userID) => {
  let { data: userSnapshot } = useReadFromDatabase(userID);
  const isDbChecked = useSelector((state) => state.isDbChecked.value);
  const cashStore = useSelector((state) => state.cash.value);
  const selectedCoinsStore = useSelector((state) => state.selectedCoins.value);

  const dispatch = useDispatch();

  //   const ifUserSnapshotSetIsDbChecked = () => {
  //     if (!userSnapshot && userID) {
  //       dispatch(setIsDbChecked(true));
  //     }
  //   };
  useEffect(() => {
    console.log(userSnapshot, "userSnapshot");
  }, [userSnapshot]);

  const cashInitialValue = 10000;
  const selectedCoinsInitialValue = [];
  const positionsInitialValue = [];
  const historyInitialValue = [];

  //load from database
  useEffect(() => {
    if (isDbChecked === false && userSnapshot && userID) {
      console.log("here");
      if (
        userSnapshot.cash?.value &&
        userSnapshot.cash?.value !== cashInitialValue
      ) {
        dispatch(setCash(userSnapshot.cash?.value));
      }
      if (
        userSnapshot?.selectedCoins &&
        userSnapshot.selectedCoins?.value !== selectedCoinsInitialValue
      ) {
        dispatch(loadSelectedCoins(userSnapshot.selectedCoins?.value));
      }
      if (
        userSnapshot.positions?.value &&
        userSnapshot.positions?.value !== positionsInitialValue
      ) {
        dispatch(loadPositions(userSnapshot.positions?.value));
      }
      if (
        userSnapshot.history?.value &&
        userSnapshot.history?.value !== historyInitialValue
      ) {
        dispatch(loadHistory(userSnapshot.history?.value));
      }
    }
    dispatch(setIsDbChecked(true));
  }, [userID, userSnapshot, isDbChecked]);

  useEffect(() => {
    if (userID && isDbChecked === true) {
      if (cashStore !== cashInitialValue) {
        console.log("here");
        saveCashToDatabase(userID, cashStore);
      }
      if (selectedCoinsStore !== selectedCoinsInitialValue) {
        saveSelectedCoinsToDatabase(userID, selectedCoinsStore);
      }
    }
  }, [userID, isDbChecked, cashStore, selectedCoinsStore]);

  //   useEffect(() => {
  //     // ifUserSnapshotSetIsDbChecked();
  //     // subscribeToStateChangeAndSaveToDatabase();
  //   }, [userID, isDbChecked]);
};
