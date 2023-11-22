import React from "react";
import { useSelector } from "react-redux";
import { styled, Typography } from "@mui/material";

import { TextField } from "../../../Textfield/Textfield";
import { SearchIcon } from "../../../Icons";
import { tokens } from "../../../../mock/tokens";
import { numberDecorator } from "../../../../lib/numberDecorator";
import { getPrefilled } from "../../../../redux/reducers/popupsReducer";

const TokenSelectionList = () => {
  const prefilled = useSelector(getPrefilled);

  const { handleTokenClick } = prefilled || {};

  return (
    <>
      <SearchWrapper>
        <TextField customVariant="outlined" startIcon={<SearchIcon />} placeholder="Search by name or ID" />
      </SearchWrapper>
      <TokenList>
        {tokens.map((item) => (
          <TokenCard key={item.id} onClick={handleTokenClick ? () => handleTokenClick(item) : undefined}>
            <LeftTokenWrapper>
              <TokenLogo src={item.logo} />
              <TokenInfo>
                <Typography color="grey.A200" variant="paragraphMedium">
                  {item.company}
                </Typography>
                <Typography color="grey.600" variant="article">
                  {item.name}
                </Typography>
              </TokenInfo>
            </LeftTokenWrapper>
            <TokenPriceWrapper>
              <Typography color="primary.main" variant="paragraphSmall">
                {numberDecorator(item.amount)}
              </Typography>
              <Typography color="grey.800" variant="article">
                {numberDecorator(item.price)} USD
              </Typography>
            </TokenPriceWrapper>
          </TokenCard>
        ))}
      </TokenList>
    </>
  );
};

const SearchWrapper = styled("div")({
  width: "288px",

  "& .MuiInputBase-root": {
    padding: "10.5px 12px",
  },
});

const TokenList = styled("div")({
  display: "flex",
  flexDirection: "column",
  rowGap: "16px",
});

const TokenCard = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
});

const LeftTokenWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  columnGap: "6px",
});

const TokenLogo = styled("img")({
  borderRadius: "50%",
  width: "36px",
  height: "36px",
});

const TokenInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const TokenPriceWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

export default TokenSelectionList;
