import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../../helpers/helpers";
export const PositionsList = () => {
  const [positionsData, setpositionsData] = useState(null);
  const positions = useSelector((state) => state.positions.value);

  useEffect(() => {
    if (positions) setpositionsData(positions);
  }, [positions]);

  return (
    <div className="overflow-x-scroll">
      <table className="min-w-full text-center table-auto">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Side</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Cost</th>
            <th>Date</th>
          </tr>
        </thead>
        {/* if index % one color : second color */}
        {positionsData?.map((position, i) => {
          return (
            <tbody key={i}>
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
              <td>~{position.amount.toFixed(2)}</td>
              <td>{position.cost}</td>
              <td>{position.date.slice(4, -12)}</td>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
