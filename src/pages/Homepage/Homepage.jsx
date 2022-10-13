import { ClocksBoard } from "../../components/ClocksBoard/ClocksBoard";
import { Greetings } from "../../components/Greetings/Greetings";
import { Weather } from "../../components/Weather/Weather";

export const Homepage = ({ coinData }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Greetings />
      <ClocksBoard />
      <Weather />
    </div>
  );
};
