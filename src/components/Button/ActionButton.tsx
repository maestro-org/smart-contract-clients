import React, { FC } from "react";
import { styled, Typography } from "@mui/material";
import { Button } from "./Button";

interface Props {
  onClick: () => void;
  title: string;
}

const ActionButton: FC<Props> = ({ onClick, title }) => {
  return (
    <ButtonWrapper>
      <Button onClick={onClick}>
        <Text>{title}</Text>
      </Button>
    </ButtonWrapper>
  );
};

const Text = styled(Typography)({
  fontSize: "16px",
  lineHeight: "16px",
  fontWeight: "400",
  color: "#F5F5F5",
});

const ButtonWrapper = styled("div")({
  "& .MuiButtonBase-root": {
    padding: "14px 24px",
    width: "172px",
  },
});

export default ActionButton;
