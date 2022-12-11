import { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import Grow from "@mui/material/Grow";
import Fade from "@mui/material/Fade";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

//components
import { FormCard, Input, Action, Button as FormButton } from "./styles";

//contexts
import { useProblems } from "@contexts/problems";

interface FormProps {
  item?: boolean;
  value?: string;
  isFormOpen?: boolean;
  setFormOpening?: (isOpen: boolean) => void;
  problemId?: string;
}

export default function Form(props: FormProps) {
  const formRef = useRef<any>();
  const inputRef = useRef<any>();
  const { addProblem, editProblemLink, removeProblem } = useProblems();
  const [link, setLink] = useState(props.value ?? "");

  uesScrollResetAndAndingFocus(formRef, inputRef, props.isFormOpen);

  const handleSave = () => {
    if (!link) {
      return alert("Field can't be empty");
    }

    const isEditing = Boolean(props.item);

    if (isEditing) {
      editProblemLink(props.problemId!, link);
    } else {
      addProblem(link);
    }

    setLink("");
    if (props?.setFormOpening) props?.setFormOpening(false);
  };

  const Tansition = props.item ? Grow : Fade;

  return (
    <>
      <Fade in={!props.isFormOpen} timeout={0} unmountOnExit>
        <FormButton
          onClick={() => {
            if (props?.setFormOpening) props?.setFormOpening(true);
          }}
        >
          <span className="icon">
            <AddCircleSharpIcon fontSize="small" />
          </span>
          Add Problem
        </FormButton>
      </Fade>
      <Tansition in={props.isFormOpen} timeout={props.item? 200: 0} unmountOnExit>
        <FormCard ref={formRef}>
          <div className="content">
            <Input
              type="text"
              placeholder="What problem do you solve?"
              fullWidth
              value={link}
              onChange={(evt) => {
                setLink(evt.target.value);
              }}
              inputRef={inputRef}
            />
          </div>
          <Action>
            {props.item ? (
              <Button
                className="delete"
                onClick={() => {
                  removeProblem(props.problemId!);
                }}
              >
                Delete
              </Button>
            ) : (
              <></>
            )}
            <div></div>
            <Button
              className="cancel"
              onClick={() => {
                if (props?.setFormOpening) props?.setFormOpening(false);
              }}
            >
              Cancel
            </Button>
            <Button className="save" onClick={handleSave}>
              Save
            </Button>
          </Action>
        </FormCard>
      </Tansition>
    </>
  );
}

function uesScrollResetAndAndingFocus(
  formRef: any,
  inputRef: any,
  isFormOpen?: boolean
) {
  useEffect(() => {
    if (!isFormOpen) return;

    inputRef.current?.focus();
    window.scrollTo({
      top: formRef.current?.offsetTop,
      behavior: "smooth",
    });
  }, [formRef, inputRef, isFormOpen]);
}
