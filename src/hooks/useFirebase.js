import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDbChecked } from "../features/isDbChecked/isDbChecked";
import { useReadFromDatabase } from "./useReadFromDatabase";
import { setCash } from "../features/cash/cashSlice";
import {
  saveCashToDatabase,
  saveSelectedCoinsToDatabase,
} from "../firebase/saveToDatabase";
import { loadSelectedCoins } from "../features/selectedCoins/selectedCoinsSlice";
import { loadPositions } from "../features/positions/positionsSlice";
import { loadHistory } from "../features/history/historySlice";

export const useFirebase = (userID) => {
  const [snapshotCash, setSnapshotCash] = useState(null);
  const [snapshotSelectedCoin, setSnapshotSelectedCoin] = useState(null);
  const [snapshotPositions, setSnapshotPositions] = useState(null);
  const [snapshotHistory, setSnapshotHistory] = useState(null);

  const userIDStore = useSelector((state) => state.user.value);
  const isDbChecked = useSelector((state) => state.isDbChecked.value);
  const cashStore = useSelector((state) => state.cash.value);
  const selectedCoinsStore = useSelector((state) => state.selectedCoins.value);
  let { data: userSnapshot } = useReadFromDatabase(userID);

  const dispatch = useDispatch();
  console.log(userSnapshot, "userSnapshot");

  const cashInitialValue = 10000;
  const selectedCoinsInitialValue = [];
  const positionsInitialValue = [];
  const historyInitialValue = [];

  //check if if user snapshot, set state
  useEffect(() => {
    if (userSnapshot) {
      setSnapshotCash(userSnapshot.cash?.value);
      setSnapshotSelectedCoin(userSnapshot.selectedCoins?.value);
      setSnapshotPositions(userSnapshot.positions?.value);
      setSnapshotHistory(userSnapshot.history?.value);
    }
  }, [userSnapshot, userID]);

  useEffect(() => {
    console.log(userID, "userID");
    console.log(snapshotCash, "snapshotCash");
    console.log(snapshotSelectedCoin, "snapshotSelectedCoin");
    console.log(snapshotPositions, "snapshotPositions");
    console.log(snapshotHistory, "snapshotHistory");
  }, [
    userID,
    snapshotCash,
    snapshotSelectedCoin,
    snapshotPositions,
    snapshotHistory,
  ]);

  //   load data from snapshot
  useEffect(() => {
    if (isDbChecked === false) {
      if (snapshotCash && snapshotCash !== cashInitialValue) {
        dispatch(setCash(snapshotCash));
        setSnapshotCash(null);
      }
      if (
        snapshotSelectedCoin &&
        snapshotSelectedCoin !== selectedCoinsInitialValue
      ) {
        dispatch(loadSelectedCoins(snapshotSelectedCoin));
        setSnapshotSelectedCoin(null);
      }
      if (snapshotPositions && snapshotPositions !== positionsInitialValue) {
        dispatch(loadPositions(snapshotPositions));
        setSnapshotPositions(null);
      }
      if (snapshotHistory && snapshotHistory !== historyInitialValue) {
        dispatch(loadHistory(snapshotHistory));
        setSnapshotHistory(null);
      }
    }
  }, [
    userID,
    userSnapshot,
    isDbChecked,
    snapshotCash,
    snapshotSelectedCoin,
    snapshotPositions,
    snapshotHistory,
    dispatch,
  ]);

  //   subscribe to state changes and save to database
  useEffect(() => {
    if (userID && isDbChecked === true) {
      if (cashStore !== cashInitialValue) {
        saveCashToDatabase(userID, cashStore);
      }
      if (selectedCoinsStore !== selectedCoinsInitialValue) {
        saveSelectedCoinsToDatabase(userID, selectedCoinsStore);
      }
    }
  }, [userID, isDbChecked, cashStore, selectedCoinsStore]);
};
