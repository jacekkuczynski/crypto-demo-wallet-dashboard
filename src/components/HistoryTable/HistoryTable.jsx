import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../helpers/helpers";

export const HistoryTable = () => {
  const history = useSelector((state) => state.history.value);

  return (
    <div className="overflow-scroll-auto">
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
        {history?.map((position, i) => {
          return (
            <tbody key={i}>
              <tr className={`${i % 2 === 0 ? "bg-neutral-100" : ""}`}>
                <td className="capitalize">{position.id}</td>
                {position.side === "buy" ? (
                  <td className="text-green-800 font-bold py-2 bg-pink">
                    {position.side.toUpperCase()}
                  </td>
                ) : (
                  <td className="text-red-800 font-bold py-2">
                    {position.side.toUpperCase()}
                  </td>
                )}
                <td className="py-2">{position.price}</td>
                <td className="py-2">~{position.amount.toFixed(2)}</td>
                <td className="py-2">~${position.cost.toFixed(2)}</td>
                <td className="py-2">{position.date.slice(4, -12)}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
