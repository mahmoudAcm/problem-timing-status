import DefaultInput from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

export const StyledHeader = styled("div")(() => ({
  width: "inherit",
  marginTop: -20,
  display: "flex",
  alignItems: "center",
  minHeight: 64,
  borderBottom: "2px solid white",
  "& .title": {
    flex: 1,
  },
  marginBottom: "10px",
}));

export const StyledList = styled("div")(() => ({
  width: "inherit",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
  paddingBottom: "30px",
}));

export const MenuButton = styled("div")(({ theme }) => ({
  background: alpha(theme.palette.secondary.light, 0.5),
  display: "flex",
  padding: "5px",
  borderRadius: 3,
  color: "white",
  cursor: "pointer",
  "&:active": {
    marginTop: "3px",
  },
  position: "absolute",
}));

export const Menu = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 43,
  right: 0,
  width: 200,
  backgroundColor: "white",
  boxShadow: "rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px",
  borderRadius: 5,
  zIndex: theme.zIndex.fab,
  padding: "5px 0px",
  overflow: "hidden",
  "& .item": {
    "& svg": {
      color: "#333333",
    },
    display: "flex",
    alignItems: "center",
    columnGap: 4,
    color: "#333333",
    fontSize: 14,
    padding: "5px 10px",
    "&:hover": {
      backgroundColor: "rgb(241, 238, 238)",
    },
    cursor: "pointer",
  },
}));

export const FormCard = styled("div")(() => ({
  overflow: "hidden",
  "& .content": {
    padding: "10px 16px 10px 22px",
    height: 70,
    display: "flex",
    alignItems: "center",
  },
  background: "white",
  borderRadius: 5,
  boxShadow: "rgb(0 0 0 / 10%) 0px 4px 4px",
  animation: "0.1s ease-in-out 0s 1 normal none running expand",
}));

export const Input = styled(DefaultInput)(() => ({
  padding: 0,
  fontSize: 22,
  fontWeight: "bold",
  color: "rgb(85, 85, 85)",
  "& input::placeholder": {
    fontStyle: "italic !important",
    color: "gray",
  },
}));

export const Action = styled("div")(() => ({
  height: 60,
  background: "rgb(239, 239, 239)",
  display: "flex",
  alignItems: "center",
  padding: "10px 16px 10px 22px",
  columnGap: "15px",
  "& div": {
    flex: 1,
  },
  "& button": {
    textTransform: "capitalize",
    "&:active": {
      marginTop: 6,
    },
  },
  "& .cancel, & .delete": {
    color: "gray",
  },
  "& .save": {
    background: "rgb(34, 34, 34)",
    boxShadow: "rgb(0 0 0 / 20%) 0px 2px 2px",
    color: "white",
    "&:hover": {
      background: "black",
    },
  },
}));

export const Button = styled("button")(() => ({
  height: 64,
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  borderRadius: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  opacity: 0.7,
  border: "2px dashed rgba(255, 255, 255, 0.4)",
  fontWeight: "bold",
  fontSize: 16,
  color: "white",
  "&:hover": {
    opactiy: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  "& .icon": {
    marginRight: 5,
  },
}));

export const StyledFooter = styled("footer")(({ theme }) => ({
  width: "inherit",
  borderTop: "1.5px solid white",
  userSelect: "none",
  height: 68,
  background: alpha(theme.palette.secondary.light, 0.5),
  margin: "20px auto",
  display: "flex",
  alignItems: "center",
  color: "white",
  justifyContent: "center",
  padding: 4,
  columnGap: 15,
  fontSize: 25,
  "& .label": {
    color: "rgba(255, 255, 255, 0.7)",
    marginRight: 8,
    fontSize: "0.9rem",
  },
  "& .number": {
    fontWeight: 600,
    fontSize: "1.4rem",
  },
}));
