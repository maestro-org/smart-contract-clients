import { Chip as MuiChip, ChipProps as MUIChipProps, styled, Theme } from "@mui/material";
import React from "react";
import { FC } from "react";

export type CustomChipColor = "primary" | "default" | "custom";

interface CustomChipProps {
  color?: CustomChipColor;
  hexColor?: string;
  allowDelete?: boolean;
}
export type ChipProps = Omit<MUIChipProps, "color"> & CustomChipProps;

export const Chip: FC<ChipProps> = ({ color = "default", hexColor = "#FFFFFF", allowDelete = false, ...props }) => {
  const StyledChip = styled(MuiChip)(({ theme }) => ({
    padding: "8px 10px",
    cursor: "pointer",
    columnGap: "16px",
    borderRadius: theme.borderRadius.md,
    ...theme.typography.subtitle1,
    ...getCustomColor(theme, hexColor)[color as CustomChipColor],

    "& .MuiChip-label": {
      padding: 0,
    },

    "& svg": {
      display: allowDelete ? "inline-block" : "none",
    },
  }));

  return <StyledChip {...props} />;
};

const getCustomColor = (theme: Theme, hexColor: string) => ({
  primary: {
    backgroundColor: theme.palette.chip.primary.backgroundColor,
    color: theme.palette.chip.primary.color,

    "&:hover": {
      backgroundColor: theme.palette.chip.primary.backgroundColor,
      color: theme.palette.chip.primary.color,
    },

    "& .MuiSvgIcon-root": {
      fill: theme.palette.chip.primary.color,
    },
  },
  default: {
    background: "transparent",
    color: theme.palette.chip.default.color,

    "&:hover": {
      backgroundColor: theme.palette.chip.default.backgroundColor,
      color: theme.palette.chip.default.color,
    },

    "& .MuiSvgIcon-root": {
      fill: theme.palette.chip.default.color,
    },
  },
  custom: {
    backgroundColor: hexColor,
    color: theme.palette.chip.colored.color,
    borderColor: hexColor,

    "&:hover": {
      backgroundColor: hexColor,
      color: theme.palette.chip.colored.color,
    },

    "& .MuiSvgIcon-root": {
      fill: theme.palette.chip.colored.color,
    },
  },
});
