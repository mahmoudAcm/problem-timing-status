import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { useStyles } from './code.module';
import { StateContext } from '../state.context';
import { saveData } from '../../common';

export function SelectCode() {
  const context = useContext(StateContext);
  const classes = useStyles();

  function handleChange(...data: any) {
    const code = data[1];
    saveData('code', code);
    context.setCode(code);
    context.setIsOpen(false);
  }
  return (
    <Autocomplete
      className={classes.selectCode}
      id="code"
      options={context.problemCodeList as Array<string>}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField {...params} label="Code" variant="outlined" />
      )}
      onChange={handleChange}
      value={context.code}
    />
  );
}
