import { createContext, useContext, useEffect, useState, useMemo } from "react";

//contexts
import { useProblems } from "./problems";

//hooks
import useLocalStorage from "@hooks/useLocalStorage";

interface Timer {
  problemId: string;
  stages: Record<number, number>;
}

const stages = { 0: 0, 1: 0, 2: 0, 3: 0 };

const context = createContext({
  timers: [] as Timer[],
  problemTimerState: stages as Record<number, number>,
  updateProblemTimer: (stages: Record<number, number>) => {},
});

export const useLinker = () => {
  return useContext(context);
};

export default function LinkerProvider({
  children,
  timers__db,
  activeProblemId__db,
}: {
  children: JSX.Element;
  timers__db: Timer[];
  activeProblemId__db: string;
}) {
  const [timers, setTimers] = useState<Timer[]>(timers__db);
  const { actions } = useProblems();
  const [activeProblemId, setActiveProblemId] = useState(activeProblemId__db);

  useLocalStorage("timers", timers);
  useLocalStorage("activeProblemId", activeProblemId);

  useEffect(() => {
    if (!actions.length) return;
    const lastAction = actions[0];

    if (lastAction.action === "select") {
      setActiveProblemId(lastAction.ids[0]);
      return;
    }

    if (lastAction.action === "add") {
      setTimers((timers) => [
        ...timers,
        { stages, problemId: lastAction.ids[0] },
      ]);
    } else if (lastAction.action === "remove" && lastAction.ids.length) {
      const ids = lastAction.ids;
      setTimers((timers) =>
        timers.filter((timer) => !ids.includes(timer.problemId))
      );
    }
  }, [actions]);

  const updateProblemTimer = (initialState: Record<number, number>) => {
    setTimers((timers) =>
      timers.map((timer) => {
        if (timer.problemId === activeProblemId) {
          return { problemId: activeProblemId, stages: initialState };
        }
        return timer;
      })
    );
  };

  const problemTimerState =
    timers.find((timer) => timer.problemId === activeProblemId)?.stages ??
    stages;
    
  console.log(problemTimerState);

  return (
    <context.Provider
      value={{
        timers,
        problemTimerState,
        updateProblemTimer,
      }}
    >
      {children}
    </context.Provider>
  );
}
