import React from "react";

import LinearVestingWidget from "../../components/Widgets/LinearVesting/LinearVestingWidget";
import PreviewWidget from "../../components/Widgets/LinearVesting/PreviewWidget";
import SuccessWidget from "../../components/Widgets/SuccessWidget";
import DirectSwapWidget from "../../components/Widgets/DirectSwap/DirectSwapWidget";
import SummaryWidget from "../../components/Widgets/DirectSwap/SummaryWidget";

const Mainpage = () => {
  return (
    <div style={{ padding: "30px", display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <LinearVestingWidget />
      <PreviewWidget />
      <SuccessWidget title="Token Claim Completed" />

      <DirectSwapWidget />
      <SummaryWidget />
      <SuccessWidget title="Submission Successful" />
    </div>
  );
};

export default Mainpage;
