import axios from "axios";
import { useState, useEffect } from "react";
import { useGetCoordinates } from "../components/Weather/useGetCoordinates";

export const useFetchWeatherData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { coordinates } = useGetCoordinates();

  const latitude = coordinates?.latitude;
  const longitude = coordinates?.longitude;
  // const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiKey = "f0663bce71b86d5c2d154f0d593b47e8";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    if (coordinates) {
      axios
        .get(url)
        .then((response) => {
          setData({
            weather: response.data.weather[0].main,
            description: response.data.weather[0].description,
            temp: response.data.main.temp,
            image: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          });
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [url, coordinates]);

  return { data, isLoading, error };
};
