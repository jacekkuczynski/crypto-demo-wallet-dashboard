/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ref, set } from 'firebase/database';
import { db } from '../firebase/initialize';

export const useSubscribeToStateAndSaveToDatabase = (userID) => {
  const isDbChecked = useSelector((state) => state.isDbChecked.value);
  const cashStore = useSelector((state) => state.cash.value);
  const selectedCoinsStore = useSelector((state) => state.selectedCoins.value);
  const positionsStore = useSelector((state) => state.positions.value);
  const historyStore = useSelector((state) => state.history.value);

  const saveToDatabase = (data, path) => {
    set(ref(db, `users/${userID}${path}`), {
      value: data,
    });
  };

  useEffect(() => {
    const cashInitialValue = 10000;
    if (isDbChecked === true && userID) {
      if (cashStore !== cashInitialValue) saveToDatabase(cashStore, '/cash/');
    }
  }, [userID, isDbChecked, cashStore]);

  useEffect(() => {
    if (isDbChecked === true && userID) {
      if (selectedCoinsStore.length > 0)
        saveToDatabase(selectedCoinsStore, '/selectedCoins/');
    }
  }, [userID, isDbChecked, selectedCoinsStore]);

  useEffect(() => {
    if (isDbChecked === true && userID) {
      if (positionsStore.length > 0)
        saveToDatabase(positionsStore, '/positions/');
    }
  }, [userID, isDbChecked, positionsStore]);

  useEffect(() => {
    if (isDbChecked === true && userID) {
      if (historyStore.length > 0) saveToDatabase(historyStore, '/history/');
    }
  }, [userID, historyStore, isDbChecked]);
};
