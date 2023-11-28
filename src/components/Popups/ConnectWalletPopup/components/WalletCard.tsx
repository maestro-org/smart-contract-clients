import React from "react";
import { styled, Typography } from "@mui/material";

export interface WalletCardProps {
  label: string;
  isInstalled: boolean;
  isLoading: boolean;
  isConnected: boolean;
  logoSrc: string;
  onConnectWallet: any;
}

const WalletCard = ({ label, isInstalled, isLoading, isConnected, logoSrc, onConnectWallet }: WalletCardProps) => (
  <Wrapper onClick={isInstalled ? onConnectWallet : null}>
    <NameWrapper>
      <Name variant="paragraphMedium" color="grey.A200" lineHeight="20px">
        {label}
      </Name>
      {isConnected && !isLoading && <ConnectedIndicator />}
      {/*{isLoading && <CircularProgress size={20} color={"contrastText" as any} />}*/}
    </NameWrapper>
    <NotInstalled>
      {!isInstalled && !isLoading && (
        <Typography color="grey.200" variant="paragraphSmall">
          Not installed
        </Typography>
      )}
      {isLoading && (
        <Typography color="grey.200" variant="paragraphSmall">
          Loading...
        </Typography>
      )}
    </NotInstalled>
    <ImageWrapper>
      <img src={logoSrc} alt="wallet_logo" />
    </ImageWrapper>
  </Wrapper>
);

const Wrapper = styled("div")(({ theme }) => ({
  padding: "12px 16px",
  display: "flex",
  alignItems: "center",
  columnGap: "30px",
  cursor: "pointer",
  background: "#FFF",
  borderRadius: theme.borderRadius.sm,
  boxShadow: "0px 10px 35px 0px rgba(0, 0, 0, 0.08)",
  transition: "0.3s",

  "&:hover": {
    transform: "scale(1.05)",

    "& > .MuiTypography-root": {
      // color: theme.palette.dialog.textColor.walletActive,
    },
  },

  [theme.breakpoints.down("sm")]: {
    padding: "15px 10px",
    columnGap: "15px",
    flexWrap: "wrap",
  },

  [theme.breakpoints.down("xs")]: {
    rowGap: "10px",
    justifyContent: "center",
  },
}));

const NameWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  columnGap: "13px",
  alignItems: "center",
  flex: 1,
}));

const ConnectedIndicator = styled("div")(({ theme }) => ({
  width: "6px",
  height: "6px",
  backgroundColor: "#53954A",
  borderRadius: "50%",
}));

const Name = styled(Typography)(({ theme }) => ({
  transition: "0.3s",

  [theme.breakpoints.down("sm")]: {
    order: 2,
  },
}));

const NotInstalled = styled("span")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    // order: 3,
  },
}));

const ImageWrapper = styled("div")(({ theme }) => ({
  width: "35px",
  height: "35px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& > img": {
    display: "block",
    maxWidth: "100%",
    width: "35px",
    height: "35px",
  },

  [theme.breakpoints.down("sm")]: {
    // order: 1,
  },
}));

export default WalletCard;
