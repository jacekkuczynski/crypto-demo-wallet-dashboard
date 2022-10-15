import { useSelector } from "react-redux";

export const UsersCash = () => {
  const cash = useSelector((state) => state.cash.value);

  return (
    <div className="text-center font-semibold">
      <div>Your cash:</div>
      <div className="tracking-wider text-green-800	">${cash?.toFixed(2)}</div>
    </div>
  );
};
