import React from 'react';
import { Timer } from '../timer/timer.component';
import { TimerListState } from './timer-list-state.interface';
import styles from './timers.module.css';

const types = ['reading', 'thinking', 'coding', 'debugging'];

export function TimerList({ code, timers }: TimerListState) {
  return (
    <div id={code} className={styles['timer-list']}>
      <a href={'#' + code}>{code}</a>
      <div className={styles.timers}>
        {types.map((type) => {
          return (
            <Timer
              time={timers![type]}
              started={false}
              name={type}
              key={code + type}
              code={code}
            />
          );
        })}
      </div>
    </div>
  );
}
