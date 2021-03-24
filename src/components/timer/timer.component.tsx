import React, { useState } from 'react';
import { formatTime, getTime } from '../../common/utils';
import { TimerState } from './timer-state.interface';
import styles from './timer.module.css';

export function Timer({ time, started, name, code }: TimerState) {
  const [state, setState] = useState({
    time,
    curTime: 0,
  });
  const [isStarted, setStarted] = useState(started);
  const [interval, setTimer] = useState<NodeJS.Timeout>();

  return (
    <div className={styles.timer}>
      <h3>{name}</h3>
      <h2>{formatTime(state.curTime + state.time)}</h2>
      <button
        className={styles['timer-toggle-btn']}
        onClick={function toggleTimer() {
          if (isStarted) {
            setStarted(false);
            clearInterval(interval!);
            setState(({ time, curTime }) => ({
              time: time + curTime,
              curTime: 0
            }));
          } else {
            const started = getTime();
            setStarted(true);
            setTimer(
              setInterval(() => {
                setState(({ time }) => {
                  const total_time = getTime() - started;
                  document.title = formatTime(total_time + time);

                  //local storage
                  const storage = JSON.parse(localStorage.getItem(code)!);
                  storage['timers'][name] = total_time + time;
                  localStorage.setItem(code, JSON.stringify(storage));

                  return {
                    time,
                    curTime: total_time,
                  };
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
