import React, { useContext } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import { useStyles } from './timer.module';
import { Summary } from './summary.component';
import { Code } from '../code/code.component';
import { StatusMenu } from './status-menu.component';
import { TimerController } from './timer-controller.component';
import { StateContext } from '../';

export function Timer() {
  const context = useContext(StateContext);
  const classes = useStyles();

  return (
    <>
      <Summary />
      <Card className={classes.timer} elevation={5}>
        <CardContent>
          <div className={classes.center}>
            <Code />
            <StatusMenu />
            {context.code ? (
              <TimerController />
            ) : (
              <Typography variant="body2" color="textSecondary">
                Please Select Code
              </Typography>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
