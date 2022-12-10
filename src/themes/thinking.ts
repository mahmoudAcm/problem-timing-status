import { createTheme } from "@mui/material/styles";

import { MuiButton } from "@themes/shared_styles";

export default createTheme({
  palette: {
    primary: {
      main: "#38858a",
    },
    secondary: {
      main: "#417b80",
    },
  },
  components: {
    MuiButton,
  },
});
