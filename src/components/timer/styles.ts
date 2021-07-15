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
    fontFamily: 'Reenie Beanie',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 135.898,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#000000',
  },
  toggleTimerButton: {
    width: 80.66,
    marginTop: -1 * theme.spacing(2),
  },
});

export const useStyles = makeStyles(styles);
