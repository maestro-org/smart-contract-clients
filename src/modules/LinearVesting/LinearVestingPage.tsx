import React, { useState } from "react";
import LinearVestingWidget from "../../components/Widgets/LinearVesting/LinearVestingWidget";
import PreviewWidget from "../../components/Widgets/LinearVesting/PreviewWidget";
import SuccessWidget from "../../components/Widgets/SuccessWidget";
import LinearVestingActionButton from "../../components/Widgets/LinearVesting/components/LinearVestingActionButton";

const LinearVestingPage = () => {
  const [step, setStep] = useState(0);

  const handleChangeStep = (newStep: number) => () => {
    setStep(newStep);
  };

  const getStep = [
    <LinearVestingActionButton key={0} onNext={handleChangeStep(1)} />,
    <LinearVestingWidget key={1} onNext={handleChangeStep(2)} />,
    <PreviewWidget key={2} onNext={handleChangeStep(3)} />,
    <SuccessWidget key={3} title="Token Claim Completed" />,
  ];

  return (
    <div style={{ padding: "30px", display: "flex", flexDirection: "column", rowGap: "20px" }}>{getStep[step]}</div>
  );
};

export default LinearVestingPage;
