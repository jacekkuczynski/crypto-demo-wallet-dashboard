import React from "react";
import { ClocksBoard } from "../../components/ClocksBoard/ClocksBoard";
import { CoinSelect } from "../../components/CoinSelect/CoinSelect";
import { Greetings } from "../../components/Greetings/Greetings";
import { SelectedCoins } from "../../components/SelectedCoins/SelectedCoins";
import { Weather } from "../../components/Weather/Weather";

export const Homepage = ({ coinData }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Greetings />
        <Weather />
        <ClocksBoard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CoinSelect coinData={coinData} />
        <SelectedCoins coinData={coinData} />
      </div>
    </div>
  );
};
