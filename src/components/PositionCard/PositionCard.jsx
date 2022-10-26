export const PositionCard = ({ position, handleClosePos, currentPrice }) => {
  const priceNow = currentPrice(position.id);

  const percentageDiff = (
    ((position.price - priceNow) / position.price) *
    100
  ).toFixed(4);

  return (
    <div className="flex flex-col gap-1 items-center justify-around text-center h-fit p-5 mx-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100  ">
      <div className="font-extrabold capitalize text-2xl underline">
        {position.id}
      </div>
      <div>
        <div className="font-extralight">amount</div>
        <div className="">{position.amount.toFixed(8)}</div>
      </div>
      <div>
        <div className="font-extralight">opening price</div>
        <div className="font-medium">${position.price}</div>
      </div>

      <div>
        <div className="font-extralight">side</div>
        {position.side === "buy" ? (
          <div className="text-green-800 font-extrabold uppercase">
            {position.side}
          </div>
        ) : (
          <div className="text-red-800 font-extrabold uppercase">
            {position.side}
          </div>
        )}
      </div>
      <div>
        <div className="font-extralight">current price</div>
        <div className="font-medium">${priceNow}</div>
      </div>
      <div>
        <div className="font-extralight">profit</div>
        {percentageDiff >= 0 ? (
          <div className="text-green-800 font-medium">{percentageDiff}%</div>
        ) : (
          <div className="text-red-800 font-medium"> {percentageDiff}%</div>
        )}
      </div>

      <button
        onClick={() => {
          handleClosePos(position);
        }}
        className="button w-fit my-1"
      >
        Close Position
      </button>
      <div>
        <div className="font-extralight">opening date</div>
        <div>{position.date.slice(4, -7)}</div>
      </div>
    </div>
  );
};
