import {
  styled,
  Checkbox as MuiCheckbox,
  CheckboxProps,
  Theme,
  FormControlLabel as MuiFormControlLabel,
} from "@mui/material/";
import React from "react";
import { CheckMarkIcon } from "../Icons";

export interface CustomProps {
  variant?: "default" | "outlined";
  label?: React.ReactNode;
}

export const Checkbox = ({ variant = "default", label, ...props }: CustomProps & CheckboxProps) => (
  <FormControlLabel
    control={
      <CheckboxIcons
        checkedIcon={
          <CheckboxChecked>
            <CheckMarkIcon />
          </CheckboxChecked>
        }
        icon={<CheckboxDefault variant={variant} />}
        {...props}
      />
    }
    label={label}
  />
);

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  columnGap: "16px",
  margin: 0,

  "& .MuiTypography-root": {
    color: theme.palette.grey["A200"],
  },

  "&:hover .MuiButtonBase-root > div": {
    borderColor: theme.palette.checkbox.colored.main,
  },
}));

const CheckboxIcons = styled(MuiCheckbox)({
  margin: 0,
  padding: 0,
});

const CheckboxDefault = styled("div")<{ variant: "default" | "outlined" }>(({ theme, variant }) => ({
  width: "24px",
  height: "24px",
  borderRadius: theme.borderRadius.xxs,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ...getCustomVariant(theme)[variant],
}));

const CheckboxChecked = styled("div")(({ theme }) => ({
  width: "24px",
  height: "24px",
  borderRadius: theme.borderRadius.xxs,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.checkbox.colored.main,

  "& svg": {
    width: "11px",
    height: "8px",
  },
}));

const getCustomVariant = (theme: Theme) => ({
  default: {
    backgroundColor: theme.palette.checkbox.default.main,
  },
  outlined: {
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.checkbox.colored.outlined}`,
    transition: ".3s",
  },
});
