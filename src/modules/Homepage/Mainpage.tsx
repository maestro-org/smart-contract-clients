import React from "react";

import LinearVestingWidget from "../../components/Widgets/LinearVestingWidget";
import PreviewWidget from "../../components/Widgets/PreviewWidget";
import SuccessWidget from "../../components/Widgets/SuccessWidget";

const Mainpage = () => {
  return (
    <div style={{ padding: "30px", display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <LinearVestingWidget />
      <PreviewWidget />
      <SuccessWidget />
    </div>
  );
};

export default Mainpage;
