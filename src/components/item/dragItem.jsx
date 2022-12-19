import Typography from "@mui/material/Typography";
import Portal from "@mui/material/Portal";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//components
import { StyledItem, CheckIcon, MenuButton } from "./styles";

export default function DragItem(props) {
  if (!props.dragStarted) return <></>;
  return (
    <Portal>
      <StyledItem
        className={[props?.active ? "active" : undefined, "dragItem"]
          .filter(Boolean)
          .join(" ")}
        ref={props.draggableEffectRef}
      >
        <CheckIcon className={props.checked ? "checked" : undefined} />
        <Typography fontWeight={500} className="link">
          {props.link}
        </Typography>
        <MenuButton>
          <MoreVertIcon />
        </MenuButton>
      </StyledItem>
    </Portal>
  );
}
