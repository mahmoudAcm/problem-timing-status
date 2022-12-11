import { useState, useId } from "react";

//components
import Header from "./header";
import Footer from "./footer";
import Form from "./form";
import Item from "@components/item";
import { StyledList } from "./styles";

//contexts
import { useTheme } from "@contexts/theme";
import { useProblems } from "@contexts/problems";
import { useTimer } from "@contexts/timer";

export default function List() {
  const id = useId();
  const { mode } = useTheme();
  const [isFormOpen, setFormOpening] = useState(false);
  const { problems, setProblemAsActive } = useProblems();
  const { started } = useTimer();

  const onClick = (id: string) => () => {
    if (started) {
      alert("Please stop the timer first.");
      return;
    }
    setProblemAsActive(id);
  };

  if (mode) return <></>;

  return (
    <StyledList>
      <Header />
      {problems.map((problem) => (
        <Item
          id={problem.id}
          key={problem.id}
          onClick={onClick(problem.id)}
          active={problem.isActive}
          checked={problem.isFinshed}
          link={problem.link}
        />
      ))}
      <Form setFormOpening={setFormOpening} isFormOpen={isFormOpen} />
      <Footer />
    </StyledList>
  );
}
