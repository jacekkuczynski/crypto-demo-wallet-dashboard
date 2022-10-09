import React from "react";
import { BuyForm } from "../../components/BuyForm/BuyForm";

export const Buy = ({ coinData }) => {
  return (
    <div className="">
      <BuyForm coinData={coinData} />
    </div>
  );
};
