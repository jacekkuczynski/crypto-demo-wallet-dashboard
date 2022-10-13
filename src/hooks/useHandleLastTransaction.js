/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { capitalizeFirstLetter } from "../helpers/helpers";
import { setCash } from "../features/cash/cashSlice";
import { addPosition } from "../features/positions/positionsSlice";

// 1. set cash
// 2. set positions state
// 3. add transactions to history state

export const useHandleLastTransaction = () => {
  const [data, setData] = useState(null);
  const cash = useSelector((state) => state.cash.value);
  const dispatch = useDispatch();
  const lastTranasctionData = useSelector(
    (state) => state.lastTransaction.value
  );

  useEffect(() => {
    if (lastTranasctionData) {
      setData(lastTranasctionData);
      console.log(data);
    }
  }, [lastTranasctionData]);

  //handle toast after transaction
  useEffect(() => {
    if (data) {
      data.side === "buy"
        ? toast.success(
            `Congratulations! You just bought ${
              data.amount
            } of ${capitalizeFirstLetter(data.id)} for $${
              data.cost
            } (current coin price: $${data.price})`,
            { duration: 5000, icon: "🎉" }
          )
        : toast.success(
            `Congratulations! You just sold ${
              data.amount
            } of ${capitalizeFirstLetter(data.id)} for $${
              data.cost
            } (current coin price: $${data.price})`,
            { duration: 5000, icon: "🎉" }
          );
    }
  }, [data]);
  //handle cash state after transaction
  useEffect(() => {
    if (data) {
      let currentCash = cash - data.cost;
      console.log(currentCash);
      dispatch(setCash(currentCash));
    }
  }, [data]);
  //handle transactions state
  useEffect(() => {
    if (data) dispatch(addPosition(data));
  }, [data]);
};
