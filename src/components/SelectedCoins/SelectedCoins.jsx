import React from "react";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../helpers/helpers";

export const SelectedCoins = ({ coinData }) => {
  const selectedCoins = useSelector((state) => state.selectedCoins.value);

  return (
    <div className=" overflow-auto h-36">
      <ul className="flex flex-col gap-4">
        {selectedCoins?.map((coin) => {
          return (
            <div key={coin} className="flex w-full items-center gap-4  ">
              <img
                src={coinData?.find((el) => el.id === coin)?.image}
                alt={`${coin.id} logo`}
                className="w-6 h-6 "
              />
              {capitalizeFirstLetter(coin)}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
