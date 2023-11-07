import React from "react";
import Card from "../Card/Card";
import { Typography, styled } from "@mui/material";
import { Button } from "../Button/Button";
import { MeastroLogo, SmallArrowDown } from "../Icons";

const PreviewWidget = () => {
  return (
    <OuterWrapper>
      <Card>
        <TokenCardWrapper>
          <TokenLeftWrapper>
            <TokenLogo src="/images/tokens/GeniusYield.png" />
            <TokenInfo>
              <Typography color="grey.A200" variant="paragraphMedium">
                GENS
              </Typography>
              <Typography color="grey.A200" variant="article">
                Policy ID: f66d7...9880
              </Typography>
            </TokenInfo>
          </TokenLeftWrapper>
          <TokenRightWrapper>
            <Typography color="grey.A200" variant="article">
              Ends
            </Typography>
            <Typography color="grey.A200" variant="article">
              3m 5d
            </Typography>
          </TokenRightWrapper>
        </TokenCardWrapper>
        <Details>
          <DetailsItem>
            <Typography color="grey.800" variant="paragraphSmall">
              Vesting
            </Typography>
            <Typography color="grey.800" variant="paragraphSmall">
              10,000 GENS
            </Typography>
          </DetailsItem>
          <DetailsItem>
            <Typography color="grey.800" variant="paragraphSmall">
              Remaining
            </Typography>
            <Typography color="grey.800" variant="paragraphSmall">
              4,345 GENS
            </Typography>
          </DetailsItem>
        </Details>
        <RewardsWrapper>
          <RewardsTop>
            <Typography color="grey.A200" variant="paragraphMedium">
              Rewards
            </Typography>
            <Typography color="primary.main" variant="h6">
              3,125 GENS
            </Typography>
          </RewardsTop>
          <Button variant="secondary">Claim</Button>
          <TotalFeeWrapper>
            <FeeItem>
              <WithIcon>
                <Typography color="grey.800" variant="paragraphSmall">
                  Total Fee
                </Typography>
                <SmallArrowDown />
              </WithIcon>
              <Typography color="grey.800" variant="paragraphSmall">
                2.45 ADA
              </Typography>
            </FeeItem>
          </TotalFeeWrapper>
        </RewardsWrapper>
        <PoweredByWrapper>
          <PoweredByText color="grey.400" variant="paragraphSmall">
            powered by
          </PoweredByText>
          <LogoWrapper>
            <MeastroLogo />
          </LogoWrapper>
        </PoweredByWrapper>
      </Card>
    </OuterWrapper>
  );
};

const OuterWrapper = styled("div")({
  width: "336px",
});

const TokenCardWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const TokenLeftWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  columnGap: "6px",
});

const TokenInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const TokenRightWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

const TokenLogo = styled("img")({
  width: "36px",
  height: "36px",
  borderRadius: "50%",
});

const Details = styled("div")({
  display: "flex",
  flexDirection: "column",
  rowGap: "4px",
});

const DetailsItem = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const RewardsWrapper = styled("div")(({ theme }) => ({
  background: theme.palette.grey[50],
  border: `1px solid ${theme.palette.grey[100]}`,
  borderRadius: theme.borderRadius.xxs,
  display: "flex",
  flexDirection: "column",
  rowGap: "24px",
  padding: "10px 12px",
}));

const RewardsTop = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: "8px",
});

const TotalFeeWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  rowGap: "11px",
});

const FeeItem = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const WithIcon = styled("div")({
  display: "flex",
  alignItems: "center",
  columnGap: "4px",
});

const PoweredByWrapper = styled("div")({
  display: "flex",
  columnGap: "8px",
  alignItems: "flex-end",
  justifyContent: "center",
});

const PoweredByText = styled(Typography)({
  lineHeight: "16px",
});

const LogoWrapper = styled("div")({
  height: "21px",
});

export default PreviewWidget;
