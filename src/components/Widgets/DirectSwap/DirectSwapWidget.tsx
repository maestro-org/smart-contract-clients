import React, { useState } from "react";

import { Token } from "../../../types/token";
import { Nft } from "../../../types/nft";
import DirectSwapStep1 from "./DirectSwapStep1";
import SummaryWidget from "./SummaryWidget";
import SuccessWidget from "../SuccessWidget";

export interface SwapData {
  id: string;
  asset: Token | Nft | null;
  value: string;
  balance: string;
  isValid: boolean;
}

const initialSwapData: SwapData[] = [
  {
    id: "1",
    asset: null,
    value: "",
    balance: "230",
    isValid: false,
  },
];

const DirectSwapWidget = () => {
  const [step, setStep] = useState(0);
  const [sellData, setSellData] = useState<SwapData[]>(initialSwapData);
  const [receiveData, setReceiveData] = useState<SwapData[]>(initialSwapData);

  const handleNextStep = () => setStep((prev) => prev + 1);

  const handleSwap = () => {
    const temp = sellData;
    setSellData(receiveData);
    setReceiveData(temp);
  };

  const getStep = [
    <DirectSwapStep1
      key="1"
      sellData={sellData}
      receiveData={receiveData}
      setSellData={setSellData}
      setReceiveData={setReceiveData}
      onNext={handleNextStep}
      handleSwap={handleSwap}
    />,
    <SummaryWidget
      key="2"
      sellData={sellData}
      receiveData={receiveData}
      onNext={handleNextStep}
      handleSwap={handleSwap}
    />,
    <SuccessWidget key="3" title="Submission Successful" />,
  ];

  return getStep[step];
};

export default DirectSwapWidget;
