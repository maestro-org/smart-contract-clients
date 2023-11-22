import React, { FC } from "react";
import Card from "../Card/Card";
import { styled, Typography } from "@mui/material";

import { CheckmarkCircleIcon, SuccessShapesIcon } from "../Icons";

interface Props {
  title: string;
}

const SuccessWidget: FC<Props> = ({ title }) => {
  return (
    <OuterWrapper>
      <Card>
        <Content>
          <MessageWrapper>
            <CheckmarkCircleIcon />
            <Typography variant="paragraphLarge" color="grey.A200">
              {title}
            </Typography>
          </MessageWrapper>
        </Content>
      </Card>
      <IconWrapper>
        <SuccessShapesIcon />
      </IconWrapper>
    </OuterWrapper>
  );
};

const OuterWrapper = styled("div")({
  width: "336px",
  position: "relative",
});

const IconWrapper = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const Content = styled("div")({
  height: "248px",
  display: "flex",
  alignItems: "center",
});

const MessageWrapper = styled("div")(({ theme }) => ({
  padding: "10px 12px",
  borderRadius: "90px",
  border: `1px solid ${theme.palette.grey[100]}`,
  width: "100%",
  boxShadow: "0px 5px 28px 0px rgba(0, 0, 0, 0.10)",
  display: "flex",
  alignItems: "center",
  columnGap: "16px",
}));

export default SuccessWidget;
