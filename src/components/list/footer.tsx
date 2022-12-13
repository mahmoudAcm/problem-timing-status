//components
import { StyledFooter } from "./styles";

//contexts
import { useProblems } from "@contexts/problems";
import { useLinker } from "@contexts/linker";

//helpers
import formatSeconds from "@helpers/formatSeconds";

export default function Footer() {
  const { problems } = useProblems();
  const { timers } = useLinker();

  if (!problems.length) return <></>;

  const finshedProblmes = problems.filter((problem) => problem.isFinshed);
  const totalSeconds = timers.reduce(
    (total, timer) =>
      total +
      Object.values(timer.stages).reduce((time, stage) => time + stage, 0),
    0
  );

  return (
    <StyledFooter>
      <span>
        <span className="label">Total:</span>
        <span className="number">{problems.length}</span>
      </span>
      <span>
        <span className="label">Finshed:</span>
        <span className="number">{finshedProblmes.length}</span>
      </span>
      <span>
        <span className="label">Total time</span>
        <span className="number">
          {formatSeconds(totalSeconds)}
        </span>
      </span>
    </StyledFooter>
  );
}
