import { Routes, Route, Link } from "react-router-dom";
import { Market } from "./pages/Market/Market";
import { Homepage } from "./pages/Homepage/Homepage";
import { History } from "./pages/History/History";
import { Buy } from "./pages/Buy/Buy";
import { Positions } from "./pages/Positions/Positions";
import { Faq } from "./pages/Faq/Faq";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="market" element={<Market />} />
        <Route path="history" element={<History />} />
        <Route path="buy" element={<Buy />} />
        <Route path="positions" element={<Positions />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
      Hello World!
    </>
  );
};

export default App;
