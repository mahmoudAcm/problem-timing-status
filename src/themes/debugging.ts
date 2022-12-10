import { createTheme } from "@mui/material/styles";

import { MuiButton } from "@themes/shared_styles";

export default createTheme({
  palette: {
    primary: {
      // main: "#eda157",
      main: "rgb(125, 83, 162)",
    },
    secondary: {
      // main: "#e8903b",
      main: "#755692",
    },
  },
  components: {
    MuiButton,
  },
});
