import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchCoinsData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=%20market_cap_desc&per_page=100";

  useEffect(() => {
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
              high: el.high_24h,
              low: el.low_24h,
              priceChange: el.price_change_percentage_24h,
              ath: el.ath,
              athDate: el.ath_date,
            };
          })
        );
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return { data, error };
};
