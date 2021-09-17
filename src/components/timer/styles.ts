import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles: any = (theme: Theme) => ({
  unitType: {
    fontFamily: 'Qwigley',
    fontStyle: 'normal',
    fontSize: 16.043,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#000000',
    marginBottom: -1 * theme.spacing(6),
  },
  unit: {
    fontFamily: 'Varela Round',
    fontSize: theme.spacing(9),
    paddingBottom: theme.spacing(1),
  },
  toggleTimerButton: {
    width: 120,
    marginTop: -1 * theme.spacing(2),
  },
});

export const useStyles = makeStyles(styles);
