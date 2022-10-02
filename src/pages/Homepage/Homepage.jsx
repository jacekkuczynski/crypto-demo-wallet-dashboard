import React from "react";
import { CoinSelect } from "../../components/CoinSelect/CoinSelect";

export const Homepage = ({ coinData }) => {
  return (
    <div>
      Homepage
      <CoinSelect coinData={coinData} />
    </div>
  );
};
