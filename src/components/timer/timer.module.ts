import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  timer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  status_select: {
    width: 110,
    margin: '20px auto',
  },
  selectCodeMessage: {
    maringTop: 20,
  },
  tabPanel: (value) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: value === 1 ? 20 : 40,
  }),
  discoverMoreText: {
    width: '100%',
    display: 'block',
  },
  timerBtn: {
    marginTop: 20,
  },
});
