import { createTheme } from "@mui/material/styles";

import { MuiButton } from "@themes/shared_styles";

export default createTheme({
  palette: {
    primary: {
      main: "#397097",
    },
    secondary: {
      main: "#426c8a",
    },
  },
  components: {
    MuiButton,
  },
});
