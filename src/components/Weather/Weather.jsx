import { useFetchWeatherData } from "../../api/useFetchWeatherData";

export const Weather = () => {
  const { data: weatherData } = useFetchWeatherData();

  if (weatherData) {
    return (
      <div className="flex flex-col w-fit max-w-sm px-12 gap-1 items-center justify-around p-5 shadow-md bg-sky-50">
        <div className="font-semibold text-2xl text-neutral-800">
          <p>{weatherData.temp}°C</p>
        </div>
        <p>{weatherData.weather}</p>
        <div className="shadow-lg w-fit p-1 bg-white rounded-full">
          <img
            className="drop-shadow-lg"
            src={weatherData.image}
            alt={weatherData.weather + " image"}
          ></img>
        </div>
        <p>{weatherData.description}</p>
      </div>
    );
  } else {
    return (
      <div className="">Allow geolocation to enable weather component</div>
    );
  }
};
