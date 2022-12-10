import { useState } from "react";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ClearIcon from "@mui/icons-material/Clear";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckIcon from "@mui/icons-material/Check";
import { alpha } from "@mui/material/styles"

//components
import { StyledHeader, Menu, MenuButton } from "./styles";

//contexts
import { useProblems } from "@contexts/problems";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { markAsFinshed, removeFinshedProblems, removeAllProblems } =
    useProblems();

  const handleClick = (cb: () => void) => () => {
    cb();
    setOpen(false);
  };

  return (
    <StyledHeader>
      <Typography color="white" fontWeight={500} className="title">
        Problems
      </Typography>
      <ClickAwayListener
        onClickAway={() => {
          setOpen(false);
        }}
      >
        <Box sx={{ position: "relative", height: 34, width: 34 }}>
          <MenuButton
            onClick={() => {
              setOpen((open) => !open);
            }}
          >
            <MoreVertIcon />
          </MenuButton>
          <Fade in={open} timeout={0}>
            <Menu>
              <div
                className="item"
                onClick={handleClick(removeFinshedProblems)}
              >
                <ClearIcon fontSize="small" /> Clear finshed problems
              </div>
              <div className="item" onClick={handleClick(markAsFinshed)}>
                <CheckIcon fontSize="small" /> Mark all as finshed
              </div>
              <Divider sx={{ margin: "0 10px", background: alpha("#fffa", 0.001) }} />
              <div className="item" onClick={handleClick(removeAllProblems)}>
                <ClearIcon fontSize="small"/>
                Clear all problems
              </div>
            </Menu>
          </Fade>
        </Box>
      </ClickAwayListener>
    </StyledHeader>
  );
}
