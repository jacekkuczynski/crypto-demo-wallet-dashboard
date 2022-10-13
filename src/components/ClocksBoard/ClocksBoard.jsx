import { SingleClock } from "./SingleClock";
import { useGetTimes } from "./useGetTimes";

export const ClocksBoard = () => {
  const times = useGetTimes();

  return (
    <div className="grid grid-cols-2 gap-16 lg:grid-cols-4 ">
      <div className="text-center">
        <p className="p-1">Local Time</p>
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
