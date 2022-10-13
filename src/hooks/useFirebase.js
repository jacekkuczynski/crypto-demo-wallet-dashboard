//  This hook checks if it's any data assigned to the user
//  in the firebase database, when it's true it sets
//  it to the current app state.
//  Also, hook subscribes to any crucial state changes and saves
//  them to the firebase database.

// 1. set selected coins database
// 2. set positions database
// 3. set history database
// 4. set selected coins database

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { readFromDatabase } from "../firebase/readFromDatabase";
import {
  saveCashToDatabase,
  saveSelectedCoinsToDatabase,
} from "../firebase/saveToDatabase";
import { setIsDbChecked } from "../features/isDbChecked/isDbChecked";

export const useFirebase = () => {
  const [dbCash, setDbCash] = useState(null);
  const [dbPositions, setDbPositions] = useState(null);
  const [dbHistory, setDbHistory] = useState(null);
  const [dbSelectedCoins, setDbSelectedCoins] = useState(null);

  const selectedCoins = useSelector((state) => state.selectedCoins.value);
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.user?.value);
  const userCash = useSelector((state) => state.cash.value);
  const isDatabaseChecked = useSelector((state) => state.isDbChecked.value);

  const cashInitialValue = 10000;

  //read user database snapshot, and if exist save to hooks state
  useEffect(() => {
    if (userID && isDatabaseChecked === false) {
      const userDbCash = readFromDatabase(`users/${userID}/cash`);
      // console.log(userDbCash, "userDbCash");
      // if (userDbCash) {
      //   console.log(userDbCash, "userDbCash");
      //   //         setDbCash(userDbCash);
      //   // console.log(dbCash, "dbCash");
      // }
      const userDbPositions = readFromDatabase(`users/${userID}/positions`);
      const userDbHistory = readFromDatabase(`users/${userID}/history`);
      const userDbSelectedCoins = readFromDatabase(`users/${userID}/cash`);

      // console.log(userDbPositions, "userDbPositions");
      // console.log(userDbHistory, "userDbHistory");
      // console.log(userDbSelectedCoins, "userDbSelectedCoins");
      // setDbCash(userDbCash);
      // console.log(dbCash, "dbCash");

      // setDbCash();
      // setDbPositions();
      // setDbHistory();
      // setDbSelectedCoins();
    }
  }, [userID, isDatabaseChecked, dbCash]);
  //if hooks state exist save data to redux store and clear hooks state
  useEffect(() => {
    // dispatch();
    // dispatch();
    // dispatch();
    // dispatch();
    // setDbCash(null);
    // setDbPositions(null);
    // setDbHistory(null);
    // setDbSelectedCoins(null);
    if (userID) {
      dispatch(setIsDbChecked(true));
    }
  }, []);

  //save selected coins to database
  useEffect(() => {
    if (userID && selectedCoins.length > 0) {
      // console.log(selectedCoins, "selectedCoins");
      saveSelectedCoinsToDatabase(userID, selectedCoins);
      // console.log("selected coins saved to db");
    }
  }, [userID, selectedCoins]);
  //save changes in cash to database
  useEffect(() => {
    if (userID && userCash !== cashInitialValue) {
      // console.log(userCash, "userCash");
      saveCashToDatabase(userID, userCash);
      // console.log("cash saved to db");
    }
  }, [userID, userCash]);
};
