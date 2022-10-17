export const getDbTransactionPath = (userID) => {
  const path = `/users/${userID}/transactions/`;
  return path;
};

export const getDbHistoryPath = (userID) => {
  const path = `/users/${userID}/history/`;
  return path;
};

export const getDbCashPath = (userID) => {
  const path = `/users/${userID}/cash/`;
  return path;
};

export const getDbSelectedCoinsPath = (userID) => {
  const path = `/users/${userID}/selectedCoins/`;
  return path;
};
