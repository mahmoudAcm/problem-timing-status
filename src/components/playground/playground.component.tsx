import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';

import { Context } from '../../context';
import { ProblemLinks } from '../problems-links';
import { TimerDialog } from './';

export function Playground() {
  const {
    state: {
      SelectCodeReducer: { code },
    },
  } = useContext(Context);

  return (
    <Grid container direction="column" alignItems="center" spacing={4}>
      <Grid item>
        <ProblemLinks />
      </Grid>
      <Grid item>
        <TimerDialog open={!!code} code={code} />
      </Grid>
    </Grid>
  );
}
