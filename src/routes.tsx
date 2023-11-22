import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainpage from "./modules/Homepage/Mainpage";
import AllDialogs from "./components/Popups/AllDialogs";

import { pages } from "./lib/routeUtils";
import LinearVestingPage from "./modules/LinearVesting/LinearVestingPage";
import DirectSwapPage from "./modules/DirectSwap/DirectSwapPage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={pages.main()} element={<Mainpage />} />
      <Route path={pages.linearVesting()} element={<LinearVestingPage />} />
      <Route path={pages.directSwap()} element={<DirectSwapPage />} />
    </Routes>
    <AllDialogs />
  </BrowserRouter>
);

export default Router;
