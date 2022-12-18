import { createContext, useContext, useState, useEffect } from "react";
import uuid from "react-uuid";

//hooks
import useLocalStorage from "@hooks/useLocalStorage";

interface Problem {
  id: string;
  link: string;
  isFinshed: boolean;
  isActive: boolean;
}

interface Action {
  action: "add" | "remove" | "select";
  ids: string[];
}

const context = createContext({
  activeProblem: "",
  problems: [] as Problem[],
  addProblem: (link: string) => {},
  removeProblem: (id: string) => {},
  toggleFinshed: (id: string) => {},
  setProblemAsActive: (id: string) => {},
  editProblemLink: (id: string, value: string) => {},
  markAsFinshed: () => {},
  removeFinshedProblems: () => {},
  removeAllProblems: () => {},
  actions: [] as Action[],
  reorderProblems: (op1: number, op2: number) => {},
});

export const useProblems = () => {
  return useContext(context);
};

export default function ProblemsProvider({
  children,
  activeProblem__db,
  problems__db,
}: {
  children: JSX.Element;
  activeProblem__db: string;
  problems__db: Problem[];
}) {
  const [activeProblem, setActiveProblem] = useState(activeProblem__db);
  const [problems, setProblems] = useState<Problem[]>(problems__db);
  const [actions, setActions] = useState<Action[]>([]);

  useLocalStorage("problems", problems);
  useLocalStorage("activeProblem", activeProblem);

  useEffect(() => {
    if (problems.length == 1) {
      setProblemAsActive(problems[0].id);
    }
  }, [problems]);

  const addProblem = (link: string) => {
    const id = uuid();
    setActions((actions) => [
      { action: "add", ids: [id] },
      ...actions.slice(0, 6),
    ]);
    setProblems((problems) => [
      { link, id, isActive: false, isFinshed: false },
      ...problems,
    ]);
  };

  const removeProblem = (id: string) => {
    setActions((actions) => [
      { action: "remove", ids: [id] },
      ...actions.slice(0, 6),
    ]);
    const problem = problems.find((problem) => problem.id === id);
    if (problem?.isActive) setActiveProblem("");
    setProblems((problems) => problems.filter((problem) => problem.id !== id));
  };

  const toggleFinshed = (id: string) => {
    setProblems((problems) =>
      problems.map((problem) => {
        if (problem.id === id) {
          return { ...problem, isFinshed: !problem.isFinshed };
        }
        return problem;
      })
    );
  };

  const setProblemAsActive = (id: string) => {
    setActions((actions) => [
      { action: "select", ids: [id] },
      ...actions.slice(0, 6),
    ]);

    const problem = problems.find((problem) => problem.id === id);
    setActiveProblem(problem?.link ?? "");
    setProblems((problems) =>
      problems.map((problem) => {
        if (problem.id === id) {
          return { ...problem, isActive: true };
        }
        return { ...problem, isActive: false };
      })
    );
  };

  const editProblemLink = (id: string, value: string) => {
    const problem = problems.find((problem) => problem.id === id);
    if (problem?.isActive) setActiveProblem(value);
    setProblems((problems) =>
      problems.map((problem) => {
        if (problem.id === id) {
          return { ...problem, link: value };
        }
        return problem;
      })
    );
  };

  const markAsFinshed = () => {
    setProblems((problems) =>
      problems.map((problem) => {
        return { ...problem, isFinshed: true };
      })
    );
  };

  const removeFinshedProblems = () => {
    setProblems((problems) => {
      const notFinshedProblems = problems.filter(
        (problem) => !problem.isFinshed
      );

      const problem = problems.find(
        (problem) => problem.isFinshed && problem.isActive
      );
      if (problem) {
        setActiveProblem("");
      }

      setActions((actions) => [
        {
          action: "remove",
          ids: problems
            .filter((problem) => problem.isFinshed)
            .map((problem) => problem.id),
        },
        ...actions.slice(0, 6),
      ]);

      return notFinshedProblems;
    });
  };

  const removeAllProblems = () => {
    setActions((actions) => [
      { action: "remove", ids: [] },
      ...actions.slice(0, 6),
    ]);
    setActiveProblem("");
    setProblems([]);
  };

  const reorderProblems = (draggableOrder: number, dropZoneOrder: number) => {
    console.log(
      `drop zone: ${dropZoneOrder} --- draggable element:: ${draggableOrder}`
    );

    if (dropZoneOrder < draggableOrder) {
      setProblems((problems) => {
        const newProblems = [...problems];
        let curIdx = draggableOrder;
        console.log(problems);
        while (curIdx > dropZoneOrder) {
          swap(curIdx, curIdx - 1, newProblems);
          curIdx--;
        }
        return newProblems;
      });
    } else {
      setProblems((problems) => {
        const newProblems = [...problems];
        let curIdx = draggableOrder;
        while (curIdx < dropZoneOrder) {
          swap(curIdx, curIdx + 1, newProblems);
          curIdx++;
        }
        return newProblems;
      });
    }
  };

  return (
    <context.Provider
      value={{
        actions,
        problems,
        addProblem,
        removeProblem,
        toggleFinshed,
        activeProblem,
        setProblemAsActive,
        editProblemLink,
        markAsFinshed,
        removeFinshedProblems,
        removeAllProblems,
        reorderProblems,
      }}
    >
      {children}
    </context.Provider>
  );
}

function swap(a: number, b: number, problems: Problem[]) {
  const bVal = { ...problems[b] };
  problems[b] = problems[a];
  problems[a] = bVal;
}
