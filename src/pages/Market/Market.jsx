import { CoinsGrid } from "../../components/CoinsGrid/CoinsGrid";
import { CoinSelect } from "../../components/CoinSelect/CoinSelect";
import { SelectedCoins } from "../../components/SelectedCoins/SelectedCoins";
import { ErrorModal } from "../../components/ErrorModal/ErrorModal";

export const Market = ({ coinData }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col items-center py-6">
        <p>👇 These are your coins from the watchlist 👇</p>
        <p>Click on any of them to learn more!</p>
      </div>
      <CoinsGrid coinData={coinData} />
      <div className="flex flex-col items-center w-full md:w-1/2 ">
        <CoinSelect coinData={coinData} />
        <SelectedCoins coinData={coinData} />
      </div>
      <ErrorModal />
    </div>
  );
};
