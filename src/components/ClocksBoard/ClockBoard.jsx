import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

export const ClocksBoard = () => {
  const [value, setValue] = useState(new Date());
  const [worldsTimesState, setWorldsTimesState] = useState();

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Clock size={100} value={value} />
    </div>
  );
};
