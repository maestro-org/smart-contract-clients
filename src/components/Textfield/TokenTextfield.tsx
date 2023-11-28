import { Typography, styled } from "@mui/material";
import React from "react";
import { TextField, TextFieldProps } from "./Textfield";
import { Token } from "../../types/token";
import { Button } from "../Button/Button";
import { SmallDropdownIcon } from "../Icons";
import { useSelector } from "react-redux";
import { getWalletBalance } from "../../redux/reducers/walletReducer";

interface Props {
  textfield: TextFieldProps;
  handleClick: () => void;
  token?: Token;
}

const TokenTextfield = ({ textfield, token, handleClick }: Props) => {
  const walletBalance = useSelector(getWalletBalance);
  const currentBalance = walletBalance || 0;

  return (
    <Wrapper>
      <Row>
        <Typography variant="paragraphSmall" color="grey.A200">
          Deposit
        </Typography>
        <BalanceWrapper>
          <Typography variant="article" color="primary.main">
            Balance:
          </Typography>
          <Typography variant="article" color="primary.main">
            {currentBalance}
          </Typography>
        </BalanceWrapper>
      </Row>

      <Row>
        <AddTokenButton onClick={handleClick}>
          {token ? (
            <TokenWrapper>
              <TokenLogo src={token.logo} alt={token.name} />
              <Typography color="grey.A200" variant="paragraphMedium">
                {token.name}
              </Typography>
              <SmallDropdownIcon />
            </TokenWrapper>
          ) : (
            <>
              <Typography variant="paragraphSmall" color="grey.A200">
                +
              </Typography>
              <Typography variant="paragraphSmall" color="grey.A200">
                Add token
              </Typography>
            </>
          )}
        </AddTokenButton>

        <TextField {...textfield} />
      </Row>
    </Wrapper>
  );
};

const AddTokenButton = styled(Button)(({ theme }) => ({
  padding: "4px 12px",
  gap: "6px",
  background: theme.palette.grey["50"],
  borderRadius: "57px",
  minWidth: "107px",

  "&:hover": {
    background: theme.palette.grey["100"],
  },
}));

const Row = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  rowGap: "4px",
  width: "100%",

  "& > div": {
    width: "100%",
    rowGap: "4px",
  },

  "& input": {
    textAlign: "end",
  },
});

const BalanceWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  columnGap: "6px",
});

const TokenWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  columnGap: "6px",
  cursor: "pointer",
});

const TokenLogo = styled("img")({
  height: "20px",
});

export default TokenTextfield;
