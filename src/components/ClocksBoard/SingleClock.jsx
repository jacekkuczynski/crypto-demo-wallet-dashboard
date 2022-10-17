import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

export const SingleClock = ({ initialVal, cityName }) => {
  const [value, setValue] = useState(new Date(initialVal));

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date(value.getTime() + 1000)),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, [value]);

  return (
    <div className="flex flex-col justify-center items-center">
      {cityName ? <p className="text-center p-1">{cityName}</p> : null}

      <Clock size={100} value={value} />
    </div>
  );
};
