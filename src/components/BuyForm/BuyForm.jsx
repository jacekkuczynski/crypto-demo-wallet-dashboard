import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";

export const BuyForm = () => {
  const selectOptions = useSelector((state) => state.selectedCoins.value);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  if (ref.current?.value !== undefined) {
    console.log(ref.current.value);
  }

  return (
    <div className="text-2xl font-bold flex flex-col gap-4 divide-y-8">
      <div>
        Select any of your coins from the watchlist to open a transaction:
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 py-4">
        <select ref={ref}>
          {selectOptions?.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <input type="range"></input>
        <input valueAsNumber="100" type="number" id="coinAmount"></input>
        <input type="number" id="usdAmount"></input>
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
