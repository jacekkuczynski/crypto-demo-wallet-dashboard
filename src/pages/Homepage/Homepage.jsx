import { ClocksBoard } from "../../components/ClocksBoard/ClocksBoard";
import { Greetings } from "../../components/Greetings/Greetings";
import { Weather } from "../../components/Weather/Weather";
import { PageTransitionAnim } from "../../components/PageTransitionAnim/PageTransitionAnim";

export const Homepage = ({ coinData }) => {
  return (
    <PageTransitionAnim>
      <Greetings />
      <ClocksBoard />
      <Weather />
    </PageTransitionAnim>
  );
};
