import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTokenSelectionDialog } from "../../../redux/reducers/popupsReducer";
import { updatePopup } from "../../../redux/actions/popupsActions";

import Dialog from "../../Dialog/Dialog";

import { Popups } from "../../../types/popups";
import Card from "../../Card/Card";
import { Typography } from "@mui/material";
import TokenSelectionList from "./components/TokenSelectionList";

const TokenSelectionPopup = () => {
  const isOpen = useSelector(getTokenSelectionDialog);

  const dispatch = useDispatch();

  const handleClose = () => dispatch(updatePopup({ popup: Popups.tokenSelection, status: false }));

  return (
    <Dialog open={isOpen} handleClose={handleClose} onClose={handleClose}>
      <Card>
        <Typography color="grey.A200" variant="h6">
          Select Token
        </Typography>
        <TokenSelectionList />
      </Card>
    </Dialog>
  );
};

export default TokenSelectionPopup;
