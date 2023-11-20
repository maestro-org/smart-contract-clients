import React from "react";
import { styled } from "@mui/material";

import { TextField } from "../../../Textfield/Textfield";
import { SearchIcon } from "../../../Icons";
import { nftsMock } from "../../../../mock/nfts";
import NftSelectionItem from "./NftSelectionItem";

const NftSelectionList = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <TextField customVariant="outlined" startIcon={<SearchIcon />} placeholder="Search by name or ID" />
      </SearchWrapper>

      <ListWrapper>
        {nftsMock.map((elem, index) => (
          <NftSelectionItem key={elem.id} nft={elem} isBigImage={index < 2} />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

const ListWrapper = styled("div")({
  display: "flex",
  rowGap: "24px",
  columnGap: "20px",
  flexWrap: "wrap",
  maxWidth: "292px",
  alignItems: "center",
  justifyContent: "space-between",
});

const SearchWrapper = styled("div")({
  width: "288px",

  "& .MuiInputBase-root": {
    padding: "10.5px 12px",
  },
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export default NftSelectionList;
