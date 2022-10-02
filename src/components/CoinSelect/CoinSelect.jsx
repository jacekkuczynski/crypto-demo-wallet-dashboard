import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";

export const CoinSelect = ({ coinData }) => {
  const [selectedCoins, setSelectedCoins] = useState(null);

  const handleChange = (newValue) => {
    setSelectedCoins(
      newValue.map((el) => {
        return el.value;
      })
    );
  };

  const handleSubmit = () => {
    console.log("submited");
    console.log(selectedCoins);
  };
  const options = coinData?.map((coin) => {
    return {
      value: coin.id,
      label: (
        <div className="flex w-full items-center gap-4 ">
          <img src={coin.image} alt={`${coin.id} logo`} className="w-6 h-6 " />
          {coin.name}
        </div>
      ),
    };
  });
  return (
    <div>
      <CreatableSelect
        isMulti
        isClearable
        onChange={handleChange}
        options={options}
      />
      <button
        onClick={handleSubmit}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Submit
      </button>
    </div>
  );
};
