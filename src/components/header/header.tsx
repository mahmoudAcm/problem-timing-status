import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";

//components
import { StyledHeader, SettingsButton } from "./styles";

export default function Header() {
  return (
    <StyledHeader>
      <Typography color="white" fontWeight={500} className="logo">
        Problem Timing Status
      </Typography>
      <SettingsButton>
        <SettingsIcon fontSize="small"/>
        setting
      </SettingsButton>
    </StyledHeader>
  );
}
