import React, { useState } from "react";
import { styled, Tab, Tabs, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Dialog from "../../Dialog/Dialog";
import Card from "../../Card/Card";
import TokenSelectionList from "../TokenSelectionPopup/components/TokenSelectionList";
import NftSelectionList from "./components/NftSelectionList";
import { getAssesSelectionDialog } from "../../../redux/reducers/popupsReducer";
import { updatePopup } from "../../../redux/actions/popupsActions";
import { Popups } from "../../../types/popups";

type ITabValue = "Token" | "NFT";

const AssetSelectionPopup = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getAssesSelectionDialog);
  const [value, setValue] = useState<ITabValue>("Token");

  const handleClose = () => dispatch(updatePopup({ popup: Popups.assetSelection, status: false }));

  const handleTabChange = (event: React.SyntheticEvent, newValue: ITabValue) => {
    setValue(newValue);
  };

  const getCurrentTab = {
    Token: <TokenSelectionList />,
    NFT: <NftSelectionList />,
  };

  return (
    <Dialog open={isOpen} handleClose={handleClose} onClose={handleClose}>
      <Card>
        <Typography color="grey.A200" variant="h6">
          Select Assets
        </Typography>

        <StyledTabs value={value} onChange={handleTabChange} aria-label="wrapped label tabs example">
          <StyledTab value="Token" label="Token" />
          <StyledTab value="NFT" label="NFT" />
        </StyledTabs>

        {getCurrentTab[value]}
      </Card>
    </Dialog>
  );
};

const StyledTab = styled(Tab)({
  "&.MuiTab-root": {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    color: "#0F0311",
    textTransform: "none",
    minHeight: "39px",

    padding: "0",
    alignItems: "flex-start",
    justifyContent: "left",
    minWidth: "74px",
  },
  "&.Mui-selected": {
    fontWeight: "500",
  },
});

const StyledTabs = styled(Tabs)({
  position: "relative",
  minHeight: "39px",

  "& .MuiTabs-indicator": {
    height: "3px",
    bottom: "1px",
  },

  "&:before": {
    content: '""',
    background: "#CCCCCC",
    height: "1px",
    left: "0",
    right: "0",
    bottom: "1px",
    position: "absolute",
  },
});

export default AssetSelectionPopup;
