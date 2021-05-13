import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 850,
      minHeight: 310,
    },
    problems: {
      width: '100%',
      minHeight: 'auto',
      marginTop: theme.spacing(1.5) + '%',
    },
    form: {},
    addProblem: {
      width: 440,
    },
    controllBtn: {
      width: 75,
      marginLeft: theme.spacing(1),
      textTransform: 'capitalize',
    },
    emptyListMsg: {
      textTransform: 'capitalize',
      marginTop: theme.spacing(14.5),
      textAlign: 'center',
      display: 'block',
    },
    pagination: {
      position: 'absolute',
      bottom: theme.spacing(3),
      left: '50%',
      transform: 'translateX(-50%)',
    },
  }),
);
