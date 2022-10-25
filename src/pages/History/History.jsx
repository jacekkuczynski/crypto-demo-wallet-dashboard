import { HistoryTable } from "../../components/HistoryTable/HistoryTable";
import { PageTransitionAnim } from "../../components/PageTransitionAnim/PageTransitionAnim";

export const History = () => {
  return (
    <PageTransitionAnim>
      <HistoryTable />
    </PageTransitionAnim>
  );
};
