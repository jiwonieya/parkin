import "./App.scss";
import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import ItemPage from "./Components/ItemPage";
import ItemPageTwo from "./Components/ItemPageTwo";
import ItemPageThree from "./Components/ItemPageThree";
import ItemPageFour from "./Components/ItemPageFour";
import ItemPageFive from "./Components/ItemPageFive";
import Coupons from "./Components/Coupons";
import Brandstory from "./Components/Brandstory";

const App = () => {
useEffect(() => {
      window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/brandstory" element={<Brandstory />} />
          <Route path="/itempage" element={<ItemPage />} />
          <Route path="/itempagetwo" element={<ItemPageTwo />} />
          <Route path="/itempagethree" element={<ItemPageThree />} />
          <Route path="/itempagefour" element={<ItemPageFour />} />
          <Route path="/itempagefive" element={<ItemPageFive />} />
          <Route path="/coupons" element={<Coupons />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
export default App;
