import { SingleClock } from "./SingleClock";
import { useGetTimes } from "./useGetTimes";

export const ClocksBoard = () => {
  const times = useGetTimes();

  return (
    <div className="flex flex-col w-1/2">
      <div className="flex flex-col items-center justify-center">
        <p>Local Time:</p>
        <SingleClock initialVal={new Date()} />
      </div>
      {times.map((city) => {
        return (
          <SingleClock
            key={city.city}
            initialVal={city.time}
            cityName={city.city}
          />
        );
      })}
    </div>
  );
};
