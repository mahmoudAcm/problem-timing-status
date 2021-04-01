import React, {
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Button, Typography } from '@material-ui/core';

import { useStyles } from './timer.module';
import { loadData, saveData, formatTime, useMyState } from '../../common';
import { StateContext } from '../state.context';

export function TimerController() {
  const context = useContext(StateContext);
  const storage = useMemo(() => loadData(context.code), [context.code]);
  const [, setTimerInterval] = useState<any>(null);
  const [isStarted, setIsStarted] = useState<boolean>(loadData('isStarted'));
  const [curTime, setCurTime] = useState(0);
  const [totalTime, setTotalTime] = useMyState<number>(
    storage.timers[context.status],
  );

  const classes = useStyles();

  const setTime = useCallback(function (startedAt: number) {
    return () => {
      const curTime = Date.now() - startedAt;
      setCurTime(curTime);
    };
  }, []);

  useEffect(() => {
    if (isStarted) {
      setTimerInterval((interval: any) => {
        if (interval === null) {
          return setInterval(setTime(loadData('startedAt')), 1000);
        }
        return interval;
      });
    }
  }, [isStarted, setTimerInterval, setTime]);

  function handleClick() {
    setIsStarted((isStarted) => {
      const isStartedCopy = !isStarted;
      saveData('isStarted', isStartedCopy);

      if (isStarted) {
        setTimerInterval((interval: any) => {
          clearInterval(interval);
          return interval;
        });
        setCurTime((curTime) => {
          const time = curTime + totalTime;
          storage.timers[context.status] = time;
          saveData(context.code, storage);
          saveData('startedAt', 0);
          setTotalTime(time);
          return 0;
        });
      } else {
        const startedAt = Date.now();
        saveData('startedAt', startedAt);
        setTimerInterval(setInterval(setTime(startedAt), 1000));
      }

      return isStartedCopy;
    });
  }

  return (
    <div className={classes.center}>
      <Typography variant="h1">
        {formatTime(Math.round((curTime + totalTime) / 1000))}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.timerBtn}
        onClick={handleClick}
      >
        {isStarted ? 'stop' : 'start'}
      </Button>
    </div>
  );
}
