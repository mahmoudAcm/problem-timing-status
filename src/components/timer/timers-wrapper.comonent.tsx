import React from 'react';
import { TimersWrapperProps } from './interfaces';
import { TimerComponent } from './timer.component';
import './styles/timers-wrapper.component.css';

export function TimersWrapper({ timers, code }: TimersWrapperProps) {
  return (
    <div>
      <a href={`#${code}`} id={code}>
        {code}
      </a>
      <div className="timers">
        {Object.keys(timers).map((name) => {
          return (
            <TimerComponent
              startWith={timers[name]}
              name={name}
              key={name}
              code={code}
            />
          );
        })}
      </div>
    </div>
  );
}
