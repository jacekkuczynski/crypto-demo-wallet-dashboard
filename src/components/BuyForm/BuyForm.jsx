import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SELECT_OPTIONS } from "./SELECT_OPTIONS";
import { handleSelectChange, handleSubmit } from "./buyFormHandlers";
import { RANGE_PERCENT_INPUT } from "./RANGE_PERCENT_INPUT";
import { CASH_PERCENT_INPUT } from "./CASH_PERCENT_INPUT";
import { COST_INPUT } from "./COST_INPUT";
import { AMOUNT_INPUT } from "./AMOUNT_INPUT";
import { SUBMIT_BUTTONS } from "./SUBMIT_BUTTONS";

export const BuyForm = ({ coinData }) => {
  const [selectedCoin, setSelectedCoin] = useState("");
  const [rangeValue, setRangeValue] = useState(0);
  const [cost, setCost] = useState(0);
  const [amount, setAmount] = useState(0);
  const cash = useSelector((state) => state.cash.value);
  const selectedCoinPrice = coinData?.find((coin) => {
    return coin.id === selectedCoin;
  })?.price;

  // //cost of transaction
  useEffect(() => {
    if (cash && coinData && selectedCoin) {
      setCost((rangeValue * cash) / 100);
    }
  }, [cash, coinData, selectedCoin, selectedCoinPrice, rangeValue]);

  //coins amount
  useEffect(() => {
    if (cost && selectedCoinPrice) {
      setAmount(cost / selectedCoinPrice);
    }
  }, [cost, selectedCoinPrice]);

  const handleSelectChange = (selectVal) => {
    setSelectedCoin(selectVal);
  };

  const handleRangeChange = (rangeVal) => {
    setRangeValue(rangeVal);
  };

  return (
    <div className="text-2xl font-bold flex flex-col gap-4 divide-y-8">
      <div>
        Select any of your coins from the watchlist to open a transaction:
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 py-4">
        <SELECT_OPTIONS onChange={handleSelectChange} />
        <RANGE_PERCENT_INPUT
          rangeValue={rangeValue}
          selectedCoin={selectedCoin}
          onChange={handleRangeChange}
        />
        <CASH_PERCENT_INPUT rangeValue={rangeValue} />
        <COST_INPUT cost={cost} />
        <AMOUNT_INPUT amount={amount} />
        <SUBMIT_BUTTONS />
      </form>
    </div>
  );
};
