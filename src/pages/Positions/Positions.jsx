import { PositionsList } from "../../components/PositionsList/PositionsList";

export const Positions = ({ coinData }) => {
  return (
    <div>
      <PositionsList coinData={coinData} />
    </div>
  );
};
