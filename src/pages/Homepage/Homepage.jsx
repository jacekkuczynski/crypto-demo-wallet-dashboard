import React from "react";
import { CoinSelect } from "../../components/CoinSelect/CoinSelect";
import { SelectedCoins } from "../../components/SelectedCoins/SelectedCoins";

export const Homepage = ({ coinData }) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <CoinSelect coinData={coinData} />
      <SelectedCoins coinData={coinData} />
    </div>
  );
};
