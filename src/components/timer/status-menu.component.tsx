import React, { useContext } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { useStyles } from './timer.module';
import { StateContext } from '../';
import { saveData } from '../../common';

export function StatusMenu() {
  const classes = useStyles();

  const context = useContext(StateContext);

  function handleChange({ target }: React.ChangeEvent<{ value: unknown }>) {
    const status = target.value as string;
    context.setStatus(status);
    saveData('status', status);
  }

  return (
    <FormControl>
      <InputLabel id="status">Status</InputLabel>
      <Select
        labelId="status"
        id="status-select"
        value={context.status}
        onChange={handleChange}
        className={classes.status_select}
      >
        <MenuItem value="reading">reading</MenuItem>
        <MenuItem value="thinking">thinking</MenuItem>
        <MenuItem value="coding">coding</MenuItem>
        <MenuItem value="debugging">debugging</MenuItem>
      </Select>
    </FormControl>
  );
}
