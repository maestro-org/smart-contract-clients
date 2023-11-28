import React from "react";
import { useDispatch } from "react-redux";
import { styled, Typography } from "@mui/material";

import { Button } from "./Button";
import { updatePopup } from "../../redux/actions/popupsActions";
import { Popups } from "../../types/popups";

const ConnectWalletButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updatePopup({ popup: Popups.connectWallet, status: true }));
  };

  return (
    <Button onClick={handleClick}>
      <Text>Connect Wallet</Text>
    </Button>
  );
};

const Text = styled(Typography)({
  fontSize: "16px",
  lineHeight: "16px",
  fontWeight: "400",
  color: "#F5F5F5",
});

export default ConnectWalletButton;
