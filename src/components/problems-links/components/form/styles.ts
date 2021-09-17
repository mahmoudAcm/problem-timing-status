import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  addProblem: {
    height: 65,
    width: '100%',
    border: 'dashed',
    textTransform: 'capitalize',
  },
  saveButton: {
    marginLeft: 10,
  },
}));
