export const CoinCard = ({ id, price, image, symbol }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between  border w-24 h-24 p-1 shadow-sm hover:shadow-md hover:bg-white hover:scale-110 transition ease-in-out duration-150 rounded-2xl cursor-pointer	 ">
        <div>{symbol}</div>
        <img src={image} width="32" alt={`${id} logo`}></img>
        <div>{price}</div>
      </div>
    </div>
  );
};
