import React from "react";
import { Slider as MuiSlider, SliderProps, styled, Typography } from "@mui/material";

export const Slider = ({ ...props }: SliderProps) => {
  return (
    <Wrapper>
      <StyledSlider {...props} />
      {Number.isFinite(props.max) && Number.isFinite(props.min) && (
        <CaptionWrapper>
          <Typography color="grey.A200" variant="article">
            {props.min}
          </Typography>
          <Typography color="grey.A200" variant="article">
            {props.max}
          </Typography>
        </CaptionWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  rowGap: "4px",
});

const CaptionWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const StyledSlider = styled(MuiSlider)(({ theme }) => ({
  color: theme.palette.slider.main,

  "& .MuiSlider-thumb": {
    width: "16px",
    height: "16px",
  },

  "& .MuiSlider-thumb:hover": {
    boxShadow: `none`,
  },

  "& .Mui-active": {
    boxShadow: `0px 0px 0px 4px ${theme.palette.slider.shadow} !important`,
  },

  "& .MuiSlider-rail": {
    opacity: 1,
    backgroundColor: theme.palette.slider.background,
  },

  "& .MuiSlider-valueLabel": {
    background: "transparent",
    ...theme.typography.paragraphSmall,
    color: theme.palette.grey["A100"],
  },
}));
