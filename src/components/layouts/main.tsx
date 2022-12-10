import { ReactNode } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

export default function Main({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 490.38,
        [theme.breakpoints.down("sm")]: {
          width: "100vw",
          marginLeft: "10px",
          marginRight: "10px",
        },
        display: "grid",
        rowGap: 5,
        paddingBottom: 1,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {children}
    </Box>
  );
}
