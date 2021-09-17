import React from 'react';
import { Grid } from '@material-ui/core';

import { Form, HeaderTitle, Header, Problems } from './components';

const row: any = () => ({
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
});

export function ProblemLinks() {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justify="center"
      style={{ width: 620 }}
    >
      <Grid item {...row()}>
        <HeaderTitle />
      </Grid>
      <Grid item {...row()}>
        <Header />
      </Grid>
      <Grid item {...row()}>
        <Problems />
      </Grid>
      <Grid item {...row()}>
        <Form />
      </Grid>
    </Grid>
  );
}
