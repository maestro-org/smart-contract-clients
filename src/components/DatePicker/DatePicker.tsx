import React from "react";
import { DatePickerProps, DatePicker as MuiDatePicker } from "@mui/x-date-pickers";
import { Typography, styled } from "@mui/material";

interface CustomProps {
  errorPosition?: "top" | "bottom";
  helperText?: string;
  error?: boolean;
}

type Props = CustomProps & DatePickerProps<any>;

const DatePicker = ({ errorPosition, helperText, error, ...props }: Props) => {
  return (
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
      <StyledDatePicker error={error} {...props} />
      {helperText && errorPosition === "bottom" && (
        <DisplayWithCondition show={errorPosition === "bottom"}>
          <Typography color="textfield.errorText" variant="paragraphSmall">
            {helperText}
          </Typography>
        </DisplayWithCondition>
      )}
    </Wrapper>
  );
};

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

const StyledDatePicker = styled(MuiDatePicker)<{ error?: boolean }>(({ theme, error }) => ({
  maxWidth: "100%",
  width: "100%",
  height: "48px",

  "& .MuiInputBase-root": {
    height: "48px",
  },

  input: {
    height: "10px",
    padding: "1px 12px",
  },

  "& .MuiInputBase-input": {
    zIndex: 10,
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

  "& label.Mui-error": {
    color: `${theme.palette.textfield.errorText} !important`,
  },

  ...(error
    ? {
        "& input.MuiOutlinedInput-input": {
          color: theme.palette.textfield.errorText,
        },

        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: `${theme.palette.textfield.border.error} !important`,
        },
      }
    : {}),
}));

export default DatePicker;
