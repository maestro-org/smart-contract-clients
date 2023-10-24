import {
  MenuItem as MuiMenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
  SelectProps,
  styled,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

import { Checkbox } from "../Checkbox/Checkbox";
import { DropdownIcon } from "../Icons";

interface DropdownCustomProps {
  value: string[];
  placeholder: string;
  label?: string;
  onChange: (value: unknown) => void;
  options: string[];
  multiselect?: boolean;
  errorPosition?: "top" | "bottom";
  error?: boolean;
  helperText?: string;
  width?: number;
}

export type DropdownProps = DropdownCustomProps & Omit<SelectProps, "multiple">;

export const Dropdown = ({
  value,
  options,
  placeholder,
  label,
  multiselect,
  onChange,
  error,
  errorPosition = "top",
  helperText,
  width,
  ...props
}: DropdownProps) => {
  const theme = useTheme();

  const handleChange = ({ target: { value } }: SelectChangeEvent<unknown>) => {
    onChange(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Wrapper width={width}>
      <TitleWrapper>
        <Typography color="dropdown.textColor" variant="paragraphSmall">
          {label}
        </Typography>
        <DisplayWithCondition show={errorPosition === "top"}>
          <Typography color="dropdown.errorText" variant="paragraphSmall">
            {helperText}
          </Typography>
        </DisplayWithCondition>
      </TitleWrapper>
      <Select
        displayEmpty
        error={error}
        value={value}
        onChange={handleChange}
        multiple={multiselect}
        renderValue={(selected: any) =>
          value.length ? (
            <Typography color="dropdown.textColor" variant="paragraphMedium">
              {(selected as string[]).join(", ")}
            </Typography>
          ) : (
            <Typography color="dropdown.placeholder.main" variant="paragraphMedium">
              {placeholder}
            </Typography>
          )
        }
        IconComponent={() => (
          <IconWrapper>
            <DropdownIcon />
          </IconWrapper>
        )}
        MenuProps={{
          PaperProps: {
            style: {
              ...getMenuStyle(theme, error, width),
            },
          },
        }}
        {...props}
      >
        {options.map((option) => (
          <MenuItem value={option} key={option} multiple={multiselect} checked={value.indexOf(option) !== -1}>
            {multiselect && <StyledCheckbox checked={value.indexOf(option) !== -1} variant="outlined" />}
            <Typography variant="paragraphMedium" color="dropdown.textColor">
              {option}
            </Typography>
          </MenuItem>
        ))}
      </Select>
      <DisplayWithCondition show={errorPosition === "bottom"}>
        <Typography color="dropdown.errorText" variant="paragraphSmall">
          {helperText}
        </Typography>
      </DisplayWithCondition>
    </Wrapper>
  );
};

const getMenuStyle = (theme: Theme, error?: boolean, width?: number) => ({
  width: width ? `${width}px` : "auto",
  background: theme.palette.dropdown.background,
  borderRadius: theme.borderRadius.sm,
  boxShadow: "none",
  border: `2px solid ${error ? theme.palette.dropdown.border.error : theme.palette.dropdown.border.main}`,
  transform: "translateY(5px)",
});

const Wrapper = styled("div")<{ width?: number }>(({ width }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "8px",
  width: width ? `${width}px` : "100%",
}));

const TitleWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const DisplayWithCondition = styled("span")<{ show: boolean }>(({ show }) => ({
  display: show ? "block" : "none",
}));

const Select = styled(MuiSelect)<{ width?: number }>(({ theme, error }) => ({
  width: "100%",

  "& .MuiSelect-select": {
    backgroundColor: theme.palette.dropdown.background,
    transition: "border-radius 0.8s",
    paddingLeft: "14px !important",
    borderRadius: `${theme.borderRadius.sm} !important`,
    padding: "10.5px 14px",

    border: `2px solid ${error ? theme.palette.dropdown.border.error : theme.palette.dropdown.border.main}`,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

const MenuItem = styled(MuiMenuItem)<{ multiple?: boolean; checked: boolean }>(({ multiple, checked }) => ({
  display: "flex",
  padding: "6px 21px",
  columnGap: "16px",

  "&:before": {
    content: '""',
    height: "100%",
    width: "3px",
    position: "absolute",
    left: "0px",
    background: "#C53DD8",
    opacity: !multiple && checked ? 1 : 0,
    transition: "opacity .3s ease-out",
  },

  "&:hover:before": {
    opacity: 1,
  },
}));

const StyledCheckbox = styled(Checkbox)({
  "& > div": {
    width: "20px",
    height: "20px",
  },
});

const IconWrapper = styled("div")({
  position: "absolute",
  pointerEvents: "none",
  right: "25px",
  display: "flex",
  alignItems: "center",
});
