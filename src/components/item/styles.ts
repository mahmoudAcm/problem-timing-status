import { styled, alpha } from "@mui/material/styles";

export const StyledItem = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: 64,
  background: "white",
  borderRadius: 5,
  padding: "10px 16px 10px 16px",
  userSelect: "none",
  boxShadow: "rgb(0 0 0 / 10%) 0px 4px 4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  columnGap: "10px",
  borderLeft: "6px solid transparent",
  transition: "0.2s border-left-color,margin-top",
  "&:hover": {
    borderLeftColor: "rgb(204, 204, 204)",
  },
  "&.active": {
    borderLeftColor: "black",
    marginTop: 3,
  },
  "& .link": {
    flex: 1,
    wordBreak: "break-word",
  },
  [theme.breakpoints.down("sm")]: {
    "& .link": {
      width: "90%",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
}));

export const CheckIcon = styled("div")(() => ({
  width: 22,
  height: 22,
  border: "2px solid rgb(204, 204, 204)",
  backgroundColor: "rgb(204, 204, 204)",
  borderRadius: "50%",
  "&::after": {
    content: '""',
    display: "block",
    marginLeft: 7,
    marginTop: 3,
    width: 5,
    height: 11,
    borderStyle: "solid",
    borderColor: "rgb(255, 255, 255)",
    borderWidth: "0px 3px 3px 0px",
    transform: "rotate(45deg)",
  },
  "&:hover": {
    opacity: 0.6,
  },
  "& ~:first-of-type": {
    color: "rgb(85, 85, 85)",
  },
  "&.checked": {
    backgroundColor: "rgb(186, 73, 73)",
    border: "2px solid rgb(186, 73, 73)",
    "& ~:first-of-type": {
      textDecoration: "line-through",
      color: "rgb(204, 204, 204)",
    },
  },
}));

export const MenuButton = styled("div")(({ theme }) => ({
  //   background: alpha(theme.palette.secondary.light, 0.5),
  display: "flex",
  padding: "5px",
  borderRadius: 3,
  border: "1px solid rgb(223, 223, 223)",
  color: "gray",
  cursor: "pointer",
  transition: "0.2s background-color",
  "&:active": {
    marginTop: "3px",
  },
  "&:hover": {
    backgroundColor: alpha("#ccc", 0.7),
  },
}));
