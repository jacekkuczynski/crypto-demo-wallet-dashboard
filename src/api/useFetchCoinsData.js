import { useEffect, useState } from "react";

import axios from "axios";
import { coinsIDs } from "./coinsIDs";

export const useFetchCoinsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const coinsIDsParams = coinsIDs.join(",");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinsIDsParams}`
      )
      .then((response) => {
        setData(
          response.data.map((el) => {
            return {
              id: el.id,
              symbol: el.symbol,
              name: el.name,
              price: el.current_price,
              logo: el.image,
            };
          })
        );
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
};
