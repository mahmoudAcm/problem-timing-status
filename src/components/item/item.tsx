import { HTMLAttributes, useState, useId } from "react";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//components
import { StyledItem, CheckIcon, MenuButton } from "./styles";
import Form from "@components/list/form";

//conexts
import { useProblems } from "@contexts/problems";

type OnClickHandler = HTMLAttributes<HTMLDivElement>["onClick"];

interface ItemProps {
  id: string;
  active?: boolean;
  checked?: boolean;
  onClick?: OnClickHandler;
  link: string;
}

export default function Item(props: ItemProps) {
  const [isFormOpen, setFormOpening] = useState(false);
  const { toggleFinshed } = useProblems();

  const toggleChecked: OnClickHandler = (evt) => {
    evt.stopPropagation();
    toggleFinshed(props.id);
  };

  const openMenu: OnClickHandler = (evt) => {
    evt.stopPropagation();
    setFormOpening(true);
  };

  return isFormOpen ? (
    <Form
      isFormOpen={isFormOpen}
      item={true}
      value={props.link}
      setFormOpening={setFormOpening}
      problemId={props.id}
    />
  ) : (
    <StyledItem
      className={props?.active ? "active" : undefined}
      onClick={props.onClick}
    >
      <CheckIcon
        onClick={toggleChecked}
        className={props.checked ? "checked" : undefined}
      />
      <Typography fontWeight={500} className="link">
        {props.link}
      </Typography>
      <MenuButton onClick={openMenu}>
        <MoreVertIcon />
      </MenuButton>
    </StyledItem>
  );
}
