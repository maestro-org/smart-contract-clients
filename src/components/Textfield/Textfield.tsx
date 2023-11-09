import {
  InputAdornment,
  OutlinedTextFieldProps,
  styled,
  TextField as MuiTextField,
  Theme,
  Typography,
} from "@mui/material";
import React from "react";
import { ErrorIcon } from "../Icons";

type CustomVariant = "outlined" | "text";

interface TextFieldCustomProps {
  customVariant?: CustomVariant;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  required?: boolean;
  placeholder?: string;
  errorPosition?: "top" | "bottom";
  withoutErrorLabel?: boolean;
}

export type TextFieldProps = Omit<OutlinedTextFieldProps, "size" | "color" | "variant"> & TextFieldCustomProps;

export const TextField = ({
  endIcon,
  startIcon,
  required = false,
  errorPosition = "top",
  helperText,
  error,
  customVariant = "outlined",
  withoutErrorLabel,
  ...props
}: TextFieldProps) => (
  <Wrapper>
    {helperText && errorPosition === "top" && (
      <TitleWrapper>
        <DisplayWithCondition show={errorPosition === "top"}>
          <Typography color="textfield.errorText" variant="paragraphSmall">
            {helperText}
          </Typography>
        </DisplayWithCondition>
      </TitleWrapper>
    )}
    <StyledTextField
      customVariant={customVariant}
      id="outlined-basic"
      InputProps={{
        endAdornment:
          (endIcon && <InputAdornment position="end">{endIcon}</InputAdornment>) ||
          (error && (
            <InputAdornment position="end">
              <ErrorIcon />
            </InputAdornment>
          )),
        startAdornment: startIcon && <InputAdornment position="start">{startIcon}</InputAdornment>,
      }}
      required={required}
      error={error}
      helperText={withoutErrorLabel ? "" : helperText}
      {...props}
    />
    {/*{helperText && errorPosition === "bottom" && (*/}
    {/*  <DisplayWithCondition show={errorPosition === "bottom"}>*/}
    {/*    <Typography color="textfield.errorText" variant="paragraphSmall">*/}
    {/*      {helperText}*/}
    {/*    </Typography>*/}
    {/*  </DisplayWithCondition>*/}
    {/*)}*/}
  </Wrapper>
);

const getCustomVariant = (theme: Theme) => ({
  outlined: {
    "& .MuiInputBase-root": {
      height: "auto",
      padding: "12.5px 24px",
    },

    "& .MuiInputBase-input": {
      zIndex: 10,
      padding: 0,
    },

    "& .MuiInputBase-input::placeholder, & label": {
      color: `${theme.palette.textfield.placeholder.main} !important`,
      opacity: 1,
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.textfield.border.main}`,
      borderWidth: "1px !important",
      backgroundColor: "transparent",
      borderRadius: theme.borderRadius.xxs,
      transition: "0.3s",
    },

    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },

    "& input.MuiOutlinedInput-input": {
      zIndex: 1,
      color: theme.palette.textfield.textColor,
    },

    "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.textfield.border.hover,
    },

    "& .MuiInputBase-root:hover .MuiInputBase-input::placeholder, & .MuiInputBase-root:hover label": {
      color: `${theme.palette.textfield.placeholder.hover} !important`,
      opacity: 1,
    },

    "& .Mui-focused fieldset": {
      borderColor: `${theme.palette.textfield.border.focus} !important`,
    },

    "& .Mui-focused .MuiInputBase-input::placeholder": {
      color: `${theme.palette.textfield.placeholder.focus} !important`,
      opacity: 1,
    },

    "& label.Mui-focused": {
      color: `${theme.palette.primary.main} !important`,
    },

    "& .MuiInputAdornment-root": {
      zIndex: 10,
    },

    "& .MuiFormHelperText-root": {
      display: "none",
    },

    "& input:not([value='']) ~fieldset": {
      borderColor: theme.palette.textfield.border.filled,
    },

    "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: `${theme.palette.textfield.border.disable} !important`,
    },

    "& .Mui-disabled .MuiInputBase-input::placeholder": {
      "-webkit-text-fill-color": theme.palette.textfield.placeholder.disable,
      color: `${theme.palette.textfield.placeholder.disable} !important`,
      opacity: 1,
    },

    "& .Mui-disabled:hover .MuiInputBase-input::placeholder": {
      "-webkit-text-fill-color": theme.palette.textfield.placeholder.disable,
      color: `${theme.palette.textfield.placeholder.disable} !important`,
      opacity: 1,
    },
  },
  text: {
    backgroundColor: "transparent",
    border: "none",

    "& .MuiInputBase-root": {
      padding: "0",
    },

    input: {
      padding: "0",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: `none !important`,
      transition: "0.3s",
    },
    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
      border: `none !important`,
    },
    "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
      border: `none !important`,
    },
    "& .Mui-focused fieldset": {
      border: `none !important`,
    },

    "& input:not([value='']) ~fieldset": {
      border: `none !important`,
    },

    "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
      border: `none !important`,
    },

    "& .Mui-error input.MuiOutlinedInput-input": {
      color: theme.palette.textfield.errorText,
    },

    "& .Mui-error .MuiOutlinedInput-notchedOutline": {
      border: `none !important`,
    },
  },
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  rowGap: "8px",
});

const TitleWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const DisplayWithCondition = styled("span")<{ show: boolean }>(({ show }) => ({
  display: show ? "block" : "none",
}));

const StyledTextField = styled(MuiTextField)<{ customVariant: CustomVariant }>(({ theme, customVariant }) => ({
  maxWidth: "100%",
  width: "100%",

  "& label": {
    top: "-3px",
  },

  "& .Mui-error input.MuiOutlinedInput-input": {
    color: theme.palette.textfield.errorText,
  },

  "& .Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.textfield.border.error} !important`,
  },

  "& label.Mui-error": {
    color: `${theme.palette.textfield.errorText} !important`,
  },

  ...getCustomVariant(theme)[customVariant],
}));
