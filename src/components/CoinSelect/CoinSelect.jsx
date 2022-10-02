import React from "react";
import Select from "react-select";

export const CoinSelect = ({ coinData }) => {
  const options = coinData?.map((coin) => {
    return {
      value: coin.id,
      label: (
        <div className="flex w-full items-center gap-4 ">
          <img src={coin.image} alt={`${coin.id} logo`} className="w-6 h-6 " />
          {coin.name}
        </div>
      ),
    };
  });
  return (
    <div>
      <Select isMulti name="coins" options={options} />
    </div>
  );
};
