import { HTMLAttributes, useState, useRef, useCallback } from "react";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//components
import {
  ItemWrapper,
  DropZone,
  StyledItem,
  CheckIcon,
  MenuButton,
} from "./styles";
import Form from "@components/list/form";
//@ts-ignore
import DragItem from "./dragItem";

//conexts
import { useProblems } from "@contexts/problems";

type OnClickHandler = HTMLAttributes<HTMLDivElement>["onClick"];

interface ItemProps {
  id: string;
  active?: boolean;
  checked?: boolean;
  onClick?: OnClickHandler;
  link: string;
  order: number;
}

export default function Item(props: ItemProps) {
  const [isFormOpen, setFormOpening] = useState(false);
  const { toggleFinshed, reorderProblems } = useProblems();
  const draggableEffectRef = useRef<any>();
  const [dragStarted, setDragStarted] = useState(false);

  const toggleChecked: OnClickHandler = (evt) => {
    evt.stopPropagation();
    toggleFinshed(props.id);
  };

  const openMenu: OnClickHandler = (evt) => {
    evt.stopPropagation();
    setFormOpening(true);
  };

  const moveDraggabelItem = useCallback((x: number, y: number) => {
    if (draggableEffectRef.current && x && y) {
      draggableEffectRef.current.style.top = y + 5 + "px";
      draggableEffectRef.current.style.left = x + "px";
    }
  }, []);

  return isFormOpen ? (
    <Form
      isFormOpen={isFormOpen}
      item={true}
      value={props.link}
      setFormOpening={setFormOpening}
      problemId={props.id}
    />
  ) : (
    <ItemWrapper>
      <DragItem
        {...props}
        draggableEffectRef={draggableEffectRef}
        dragStarted={dragStarted}
      />
      <DropZone
        data-order={props.order}
        className="drop-zone"
        onDrop={(evt) => {
          evt.preventDefault();
          reorderProblems(
            Number(evt.dataTransfer.getData("text/plain")!),
            Number(evt.currentTarget.dataset.order!)
          );
        }}
        onDragOver={(evt) => {
          evt.preventDefault();
          evt.dataTransfer.dropEffect = "move";
        }}
      />
      <StyledItem
        data-order={props.order}
        className={props?.active ? "active" : undefined}
        onClick={props.onClick}
        draggable={true}
        onDragStart={(evt) => {
          evt.currentTarget.classList.add("drag-start");
          evt.dataTransfer.effectAllowed = "move";
          evt.dataTransfer.setData(
            "text/plain",
            evt.currentTarget.dataset.order!
          );
          setDragStarted(true);
          document.body.style.overflowX = "hidden";
        }}
        onDrag={(evt) => {
          moveDraggabelItem(evt.nativeEvent.pageX, evt.nativeEvent.pageY);
        }}
        onDragEnd={(evt) => {
          evt.currentTarget.classList.remove("drag-start");
          setDragStarted(false);
          document.body.style.overflowX = "auto";
        }}
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
    </ItemWrapper>
  );
}
