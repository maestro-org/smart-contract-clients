import { Typography, styled } from "@mui/material";
import React from "react";
import { TextField, TextFieldProps } from "./Textfield";
import { numberDecorator } from "../../lib/numberDecorator";

interface Props {
  textfield: TextFieldProps;
  balance: number;
  handleClick: () => void;
  token?: any;
}

const TokenTextfield = ({ balance, textfield, token }: Props) => {
  return (
    <Wrapper>
      <BalanceWrapper>
        <BalanceTypography color="primary.main" variant="paragraphSmall">
          Balance:
        </BalanceTypography>
        <BalanceTypography color="primary.main" variant="paragraphSmall">
          {numberDecorator(balance)}
        </BalanceTypography>
      </BalanceWrapper>
      <TextField
        {...textfield}
        startIcon={
          token ? (
            <div />
          ) : (
            <NoTokenWrapper>
              <Typography variant="paragraphMedium" color="primary.main">
                + Token
              </Typography>
            </NoTokenWrapper>
          )
        }
      />
    </Wrapper>
  );
};

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
  justifyContent: "flex-end",
  columnGap: "6px",
});

const BalanceTypography = styled(Typography)({
  lineHeight: "16px",
});

const NoTokenWrapper = styled("div")({
  cursor: "pointer",
});

export default TokenTextfield;
