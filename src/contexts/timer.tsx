import { createContext, useState, useRef, useContext, useEffect } from "react";

//contexts
import { useLinker } from "@contexts/linker";

//hooks
import useLocalStorage from "@hooks/useLocalStorage";

const context = createContext({
  activeStage: 0,
  setActiveStage: (idx: number) => {},
  startedAt: -1,
  setStartedAt: (sec: number) => {},
  seconds: 0,
  setSeconds: (sec: number) => {},
  started: false,
  setStarted: (started: boolean | ((started: boolean) => boolean)) => {},
  setCollectedSeconds: (sec: number) => {},
  initialSeconds: 0,
});

export const useTimer = () => {
  return useContext(context);
};

export default function TimerProvider({
  children,
  activeStage__db,
  startedAt__db,
}: {
  children: JSX.Element;
  activeStage__db: number;
  startedAt__db: number;
}) {
  const [activeStage, setActiveStage] = useState(activeStage__db);
  const [seconds, setSeconds] = useState(0);
  const [startedAt, setStartedAt] = useState(startedAt__db);
  const [started, setStarted] = useState(startedAt__db !== -1);

  const { problemTimerState, updateProblemTimer } = useLinker();

  useLocalStorage("activeStage", activeStage);

  const setCollectedSeconds = (seconds: number) => {
    updateProblemTimer({
      ...problemTimerState,
      [activeStage]: seconds,
    });
    setSeconds(0);
  };

  const initialSeconds = problemTimerState[activeStage] ?? 0;

  return (
    <context.Provider
      value={{
        activeStage,
        setActiveStage,
        startedAt,
        setStartedAt,
        seconds,
        setSeconds,
        started,
        setStarted,
        initialSeconds,
        setCollectedSeconds,
      }}
    >
      {children}
    </context.Provider>
  );
}
