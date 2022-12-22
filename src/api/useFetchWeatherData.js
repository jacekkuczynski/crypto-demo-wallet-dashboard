/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCoordinates } from '../components/Weather/useGetCoordinates';
import { setModal } from '../features/errorModal/errorModalSlice';

export const useFetchWeatherData = () => {
  const [data, setData] = useState(null);
  const { coordinates } = useGetCoordinates();
  const dispatch = useDispatch();

  const latitude = coordinates?.latitude;
  const longitude = coordinates?.longitude;
  const apiKey = 'f0663bce71b86d5c2d154f0d593b47e8';
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
          if (err.response || err.request) {
            dispatch(setModal(true));
          }
        });
    }
  }, [url, coordinates]);

  return { data };
};
