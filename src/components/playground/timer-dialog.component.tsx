import React, { useContext } from 'react';
import { Dialog, DialogContent, Grid, Typography } from '@material-ui/core';

import { loadData, saveData } from '../../common';
import { Context } from '../../context';
import { SelectStatus } from '../status';
import { Timer } from '../timer';

interface TimerDialogProps {
  open: boolean;
  code: string;
}

function DialogTitle(props: any) {
  return (
    <Typography
      style={{
        fontFamily: 'Reenie Beanie',
      }}
      variant="h5"
    >
      {props.title}
    </Typography>
  );
}

export function TimerDialog({ open, code }: TimerDialogProps) {
  const { dispatch } = useContext(Context);

  function handleClose() {
    const isStarted = loadData('isStarted');
    saveData('code', '');
    saveData('status', 'reading');

    dispatch({
      type: 'SELECT_CODE',
      code: '',
    });

    const timer_btn = document.getElementById('timer-btn');
    if (isStarted && timer_btn) timer_btn.click();
  }

  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
      <DialogContent>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item md={12}>
            <DialogTitle title={code} />
          </Grid>
          <Grid item md={1}>
            <SelectStatus />
          </Grid>
          <Grid item md={11}>
            <Timer />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
