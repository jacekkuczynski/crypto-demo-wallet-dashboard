export const capitalizeFirstLetter = (string) => {
  if (typeof string === 'string') {
    return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
  }
};

export const getCityTime = (times, city) =>
  times.find((el) => el.city === city).time;

export const computeCoinAmount = (transactionCost, coinPrice) =>
  transactionCost / coinPrice;

export const computeTransCost = (percentOfAccount, cash) =>
  (percentOfAccount * cash) / 100;

export const getCurrentDate = () => new Date().toUTCString();
