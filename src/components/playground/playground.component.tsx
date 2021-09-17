import React from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';

import { ProblemLinks } from '../problems-links';
import { SelectStatus } from '../status';
import { Timer } from '../timer';

const row: any = () => ({
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
});

export function Playground() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={4}
      style={{ marginTop: 100 }}
    >
      <Grid item>
        <Card style={{ width: 600 }} elevation={3}>
          <CardContent>
            <Grid container justify="center" alignItems="center">
              <Grid item {...row()}>
                <SelectStatus />
              </Grid>
              <Grid item {...row()}>
                <Timer />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <ProblemLinks />
      </Grid>
    </Grid>
  );
}
