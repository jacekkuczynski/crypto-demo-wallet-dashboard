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
import { useLoadFromDatabase } from "./hooks/useLoadFromDatabase";
import { useSubscribeToStateAndSaveToDatabase } from "./hooks/useSubscribeToStateAndSaveToDatabase";
import { ErrorModal } from "./components/ErrorModal/ErrorModal";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const { data } = useFetchCoinsData();
  const userStore = useSelector((state) => state.user?.value);
  useLoadFromDatabase(userStore);
  useSubscribeToStateAndSaveToDatabase(userStore);
  useSetUserState();
  useHandleLastTransaction(userStore);

  return !userStore ? (
    <LoginPage />
  ) : (
    <div className="flex min-h-screen min-w-screen bg-neutral-50">
      <Toaster position="bottom-right" />
      <ErrorModal />
      <Sidebar />
      <div className="w-full pb-8 pt-20 pl-4 md:px-8 md:py-8 bg-neutral-50">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Homepage coinData={data} />} />
            <Route path="market" element={<Market coinData={data} />} />
            <Route path="history" element={<History />} />
            <Route path="positions" element={<Positions coinData={data} />} />
            <Route path="faq" element={<Faq />} />
            <Route path="buy" element={<Buy coinData={data} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
