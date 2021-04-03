import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  timer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  summaryButton: {
    // color: "black"
    position: 'fixed',
    bottom: 25,
    right: 25,
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
  timerBtn: {
    marginTop: 20,
  },
});
