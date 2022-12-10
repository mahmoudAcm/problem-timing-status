import { useEffect, useState } from "react";
import { CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";

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

//themes
import reading from "@themes/reading";

//constants
import { mapThemeToIndex } from "@components/stages";

const ActiveProblem = () => {
  const { activeProblem } = useProblems();
  return (
    <div style={{ marginTop: -25 }}>
      <Typography align="center" color="#ccc">
        #
      </Typography>
      <Typography align="center" variant="body1" color="white">
        {activeProblem}
      </Typography>
    </div>
  );
};

function getParsedData<T = any>(key: string, ifNoneValue: T) {
  const JSON_DATA = localStorage.getItem(key)!;
  if (!(typeof JSON_DATA === "undefined") && JSON_DATA !== "undefined")
    return JSON.parse(JSON_DATA);
  return ifNoneValue;
}

function App() {
  const [isPageLoding, setPageLoading] = useState(true);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setPageLoading(false);
      setTimeout(() => {
        document.body.style.overflowY = "auto";
      }, 1500);
    });
  }, []);

  return (
    <ThemeProvider
      theme__db={
        //@ts-ignore
        mapThemeToIndex[getParsedData("activeStage", 0)]
      }
    >
      <>
        <CssBaseline />
        <Backdrop
          open={isPageLoding}
          appear={false}
          timeout={1000}
          sx={{
            zIndex: reading.zIndex.modal,
            background: reading.palette.primary.main,
          }}
        >
          <Typography color="white" variant="h4" fontWeight={500}>
            Problem Timing Status...
          </Typography>
        </Backdrop>
        {!isPageLoding ? (
          <ProblemsProvider
            problems__db={getParsedData("problems", [])}
            activeProblem__db={getParsedData("activeProblem", "")}
          >
            <LinkerProvider
              timers__db={getParsedData("timers", [])}
              activeProblemId__db={getParsedData("activeProblemId", "")}
            >
              <TimerProvider
                activeStage__db={getParsedData("activeStage", 0)}
                startedAt__db={getParsedData("startedAt", -1)}
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
        ) : (
          <></>
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
