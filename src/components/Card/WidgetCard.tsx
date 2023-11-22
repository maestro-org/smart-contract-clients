import React from "react";
import { styled, Typography } from "@mui/material";

import Card from "./Card";
import { MeastroLogo } from "../Icons";

interface Props {
  title: string;
  withoutLogo?: boolean;
  children: React.ReactNode;
}

const WidgetCard = ({ title, children, withoutLogo }: Props) => {
  return (
    <Card>
      <Title color="grey.A200" variant="h6">
        {title}
      </Title>
      {children}
      {!withoutLogo && (
        <PoweredByWrapper>
          <PoweredByText color="grey.400" variant="paragraphSmall">
            powered by
          </PoweredByText>
          <LogoWrapper>
            <MeastroLogo />
          </LogoWrapper>
        </PoweredByWrapper>
      )}
    </Card>
  );
};

const Title = styled(Typography)({
  textAlign: "center",
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

export default WidgetCard;
