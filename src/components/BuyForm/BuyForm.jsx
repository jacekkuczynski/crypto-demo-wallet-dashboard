import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { computeCoinAmount, computeTransCost } from "../../helpers/helpers";
import { setLastTransaction } from "../../features/lastTransaction/lastTransactionSlice";
import { getCurrentDate } from "../../helpers/helpers";

export const BuyForm = ({ coinData }) => {
  const [selectedCoin, setSelectedCoin] = useState("");
  const [rangeValue, setRangeValue] = useState(0);
  const [cost, setCost] = useState(0);
  const [amount, setAmount] = useState(0);
  const [side, setSide] = useState("");
  const selectOptions = useSelector((state) => state.selectedCoins.value);
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.value);

  const selectedCoinPrice = coinData?.find((coin) => {
    return coin.id === selectedCoin;
  })?.price;

  // //cost of transaction
  useEffect(() => {
    if (cash && coinData && selectedCoin) {
      const transactionCost = computeTransCost(rangeValue, cash);
      setCost(transactionCost);
    }
  }, [cash, coinData, selectedCoin, selectedCoinPrice, rangeValue]);

  //coins amount
  useEffect(() => {
    if (cost && selectedCoinPrice) {
      const coinsAmount = computeCoinAmount(cost, selectedCoinPrice);
      setAmount(coinsAmount);
    }
  }, [cost, selectedCoinPrice]);

  //initial instead of 0

  const handleSubmit = (event) => {
    const initialValue = 0;
    event.preventDefault();
    const transactionData = {
      id: selectedCoin,
      side: side,
      price: selectedCoinPrice,
      amount: amount,
      cost: cost,
      date: getCurrentDate(),
    };
    if (rangeValue > initialValue) {
      dispatch(setLastTransaction(transactionData));
      setRangeValue(initialValue);
      setCost(initialValue);
      setAmount(initialValue);
      setSide("");
    }
  };

  return (
    <div className="text-2xl font-bold flex flex-col gap-4 divide-y-8">
      {cash <= 0 ? (
        <div>
          sorry, no money, can't open new positions, close some positions to get
          some cash, or wait
        </div>
      ) : (
        <>
          <div>
            Select any of your coins from the watchlist to open a transaction:
          </div>
          <form onSubmit={handleSubmit} className={`flex flex-col gap-2 py-4`}>
            {/* select options input */}
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
            {/* range input */}
            <label htmlFor="range">Select Percent of you cash</label>
            <input
              className={selectedCoin?.length < 1 ? "block" : "hidden"}
              readOnly
              defaultValue="0"
              type="range"
              disabled
            ></input>
            <input
              className={selectedCoin?.length < 1 ? "hidden" : "block"}
              type="range"
              min="0"
              max="100"
              step="1"
              id="range"
              value={rangeValue}
              onChange={(e) => {
                setRangeValue(e.target.value);
              }}
            ></input>
            {/* percantage of account */}
            <label htmlFor="coinAmount">percentage of account</label>
            <input
              readOnly
              value={rangeValue}
              type="number"
              id="coinAmount"
              min="0"
              max="100"
              step="1"
            ></input>
            {/* transaction cost */}
            <label htmlFor="cost" type="number" value={cost}>
              Cost:
            </label>
            <input readOnly type="number" id="cost" value={cost}></input>
            {/* coins amount */}
            <label htmlFor="amount" type="number">
              Amount:
            </label>
            <input readOnly type="number" id="amount" value={amount}></input>
            {/* submit buttons */}
            <button
              onClick={() => {
                setSide("buy");
              }}
              type="submit"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Buy
            </button>
            <button
              onClick={() => {
                setSide("sell");
              }}
              type="submit"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Sell
            </button>
          </form>
        </>
      )}
    </div>
  );
};
