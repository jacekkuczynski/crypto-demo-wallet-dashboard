import { useDispatch, useSelector } from "react-redux";
import { setLastTransaction } from "../../features/lastTransaction/lastTransactionSlice";
import { PositionCard } from "../PositionCard/PositionCard";

export const PositionsGrid = ({ coinData }) => {
  const positions = useSelector((state) => state.positions.value);
  const dispatch = useDispatch();

  const currentPrice = (coinId) => {
    return coinData?.find((el) => {
      return el.id === coinId;
    }).price;
  };

  const handleClosePos = (position) => {
    const pos = { ...position };
    const currentCost = currentPrice(pos.id) * pos.amount;
    pos.isClosing = true;
    pos.cost = currentCost;
    dispatch(setLastTransaction(pos));
  };

  return (
    <div className="h-full w-full grid grid-cols-4">
      {positions.map((position) => {
        return (
          <PositionCard position={position} handleClosePos={handleClosePos} />
        );
      })}
    </div>
  );
};

// amount: 2.330227897242336;
// cost: 47291.9751745332;
// date: "Tue, 25 Oct 2022 19:20:23 GMT";
// id: "bitcoin";
// price: 20295;
// side: "sell";
