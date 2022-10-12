import { CoinsGrid } from "../../components/CoinsGrid/CoinsGrid";
import { CoinSelect } from "../../components/CoinSelect/CoinSelect";
import { SelectedCoins } from "../../components/SelectedCoins/SelectedCoins";

export const Market = ({ coinData }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center py-6">
        <p>👇 These are your coins from the watchlist 👇</p>
        <p>Click on any of them to learn more!</p>
      </div>
      <CoinsGrid coinData={coinData} />

      <CoinSelect coinData={coinData} />
      <SelectedCoins coinData={coinData} />
    </div>
  );
};
