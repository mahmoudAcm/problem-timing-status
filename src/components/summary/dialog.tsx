import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';

import { Summary } from './summary.component';

export function AlertDialog(props: any) {
  const { open, setOpen, link } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <Typography
            variant="body2"
            color="primary"
            component="a"
            href={link}
            target="_blank"
          >
            {link}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Summary link={link} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
