import React, { useState, useContext, useEffect } from 'react';
import { useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Pagination from '@material-ui/lab/Pagination';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';
import copy from 'clipboard-copy';

import { useStyles } from './styles';
import { Context } from '../../context';
import { saveData } from '../../common';
import { PER_PAGE } from './const';

export function ListOfProblems() {
  const theme = useTheme();
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const {
    state: {
      SelectCodeReducer: { problemCodeList, code },
    },
    dispatch,
  } = useContext(Context);

  useEffect(() => {
    setPage(1);
  }, [problemCodeList]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  function handleCopy(link: string) {
    return () => {
      copy(link);
    };
  }

  function handleDelete(link: string) {
    return () => {
      if (code === link || !problemCodeList.length) {
        dispatch({
          type: 'SELECT_CODE',
          code: '',
        });

        dispatch({
          type: 'STATUS_CHANAGE',
          status: '',
        });

        dispatch({
          type: 'HANDLE_BACK',
          activeStep: 0,
        });

        dispatch({
          type: 'RESET_TIMER_STATE',
        });

        saveData('code', '');
        saveData('status', '');
        saveData('activeStep', 0);
        saveData('startedAt', 0);
        saveData('isStarted', false);
      }

      let newProblemCodeList = problemCodeList.filter(
        (value: string) => value !== link,
      );

      localStorage.removeItem(link);
      saveData('problemCodeList', newProblemCodeList);

      dispatch({
        type: 'SET_PROBLEM_CODE',
        problemCodeList: newProblemCodeList,
      });
    };
  }

  return (
    <List className={classes.root}>
      {!problemCodeList.length ? (
        <Typography
          variant="caption"
          color="textSecondary"
          className={classes.emptyListMsg}
        >
          no problems were found
        </Typography>
      ) : (
        <>
          <div className="list">
            {problemCodeList
              .slice((page - 1) * PER_PAGE, page * PER_PAGE)
              .map((link: string) => {
                const labelId = `checkbox-list-label-${link}`;
                return (
                  <ListItem
                    key={link}
                    role="list"
                    dense
                    title={link.length > 80 ? link : ''}
                  >
                    <ListItemText
                      id={labelId}
                      primary={(() => {
                        if (link.length > 80) return link.substr(0, 80) + '...';
                        return link;
                      })()}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={handleCopy(link)}
                        title="copy"
                      >
                        <FileCopyIcon />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={handleDelete(link)}
                        style={{
                          color: theme.palette.error.main,
                          marginLeft: theme.spacing(0.5),
                        }}
                        title="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
          </div>
          <Pagination
            className={classes.pagination}
            count={Math.ceil(problemCodeList.length / PER_PAGE)}
            page={page}
            onChange={handleChange}
          />
        </>
      )}
    </List>
  );
}
