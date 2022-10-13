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

export const useFirebase = () => {
  const [isDatabaseChecked, setIsDatabaseChecked] = useState(false);
  const selectedCoins = useSelector((state) => state.selectedCoins.value);
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.user.value?.id);
  const userCash = useSelector((state) => state.cash.value);

  //read user database snapshot, and if exist save to state
  useEffect(() => {
    if (userID && isDatabaseChecked === false) {
      const userDbSnapshot = readFromDatabase(`users/${userID}/`);
      console.log(userDbSnapshot);
    }
  }, [userID]);

  //save selected coins to database
  useEffect(() => {
    if (userID && selectedCoins) {
      console.log(selectedCoins, "selectedCoins");
      saveSelectedCoinsToDatabase(userID, selectedCoins);
      console.log("cash saved to db");
    }
  }, [userID, selectedCoins]);

  //save changes in cash to database
  useEffect(() => {
    if (userID && userCash) {
      console.log(userCash, "userCash");
      saveCashToDatabase(userID, userCash);
      console.log("cash saved to db");
    }
  }, [userID, userCash]);
};
