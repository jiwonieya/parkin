import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import ItemPage from "./Components/ItemPage";
import ItemPageTwo from "./Components/ItemPageTwo";
import ItemPageThree from "./Components/ItemPageThree";
import ItemPageFour from "./Components/ItemPageFour";
import ItemPageFive from "./Components/ItemPageFive";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/itempage" element={<ItemPage />} />
          <Route path="/itempagtwo" element={<ItemPageTwo />} />
          <Route path="/itempagthree" element={<ItemPageThree />} />
          <Route path="/itempagfour" element={<ItemPageFour />} />
          <Route path="/itempagefive" element={<ItemPageFive />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};
export default App;