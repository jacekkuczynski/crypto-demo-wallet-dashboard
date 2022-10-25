import { ClocksBoard } from "../../components/ClocksBoard/ClocksBoard";
import { Weather } from "../../components/Weather/Weather";
import { PageTransitionAnim } from "../../components/PageTransitionAnim/PageTransitionAnim";

export const Homepage = () => {
  return (
    <PageTransitionAnim>
      <div className="flex flex-col gap-8 items-center m-4">
        <p className="text-4xl text-center font-semibold">
          Welcome! It's perfect time and weather to invest!
        </p>
        <ClocksBoard />
        <Weather />
      </div>
    </PageTransitionAnim>
  );
};
