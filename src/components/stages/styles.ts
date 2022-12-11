import { styled } from "@mui/material/styles";

export const StagesWrapper = styled("ul")(({ theme }) => ({
  display: "flex",
  "& li": {
    listStyleType: "none",
    width: "fit-content",
    height: "fit-content",
    padding: "4px 10px",
    borderRadius: 4,
    color: "white",
    display: theme.palette.mode == "dark"? "none": undefined,
    userSelect: "none",
    cursor: "pointer",
    fontWeight: 400
  },

  "& .active": {
    background: theme.palette.secondary.main,
    fontWeight: 500,
  },
}));
