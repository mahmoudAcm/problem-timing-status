import { createContext, useState, useEffect, useContext } from "react";
import { ThemeProvider as DefaultThemeProvider } from "@mui/material";

//themes
import reading from "@themes/reading";
import play from "@themes/play";

const context = createContext({
  mode: null as any,
  setMode: (mode: "dark" | "none") => {},
  setTheme: (theme: typeof reading) => {},
});

export const useTheme = () => {
  return useContext(context);
};

export default function ThemeProvider({
  children,
  theme__db,
}: {
  children: JSX.Element;
  theme__db: typeof reading;
}) {
  const [theme, setTheme] = useState(theme__db);
  const [mode, setMode] = useState<any>(null);

  useChangeBodyBackgroundColor(mode ?? theme);

  return (
    <DefaultThemeProvider theme={mode ?? theme}>
      <context.Provider
        value={{
          setTheme,
          mode,
          setMode: (mode: "dark" | "none") => {
            if (mode == "dark") {
              setMode(play);
            } else {
              setMode(null);
            }
          },
        }}
      >
        {children}
      </context.Provider>
    </DefaultThemeProvider>
  );
}

const useChangeBodyBackgroundColor = (theme: typeof reading) => {
  useEffect(() => {
    document.body.style.background = theme.palette.primary.main;
  }, [theme]);
};
