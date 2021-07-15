import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: 500,
  },
  textField: {
    width: 630,
  },
  cardActions: {
    // float: 'right',
  },
  btn: {
    width: theme.spacing(10),
    marginLeft: 25,
    marginTop: -5,
    textTransform: 'capitalize',
  },
  iconButton: {
    cursor: 'pointer',
    color: 'gray',
  },
}));
