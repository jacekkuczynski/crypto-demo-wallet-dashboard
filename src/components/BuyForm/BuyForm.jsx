import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SELECT_OPTIONS } from "./SELECT_OPTIONS";
import { RANGE_PERCENT_INPUT } from "./RANGE_PERCENT_INPUT";
import { CASH_PERCENT_INPUT } from "./CASH_PERCENT_INPUT";
import { COST_INPUT } from "./COST_INPUT";
import { AMOUNT_INPUT } from "./AMOUNT_INPUT";
import { SUBMIT_BUTTONS } from "./SUBMIT_BUTTONS";
import { computeCoinAmount, computeTransCost } from "../../helpers/helpers";
import { setLastTransaction } from "../../features/lastTransaction/lastTransactionSlice";
import { getCurrentDate } from "../../helpers/helpers";

export const BuyForm = ({ coinData }) => {
  const [selectedCoin, setSelectedCoin] = useState("");
  const [rangeValue, setRangeValue] = useState(0);
  const [cost, setCost] = useState(0);
  const [amount, setAmount] = useState(0);
  const [side, setSide] = useState("");
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.value);
  const selectedCoinPrice = coinData?.find((coin) => {
    return coin.id === selectedCoin;
  })?.price;
  const initialValue = 0;

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

  const handleSelectChange = (selectVal) => {
    setSelectedCoin(selectVal);
  };

  const handleRangeChange = (rangeVal) => {
    setRangeValue(rangeVal);
  };

  const handleSide = (side) => {
    setSide(side);
  };

  return (
    <div className="text-2xl font-bold flex flex-col gap-4 divide-y-8">
      {cash === 0 ? (
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
            <SELECT_OPTIONS onChange={handleSelectChange} />
            <RANGE_PERCENT_INPUT
              rangeValue={rangeValue}
              selectedCoin={selectedCoin}
              onChange={handleRangeChange}
            />
            <CASH_PERCENT_INPUT rangeValue={rangeValue} />
            <COST_INPUT cost={cost} />
            <AMOUNT_INPUT amount={amount} />
            <SUBMIT_BUTTONS onClick={handleSide} />
          </form>
        </>
      )}
    </div>
  );
};
