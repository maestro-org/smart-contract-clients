import React, { useEffect, useState } from "react";
import { styled, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Dialog from "../../Dialog/Dialog";
import { Button } from "../../Button/Button";
import { useWallet } from "../../../hooks/useWallet";
import { WalletType } from "../../../types/walletTypes";
import { getConnectWalletDialog } from "../../../redux/reducers/popupsReducer";
import { updatePopup } from "../../../redux/actions/popupsActions";
import { Popups } from "../../../types/popups";
import { Checkbox } from "../../Checkbox/Checkbox";
import WalletCard from "./components/WalletCard";

const wallets = [
  {
    id: WalletType.NAMI,
    label: "Nami",
    isInstalled: true,
    logoSrc: "/images/logo/nami.png",
  },
  {
    id: WalletType.FLINT,
    label: "Flint",
    isInstalled: false,
    logoSrc: "/images/logo/flint.png",
  },
  {
    id: WalletType.ETERNL,
    label: "Eternl",
    isInstalled: false,
    logoSrc: "/images/logo/eternl.png",
  },
  {
    id: WalletType.TYPHON,
    label: "Typhon",
    isInstalled: true,
    logoSrc: "/images/logo/typhon.png",
  },
];

const ConnectWalletPopup = () => {
  // const router = useRouter();
  const open = useSelector(getConnectWalletDialog);
  const [isChecked, setIsChecked] = useState(false);

  const { loading, isConnected, installedWallets, walletType, onConnectWallet, onDisconnectWallet } = useWallet();

  const dispatch = useDispatch();

  const handleDialogClose = () => {
    dispatch(updatePopup({ popup: Popups.connectWallet, status: false }));
  };

  const handleIsCheckedChange = () => setIsChecked((prev) => !prev);

  const handleWalletClick = (walletId: WalletType) => {
    if (walletType) {
      onDisconnectWallet(walletType);
    }
    onConnectWallet(walletId);
  };

  const handleDisconnectClick = () => {
    if (walletType) {
      onDisconnectWallet(walletType);
    }
  };

  useEffect(() => {
    if (isConnected) {
      dispatch(updatePopup({ popup: Popups.connectWallet, status: false }));
    }
  }, [walletType, isConnected]);

  return (
    <Dialog open={open} handleClose={handleDialogClose}>
      <Wrapper>
        <Typography variant="h6" color="grey.A200">
          Connect wallet
        </Typography>
        <WalletCardsWrapper isChecked={isChecked}>
          {wallets.map((mappedWallet: any) => (
            <WalletCard
              key={`${mappedWallet.id} - ${mappedWallet.logoSrc}`}
              {...mappedWallet}
              isLoading={loading && walletType === mappedWallet.id}
              isConnected={isConnected && walletType === mappedWallet.id}
              isInstalled={installedWallets.includes(mappedWallet.id)}
              onConnectWallet={() => handleWalletClick(mappedWallet.id)}
            />
          ))}
        </WalletCardsWrapper>
        {isConnected ? (
          <DisconnectButton onClick={handleDisconnectClick}>
            <Typography variant="subtitle2">Disconnect Wallet</Typography>
          </DisconnectButton>
        ) : (
          <TermsWrapper>
            <Checkbox variant="outlined" value={isChecked} onChange={handleIsCheckedChange} />
            <Typography variant="paragraphMedium" color="grey.400" fontWeight={300}>
              I agree to the <TermsRef href="#">Terms and Conditions</TermsRef>
            </Typography>
          </TermsWrapper>
        )}
      </Wrapper>
    </Dialog>
  );
};

const TermsRef = styled("a")({
  textDecoration: "underline",
  color: "#C53DD8",
  cursor: "pointer",
});

const TermsWrapper = styled("div")({
  display: "flex",
  gap: "12px",
  alignItems: "center",
});

const Wrapper = styled("div")(({ theme }) => ({
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  rowGap: "24px",
  background: "#FFFFFF",
  borderRadius: "12px",
  border: `2px solid #C53DD8`,

  [theme.breakpoints.down("md")]: {
    padding: "40px 30px 20px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "30px 20px 10px",
  },

  [theme.breakpoints.down("xs")]: {
    rowGap: "26px",
  },
}));

const WalletCardsWrapper = styled("div")<{ isChecked: boolean }>(({ isChecked }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "8px",
  width: "328px",

  "& > div": {
    opacity: isChecked ? "1" : "0.8",
    pointerEvents: isChecked ? "all" : "none",
  },
}));

const DisconnectButton = styled(Button)(({ theme }) => ({
  padding: "11px 24px",

  [theme.breakpoints.down("sm")]: {
    padding: "12.5px 20px",
  },
}));

export default ConnectWalletPopup;
