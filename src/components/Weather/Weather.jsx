import { useFetchWeatherData } from "../../api/useFetchWeatherData";
import { useEffect } from "react";

export const Weather = () => {
  const { data: weatherData } = useFetchWeatherData();

  if (weatherData) {
    return (
      <div className="w-1/2  p-5 shadow-md border bg-sky-50">
        <div className="text-2xl font-bold text-neutral-700 py-2">
          Perfect weather for investments!
        </div>
        <div className="">
          <p>{weatherData.temp}°C</p>
          <p>{weatherData.weather}</p>
          <p>{weatherData.description}</p>
          <div className="shadow-sm w-fit m-2 bg-white">
            <img
              src={weatherData.image}
              alt={weatherData.weather + " image"}
            ></img>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="">Allow geolocation to enable weather component</div>
    );
  }
};
