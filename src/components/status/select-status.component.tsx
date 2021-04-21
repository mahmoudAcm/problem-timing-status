import React, { useContext, useEffect } from 'react';
import {
  useTheme,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';

import { Context } from '../../context';
import { saveData } from '../../common';

export function SelectStatus() {
  const theme = useTheme();
  const {
    state: {
      StatusReducer: { status },
    },
    dispatch,
  } = useContext(Context);

  function handleChange({ target }: React.ChangeEvent<{ value: string }>) {
    const status = target.value;
    dispatch({
      type: 'STATUS_CHANAGE',
      status,
    });
    saveData('status', status);
  }

  useEffect(() => {
    if (status) {
      dispatch({
        type: 'SET_TIMER',
        status,
      });
    }
  }, [status, dispatch]);

  return (
    <FormControl
      component="fieldset"
      style={{
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
      }}
    >
      <FormLabel component="legend">Status</FormLabel>
      <RadioGroup
        aria-label="status"
        name="status"
        value={status}
        onChange={handleChange}
      >
        <FormControlLabel value="reading" control={<Radio />} label="Reading" />
        <FormControlLabel
          value="thinking"
          control={<Radio />}
          label="Thinking"
        />
        <FormControlLabel value="coding" control={<Radio />} label="Coding" />
        <FormControlLabel
          value="debugging"
          control={<Radio />}
          label="Debugging"
        />
      </RadioGroup>
    </FormControl>
  );
}
