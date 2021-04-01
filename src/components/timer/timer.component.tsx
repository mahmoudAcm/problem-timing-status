import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@material-ui/core';
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined';

import { useStyles } from './timer.module';
import { Summary } from './summary.component';
import { Code } from '../code/code.component';
import { StatusMenu } from './status-menu.component';
import { TimerController } from './timer-controller.component';
import { StateContext } from '../';

export function Timer() {
  const context = useContext(StateContext);
  const classes = useStyles();

  function handleSummaryClick() {
    context.setIsOpen(false);
    setTimeout(() => {
      context.setIsOpen(true);
    }, 200);
  }

  return (
    <>
      <Summary />
      <Card className={classes.timer} elevation={5}>
        <CardHeader
          title="Problem Status"
          subheader="Timer"
          action={
            <IconButton
              aria-label="summary"
              color="primary"
              title="get a summary"
              onClick={handleSummaryClick}
            >
              <SpeakerNotesOutlinedIcon />
            </IconButton>
          }
        />
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
