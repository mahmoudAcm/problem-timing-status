import React, { useContext, useMemo } from 'react';
import { Fab, Snackbar, SnackbarContent, Slide, Grid } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { TransitionProps } from '@material-ui/core/transitions';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';

import { useStyles } from './timer.module';
import { StateContext } from '../state.context';
import { formatTime, loadData } from '../../common';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={5} variant="filled" {...props} />;
}

function SlideTransition(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

export function Summary() {
  const context = useContext(StateContext);
  const classes = useStyles();
  const { keys, timers, totalTime } = useMemo(() => {
    const keys = ['reading', 'thinking', 'coding', 'debugging'];

    if (!context.code || !context.isOpen)
      return { keys, timers: {}, totalTime: 0 };

    const { timers } = loadData(context.code);
    const totalTime = keys.reduce((total, status) => total + timers[status], 0);
    return {
      keys,
      timers,
      totalTime,
    };
  }, [context.code, context.isOpen]);

  function handleSummaryClick() {
    context.setIsOpen(false);
    setTimeout(() => {
      context.setIsOpen(true);
    }, 200);
  }

  function handleClose() {
    context.setIsOpen(false);
  }

  return (
    <>
      <div className={classes.summaryButton}>
        <Fab
          color="primary"
          aria-label="report"
          title="get a summary"
          onClick={handleSummaryClick}
        >
          <ReportOutlinedIcon />
        </Fab>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={context.isOpen && !!context.code}
        TransitionComponent={SlideTransition}
      >
        <SnackbarContent
          elevation={0}
          style={{ background: 'none' }}
          message={
            <Grid container direction="column" spacing={1}>
              {keys.map((status) => (
                <Grid item>
                  <Alert severity="info" onClose={handleClose} key={status}>
                    {status}:
                    {formatTime(Math.round((timers[status] || 0) / 1000))}
                  </Alert>
                </Grid>
              ))}
              <Grid item>
                <Alert severity="info">
                  total time: {formatTime(Math.round(totalTime / 1000))}
                </Alert>
              </Grid>
            </Grid>
          }
        />
      </Snackbar>
    </>
  );
}
