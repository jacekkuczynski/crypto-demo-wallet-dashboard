import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Market } from "./pages/Market/Market";
import { Homepage } from "./pages/Homepage/Homepage";
import { History } from "./pages/History/History";
import { Buy } from "./pages/Buy/Buy";
import { Positions } from "./pages/Positions/Positions";
import { Faq } from "./pages/Faq/Faq";
import { Support } from "./pages/Support/Support";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useFetchCoinsData } from "./api/useFetchCoinsData";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useSetUserState } from "./hooks/useSetUserState";
import { LoginPage } from "./pages/LoginPage/LoginPage";

const App = () => {
  const [coinData, setCoinData] = useState(null);
  const { data } = useFetchCoinsData();
  const isUser = useSelector((state) => state.user.value);
  useSetUserState();

  useEffect(() => {
    if (data) {
      setCoinData(data);
      // console.log(data);
    }
  }, [data]);

  return !isUser ? (
    <LoginPage />
  ) : (
    <div className="flex min-h-screen bg-neutral-50  ">
      <Toaster position="top-center" />
      <Sidebar />
      <div className="w-full ml-24 md:ml-0 px-8 py-8 ">
        <Routes>
          <Route path="/" element={<Homepage coinData={coinData} />} />
          <Route path="market" element={<Market coinData={coinData} />} />
          <Route path="history" element={<History />} />
          <Route path="positions" element={<Positions />} />
          <Route path="faq" element={<Faq />} />
          <Route path="support" element={<Support />} />
          <Route path="buy" element={<Buy />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
