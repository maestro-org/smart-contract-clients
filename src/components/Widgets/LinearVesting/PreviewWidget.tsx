import { styled, Typography } from "@mui/material";
import React, { FC, useState } from "react";

import Card from "../../Card/Card";
import { Button } from "../../Button/Button";
import { MeastroLogo, SmallArrowDown } from "../../Icons";
import { InfoGrayIcon } from "../../Icons/InfoGrayIcon";

interface Props {
  onNext?: () => void;
}

const PreviewWidget: FC<Props> = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

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
          <Button variant="secondary" onClick={onNext}>
            Claim
          </Button>
          <TotalFeeWrapper>
            <FeeItem clickable={true} open={isOpen} onClick={handleClick}>
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
            {isOpen && (
              <>
                <Separator />
                <FeeItem>
                  <WithIcon>
                    <Typography color="grey.400" variant="paragraphSmall">
                      Transaction Fee
                    </Typography>
                    <InfoGrayIcon />
                  </WithIcon>
                  <Typography color="grey.400" variant="paragraphSmall">
                    0.17 ADA
                  </Typography>
                </FeeItem>
                <FeeItem>
                  <WithIcon>
                    <Typography color="grey.400" variant="paragraphSmall">
                      Frontend Fee
                    </Typography>
                    <InfoGrayIcon />
                  </WithIcon>
                  <Typography color="grey.400" variant="paragraphSmall">
                    1.7 ADA
                  </Typography>
                </FeeItem>
              </>
            )}
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

const Separator = styled("div")({
  width: "100%",
  height: "1px",
  background: "#e6e6e6",
});

const OuterWrapper = styled("div")({
  width: "340px",
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
  background: "#fff",
  boxShadow: "0px 10px 35px 0px rgba(0, 0, 0, 0.08)",
  borderRadius: theme.borderRadius.xxs,
  display: "flex",
  flexDirection: "column",
  rowGap: "24px",
  padding: "10px 12px",

  button: {
    borderRadius: theme.borderRadius.xxs,
  },
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

const FeeItem = styled("div")<{ clickable?: boolean; open?: boolean }>(({ clickable, open }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: clickable ? "pointer" : "auto",

  svg: {
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
  },

  span: {
    lineHeight: "16px !important",
  },
}));

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
