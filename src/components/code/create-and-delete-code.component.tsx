import React, { useContext, useState } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';

import { StateContext } from '../state.context';
import { saveData } from '../../common';

const codeRegx = /^CF[1-9]\d*-D[1-4]-[A-E]$/;

export function CreateAndDeleteCode() {
  const context = useContext(StateContext);
  const [helperText, setHelperText] = useState('');
  const [newCode, setNewCode] = useState('');

  function validateCode(code: string) {
    if (!code.match(codeRegx)) {
      return 'please provide a valid code';
    } else {
      return '';
    }
  }

  function handleChange({ target }: React.ChangeEvent<{ value: unknown }>) {
    const code = target.value as string;
    setNewCode(code);

    if (!code) {
      setHelperText('');
      return;
    }

    const message = validateCode(code);
    setHelperText(message);
  }

  function handleClick() {
    if (!newCode) {
      setHelperText('please fill field');
      return;
    }

    const message = validateCode(newCode);
    setHelperText(message);

    if (message) return;

    context.setProblemCodeList((list: Array<string>) => {
      if (list.includes(newCode)) {
        setHelperText('this code is already created');
        return list;
      }
      const newArray = list.concat(newCode);
      saveData('problemCodeList', newArray);
      saveData(newCode, {
        timers: {
          reading: 0,
          thinking: 0,
          coding: 0,
          debugging: 0,
        },
      });
      setNewCode('');
      return newArray;
    });
  }

  function handleRemove() {
    const message = validateCode(newCode);
    setHelperText(message);

    if (message) return;

    context.setProblemCodeList((list: Array<string>) => {
      if (!list.includes(newCode)) {
        setHelperText('this code is not found');
        return list;
      }
      const newArray = list.filter((value) => value !== newCode);
      saveData('problemCodeList', newArray);
      saveData('code', null);
      localStorage.removeItem(newCode);
      context.setCode('');
      setNewCode('');
      return newArray;
    });
  }

  return (
    <Grid container alignItems="center" direction="column" spacing={3}>
      <Grid item>
        <TextField
          required
          label="Create And Delete Code"
          placeholder="code i.e CF101-D2-A"
          value={newCode}
          onChange={handleChange}
          helperText={helperText}
          variant="outlined"
          color="secondary"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid container justify="center" spacing={2}>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={handleClick}>
            create
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={handleRemove}>
            remove
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
