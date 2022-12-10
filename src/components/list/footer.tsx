//components
import { StyledFooter } from "./styles";

//contexts
import { useProblems } from "@contexts/problems";

export default function Footer() {
  const { problems } = useProblems();

  if (!problems.length) return <></>;

  const finshedProblmes = problems.filter((problem) => problem.isFinshed);

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
        <span className="label">Left</span>
        <span className="number">
          {problems.length - finshedProblmes.length}
        </span>
      </span>
    </StyledFooter>
  );
}
