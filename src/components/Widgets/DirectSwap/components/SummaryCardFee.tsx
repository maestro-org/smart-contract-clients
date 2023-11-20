import React, { useState } from "react";
import { styled, Typography } from "@mui/material";

import { SmallArrowDown } from "../../../Icons";
import { InfoGrayIcon } from "../../../Icons/InfoGrayIcon";

const SummaryCardFee = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <Wrapper onClick={handleClick}>
      <DetailsWrapper>
        <DetailsItem open={isOpen}>
          <DetailsTitle>
            <Typography color="grey.A200" variant="paragraphSmall">
              Total Fee
            </Typography>
            <SmallArrowDown />
          </DetailsTitle>
          <Typography color="grey.A200" variant="paragraphSmall">
            2.45 ADA
          </Typography>
        </DetailsItem>
      </DetailsWrapper>
      {isOpen && (
        <>
          <Separator />
          <DetailsWrapper>
            <DetailsItem>
              <DetailsTitle>
                <Typography color="grey.400" variant="paragraphSmall">
                  Transaction Fee
                </Typography>
                <InfoGrayIcon />
              </DetailsTitle>
              <Typography color="grey.400" variant="paragraphSmall">
                0.17 ADA
              </Typography>
            </DetailsItem>
            <DetailsItem>
              <DetailsTitle>
                <Typography color="grey.400" variant="paragraphSmall">
                  Frontend Fee
                </Typography>
                <InfoGrayIcon />
              </DetailsTitle>
              <Typography color="grey.400" variant="paragraphSmall">
                1.7 ADA
              </Typography>
            </DetailsItem>
            <DetailsItem>
              <DetailsTitle>
                <Typography color="grey.400" variant="paragraphSmall">
                  Contract Fee
                </Typography>
                <InfoGrayIcon />
              </DetailsTitle>
              <Typography color="grey.400" variant="paragraphSmall">
                1. ADA
              </Typography>
            </DetailsItem>
          </DetailsWrapper>
        </>
      )}
    </Wrapper>
  );
};

const Separator = styled("div")({
  width: "100%",
  height: "1px",
  background: "#e6e6e6",
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "16px",
  background: "white",
  boxShadow: "0px 10px 35px 0px rgba(0, 0, 0, 0.08)",
  borderRadius: "12px",
  cursor: "pointer",
});

const DetailsWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  rowGap: "8px",
  width: "100%",
});

const DetailsItem = styled("div")<{ open?: boolean }>(({ open }) => ({
  display: "flex",
  justifyContent: "space-between",

  svg: {
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
  },

  "& span": {
    lineHeight: "16px !important",
  },
}));

const DetailsTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  columnGap: "4px",
});

export default SummaryCardFee;
