import React, { useContext } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import { Context } from '../../context';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    speedDial: {
      position: 'absolute',
      bottom: theme.spacing(3),
      right: theme.spacing(3),
    },
  }),
);

const actions = [
  { icon: <AddIcon />, name: 'Add code', type: 'add' },
  { icon: <DeleteIcon />, name: 'Delete code', type: 'remove' },
];

export function OpenIconSpeedDial() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  const { dispatch } = useContext(Context);

  function handleClose() {
    setOpen(false);
  }

  function handleClick(reason: string) {
    return () => {
      dispatch({
        type: 'SET_IS_OPEN',
        isOpen: true,
        reason,
      });
      setOpen(false);
    };
  }

  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon"
      className={classes.speedDial}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleClick(action.type)}
        />
      ))}
    </SpeedDial>
  );
}
