import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps, styled, Theme } from "@mui/material";
import React from "react";

interface IconButtonCustomProps {
  variant?: "dark" | "light";
  noFill?: boolean;
  children: React.ReactNode;
  href?: string;
  target?: string;
}

export type IconButtonProps = MuiIconButtonProps & IconButtonCustomProps;

export const IconButton = ({ children, noFill = false, href, variant = "dark", ...props }: IconButtonProps) => (
  <StyledIconButton variant={variant} noFill={noFill} {...props}>
    <SocialRef target="_blank" href={href}>
      {children}
    </SocialRef>
  </StyledIconButton>
);

const StyledIconButton = styled(MuiIconButton, {
  shouldForwardProp: (prop) => prop !== "variant" && prop !== "noFill",
})<{ variant: "dark" | "light"; noFill: boolean }>(({ theme, variant, noFill }) => {
  const styles = getCustomVariant(theme, noFill);

  return {
    ...styles[variant as keyof typeof styles],
  };
});

const SocialRef = styled("a")({
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const getCustomVariant = (theme: Theme, noFill: boolean) => ({
  light: {
    background: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.common.white,
    },
    "& svg": {
      fill: noFill ? "none" : theme.palette.grey["A200"],
    },
    rect: {
      stroke: theme.palette.grey["A200"],
      fill: theme.palette.grey["A200"],
    },
  },
  dark: {
    background: theme.palette.grey["A200"],
    "&:hover": {
      background: theme.palette.grey["A200"],
    },
    "& svg": {
      fill: noFill ? "none" : theme.palette.common.white,
    },
    rect: {
      stroke: theme.palette.common.white,
      fill: theme.palette.common.white,
    },
  },
});
