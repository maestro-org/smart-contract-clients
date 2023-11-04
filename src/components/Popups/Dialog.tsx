import { Dialog as MuiDialog, DialogProps, styled } from "@mui/material";
import React from "react";
import { CloseDialogIcon } from "../Icons";
import { IconButton } from "../IconButton/IconButton";

interface Props {
  handleClose: () => void;
}

const Dialog = ({ handleClose, children, ...props }: DialogProps & Props) => {
  return (
    <StyledDialog {...props}>
      {children}
      <CloseButton onClick={handleClose}>
        <CloseDialogIcon />
      </CloseButton>
    </StyledDialog>
  );
};

const StyledDialog = styled(MuiDialog)(() => ({
  "& .MuiPaper-root": {
    background: "transparent",
    boxShadow: "none",
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  background: "transparent",
  width: "16px",
  height: "16px",
  position: "absolute",
  top: "30px",
  right: "23px",

  "&:hover": {
    background: "transparent",
  },

  "& svg": {
    fill: theme.palette.grey.A200,
    width: "16px",
    height: "16px",
  },

  "& rect": {
    fill: theme.palette.grey.A200,
    stroke: theme.palette.grey.A200,
  },
}));

export default Dialog;
