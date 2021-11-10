import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles: any = (theme: Theme) => ({
  status: {
    transition: '0.02s',
    padding: '3px 10px',
    borderRadius: 5,
    '&::selection': {
      background: 'none',
    },
  },
  statusMarked: {
    background: theme.palette.primary.light,
    color: 'white',
  },
});

export const useStyles = makeStyles(styles);
