import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setIsDbChecked } from '../features/isDbChecked/isDbChecked';
import { useReadFromDatabase } from './useReadFromDatabase';
import { setCash } from '../features/cash/cashSlice';
import { loadSelectedCoins } from '../features/selectedCoins/selectedCoinsSlice';
import { loadPositions } from '../features/positions/positionsSlice';
import { loadHistory } from '../features/history/historySlice';

export const useLoadFromDatabase = (userID) => {
  const [snapshot, setSnapshot] = useState(null);
  const isDbChecked = useSelector((state) => state.isDbChecked.value);
  const { data: userSnapshot } = useReadFromDatabase(userID);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userSnapshot) setSnapshot(userSnapshot);
  }, [userSnapshot, userID]);

  useEffect(() => {
    if (userID && userSnapshot === null && isDbChecked === false) {
      dispatch(setIsDbChecked(true));
    }
  }, [userID, userSnapshot, dispatch, isDbChecked]);

  useEffect(() => {
    if (snapshot && userID) {
      let userSnapshotCash = snapshot.cash?.value;
      let userSnapshotSelectedCoin = snapshot.selectedCoins?.value;
      let userSnapshotPositions = snapshot.positions?.value;
      let userSnapshotHistory = snapshot.history?.value;

      if (userSnapshotCash) dispatch(setCash(userSnapshotCash));
      if (userSnapshotSelectedCoin)
        dispatch(loadSelectedCoins(userSnapshotSelectedCoin));
      if (userSnapshotPositions) dispatch(loadPositions(userSnapshotPositions));
      if (userSnapshotHistory) dispatch(loadHistory(userSnapshotHistory));
      dispatch(setIsDbChecked(true));
      setSnapshot(null);
      userSnapshotCash = null;
      userSnapshotSelectedCoin = null;
      userSnapshotPositions = null;
      userSnapshotHistory = null;
      dispatch(setIsDbChecked(true));
    }
  }, [isDbChecked, userID, snapshot, dispatch]);
};
