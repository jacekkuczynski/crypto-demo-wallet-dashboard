import React from "react";
import { BuyForm } from "../../components/BuyForm/BuyForm";

export const Buy = ({ coinData }) => {
  return (
    <div>
      <BuyForm coinData={coinData} />
    </div>
  );
};
