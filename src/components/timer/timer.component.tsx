import React, { useState, createRef, useEffect, useRef } from 'react';
import { TimerService } from './timer.service';
import { TimerProps } from './interfaces';
import './styles/timer-toggle-button.component.css';

export function TimerComponent({ startWith, name, code }: TimerProps) {
  const timerText = useRef<HTMLHeadingElement>(createRef<any>().current);
  const [timer, setTimer] = useState<TimerService>();

  useEffect(() => {
    setTimer(new TimerService(timerText.current!, startWith));
  }, [startWith]);

  useEffect(() => {
    setInterval(() => {
      if (!timer) return;
      const data = JSON.parse(localStorage.getItem(code)!);
      data[name] = timer.getTime();
      localStorage.setItem(code, JSON.stringify(data));
    }, 500);
  }, [code, timer, name]);

  return (
    <div>
      <h3>{name}</h3>
      <h2 ref={timerText}>{timer?.formatTime(startWith)}</h2>
      <button
        className="toggle-btn"
        onClick={function toggleTimer({ target }: any) {
          if ((target as HTMLElement).textContent === 'start') {
            target.innerText = 'stop';
            timer?.start();
          } else {
            target.innerText = 'start';
            timer?.stop();
          }
        }}
      >
        start
      </button>
    </div>
  );
}
