import { PageTransitionAnim } from "../../components/PageTransitionAnim/PageTransitionAnim";
import { PositionsGrid } from "../../components/PositionsGrid/PositionsGrid";
import { PositionsList } from "../../components/PositionsList/PositionsList";

export const Positions = ({ coinData }) => {
  return (
    <PageTransitionAnim>
      <PositionsGrid coinData={coinData} />
      {/* <PositionsList coinData={coinData} /> */}
    </PageTransitionAnim>
  );
};
