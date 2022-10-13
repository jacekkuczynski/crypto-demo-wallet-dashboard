import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Market } from "./pages/Market/Market";
import { Homepage } from "./pages/Homepage/Homepage";
import { History } from "./pages/History/History";
import { Buy } from "./pages/Buy/Buy";
import { Positions } from "./pages/Positions/Positions";
import { Faq } from "./pages/Faq/Faq";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useFetchCoinsData } from "./api/useFetchCoinsData";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useSetUserState } from "./hooks/useSetUserState";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { useHandleLastTransaction } from "./hooks/useHandleLastTransaction";
import { useFirebase } from "./hooks/useFirebase";

const App = () => {
  const [coinData, setCoinData] = useState(null);
  const { data } = useFetchCoinsData();
  const isUser = useSelector((state) => state.user?.value);
  useFirebase();
  useSetUserState();
  useHandleLastTransaction();
  useEffect(() => {
    if (data) {
      setCoinData(data);
    }
  }, [data]);

  return !isUser ? (
    <LoginPage />
  ) : (
    <div className="flex min-h-screen min-w-screen bg-neutral-50">
      <Toaster position="bottom-right" />
      <Sidebar />
      <div className="w-full pb-8 pt-20 pl-4 md:px-8 md:py-8 bg-neutral-50">
        <Routes>
          <Route path="/" element={<Homepage coinData={coinData} />} />
          <Route path="market" element={<Market coinData={coinData} />} />
          <Route path="history" element={<History />} />
          <Route path="positions" element={<Positions coinData={coinData} />} />
          <Route path="faq" element={<Faq />} />
          <Route path="buy" element={<Buy coinData={coinData} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
