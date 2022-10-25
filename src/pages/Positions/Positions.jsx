import { PageTransitionAnim } from "../../components/PageTransitionAnim/PageTransitionAnim";
import { PositionsGrid } from "../../components/PositionsGrid/PositionsGrid";

export const Positions = ({ coinData }) => {
  return (
    <PageTransitionAnim>
      <PositionsGrid coinData={coinData} />
    </PageTransitionAnim>
  );
};
