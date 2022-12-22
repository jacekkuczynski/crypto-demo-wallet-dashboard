import { useEffect, useState } from 'react';

export const useGetCoordinates = () => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (window) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        setCoordinates({ latitude, longitude });
      });
    }
  }, []);

  return { coordinates };
};
