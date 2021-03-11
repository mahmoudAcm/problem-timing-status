import React, { useState } from 'react';
import { formatTime } from '../../common/utils';
import { TimerState } from './timer-state.interface';
import styles from './timer.module.css';

export function Timer({ time, started, name, code }: TimerState) {
  const [isStarted, setIsStarted] = useState(started);
  const [curTime, setCurTime] = useState(time);
  const [interval, initInteraval] = useState<NodeJS.Timeout>();

  return (
    <div className={styles.timer}>
      <h3>{name}</h3>
      <h2>{formatTime(curTime)}</h2>
      <button
        className={styles['timer-toggle-btn']}
        onClick={function toggleTimer() {
          if (isStarted) {
            setIsStarted(false);
            clearInterval(interval!);
          } else {
            setIsStarted(true);
            initInteraval(
              setInterval(() => {
                setCurTime((time) => {
                  time++;
                  const storage = JSON.parse(localStorage.getItem(code)!);
                  storage['timers'][name] = time;
                  localStorage.setItem(code, JSON.stringify(storage));
                  return time;
                });
              }, 1000),
            );
          }
        }}
      >
        {isStarted ? 'stop' : 'start'}
      </button>
    </div>
  );
}
