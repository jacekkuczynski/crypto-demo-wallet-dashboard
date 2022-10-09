import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const useMakeTransaction = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.value);
};
