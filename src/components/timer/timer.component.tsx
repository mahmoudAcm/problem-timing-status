import React, { useContext, useState, useMemo, useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

import { useStyles } from './styles';
import { Context } from '../../context';
import { formatTime, saveData } from '../../common';

export function Timer() {
  const classes = useStyles();
  const {
    state: {
      StatusReducer: { status },
      SelectCodeReducer: { code },
      TimerReducer: { timers, initialTime, curTime, isStarted },
    },
    dispatch,
  } = useContext(Context);
  const [interval, init] = useState<any>(null);

  const [houres, minutes, seconds] = useMemo(
    () => formatTime(Math.round((initialTime + curTime) / 1000)).split(':'),
    [initialTime, curTime],
  );

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

  function handleClick() {
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
          <div className={classes.text}>Houres</div>
          <div className={classes.unit}>{houres}</div>
        </Grid>
        <Grid item>
          <div className={classes.text}>Minutes</div>
          <div className={classes.unit}>:{minutes}:</div>
        </Grid>
        <Grid item>
          <div className={classes.text}>Seconds</div>
          <div className={classes.unit}>{seconds}</div>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="primary"
          className={classes.btn}
          onClick={handleClick}
        >
          {isStarted ? <PauseIcon /> : <PlayArrowIcon />}
        </Button>
      </Grid>
    </Grid>
  );
}
