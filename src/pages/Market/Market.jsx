import React, { useEffect, useState } from "react";
import { useFetchCoinsData } from "../../api/useFetchCoinsData";

export const Market = () => {
  const [coinData, setCoinData] = useState(null);
  const data = useFetchCoinsData();

  return <div>Market</div>;
};
