import React, { useEffect, useState } from 'react';
import { TimerList } from '..';
import styles from './dashboard.module.css';

const validCodeRegx = /^CF[1-9][0-9]*-D[1-3]-[A-D]$/;

export function Dashboard() {
  const [action, setAction] = useState('add');
  const [code, setCode] = useState('');
  const [problems, setProblems] = useState<any>({});
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    var keys = Object.keys(localStorage);
    var problems: any = {};
    setKeys(keys);
    for (const key of keys) {
      problems[key] = JSON.parse(localStorage.getItem(key)!);
    }
    setProblems(problems);
  }, []);

  return (
    <div className={styles.app}>
      <form
        className={styles.controller}
        onSubmit={function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
          ev.preventDefault();
          if (!code) {
            return alert('please fill the input');
          }

          if (!code.match(validCodeRegx)) {
            return alert('please provide a valid code');
          }

          if (action === 'add') {
            const storage = {
              code,
              timers: {
                reading: 0,
                thinking: 0,
                coding: 0,
                debugging: 0,
              },
            };
            setProblems((prevProblems: any) => {
              prevProblems[code] = storage;
              return prevProblems;
            });

            setKeys((keys) => {
              if (keys.includes(code)) return keys;
              return [...keys, code];
            });

            localStorage.setItem(code, JSON.stringify(storage));
          }

          if (action === 'remove') {
            setProblems((prevProblems: any) => {
              delete prevProblems[code];
              return prevProblems;
            });

            setKeys((keys) => {
              return keys.filter((key) => key !== code);
            });

            localStorage.removeItem(code);
          }

          setTimeout(() => {
            setCode('');
          }, 500);
        }}
      >
        <input
          type="text"
          placeholder="problem code CF101-D2-A"
          onChange={({ target }) => {
            setCode(target.value);
          }}
          value={code}
        />
        <button
          className={styles['add-problem-btn']}
          type="submit"
          onClick={() => {
            setAction('add');
          }}
        >
          add code
        </button>
        <button
          className={styles['remove-problem-btn']}
          type="submit"
          onClick={() => {
            setAction('remove');
          }}
        >
          remove code
        </button>
        <button
          type="button"
          className={styles['remove-problem-btn']}
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          clear all
        </button>
      </form>
      <div>
        {keys.map((code) => {
          return (
            <TimerList code={code} timers={problems[code].timers} key={code} />
          );
        })}
      </div>
    </div>
  );
}
