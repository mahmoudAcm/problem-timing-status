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
      TimerReducer: { timers, curTime, timer, isStarted },
    },
    dispatch,
  } = useContext(Context);
  const [interval, init] = useState<any>(null);

  const [houres, minutes, seconds] = useMemo(
    () => formatTime(Math.round((curTime + timer) / 1000)).split(':'),
    [curTime, timer],
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
  }, [isStarted, dispatch, interval]);

  function handleClick() {
    const startedAt = Date.now();
    if (!isStarted) {
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
        curTime: curTime + timer,
      });

      timers[status] = curTime + timer;
      saveData(code, { timers });
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
