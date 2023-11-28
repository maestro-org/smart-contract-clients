import React, { FC, useState } from "react";
import { styled, Typography } from "@mui/material";

import { InfoBlackIcon, SmallArrowDown } from "../../../Icons";
import { InfoGrayIcon } from "../../../Icons/InfoGrayIcon";
import { Token } from "../../../../types/token";

interface Props {
  isFormValid: boolean;
  tokenAmount: string;
  numberOfInstallments: number | null;
  token: Token | null;
  startDate: Date | null;
  endDate: Date | null;
}

const formatDuration = (startDate: Date, endDate: Date): string => {
  const timeDifference = endDate.getTime() - startDate.getTime();
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  const months = Math.floor(daysDifference / 30);
  const remainingDays = Math.floor(daysDifference % 30);

  const formatNumber = (value: number): string => new Intl.NumberFormat("en").format(value);

  if (months === 0) {
    return `${formatNumber(remainingDays)} day${remainingDays !== 1 ? "s" : ""}`;
  } else {
    const monthStr = `${formatNumber(months)} month${months !== 1 ? "s" : ""}`;
    const dayStr = remainingDays > 0 ? ` ${formatNumber(remainingDays)} day${remainingDays !== 1 ? "s" : ""}` : "";
    return `${monthStr}${dayStr}`;
  }
};

const LinearVestingFee: FC<Props> = ({ tokenAmount, numberOfInstallments, token, startDate, endDate, isFormValid }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const getRewardPeriod = () => {
    if (!tokenAmount || !numberOfInstallments || !token) return "-";
    return `${Math.round((Number(tokenAmount) / numberOfInstallments) * 100) / 100} ${token.name}`;
  };

  const getVestingPeriod = () => {
    if (!startDate || !endDate) return "-";

    return formatDuration(startDate, endDate);
  };

  return (
    <Wrapper>
      <DetailsWrapper>
        <DetailsItem>
          <DetailsTitle>
            <Typography color="grey.A200" variant="paragraphSmall">
              Reward/period
            </Typography>
            <InfoBlackIcon />
          </DetailsTitle>
          <Typography color="grey.A200" variant="paragraphSmall">
            {getRewardPeriod()}
          </Typography>
        </DetailsItem>
        <DetailsItem>
          <DetailsTitle>
            <Typography color="grey.A200" variant="paragraphSmall">
              Vesting period
            </Typography>
            <InfoBlackIcon />
          </DetailsTitle>
          <Typography color="grey.A200" variant="paragraphSmall">
            {getVestingPeriod()}
          </Typography>
        </DetailsItem>
        <DetailsItem>
          <DetailsTitle>
            <Typography color="grey.A200" variant="paragraphSmall">
              Deposit
            </Typography>
            <InfoBlackIcon />
          </DetailsTitle>
          <Typography color="grey.A200" variant="paragraphSmall">
            {isFormValid ? "1.7 ADA" : "-"}
          </Typography>
        </DetailsItem>
        <DetailsItem clickable={true} open={isOpen} onClick={handleClick}>
          <DetailsTitle>
            <Typography color="grey.A200" variant="paragraphSmall">
              Total Fee
            </Typography>
            <SmallArrowDown />
          </DetailsTitle>
          <Typography color="grey.A200" variant="paragraphSmall">
            {isFormValid ? "2.45 ADA" : "-"}
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
                {isFormValid ? "0.17 ADA" : "-"}
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
                {isFormValid ? "1.7 ADA" : "-"}
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
                {isFormValid ? "1 ADA" : "-"}
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

export default LinearVestingFee;
