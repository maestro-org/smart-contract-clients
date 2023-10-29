import { styled } from "@mui/material";

export const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",

  ".recharts-surface": {
    ".recharts-sector": {
      transition: "opacity 0.2s, transform 1.2s",
      transformOrigin: "inherit",

      "&:hover": {
        opacity: 0.75,
      },
    },

    "&.animated .recharts-sector": {
      transform: "none !important",
    },
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
