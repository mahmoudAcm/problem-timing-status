import React from 'react';
import Grid from '@material-ui/core/Grid';

import { useStyles } from './styles';
import { Form } from './form.component';

export function ProblemsLinksList() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.problems}
    >
      <Grid item>
        <Form />
      </Grid>
    </Grid>
  );
}
