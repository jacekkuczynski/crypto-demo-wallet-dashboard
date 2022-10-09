import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { computeTransValue } from "../../helpers/helpers";

export const BuyForm = ({ coinData }) => {
  const [rangeValue, setRangeValue] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState("");
  const [cost, setCost] = useState(0);
  const [amount, setAmount] = useState(0);
  const cash = useSelector((state) => state.cash.value);
  const selectOptions = useSelector((state) => state.selectedCoins.value);
  const selectedCoinPrice = coinData?.find((coin) => {
    return coin.id === selectedCoin;
  })?.price;

  const handleSubmit = (event) => {
    event.preventDefault();
    const selected = event.currentTarget.selected.value;

    console.log(selected);
  };

  //cost of transaction
  useEffect(() => {
    if (cash && coinData && selectedCoin) {
      setCost((rangeValue * cash) / 100);
    }
  }, [cash, coinData, selectedCoin, selectedCoinPrice, rangeValue]);

  useEffect(() => {
    if (cost && selectedCoinPrice) {
      setAmount(cost / selectedCoinPrice);
    }
  }, [cost, selectedCoinPrice]);

  console.count("render");

  return (
    <div className="text-2xl font-bold flex flex-col gap-4 divide-y-8">
      <div>
        Select any of your coins from the watchlist to open a transaction:
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 py-4">
        <select
          id="selected"
          onChange={(e) => {
            setSelectedCoin(e.target.value);
          }}
        >
          <option></option>
          {selectOptions?.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <label htmlFor="range">Select Percent of you cash</label>
        {selectedCoin?.length < 1 ? (
          <input type="range" disabled></input>
        ) : (
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            id="range"
            value={rangeValue}
            onChange={(e) => {
              e.preventDefault();
              setRangeValue(e.target.value);
            }}
          ></input>
        )}

        <label htmlFor="coinAmount">percentage of account</label>
        <input
          onChange={(e) => {
            e.preventDefault();
            setRangeValue(e.target.value);
          }}
          value={rangeValue}
          type="number"
          id="coinAmount"
          min="0"
          max="100"
          step="1"
        ></input>
        <label htmlFor="cost" type="number" value={cost}>
          Cost:
        </label>
        <input type="number" id="cost" value={cost} readOnly></input>

        <label htmlFor="amount" type="number" value={cost}>
          Amount:
        </label>
        <input type="number" id="amount" value={amount}></input>

        <button
          type="submit"
          id="buy"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Buy
        </button>
        <button
          type="submit"
          id="sell"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Sell
        </button>
      </form>
    </div>
  );
};
