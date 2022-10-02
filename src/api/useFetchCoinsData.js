import { useEffect, useState } from "react";

import axios from "axios";

export const useFetchCoinsData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //fetch 100 coins sorted by market cap descending
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=%20market_cap_desc&per_page=100";

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(
          response.data.map((el) => {
            return {
              id: el.id,
              symbol: el.symbol,
              name: el.name,
              price: el.current_price,
              image: el.image,
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
