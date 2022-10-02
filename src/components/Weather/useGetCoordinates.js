import { useEffect, useState } from "react";

export const useGetCoordinates = () => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (window) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setCoordinates({ latitude: latitude, longitude: longitude });
      });
    }
  }, []);

  return { coordinates };
};
