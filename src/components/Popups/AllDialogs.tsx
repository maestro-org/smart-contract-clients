import React from "react";
import TokenSelectionPopup from "./TokenSelectionPopup/TokenSelectionPopup";
import AssetSelectionPopup from "./AssetSelectionPopup/AssetSelectionPopup";
import ConnectWalletPopup from "./ConnectWalletPopup/ConnectWalletPopup";

const AllDialogs = () => {
  return (
    <>
      <TokenSelectionPopup />
      <AssetSelectionPopup />
      <ConnectWalletPopup />
    </>
  );
};

export default AllDialogs;
