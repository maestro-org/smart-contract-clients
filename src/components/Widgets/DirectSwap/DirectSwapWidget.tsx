import React, { Dispatch, SetStateAction, useState } from "react";
import { styled, Typography } from "@mui/material";
import _ from "lodash";

import WidgetCard from "../../Card/WidgetCard";
import DirectSwapItem from "./components/DirectSwapItem";
import { SwapIcon } from "../../Icons";
import { Button } from "../../Button/Button";
import DirectSwapFee from "./components/DirectSwapFee";
import { Token } from "../../../types/token";
import { Nft } from "../../../types/nft";

export interface SwapData {
  id: string;
  asset: Token | Nft | null;
  value: string;
  balance: string;
}

const initialSwapData: SwapData[] = [
  {
    id: "1",
    asset: null,
    value: "",
    balance: "230",
  },
];

const DirectSwapWidget = () => {
  const [sellData, setSellData] = useState<SwapData[]>(initialSwapData);
  const [receiveData, setReceiveData] = useState<SwapData[]>(initialSwapData);

  console.log("sellData", sellData);

  const handleAddData = (setData: Dispatch<SetStateAction<SwapData[]>>) => () => {
    const newItem: SwapData = {
      id: _.uniqueId("sell-item"),
      asset: null,
      value: "",
      balance: "100",
    };

    setData((prev) => [...prev, newItem]);
  };

  const handleSwap = () => {
    const temp = sellData;
    setSellData(receiveData);
    setReceiveData(temp);
  };

  return (
    <OuterWrapper>
      <WidgetCard title="Direct Swap">
        <ItemsWrapper>
          <SellWrapper>
            {sellData.map((elem, index) => (
              <DirectSwapItem
                title="Sell"
                key={elem.id}
                elem={elem}
                setData={setSellData}
                withSeparator={sellData.length - 1 > index}
              />
            ))}
            <AddText onClick={handleAddData(setSellData)}>
              <Typography variant="article" color="primary.main">
                + Add token or NFT
              </Typography>
            </AddText>
          </SellWrapper>

          <SwapButton onClick={handleSwap}>
            <SwapIcon />
          </SwapButton>

          <SellWrapper>
            {receiveData.map((elem, index) => (
              <DirectSwapItem
                title="Receive"
                key={elem.id}
                elem={elem}
                setData={setReceiveData}
                withSeparator={sellData.length - 1 > index}
              />
            ))}
            <AddText onClick={handleAddData(setReceiveData)}>
              <Typography variant="article" color="primary.main">
                + Add token or NFT
              </Typography>
            </AddText>
          </SellWrapper>

          <ButtonWrapper>
            <Button type="submit" disabled={false} onKeyDown={(e) => e.preventDefault()}>
              <Typography color="gray.50" variant="paragraphMedium">
                Submit
              </Typography>
            </Button>
          </ButtonWrapper>

          <DirectSwapFee isFormValid={true} />
        </ItemsWrapper>
      </WidgetCard>
    </OuterWrapper>
  );
};

const ButtonWrapper = styled("div")({
  width: "100%",

  "& button": {
    width: "100%",
    height: "44px",
    borderRadius: "4px",
  },
});

const SwapButton = styled(Button)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0",
  height: "40px",
  width: "40px",
  minWidth: "0",
  borderRadius: "50%",
  zIndex: "10",
  background: "#F5F5F5",

  margin: "-31px 0",

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

const ItemsWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
});

const AddText = styled("div")({
  width: "fit-content",
  margin: "0 auto",
  cursor: "pointer",
});

const SellWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  background: "white",
  boxShadow: "0px 10px 35px 0px rgba(0, 0, 0, 0.08)",
  padding: "20px 16px",
  borderRadius: "12px",
  width: "100%",
});

const OuterWrapper = styled("div")({
  width: "368px",
});

export default DirectSwapWidget;
