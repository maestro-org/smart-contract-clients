import { Button as MuiButton, ButtonProps as MUIButtonProps, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { FC } from "react";

export interface CustomButtonProps {
  size?: "xsmall" | "small" | "medium" | "large";
  variant?: "primary" | "secondary";
}

export type ButtonProps = Omit<MUIButtonProps, "size" | "variant" | "color"> & CustomButtonProps;

export const Button: FC<ButtonProps> = ({ children, size = "small", variant = "primary", onClick, ...props }) => {
  const ButtonStyled = styled((props: MUIButtonProps) => <MuiButton {...props} />)(({ theme }) => ({
    ...getCustomVariant(theme)[variant],
    ...getCustomSize(theme)[size],
    textTransform: "none",
  }));

  return (
    <ButtonStyled {...props} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

const getCustomVariant = (theme: Theme) => ({
  primary: {
    color: theme.palette.button.primary.mainText,
    backgroundColor: theme.palette.button.primary.main,
    borderColor: theme.palette.button.primary.main,

    "& svg": {
      fill: theme.palette.button.primary.mainText,
    },

    "&:hover": {
      backgroundColor: theme.palette.button.primary.hover,
      borderColor: theme.palette.button.primary.hover,
      color: theme.palette.button.primary.hoverText,

      "& svg": {
        fill: theme.palette.button.primary.hoverText,
      },
    },

    "&:disabled": {
      backgroundColor: theme.palette.button.primary.disabled,
      borderColor: theme.palette.button.primary.disabled,
      color: theme.palette.button.primary.disabledText,

      "& svg": {
        fill: theme.palette.button.primary.disabledText,
      },
    },
  },
  secondary: {
    color: theme.palette.button.secondary.mainText,
    backgroundColor: theme.palette.button.secondary.main,
    borderColor: theme.palette.button.secondary.main,

    "& svg": {
      fill: theme.palette.button.secondary.mainText,
    },

    "&:hover": {
      backgroundColor: theme.palette.button.secondary.hover,
      borderColor: theme.palette.button.secondary.hover,
      color: theme.palette.button.secondary.hoverText,

      "& svg": {
        fill: theme.palette.button.secondary.hoverText,
      },
    },

    "&:disabled": {
      backgroundColor: theme.palette.button.secondary.disabled,
      borderColor: theme.palette.button.secondary.disabled,
      color: theme.palette.button.secondary.disabledText,

      "& svg": {
        fill: theme.palette.button.secondary.disabledText,
      },
    },
  },
});

const getCustomSize = (theme: Theme) => ({
  xsmall: {
    padding: "6px 16px",
    borderRadius: theme.borderRadius.xs,
    ...theme.typography.paragraphSmall,

    "& .MuiButton-startIcon svg": {
      width: "13px",
      height: "12px",
    },
  },
  small: {
    padding: "10px 20px",
    borderRadius: theme.borderRadius.sm,
    ...theme.typography.paragraphSmall,

    "& .MuiButton-startIcon svg": {
      width: "13px",
      height: "12px",
    },
  },
  medium: {
    padding: "10px 24px",
    borderRadius: theme.borderRadius.sm,
    ...theme.typography.paragraphMedium,

    "& .MuiButton-startIcon svg": {
      width: "18px",
      height: "16px",
    },
    "& .MuiButton-startIcon": {
      marginRight: "12px",
    },
  },
  large: {
    padding: "16px 32px",
    borderRadius: theme.borderRadius.sm,
    ...theme.typography.paragraphMedium,

    "& .MuiButton-startIcon svg": {
      width: "24px",
      height: "22px",
    },
    "& .MuiButton-startIcon": {
      marginRight: "16px",
    },
  },
});
