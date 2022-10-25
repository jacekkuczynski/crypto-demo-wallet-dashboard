export const PositionCard = ({ position, handleClosePos }) => {
  return (
    <div className="flex flex-col  ">
      <div className="">{position.id}</div>
      <div className="">{position.amount}</div>
      <div className="">{position.date}</div>
      <div className="">{position.price}</div>
      <div className="">{position.side}</div>
      <div className="h-2/3 bg-cyan-600">{position.id}</div>
      <div className="h-1/3 bg-slate-600">siema</div>
      <button
        onClick={() => {
          handleClosePos(position);
        }}
        className="button"
      >
        Close Position
      </button>
    </div>
  );
};
