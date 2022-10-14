/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { capitalizeFirstLetter } from "../helpers/helpers";
import { setCash } from "../features/cash/cashSlice";
import {
  addPosition,
  removePosition,
} from "../features/positions/positionsSlice";

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
    }
  }, [lastTranasctionData]);

  //handle toast after transaction: 1.bought 2.sold 3.closed
  useEffect(() => {
    if (data) {
      if (data.side === "buy" && data?.isClosing !== true) {
        toast.success(
          `Congratulations! You just bought ${
            data.amount
          } of ${capitalizeFirstLetter(data.id)} for $${
            data.cost
          } (current coin price: $${data.price})`,
          { duration: 5000, icon: "🎉" }
        );
      } else if (data.side === "sell" && data?.isClosing !== true) {
        toast.success(
          `Congratulations! You just sold ${
            data.amount
          } of ${capitalizeFirstLetter(data.id)} for $${
            data.cost
          } (current coin price: $${data.price})`,
          { duration: 5000, icon: "🎉" }
        );
      } else {
        toast.success(
          `Congratulations! You just closed ${
            data.amount
          } of ${capitalizeFirstLetter(data.id)} for $${
            data.cost
          } (current coin price: $${data.price})`,
          { duration: 5000, icon: "🎉" }
        );
      }
    }
  }, [data]);
  //handle cash state after transaction
  //if position is closing add to cash; if position is opening remove from cash
  useEffect(() => {
    if (data) {
      if (data?.isClosing === true) {
        let currentCash = cash + data.cost;
        dispatch(setCash(currentCash));
      } else {
        let currentCash = cash - data.cost;
        dispatch(setCash(currentCash));
      }
      console.log(data);
    }
  }, [data]);
  //handle transactions state; remove or add to transactions

  useEffect(() => {
    if (data) {
      if (data?.isClosing) {
        dispatch(removePosition(data));
      } else {
        dispatch(addPosition(data));
      }
    }
  }, [data]);
};
