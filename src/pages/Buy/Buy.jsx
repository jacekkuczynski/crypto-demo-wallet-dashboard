import React from "react";
import { BuyForm } from "../../components/BuyForm/BuyForm";
import { PageTransitionAnim } from "../../components/PageTransitionAnim/PageTransitionAnim";

export const Buy = ({ coinData }) => {
  return (
    <PageTransitionAnim>
      <BuyForm coinData={coinData} />
    </PageTransitionAnim>
  );
};
