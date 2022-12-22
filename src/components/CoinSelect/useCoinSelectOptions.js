import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useCoinSelectOptions = (coinData) => {
  const [coinSelectOptions, setCoinSelectOptions] = useState();
  const selectedCoinsRedux = useSelector((state) => state.selectedCoins.value);

  useEffect(() => {
    const options = coinData
      ?.filter((el) => !selectedCoinsRedux.includes(el.id))
      ?.map((coin) => ({
        value: coin.id,
        label: (
          <div className="flex w-full items-center gap-4 ">
            <img
              src={coin.image}
              alt={`${coin.id} logo`}
              className="w-6 h-6 "
            />
            {coin.name}
          </div>
        ),
      }));
    setCoinSelectOptions(options);
  }, [coinData, selectedCoinsRedux]);
  return coinSelectOptions;
};
