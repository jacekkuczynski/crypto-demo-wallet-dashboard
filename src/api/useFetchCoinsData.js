/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setModal } from "../features/errorModal/errorModalSlice";

export const useFetchCoinsData = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=%20market_cap_desc&per_page=100";

  const refetchTime = 3 * 60 * 1000;

  const fetcher = () => {
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
        console.log(data[0]);
      })
      .catch((err) => {
        if (err.response || err.request) {
          dispatch(setModal(true));
        }
      });
  };

  useEffect(() => {
    fetcher();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetcher();
    }, refetchTime);
    return () => clearInterval(interval);
  }, [data]);

  return { data };
};
