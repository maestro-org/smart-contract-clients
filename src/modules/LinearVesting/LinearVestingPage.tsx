import React from "react";
import LinearVestingWidget from "../../components/Widgets/LinearVesting/LinearVestingWidget";
import PreviewWidget from "../../components/Widgets/LinearVesting/PreviewWidget";
import SuccessWidget from "../../components/Widgets/SuccessWidget";

const LinearVestingPage = () => {
  return (
    <div style={{ padding: "30px", display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <LinearVestingWidget />
      <PreviewWidget />
      <SuccessWidget title="Token Claim Completed" />
    </div>
  );
};

export default LinearVestingPage;
