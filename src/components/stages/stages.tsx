import { useEffect, useState } from "react";

//components
import { StagesWrapper } from "./styles";

//themes
import reading from "@themes/reading";
import thinking from "@themes/thinking";
import coding from "@themes/coding";
import debugging from "@themes/debugging";

//contexts
import { useTheme } from "@contexts/theme";
import { useTimer } from "@contexts/timer";

const stages = ["Reading", "Thinking", "Coding", "Debugging"];

export const mapThemeToIndex = {
  0: reading,
  1: thinking,
  2: coding,
  3: debugging,
};

export default function Stages() {
  const { activeStage, setActiveStage, started } = useTimer();
  const { setTheme } = useTheme();

  useStageNameAsTitle(activeStage);

  const onClick = (idx: number) => () => {
    if (idx !== activeStage && started) {
      alert("Please stop the timer first.");
      return;
    }
    setActiveStage(idx);
    //@ts-ignore
    setTheme(mapThemeToIndex[idx] as any);
  };

  return (
    <StagesWrapper>
      {stages.map((stage, idx) => (
        <li
          key={idx}
          className={idx === activeStage ? "active" : ""}
          onClick={onClick(idx)}
        >
          {stage}
        </li>
      ))}
    </StagesWrapper>
  );
}

const useStageNameAsTitle = (activeStage: number) => {
  useEffect(() => {
    const stage = stages[activeStage].toLowerCase();
    document.title = "Time for " + stage + "!";
  }, [activeStage]);
};
