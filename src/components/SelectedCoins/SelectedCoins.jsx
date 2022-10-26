import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { capitalizeFirstLetter } from "../../helpers/helpers";
import { useDispatch } from "react-redux";
import { removeSelectedCoins } from "../../features/selectedCoins/selectedCoinsSlice";

export const SelectedCoins = ({ coinData }) => {
  const selectedCoins = useSelector((state) => state.selectedCoins.value);
  const dispatch = useDispatch();

  return (
    <div className="my-2 overflow-auto w-11/12 h-96 drop-shadow-lg p-5 bg-neutral-50">
      {selectedCoins.length > 0 ? (
        <h2 className="text-2xl text-center mb-2 font-bold text-neutral-700">
          Coin Watchlist
        </h2>
      ) : (
        <h2 className="text-lg text-center font-light	text-neutral-700">
          Your watchlist is empty... Please choose some coins from select coins
          menu
        </h2>
      )}
      <ol>
        {selectedCoins?.map((coin) => {
          return (
            <div
              key={coin}
              className="flex w-full items-center justify-between gap-4 hover:bg-neutral-100 hover:rounded-lg transition ease-in-out delay-80 px-2 py-2"
            >
              <img
                src={coinData?.find((el) => el.id === coin)?.image}
                alt={`${coin.id} logo`}
                className="w-6 h-6 "
              ></img>
              {capitalizeFirstLetter(coin)}
              <button
                className="flex items-center justify-center px-4 pt-4 pb-5 border hover:bg-neutral-200 rounded-full w-4 h-4"
                onClick={() => {
                  toast.success(`${coin} removed from watchlist`, {
                    duration: 4000,
                  });
                  dispatch(removeSelectedCoins(coin));
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </ol>
    </div>
  );
};
