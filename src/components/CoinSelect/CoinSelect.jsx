import React, { useState, useRef } from "react";
import CreatableSelect from "react-select/creatable";
import { useDispatch } from "react-redux";
import { addSelectedCoins } from "../../features/selectedCoins/selectedCoinsSlice";
import { useCoinSelectOptions } from "./useCoinSelectOptions";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export const CoinSelect = ({ coinData }) => {
  const [selectedCoins, setSelectedCoins] = useState(null);
  const ref = useRef();
  const dispatch = useDispatch();
  const coinSelectOptions = useCoinSelectOptions(coinData);

  const handleChange = (newValue) => {
    setSelectedCoins(
      newValue.map((el) => {
        return el.value;
      })
    );
  };

  const handleSubmit = () => {
    dispatch(addSelectedCoins(selectedCoins));
    ref.current.clearValue();
    toast.success(`${selectedCoins.join(", ")} added to watchlist!`, {
      duration: 4000,
    });
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="flex flex-col justify-around border drop-shadow-md p-5 w-full h-40 bg-neutral-50">
        <CreatableSelect
          ref={ref}
          isMulti
          isClearable
          onChange={handleChange}
          options={coinSelectOptions}
        />
        <button
          onClick={handleSubmit}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Submit
        </button>
      </div>
    </>
  );
};
