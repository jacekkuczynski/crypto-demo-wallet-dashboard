export const capitalizeFirstLetter = (string) => {
  return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
};

export const getCityTime = (times, city) => {
  return times.find((el) => {
    return el.city === city;
  }).time;
};
