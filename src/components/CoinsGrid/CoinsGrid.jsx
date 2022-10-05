import { useSelector } from "react-redux";
import { useState } from "react";
import { CoinCard } from "../CoinCard/CoinCard";
import { BuyModal } from "../BuyModal/BuyModal";

export const CoinsGrid = ({ coinData }) => {
  const selectedCoins = useSelector((state) => state.selectedCoins.value);
  const [open, setOpen] = useState(false);
  const [clickedCoinData, setClickedCoinData] = useState({
    id: "id",
    price: 0,
    image: "image",
  });

  const selectedCoinsData = coinData?.filter((coin) => {
    return selectedCoins.includes(coin.id);
  });

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9  gap-y-4">
        {selectedCoinsData?.map((coin) => {
          return (
            <div
              key={coin.id}
              onClick={() => {
                setClickedCoinData({
                  id: coin.id,
                  price: coin.price,
                  image: coin.image,
                  name: coin.name,
                  priceChange: coin.priceChange,
                  low: coin.low,
                  high: coin.high,
                  ath: coin.ath,
                  athDate: coin.athDate,
                });
                setOpen(true);
              }}
            >
              <CoinCard
                id={coin.id}
                symbol={coin.symbol}
                price={coin.price}
                image={coin.image}
              />
            </div>
          );
        })}
        <BuyModal open={open} onClose={handleClose} data={clickedCoinData} />
      </div>
    </div>
  );
};
