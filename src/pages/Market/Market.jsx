import { CoinsGrid } from "../../components/CoinsGrid/CoinsGrid";
import { CoinSelect } from "../../components/CoinSelect/CoinSelect";
import { SelectedCoins } from "../../components/SelectedCoins/SelectedCoins";

export const Market = ({ coinData }) => {
  return (
    <>
      <div className="flex items-center py-6">
        <p>These are your coins from the watchlist</p>
        <span className="text-4xl">👇</span>
        <p>Click on any of them to learn more!</p>
      </div>
      <CoinsGrid coinData={coinData} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CoinSelect coinData={coinData} />
        <SelectedCoins coinData={coinData} />
      </div>
    </>
  );
};
