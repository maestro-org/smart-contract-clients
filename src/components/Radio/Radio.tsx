import {
  FormControlLabel as MuiFormControlLabel,
  Radio as MuiRadio,
  RadioProps,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

export interface RadioCustomProps {
  value: string;
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = ({ value, label, ...props }: RadioProps & RadioCustomProps) => (
  <FormControlLabel
    value={value}
    control={<StyledRadio {...props} />}
    label={<Typography color="grey.A200">{label}</Typography>}
  />
);

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  "&:hover .MuiSvgIcon-root": {
    fill: theme.palette.primary["main"],
  },
}));

const StyledRadio = styled(MuiRadio)(({ theme }) => ({
  padding: "0 9px",
  color: theme.palette.grey["200"],

  "&.Mui-checked": {
    color: theme.palette.primary["main"],
  },
}));
