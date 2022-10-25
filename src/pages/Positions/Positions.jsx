import { PageTransitionAnim } from "../../components/PageTransitionAnim/PageTransitionAnim";
import { PositionsList } from "../../components/PositionsList/PositionsList";

export const Positions = ({ coinData }) => {
  return (
    <PageTransitionAnim>
      <PositionsList coinData={coinData} />
    </PageTransitionAnim>
  );
};
