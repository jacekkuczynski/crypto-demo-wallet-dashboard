//  This hook checks if it's any data assigned to the user
//  in the firebase database, when it's true it sets
//  it to the current app state.
//  Also, hook subscribes to any crucial state changes and saves
//  them to the firebase database.

// 1. set selected coins database
// 2. set positions database
// 3. set history database
// 4. set selected coins database

// check cash
// check selected
// check positions
// check history

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setCash } from "../features/cash/cashSlice";
import {
  saveCashToDatabase,
  saveSelectedCoinsToDatabase,
} from "../firebase/saveToDatabase";
import { setIsDbChecked } from "../features/isDbChecked/isDbChecked";
import { useReadFromDatabase } from "./useReadFromDatabase";

export const useFirebase = () => {
  //state
  const [userSnapshot, setUserSnapshot] = useState();
  //store
  const userID = useSelector((state) => state.user.value);
  const selectedCoinsStore = useSelector((state) => state.selectedCoins.value);
  const cashStore = useSelector((state) => state.cash.value);
  const isDatabaseCheckedStore = useSelector(
    (state) => state.isDbChecked.value
  );

  //database data
  const { data: databaseUserSnapshot } = useReadFromDatabase("");
  const { data: databaseCash } = useReadFromDatabase(`cash`);
  const { data: userDbSelectedCoins } = useReadFromDatabase(`selectedCoins`);
  const { data: userDbPositions } = useReadFromDatabase(`positions`);
  const { data: userDbHistory } = useReadFromDatabase(`history`);

  const dispatch = useDispatch();

  const cashInitialValue = 10000;

  useEffect(() => {
    if (databaseUserSnapshot && isDatabaseCheckedStore === false) {
      setUserSnapshot(databaseUserSnapshot);
      // dispatch(setCash(databaseUserSnapshot?.cash));
      console.log(databaseUserSnapshot);
    }
  }, [databaseUserSnapshot]);

  useEffect(() => {
    if (userSnapshot && isDatabaseCheckedStore === false) {
      console.log(userSnapshot);
    }
  }, [userSnapshot]);

  // useEffect(() => {
  //   if ((userID, cashStore, selectedCoinsStore)) {
  //     saveCashToDatabase(userID, cashStore);
  //     saveSelectedCoinsToDatabase(userID, selectedCoinsStore);
  //   }
  // }, [userID, cashStore, selectedCoinsStore]);

  // save changes in cash to database
  // useEffect(() => {
  //   if (userID && cashStore !== cashInitialValue) {
  //     saveCashToDatabase(userID, cashStore);
  //   }
  // }, [userID, cashStore]);

  //set database selected coins data to hooks state
  // useEffect(() => {
  //   if (userDbSelectedCoins !== null) {
  //     setUserDbSelectedCoinsState(userDbSelectedCoins.selectedCoins);
  //   }
  // }, [userDbSelectedCoins]);

  // save selected coins to database
  // useEffect(() => {
  //   if (userID && selectedCoins.length > 0) {
  //     saveSelectedCoinsToDatabase(userID, selectedCoins);
  //   }
  // }, [userID, selectedCoins]);

  // const selectedCoins = useSelector((state) => state.selectedCoins.value);
  // const dispatch = useDispatch();

  // const cashStore = useSelector((state) => state.cash.value);
  // const isDatabaseChecked = useSelector((state) => state.isDbChecked.value);

  // const cashInitialValue = 10000;
  // console.log(databaseCash?.cash);
  // useEffect(() => {
  //   console.log(databaseCash);
  // }, [userID, databaseCash]);

  //read user database snapshot, and if exist save to hooks state
  // useEffect(() => {
  //   if (userID && userID !== "anonymous" && isDatabaseChecked === false) {
  //     // if (databaseCash) {
  //     //   console.log(databaseCash, "databaseCash");
  //     //   //         setDbCash(databaseCash);
  //     //   // console.log(dbCash, "dbCash");
  //     // }
  //     // const userDbPositions = readFromDatabase(`users/${userID}/positions`);
  //     // const userDbHistory = readFromDatabase(`users/${userID}/history`);
  //     // const userDbSelectedCoins = readFromDatabase(`users/${userID}/cash`);
  //     // console.log(userDbPositions, "userDbPositions");
  //     // console.log(userDbHistory, "userDbHistory");
  //     // console.log(userDbSelectedCoins, "userDbSelectedCoins");
  //     // setDbCash(databaseCash);
  //     // console.log(dbCash, "dbCash");
  //     // setDbCash();
  //     // setDbPositions();
  //     // setDbHistory();
  //     // setDbSelectedCoins();
  //   }
  // }, []);
  //if hooks state exist save data to redux store and clear hooks state
  // useEffect(() => {
  //   // dispatch();
  //   // dispatch();
  //   // dispatch();
  //   // dispatch();
  //   // setDbCash(null);
  //   // setDbPositions(null);
  //   // setDbHistory(null);
  //   // setDbSelectedCoins(null);
  //   if (userID) {
  //     dispatch(setIsDbChecked(true));
  //   }
  // }, []);
};
