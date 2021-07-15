import React from 'react';
import { Grid } from '@material-ui/core';

import { Form, Problems } from './components';

export function ProblemLinks() {
  return (
    <Grid
      container
      spacing={4}
      direction="column"
      alignItems="center"
      style={{ marginTop: 100 }}
    >
      <Grid item>
        <Form />
      </Grid>
      <Grid item>
        <Problems />
      </Grid>
    </Grid>
  );
}
