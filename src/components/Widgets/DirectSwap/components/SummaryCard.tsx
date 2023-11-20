import React, { FC } from "react";
import { styled, Typography } from "@mui/material";

interface Props {
  title: string;
  images: string[];
  prices: string[];
}

const SummaryCard: FC<Props> = ({ title, prices, images }) => {
  return (
    <Wrapper>
      <Typography color="grey.A200" variant="h6">
        {title}
      </Typography>
      <Items>
        <ImagesWrapper>
          {images.map((elem, index) =>
            index === 0 ? <BigImage key={elem} src={elem} /> : <SmallImage key={elem} src={elem} />,
          )}
        </ImagesWrapper>
        <PricesWrapper>
          {prices.map((elem) => (
            <Typography key={elem} color="grey.A200" variant="paragraphMedium">
              {elem}
            </Typography>
          ))}
        </PricesWrapper>
      </Items>
    </Wrapper>
  );
};

const PricesWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

const ImagesWrapper = styled("div")({
  display: "flex",
});

const BigImage = styled("img")({
  width: "72px",
  borderRadius: "50%",
});

const SmallImage = styled("img")({
  width: "64px",
  border: "4px solid white",
  borderRadius: "50%",
  marginLeft: "-20px",
});

const Items = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "center",
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "23px",
  textAlign: "center",
  background: "white",
  boxShadow: "0px 10px 35px 0px rgba(0, 0, 0, 0.08)",
  borderRadius: "12px",
  padding: "16px 30px 20px",
  height: "213px",
  width: "100%",
});

export default SummaryCard;
