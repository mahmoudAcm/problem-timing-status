import React, { useContext, useMemo } from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { StateContext } from '../state.context';
import { formatTime, loadData } from '../../common';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function Summary() {
  const context = useContext(StateContext);
  const { keys, timers, totalTime } = useMemo(() => {
    const keys = ['reading', 'thinking', 'coding', 'debugging'];

    if (!context.code || !context.isOpen)
      return { keys, timers: {}, totalTime: 0 };

    const { timers } = loadData(context.code);
    const totalTime = keys.reduce((total, status) => total + timers[status], 0);
    return {
      keys,
      timers,
      totalTime,
    };
  }, [context.code, context.isOpen]);

  function handleClose() {
    context.setIsOpen(false);
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={context.isOpen && !!context.code}
    >
      <Alert severity="info" onClose={handleClose}>
        {keys.map((status) => (
          <div key={status}>
            {status}: {formatTime(Math.round((timers[status] || 0) / 1000))}
          </div>
        ))}
        <div>total time: {formatTime(Math.round(totalTime / 1000))}</div>
      </Alert>
    </Snackbar>
  );
}
