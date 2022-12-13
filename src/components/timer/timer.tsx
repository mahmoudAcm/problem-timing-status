import { useState, useEffect, useRef, useCallback } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//components
import { TimerWrapper } from "./styles";
import Stages from "@components/stages";

//contexts
import { useTheme } from "@contexts/theme";
import { useTimer } from "@contexts/timer";
import { useProblems } from "@contexts/problems";

//hooks
import useLocalStorage from "@hooks/useLocalStorage";

//helpers
import formatSeconds from "@helpers/formatSeconds";

export default function Timer() {
  const { setMode } = useTheme();
  const {
    startedAt,
    setStartedAt,
    setSeconds,
    seconds,
    started,
    setStarted,
    initialSeconds,
  } = useTimer();
  const { activeProblem } = useProblems();

  useStartTimer(setSeconds, startedAt, started);
  useStartedWatcher();
  useLocalStorage("startedAt", startedAt);

  const toggleTimer = () => {
    if (!activeProblem && !started) {
      return alert("Please select a problem first.");
    }

    setStarted((prev) => !prev);
    if (started) {
      setStartedAt(-1);
    } else {
      setStartedAt(Date.now());
    }
  };

  useEffect(() => {
    setMode(started ? "dark" : "none");
  }, [started]);

  return (
    <TimerWrapper>
      <Stages />
      <Typography
        variant="h1"
        fontWeight={600}
        color="white"
        className="display"
      >
        {formatSeconds(initialSeconds + seconds)}
      </Typography>
      <Button
        variant="contained"
        onClick={toggleTimer}
        className={!started ? "" : "active"}
      >
        {!started ? "Start" : "Pause"}
      </Button>
    </TimerWrapper>
  );
}

const useStartedWatcher = () => {
  const { initialSeconds, setCollectedSeconds, seconds, started } = useTimer();
  useEffect(() => {
    if (!started) {
      console.log(initialSeconds + seconds);
      setCollectedSeconds(initialSeconds + seconds);
    }
  }, [started]);
};

const useStartTimer = (
  setSeconds: (sec: number) => void,
  startedAt: number,
  started: boolean
) => {
  const timerRef = useRef<any>(null);

  const __clearInterval = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    __clearInterval();
    if (startedAt !== -1) {
      timerRef.current = setInterval(() => {
        const secs = Math.round((Date.now() - startedAt) / 1000);
        setSeconds(secs);
      }, 900);
      return;
    }
    __clearInterval();
    return () => __clearInterval();
  }, [startedAt, started]);
};
