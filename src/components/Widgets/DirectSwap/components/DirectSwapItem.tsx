import React, { Dispatch, FC, SetStateAction } from "react";
import { styled, Typography } from "@mui/material";

import DirectSwapTokenField from "./DirectSwapTokenField";
import { SwapData } from "../DirectSwapWidget";

interface Props {
  title: string;
  elem: SwapData;
  setData: Dispatch<SetStateAction<SwapData[]>>;
  withSeparator?: boolean;
}

const DirectSwapItem: FC<Props> = ({ title, elem, withSeparator, setData }) => {
  const handleSetMax = () => {
    setData((prev) => prev.map((item) => (item.id === elem.id ? { ...item, value: elem.balance } : item)));
  };

  return (
    <>
      <SellItem>
        <Row>
          <Typography variant="paragraphSmall" color="grey.A200">
            {title}
          </Typography>
          <BalanceWrapper>
            <Typography variant="article" color="grey.400">
              Balance: {elem.balance}
            </Typography>
            <MaxTypography variant="article" color="primary.main" onClick={handleSetMax}>
              MAX
            </MaxTypography>
          </BalanceWrapper>
        </Row>
        <DirectSwapTokenField setData={setData} {...elem} />
      </SellItem>
      {withSeparator && <Separator />}
    </>
  );
};

const MaxTypography = styled(Typography)({
  cursor: "pointer",
});

const Separator = styled("div")({
  width: "100%",
  height: "1px",
  background: "#e6e6e6",
});

const BalanceWrapper = styled("div")({
  display: "flex",
  gap: "4px",
});

const Row = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const SellItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export default DirectSwapItem;
