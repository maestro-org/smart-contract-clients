import { TooltipProps, Tooltip as MuiTooltip, styled } from "@mui/material";
import React from "react";

export const Tooltip = ({ ...props }: TooltipProps) => <StyledTooltip {...props} />;

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  "& .MuiTooltip-tooltip": {
    background: theme.palette.primary.main,
  },
}));
