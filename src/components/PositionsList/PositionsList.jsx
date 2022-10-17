import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../../helpers/helpers";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { setLastTransaction } from "../../features/lastTransaction/lastTransactionSlice";
import { current } from "@reduxjs/toolkit";

export const PositionsList = ({ coinData }) => {
  const [positionsData, setpositionsData] = useState(null);
  const positions = useSelector((state) => state.positions.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (positions) setpositionsData(positions);
  }, [positions]);

  const currentPrice = (coinId) => {
    return coinData?.find((el) => {
      return el.id === coinId;
    }).price;
  };

  const handleClosePos = (position) => {
    const pos = { ...position };
    const currentCost = currentPrice(pos.id) * pos.amount;
    // console.log(currentPrice(pos.id));
    pos.isClosing = true;
    pos.cost = currentCost;
    //
    dispatch(setLastTransaction(pos));
    console.log(pos);
  };

  return (
    <div className="overflow-x-scroll">
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Side</th>
            <th>Price</th>
            <th>Current Price</th>
            <th>Cost</th>
            <th className="text-center">Close Position</th>
          </tr>
        </thead>
        {/* if index % one color : second color */}
        {positionsData?.map((position, i) => {
          return (
            <tbody key={i}>
              <tr>
                <td>{capitalizeFirstLetter(position.id)}</td>
                {position.side === "buy" ? (
                  <td className="text-green-800 font-bold">
                    {position.side.toUpperCase()}
                  </td>
                ) : (
                  <td className="text-red-800 font-bold">
                    {position.side.toUpperCase()}
                  </td>
                )}
                <td>{position.price}</td>
                <td>{currentPrice(position.id)}</td>
                <td>{position.cost}</td>
                <td
                  onClick={() => {
                    handleClosePos(position);
                  }}
                >
                  <XMarkIcon
                    className="block m-auto text-center text-neutral-800 hover:text-red-600 transition ease-in-out duration-200 "
                    width="42px"
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
