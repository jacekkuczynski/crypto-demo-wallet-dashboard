import { clocksData } from './clocksData';

export const useGetTimes = () => {
  const adjustForTimezone = (offset) => {
    const currentOffset = new Date().getTimezoneOffset() / 60;
    const timeInMs = new Date().getTime();
    const offsetInMs = (offset + currentOffset) * 3600000;
    const timeWithOffsetInMs = timeInMs + offsetInMs;
    const dateWithOffset = new Date(timeWithOffsetInMs);

    return dateWithOffset;
  };
  const times = clocksData.map((city) => ({
    city: city.name,
    time: adjustForTimezone(city.offset),
  }));
  return times;
};
