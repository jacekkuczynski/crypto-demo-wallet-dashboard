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

export const useHandleLastTransaction = (user) => {
  const [data, setData] = useState(null);
  const cash = useSelector((state) => state.cash.value);
  const dispatch = useDispatch();
  const lastTranasctionData = useSelector(
    (state) => state.lastTransaction.value
  );

  // useEffect(() => {
  //   if (lastTranasctionData) {
  //     setData(lastTranasctionData);
  //   }
  // }, [lastTranasctionData]);

  //handle toast after transaction: 1.bought 2.sold 3.closed
  useEffect(() => {
    if (lastTranasctionData) {
      if (lastTranasctionData.side === "buy" && data?.isClosing !== true) {
        toast.success(
          `Congratulations! You just bought ${
            lastTranasctionData.amount
          } of ${capitalizeFirstLetter(lastTranasctionData.id)} for $${
            lastTranasctionData.cost
          } (current coin price: $${lastTranasctionData.price})`,
          { duration: 5000, icon: "🎉" }
        );
      } else if (
        lastTranasctionData.side === "sell" &&
        lastTranasctionData?.isClosing !== true
      ) {
        toast.success(
          `Congratulations! You just sold ${
            lastTranasctionData.amount
          } of ${capitalizeFirstLetter(lastTranasctionData.id)} for $${
            lastTranasctionData.cost
          } (current coin price: $${lastTranasctionData.price})`,
          { duration: 5000, icon: "🎉" }
        );
      } else {
        toast.success(
          `Congratulations! You just closed ${
            lastTranasctionData.amount
          } of ${capitalizeFirstLetter(lastTranasctionData.id)} for $${
            lastTranasctionData.cost
          } (current coin price: $${lastTranasctionData.price})`,
          { duration: 5000, icon: "🎉" }
        );
      }
    }
  }, [lastTranasctionData, user]);
  //handle cash state after transaction
  //if position is closing add to cash; if position is opening remove from cash
  useEffect(() => {
    if (lastTranasctionData) {
      if (lastTranasctionData?.isClosing === true) {
        let currentCash = cash + lastTranasctionData.cost;
        dispatch(setCash(currentCash));
        console.log("here");
      } else {
        let currentCash = cash - lastTranasctionData.cost;
        dispatch(setCash(currentCash));
      }
      console.log(lastTranasctionData);
    }
  }, [lastTranasctionData, user]);
  //handle transactions state; remove or add to transactions

  useEffect(() => {
    if (lastTranasctionData) {
      if (lastTranasctionData?.isClosing) {
        dispatch(removePosition(lastTranasctionData));
      } else {
        dispatch(addPosition(lastTranasctionData));
      }
    }
  }, [lastTranasctionData, user]);
};
