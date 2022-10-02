import { useFetchWeatherData } from "../../api/useFetchWeatherData";
import { useEffect } from "react";

export const Weather = () => {
  const { data: weatherData } = useFetchWeatherData();

  useEffect(() => {
    if (weatherData) {
      console.log(weatherData);
    }
  }, [weatherData]);
  if (weatherData) {
    return (
      <div className="w-full  p-5 shadow-md border bg-sky-50">
        <div className="text-2xl font-bold text-neutral-700">
          Perfect weather for investments!
        </div>
        <div className="">
          <p>{weatherData.temp}°C</p>
          <p>{weatherData.weather}</p>
          <p>{weatherData.description}</p>
          <img
            src={weatherData.image}
            alt={weatherData.weather + " image"}
          ></img>
        </div>
      </div>
    );
  } else {
    return <div className="hidden"></div>;
  }
};
