import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button } from "../../components/Button/Button";
import { updatePopup } from "../../redux/actions/popupsActions";
import { pages } from "../../lib/routeUtils";
import { Popups } from "../../types/popups";

const Mainpage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updatePopup({ popup: Popups.connectWallet, status: true }));
  };

  return (
    <div style={{ padding: "30px", display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <Link to={pages.directSwap()}>
        <h1>Direct swap</h1>
      </Link>

      <Link to={pages.linearVesting()}>
        <h1>Linear vesting</h1>
      </Link>

      <Button onClick={handleClick}>Connect wallet dialog</Button>
    </div>
  );
};

export default Mainpage;
