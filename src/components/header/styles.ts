import { styled, alpha } from "@mui/material/styles";

export const StyledHeader = styled("header")(({ theme }) => ({
  width: "100%",
  minHeight: "64px",
  display: "flex",
  opacity: theme.palette.mode == "dark"? 0: 1,
  alignItems: "center",
  borderBottom: `0.7px solid ${alpha(theme.palette.secondary.dark, 0.4)}`,
  "& .logo": {
    flex: 1,
  },
}));

export const SettingsButton = styled("div")(({ theme }) => ({
  padding: "5px 10px",
  background: alpha(theme.palette.secondary.light, 0.5),
  color: alpha("#ffffff", 0.8),
  fontSize: 14,
  userSelect: "none",
  borderRadius: 5,
  cursor: "pointer",
  // display: "flex",
  display: "none",
  alignItems: "center",
  gap: 4,
  "&:hover": {
    color: "white",
  },
}));
