import React from "react";
import { styled, Typography } from "@mui/material";

import WidgetCard from "../../Card/WidgetCard";
import SummaryCard from "./components/SummaryCard";
import { Button } from "../../Button/Button";
import SummaryCardFee from "./components/SummaryCardFee";
import { SwapHorizontalIcon } from "../../Icons/SwapHorizontalIcon";

const SummaryWidget = () => {
  return (
    <OuterWrapper>
      <WidgetCard withoutLogo={true} title="Swap Summary">
        <CardsWrapper>
          <SummaryCard title="Buy" images={["/images/tokens/GeniusYield.png"]} prices={["1.234 GENS"]} />
          <SwapButton>
            <IconWrapper>
              <SwapHorizontalIcon />
            </IconWrapper>
          </SwapButton>
          <SummaryCard
            title="For"
            images={["/images/tokens/GeniusYield.png", "/images/tokens/GeniusYield.png"]}
            prices={["1.234 ADA", "123 MIN"]}
          />
        </CardsWrapper>
        <ButtonWrapper>
          <Button type="submit" disabled={false} onKeyDown={(e) => e.preventDefault()}>
            <Typography color="gray.50" variant="paragraphMedium">
              Submit
            </Typography>
          </Button>
        </ButtonWrapper>
        <SummaryCardFee />
      </WidgetCard>
    </OuterWrapper>
  );
};

const IconWrapper = styled("div")({
  height: "15px",
});

const SwapButton = styled(Button)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  width: "40px",
  minWidth: "0",
  borderRadius: "50%",
  zIndex: "10",
  background: "#E1BCEF",
  margin: "0 -32px",

  "&:after": {
    borderRadius: "50%",
    content: "''",
    background: "#C53DD8",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "34px",
    height: "34px",
    zIndex: "-10",
  },
});

const ButtonWrapper = styled("div")({
  width: "100%",

  "& button": {
    width: "100%",
    height: "44px",
    borderRadius: "4px",
  },
});

const CardsWrapper = styled("div")({
  display: "flex",
  gap: "21px",
  alignItems: "center",
});

const OuterWrapper = styled("div")({
  width: "600px",
});

export default SummaryWidget;
