import React, { FC, useState } from "react";
import { styled, Typography } from "@mui/material";

import { InfoBlackIcon, SmallArrowDown } from "../../../Icons";
import { InfoGrayIcon } from "../../../Icons/InfoGrayIcon";

interface Props {
  isFormValid: boolean;
}

const DirectSwapFee: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <DetailsWrapper>
        <DetailsItem>
          <DetailsTitle>
            <Typography color="grey.A200" variant="paragraphSmall">
              Deposit
            </Typography>
            <InfoBlackIcon />
          </DetailsTitle>
          <Typography color="grey.A200" variant="paragraphSmall">
            1.7 ADA
          </Typography>
        </DetailsItem>
        <Separator />

        <DetailsItem clickable={true} open={isOpen} onClick={handleClick}>
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
  margin: "12px 0",
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "100%",
});

const DetailsWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  rowGap: "4px",
  width: "100%",
});

const DetailsItem = styled("div")<{ clickable?: boolean; open?: boolean }>(({ clickable, open }) => ({
  display: "flex",
  justifyContent: "space-between",
  cursor: clickable ? "pointer" : "auto",

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

export default DirectSwapFee;
