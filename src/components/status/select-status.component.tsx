import React, { useContext, useEffect, createRef } from 'react';
import { Grid } from '@material-ui/core';

import { useStyles } from './styles';
import { Context } from '../../context';
import { saveData } from '../../common';

const phases = ['reading', 'thinking', 'coding', 'debugging'];
const refs = new Array(phases.length).fill(0).map(() => createRef<any>());

function markSpan(status: string, classes: any) {
  refs.forEach((ref) => {
    ref.current.classList.remove(classes.statusMarked);
  });

  const index = phases.indexOf(status);
  const statusRef = refs[index];
  statusRef.current.classList.add(classes.statusMarked);
}

export function SelectStatus() {
  const classes = useStyles();

  const {
    state: {
      StatusReducer: { status },
    },
    dispatch,
  } = useContext(Context);

  function handleChange(status: string) {
    return () => {
      dispatch({
        type: 'STATUS_CHANAGE',
        status,
      });
      saveData('status', status);

      markSpan(status, classes);
    };
  }

  useEffect(() => {
    if (status) {
      dispatch({
        type: 'SET_TIMER',
        status,
      });

      markSpan(status, classes);
    }
  }, [status, dispatch, classes]);

  return (
    <Grid container justify="center" spacing={2}>
      {phases.map((phase, idx) => (
        <Grid
          item
          onClick={handleChange(phase)}
          style={{
            textTransform: 'capitalize',
            cursor: 'pointer',
          }}
          key={phase}
        >
          <span ref={refs[idx]} className={classes.status}>
            {phase}
          </span>
        </Grid>
      ))}
    </Grid>
  );
}
