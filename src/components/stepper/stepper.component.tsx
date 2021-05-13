import React, { useContext } from 'react';
import {
  Button,
  Snackbar,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  useTheme,
  Grid,
} from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import { Context } from '../../context';
import { saveData } from '../../common';
import { SelectProblemCode } from '../select-code';
import { Timer } from '../timer';
import { SelectStatus } from '../status';
import { Summary } from '../summary';

function StepAction(props: any) {
  const theme = useTheme();
  const {
    state: {
      SelectCodeReducer: { code },
      StatusReducer: { status },
      StepperReducer: { activeStep },
      TimerReducer: { isStarted },
    },
    dispatch,
  } = useContext(Context);

  const completedList = [!!code, !!status];

  function handleNext() {
    if (!completedList[activeStep] && activeStep !== 2) {
      dispatch({
        type: 'SET_ERROR_MESSAGE',
        errorMessage: 'Please select a problem so you can go to the next step',
      });
      return;
    }

    if (activeStep === 2 && isStarted) {
      dispatch({
        type: 'SET_ERROR_MESSAGE',
        errorMessage: 'Stop the timer first before going to the next step',
      });
      return;
    }

    const step = Math.min(3, activeStep + 1);
    dispatch({
      type: 'HANDLE_NEXT',
      activeStep: step,
    });
    saveData('activeStep', step);
  }

  function handleBack() {
    if (activeStep === 2 && isStarted) {
      dispatch({
        type: 'SET_ERROR_MESSAGE',
        errorMessage: 'Stop the timer first before going to the previous step',
      });
      return;
    }
    const step = Math.max(0, activeStep - 1);
    dispatch({
      type: 'HANDLE_BACK',
      activeStep: step,
    });
    saveData('activeStep', step);
  }

  return (
    <div {...props}>
      <Button
        style={{ marginRight: theme.spacing(2) }}
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        disabled={activeStep === 3}
      >
        Next
      </Button>
    </div>
  );
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function StepperComponent() {
  const theme = useTheme();
  const {
    state: {
      StepperReducer: { activeStep, errorMessage, open },
      TimerReducer: { timers },
    },
    dispatch,
  } = useContext(Context);

  function handleClose(_: any, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }

    dispatch({
      type: 'CLOSE_ERROR_MESSAGE',
    });
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={errorMessage.length * 100}
        onClose={handleClose}
      >
        <Alert severity="info" onClose={handleClose}>
          {errorMessage}
        </Alert>
      </Snackbar>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        elevation={4}
        style={{
          width: 950,
          marginLeft: '50%',
          transform: 'translateX(-50%)',
          marginTop: theme.spacing(1.5) + '%',
        }}
      >
        <Step key="1">
          <StepLabel>Choose A Problem To Start</StepLabel>
          <StepContent>
            <Grid
              container
              direction="column"
              alignItems="center"
              style={{ marginTop: theme.spacing(2) }}
            >
              <Grid item>
                <SelectProblemCode />
              </Grid>
              <Grid item>
                <StepAction style={{ marginTop: theme.spacing(2) }} />
              </Grid>
            </Grid>
          </StepContent>
        </Step>
        <Step key="2">
          <StepLabel>Select Status</StepLabel>
          <StepContent>
            <SelectStatus />
            <StepAction
              style={{
                marginLeft: -5,
                marginTop: theme.spacing(2),
              }}
            />
          </StepContent>
        </Step>
        <Step key="3">
          <StepLabel>Start Timing</StepLabel>
          <StepContent>
            <Timer />
            <StepAction
              style={{
                marginLeft: -5,
                marginTop: theme.spacing(2),
              }}
            />
          </StepContent>
        </Step>
        <Step key="4">
          <StepLabel>Create A Summary</StepLabel>
          <StepContent>
            <Summary timers={timers} />
            <StepAction
              style={{
                marginLeft: -5,
                marginTop: theme.spacing(2),
              }}
            />
          </StepContent>
        </Step>
      </Stepper>
    </>
  );
}
