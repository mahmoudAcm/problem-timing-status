import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

import { Context } from '../../context';
import { saveData } from '../../common';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function CodeDialog() {
  const {
    state: {
      CodeDialogReducer: { isOpen, reason },
      SelectCodeReducer: { problemCodeList },
    },
    dispatch,
  } = useContext(Context);
  const [code, setCode] = useState('');
  const [helperText, setHelperText] = useState('');

  function handleChange({ target }: any) {
    setCode(target.value);
    setHelperText('');
  }

  function handleClose() {
    dispatch({
      type: 'SET_IS_OPEN',
      isOpen: false,
      reason: 'nothing',
    });
    setCode('');
    setHelperText('');
  }

  function handleClick() {
    let message, newProblemCodeList;
    if (!code) {
      message = 'please fill the field';
    }

    if (reason === 'add') {
      if (problemCodeList.includes(code)) {
        message = 'this code is already created';
      }
      newProblemCodeList = problemCodeList.concat(code);
    } else if (reason === 'remove') {
      newProblemCodeList = problemCodeList.filter(
        (value: string) => value !== code,
      );
    }

    if (message) {
      setHelperText(message);
    } else {
      dispatch({
        type: 'SET_PROBLEM_CODE',
        problemCodeList: newProblemCodeList,
      });
      dispatch({
        type: 'SET_IS_OPEN',
        isOpen: false,
        reason: 'nothing',
      });
      dispatch({
        type: 'SELECT_CODE',
        code: '',
      });
      saveData(code, {
        timers: {
          reading: 0,
          thinking: 0,
          coding: 0,
          debugging: 0,
        },
      });
      saveData('problemCodeList', newProblemCodeList);
      saveData('code', '');

      setHelperText('');
      setCode('');
    }
  }

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">Code dialog</DialogTitle>
      <DialogContent>
        <TextField
          error={!!helperText}
          placeholder="type problem code"
          value={code}
          onChange={handleChange}
          helperText={helperText}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick} color="primary">
          Go
        </Button>
      </DialogActions>
    </Dialog>
  );
}
