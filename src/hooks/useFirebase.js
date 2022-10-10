//  This hook checks if it's any data assigned to the user
//  in the firebase database, when it's true it sets
//  it to the current app state.
//  Also, hook subscribes to any crucial state changes and saves
//  them to the firebase database.

// 1. set selected coins database
// 2. set positions database
// 3. set history database
// 4. set selected coins database

import { useSelector } from "react-redux";
import { useEffect } from "react";

export const useFirebase = () => {
  const selectedCoins = useSelector((state) => state.selectedCoins.value);
  const userID = useSelector((state) => state.user.value?.id);
  const userCash = useSelector((state) => state.cash.value);

  useEffect(() => {
    console.log(selectedCoins);
  }, [selectedCoins]);
};
