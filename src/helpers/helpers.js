export const capitalizeFirstLetter = (string) => {
  if (typeof string === "string") {
    return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
  }
};

export const getCityTime = (times, city) => {
  return times.find((el) => {
    return el.city === city;
  }).time;
};

export const computeCoinAmount = (transactionCost, coinPrice) => {
  return transactionCost / coinPrice;
};

export const computeTransCost = (percentOfAccount, cash) => {
  return (percentOfAccount * cash) / 100;
};

export const getCurrentDate = () => {
  return new Date().toUTCString();
};
