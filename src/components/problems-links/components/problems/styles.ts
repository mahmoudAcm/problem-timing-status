import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 700,
      minHeight: 300,
    },
    problemsLinks: {
      width: '100%',
      marginTop: theme.spacing(1.5) + '%',
    },
    // addProblem: {
    //   width: 440,
    // },
    // controllBtn: {
    //   width: 75,
    //   marginLeft: theme.spacing(1),
    //   textTransform: 'capitalize',
    // },
    emptyListMsg: {
      textTransform: 'capitalize',
      marginTop: theme.spacing(14.5),
      textAlign: 'center',
      display: 'block',
    },
  }),
);
