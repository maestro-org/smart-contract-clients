import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainpage from "./modules/Homepage/Mainpage";
import AllDialogs from "./components/Popups/AllDialogs";

import { pages } from "./lib/routeUtils";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={pages.main()} element={<Mainpage />} />
    </Routes>
    <AllDialogs />
  </BrowserRouter>
);

export default Router;
