import React, { useContext } from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

import { Context } from '../../context';
import { ProblemsLinksList } from '../problems-links';
import { SelectStatus } from '../status';
import { Timer } from '../timer';

export function Playground() {
  const {
    state: {
      SelectCodeReducer: { code, loading },
    },
  } = useContext(Context);

  return (
    <Grid container direction="column" alignItems="center" spacing={4}>
      <Grid item>
        <ProblemsLinksList />
      </Grid>
      <Grid item>
        {code && !loading ? (
          <Card style={{ width: 880 }}>
            <CardContent>
              <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item md={12}>
                  <Typography
                    style={{
                      fontFamily: 'Reenie Beanie',
                      fontWeight: 500,
                      fontSize: 35.898,
                    }}
                  >
                    {code}
                  </Typography>
                </Grid>
                <Grid item md={1}>
                  <SelectStatus />
                </Grid>
                <Grid item md={11}>
                  <Timer />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ) : (
          <>{loading ? 'loading...' : ''}</>
        )}
      </Grid>
    </Grid>
  );
}
