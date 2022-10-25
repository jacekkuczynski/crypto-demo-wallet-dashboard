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
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5   gap-4">
      {positions.map((position, index) => {
        return (
          <PositionCard
            key={index}
            position={position}
            handleClosePos={handleClosePos}
            currentPrice={currentPrice}
          />
        );
      })}
    </div>
  );
};
