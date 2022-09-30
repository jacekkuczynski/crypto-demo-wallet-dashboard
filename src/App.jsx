import { Routes, Route } from "react-router-dom";
import { Market } from "./pages/Market/Market";
import { Homepage } from "./pages/Homepage/Homepage";
import { History } from "./pages/History/History";
import { Buy } from "./pages/Buy/Buy";
import { Positions } from "./pages/Positions/Positions";
import { Faq } from "./pages/Faq/Faq";
import { Support } from "./pages/Support/Support";
import { Sidebar } from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full ml-24 md:ml-0 px-8 py-8">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="market" element={<Market />} />
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
