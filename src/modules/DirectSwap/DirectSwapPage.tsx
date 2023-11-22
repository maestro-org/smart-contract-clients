import React from "react";

import DirectSwapWidget from "../../components/Widgets/DirectSwap/DirectSwapWidget";

const DirectSwapPage = () => {
  return (
    <div style={{ padding: "30px", display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <DirectSwapWidget />
    </div>
  );
};

export default DirectSwapPage;
