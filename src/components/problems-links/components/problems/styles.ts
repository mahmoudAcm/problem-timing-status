import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  cardClicked: { borderLeft: '4px solid black' },
  marked: {
    '& .checkIcon': {
      color: theme.palette.error.light,
    },

    '& .content': {
      textDecoration: 'line-through',
      color: theme.palette.text.disabled,
    },
  },
  problemCard: {
    transition: '0.01s',
    marginTop: theme.spacing(1),
    cursor: 'pointer',
    '& .content': {
      display: 'flex',
      alignItems: 'center',
      '& .checkIcon': { fontSize: 28 },
      '& .link': {
        width: 400,
        wordWrap: 'break-word',
        flex: 1,
        paddingRight: theme.spacing(4),
        paddingLeft: 5,
      },
      '& .menu': { minWidth: theme.spacing(3), color: 'gray' },
    },
  },
}));
