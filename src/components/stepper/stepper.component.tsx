import React, { useContext } from 'react';
import {
  Button,
  Snackbar,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  useTheme,
} from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import { Context } from '../../context';
import { saveData } from '../../common';
import { SelectProblemCode } from '../select-code';
import { Timer } from '../timer';
import { SelectStatus } from '../status';
import { Summary } from '../summary';
import { CodeDialog } from '../code-dialog';
import { OpenIconSpeedDial } from '../speed-dial';

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
        errorMessage:
          'Please select a problem code so you can go to the next step',
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

  function handleClose() {
    dispatch({
      type: 'CLOSE_ERROR_MESSAGE',
    });
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
      >
        <Alert severity="info" onClose={handleClose}>
          {errorMessage}
        </Alert>
      </Snackbar>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        style={{
          width: 1000,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Step key="1">
          <StepLabel>Select a problem code</StepLabel>
          <StepContent>
            <SelectProblemCode />
            <StepAction
              style={{
                width: 250,
                display: 'flex',
                justifyContent: 'center',
                marginLeft: -17,
                marginTop: theme.spacing(2),
              }}
            />
          </StepContent>
        </Step>
        <Step key="2">
          <StepLabel>Select status</StepLabel>
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
          <StepLabel>Start timing</StepLabel>
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
          <StepLabel>Create a summary</StepLabel>
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
      <CodeDialog />
      <OpenIconSpeedDial />
    </>
  );
}
