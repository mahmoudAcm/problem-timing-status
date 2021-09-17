import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  playgroundHeader: {
    borderBottom: '2px solid gray',
    height: theme.spacing(8),
    display: 'flex',
    alignItems: 'center',
    '& .title': {
      flex: 1,
    },
    '& .menu': {
      minWidth: theme.spacing(3),
      color: 'gray',
      fontWeight: 'bold',
    },
  },
}));
