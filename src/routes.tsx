import { BrowserRouter, Routes, Route } from "react-router-dom";

import { pages } from "./lib/routeUtils";
import Mainpage from "./modules/Homepage/Mainpage";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={pages.main()} element={<Mainpage />} />
    </Routes>
    {/* <AllDialogs /> */}
  </BrowserRouter>
);

export default Router;
