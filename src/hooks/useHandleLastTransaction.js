import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { capitalizeFirstLetter } from "../helpers/helpers";
import { setCash } from "../features/cash/cashSlice";

export const useHandleLastTransaction = () => {
  const [data, setData] = useState(null);
  const cash = useSelector((state) => state.cash.value);
  const dispatch = useDispatch();
  const lastTranasctionData = useSelector(
    (state) => state.lastTransaction.value
  );

  useEffect(() => {
    if (lastTranasctionData) setData(lastTranasctionData);
  }, [lastTranasctionData]);

  useEffect(() => {
    if (data) {
      toast.success(
        `Congratulations! You just bought ${
          data.amount
        } of ${capitalizeFirstLetter(data.id)} for $${
          data.cost
        } (current coin price: ${data.price})`,
        { duration: 10000, icon: "🎉" }
      );
    }

    console.log(data);
  }, [data]);

  useEffect(() => {
    if (data) {
      let currentCash = cash - data.cost;
      console.log(currentCash);
      dispatch(setCash(currentCash));
    }
  }, [data, dispatch]);
};
