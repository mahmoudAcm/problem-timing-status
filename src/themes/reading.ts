import { createTheme } from "@mui/material/styles";

import { MuiButton } from "@themes/shared_styles";

export default createTheme({
  palette: {
    primary: {
      main: "#ba4949",
    },
    secondary: {
      main: "#a44e4e",
    },
  },
  components: {
    MuiButton,
  },
});
