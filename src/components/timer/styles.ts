import { styled, alpha } from "@mui/material/styles";

export const TimerWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  width: "inherit",
  minHeight: 300,
  margin: "auto",
  background:
    theme.palette.mode == "dark"
      ? "black"
      : alpha(theme.palette.secondary.light, 0.5),
  borderRadius: 5,
  padding: "17px 80px",
  [theme.breakpoints.down("sm")]: {
    padding: "17px 10px !important",
  },
  rowGap: "10px",
  "& button": {
    width: 200,
    height: 55,
    transition: "0.2s boxShadow",
    fontWeight: 600,
    fontSize: "22px",
    boxShadow: "rgb(235 235 235) 0px 6px 0px",
    "&:hover": {
      boxShadow: "rgb(235 235 235) 0px 6px 0px",
    },
    "&:active, &.active": {
      boxShadow: "none",
      marginTop: "6px",
    },
  },

  "& .display": {
    fontSize: "120px",
  },
}));
