import React, { useContext, useState, useMemo, useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';

import { useStyles } from './styles';
import { Context } from '../../context';
import { formatTime, saveData } from '../../common';

function Unit(props: any) {
  const classes = useStyles();
  return <div className={classes.unit}>{props.children}</div>;
}

function ToggleTimerButton(props: any) {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      color="primary"
      className={classes.toggleTimerButton}
      onClick={props.handleToggle}
      id="timer-btn"
      disabled={!props.code}
    >
      {!props.isStarted ? 'Start' : 'Stop'}
    </Button>
  );
}

export function Timer() {
  const {
    state: {
      StatusReducer: { status },
      SelectCodeReducer: { code },
      TimerReducer: { timers, initialTime, curTime, isStarted },
    },
    dispatch,
  } = useContext(Context);
  const [interval, init] = useState<any>(null);

  const [houres, minutes, seconds] = useMemo(() => {
    return formatTime(Math.round((initialTime + curTime || 0) / 1000)).split(
      ':',
    );
  }, [initialTime, curTime]);

  useEffect(() => {
    if (isStarted && !interval) {
      init(
        setInterval(() => {
          dispatch({
            type: 'INC_TIMER',
          });
        }, 1000),
      );
    }
    return () => {
      if (interval !== null) clearInterval(interval);
    };
  }, [isStarted, dispatch, interval]);

  function handleToggle() {
    const startedAt = Date.now();
    if (!isStarted) {
      if (interval !== null) clearInterval(interval);
      saveData('startedAt', startedAt);
      init(
        setInterval(() => {
          dispatch({
            type: 'INC_TIMER',
          });
        }, 1000),
      );
    } else {
      clearInterval(interval);

      dispatch({
        type: 'SET_TIMER',
        initialTime: initialTime + curTime,
      });

      timers[status] = initialTime + curTime;
      saveData(code, { timers });
      saveData('startedAt', 0);
    }

    saveData('isStarted', !isStarted);
    dispatch({
      type: 'TIMER_CLICKED',
      startedAt,
    });
  }

  return (
    <Grid container justify="center">
      <Grid item container justify="center">
        <Grid item>
          <Unit>{houres}</Unit>
        </Grid>
        <Grid item>
          <Unit>:{minutes}:</Unit>
        </Grid>
        <Grid item>
          <Unit>{seconds}</Unit>
        </Grid>
      </Grid>
      <Grid item>
        <ToggleTimerButton
          isStarted={isStarted}
          handleToggle={handleToggle}
          code={code}
        />
      </Grid>
    </Grid>
  );
}
