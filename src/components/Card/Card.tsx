import { styled } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return <StyledCard>{children}</StyledCard>;
};

const StyledCard = styled("div")(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  boxShadow: "0px 2px 12px 0px rgba(153, 153, 153, 0.12)",
  borderRadius: theme.borderRadius.sm,
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  rowGap: "24px",
}));

export default Card;
