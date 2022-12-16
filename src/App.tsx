import { useEffect, useState } from "react";
import { CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";

//contexts
import ThemeProvider from "@contexts/theme";
import TimerProvider from "@contexts/timer";
import ProblemsProvider, { useProblems } from "@contexts/problems";
import LinkerProvider from "@contexts/linker";

//layouts
import MainLayout from "@components/layouts/main";

//components
import Header from "@components/header";
import Timer from "@components/timer";
import List from "@components/list";
import About from "@components/about";

//themes
import reading from "@themes/reading";

//constants
import { mapThemeToIndex } from "@components/stages";
import { storage_version } from "@hooks/useLocalStorage";

const urlPattern =
  /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/g;

const ActiveProblem = () => {
  const { activeProblem } = useProblems();
  const id = new Date().toString();
  const match = activeProblem.replace(
    urlPattern,
    (matched) => id + matched + id
  );

  return (
    <div style={{ marginTop: -25 }}>
      <Typography align="center" color="#ccc">
        #
      </Typography>
      <Typography align="center" variant="body1" color="white">
        {match.split(id).map((str, idx) => {
          if (str.match(urlPattern))
            return (
              <Box
                component="a"
                key={id + idx}
                href={str}
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "white",
                    textDecoration: "underline",
                  },
                }}
                target="_blank"
              >
                {str}
              </Box>
            );
          return str;
        })}
      </Typography>
    </div>
  );
};

function useGetParsedData<T = any>(key: string, ifNoneValue: T) {
  const [data, setData] = useState<T>(ifNoneValue);

  useEffect(() => {
    const JSON_DATA = localStorage.getItem(storage_version + key)!;
    if (!(typeof JSON_DATA === "undefined") && JSON_DATA !== "undefined") {
      setData(JSON.parse(JSON_DATA) ?? ifNoneValue);
    }
  }, []);

  return data;
}

function App() {
  const [isPageLoding, setPageLoading] = useState(true);

  useEffect(() => {
    function onload() {
      document.fonts.ready.then(() => {
        setPageLoading(false);
        setTimeout(() => {
          document.body.style.overflowY = "auto";
        }, 1500);
      });
    }
    window.onload = onload;
    if (document.readyState === "complete") {
      onload();
    }
  }, []);

  //@ts-ignore
  const theme = mapThemeToIndex[useGetParsedData("activeStage", 0)];
  const problems__db = useGetParsedData("problems", []);
  const activeProblem__db = useGetParsedData("activeProblem", "");
  const timers__db = useGetParsedData("timers", []);
  const activeProblemId__db = useGetParsedData("activeProblemId", "");
  const activeStage__db = useGetParsedData("activeStage", 0);
  const startedAt__db = useGetParsedData("startedAt", -1);

  return (
    <>
      <Backdrop
        open={isPageLoding}
        appear={false}
        timeout={1000}
        sx={{
          zIndex: reading.zIndex.modal,
          background: reading.palette.primary.main,
        }}
      >
        <Typography
          color="white"
          sx={{ fontSize: "clamp(14px, 7vw, 60px)" }}
          fontWeight={700}
        >
          Problem Timing Status...
        </Typography>
      </Backdrop>
      {!isPageLoding ? (
        <ThemeProvider theme__db={theme}>
          <>
            <CssBaseline />
            <ProblemsProvider
              problems__db={problems__db}
              activeProblem__db={activeProblem__db}
            >
              <LinkerProvider
                timers__db={timers__db}
                activeProblemId__db={activeProblemId__db}
              >
                <TimerProvider
                  activeStage__db={activeStage__db}
                  startedAt__db={startedAt__db}
                >
                  <MainLayout>
                    <Header />
                    <Timer />
                    <ActiveProblem />
                    <List />
                  </MainLayout>
                </TimerProvider>
              </LinkerProvider>
            </ProblemsProvider>
            <About />
          </>
        </ThemeProvider>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
