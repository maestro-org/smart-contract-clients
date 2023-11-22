import React from "react";

import LinearVestingWidget from "../../components/Widgets/LinearVesting/LinearVestingWidget";
import PreviewWidget from "../../components/Widgets/LinearVesting/PreviewWidget";
import SuccessWidget from "../../components/Widgets/SuccessWidget";
import DirectSwapWidget from "../../components/Widgets/DirectSwap/DirectSwapWidget";
import SummaryWidget from "../../components/Widgets/DirectSwap/SummaryWidget";
import { Link } from "react-router-dom";
import { pages } from "../../lib/routeUtils";

const Mainpage = () => {
  return (
    <div style={{ padding: "30px", display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <Link to={pages.directSwap()}>
        <h1>Direct swap</h1>
      </Link>

      <Link to={pages.linearVesting()}>
        <h1>Linear vesting</h1>
      </Link>
    </div>
  );
};

export default Mainpage;
