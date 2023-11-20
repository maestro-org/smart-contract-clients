import React, { FC } from "react";
import { useSelector } from "react-redux";
import { styled, Typography } from "@mui/material";

import { Nft } from "../../../../types/nft";
import { ArrowBottomLeftIcon } from "../../../Icons";
import { getPrefilled } from "../../../../redux/reducers/popupsReducer";

interface Props {
  nft: Nft;
  isBigImage: boolean;
}

const NftSelectionItem: FC<Props> = ({ nft, isBigImage }) => {
  const prefilled = useSelector(getPrefilled);

  const { handleTokenClick } = prefilled || {};

  return (
    <Wrapper onClick={handleTokenClick ? () => handleTokenClick(nft) : undefined}>
      <StyledImage src={nft.logo} isBigImage={isBigImage} />
      <Typography variant="paragraphMedium" color="grey.A200" lineHeight="20px">
        {nft.name}
      </Typography>
      {isBigImage && (
        <PercentageWrapper>
          <ArrowBottomLeftIcon />
          <Typography variant="paragraphSmall" color="error.main" fontWeight={500} lineHeight="16px">
            {nft.percentage}%
          </Typography>
        </PercentageWrapper>
      )}
    </Wrapper>
  );
};

const PercentageWrapper = styled("div")({
  display: "flex",
  gap: "4px",
  alignItems: "center",
});

const StyledImage = styled("img")<{ isBigImage: boolean }>(({ isBigImage }) => ({
  width: isBigImage ? "136px" : "80px",
  marginBottom: isBigImage ? "4px" : "0px",
  borderRadius: "2px",
}));

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  cursor: "pointer",
});

export default NftSelectionItem;
